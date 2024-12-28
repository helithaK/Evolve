from typing import Union
import logging

from fastapi_utils.tasks import repeat_every
from fastapi import FastAPI
import subprocess
from schema.dbInit import dbInitialize

logger = logging.getLogger(__name__)

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


counter = 0


@app.on_event("startup")
@repeat_every(seconds=60 * 60, logger=logger, wait_first=False)
def periodic():
    global counter
    print('counter is', counter)
    counter += 1
    subprocess.Popen(["scrapy", "crawl", "cherri", "-o", "test.json"], shell=True, cwd="./webscraping")


@app.on_event("startup")
def initialize():
    dbInitialize()
