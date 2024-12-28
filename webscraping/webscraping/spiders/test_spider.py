import time

from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import Rule, CrawlSpider

from ..utils import getShopId
from ..items import WebscrapingItem


class QuotesSpider(CrawlSpider):

    name = "quotes"
    start_urls = [
        "https://quotes.toscrape.com/",
    ]

    rules = [
        Rule(LinkExtractor(allow=r"/author/"), callback="parse_item", follow=True)
    ]

    def parse_item(self, response):

        time.sleep(0.3)
        item = WebscrapingItem()

        product_name = response.css('.author-title::text').get()

        item['product_name'] = product_name

        yield item
