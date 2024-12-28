# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class WebscrapingItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    shop_name = scrapy.Field()
    price = scrapy.Field()
    availability = scrapy.Field()
    description = scrapy.Field()
    images = scrapy.Field()
    sizes = scrapy.Field()
    link = scrapy.Field()

