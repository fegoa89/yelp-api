# Yelp Api
Simple API intended to interact with Yelp API 2.0 Services.

## Start Server

### Running using Docker

First, build the application image using *docker build*:

```
$ docker build -t yelp-api .
```

After building the application, we can run our Dockerized app with *docker-compose*

```
$ docker-compose up
```

or with the following command
```
$ docker run -p 3000:3000 yelp
```

### Run with NPM

```
$ npm run start
```

## Routes Implemented

### Return location suggestions based on user input
```json
// GET localhost:3000/location_suggest?prefix=Friedrich
{
    "suggestions": [
        {
            "subtitle": null,
            "ajax_data": "null",
            "query": "Friedrichshain, Berlin",
            "name_param": "find_loc",
            "title": "Friedrichshain, Berlin",
            "css_class": null,
            "is_bookmarked": null,
            "version": 1,
            "redirect_url": null,
            "refinements": null,
            "num_checkins": null,
            "type": "location",
            "thumbnail": null,
            "is_typeahead": false
        },
        {
            "subtitle": null,
            "ajax_data": "null",
            "query": "Friedrichshafen, Baden-Württemberg",
            "name_param": "find_loc",
            "title": "Friedrichshafen, Baden-Württemberg",
            "css_class": null,
            "is_bookmarked": null,
            "version": 1,
            "redirect_url": null,
            "refinements": null,
            "num_checkins": null,
            "type": "location",
            "thumbnail": null,
            "is_typeahead": false
        },
        {
            "subtitle": null,
            "ajax_data": "null",
            "query": "Friedrichstadt, Düsseldorf, Nordrhein-Westfalen",
            "name_param": "find_loc",
            "title": "Friedrichstadt, Düsseldorf, Nordrhein-Westfalen",
            "css_class": null,
            "is_bookmarked": null,
            "version": 1,
            "redirect_url": null,
            "refinements": null,
            "num_checkins": null,
            "type": "location",
            "thumbnail": null,
            "is_typeahead": false
        }
    ],
    "unique_request_id": "XXXXXXXX"
}
```

### Return search suggestions based on user input

```json
// GET localhost:3000/search_suggest?loc=Berlin&prefix=Brandenburger
{
    "unique_request_id": "XXXXXXX",
    "response": [
        {
            "prefix": "brandenburger",
            "suggestions": [
                {
                    "ajax_data": "null",
                    "css_class": null,
                    "is_bookmarked": null,
                    "is_typeahead": false,
                    "name_param": "find_desc",
                    "num_checkins": null,
                    "query": "Brandenburger Tor",
                    "redirect_url": "/biz/brandenburger-tor-berlin",
                    "subtitle": "Pariser Platz, Berlin",
                    "thumbnail": {
                        "color": null,
                        "key": "https://s3-media3.fl.yelpcdn.com/bphoto/qLqHRvEOXeOh1tMk-5i4ow/30s.jpg",
                        "type": "image-rounded"
                    },
                    "title": "Brandenburger Tor",
                    "version": 1,
                    "type": "business",
                    "refinements": null
                },
                {
                    "ajax_data": "null",
                    "css_class": null,
                    "is_bookmarked": null,
                    "is_typeahead": false,
                    "name_param": "find_desc",
                    "num_checkins": null,
                    "query": "Brandenburger Tor Museum",
                    "redirect_url": "/biz/brandenburger-tor-museum-berlin",
                    "subtitle": "Pariser Platz 4 A, Berlin",
                    "thumbnail": {
                        "color": null,
                        "key": "https://s3-media2.fl.yelpcdn.com/bphoto/0CTh3EJq9cp_CDLEzQ82pA/30s.jpg",
                        "type": "image-rounded"
                    },
                    "title": "Brandenburger Tor Museum",
                    "version": 1,
                    "type": "business",
                    "refinements": null
                },
                {
                    "ajax_data": "null",
                    "css_class": null,
                    "is_bookmarked": null,
                    "is_typeahead": false,
                    "name_param": "find_desc",
                    "num_checkins": null,
                    "query": "Sehenswürdigkeiten",
                    "redirect_url": null,
                    "subtitle": null,
                    "thumbnail": null,
                    "title": "Sehenswürdigkeiten",
                    "version": 1,
                    "type": "category",
                    "refinements": null
                }
            ],
            "unique_suggestion_id": "YYYYYYYY",
            "unique_request_id": "ZZZZZZZ",
            "typeahead": {
                "typeahead_text": "Brandenburger Tor",
                "url": "/biz/brandenburger-tor-berlin"
            }
        }
    ]
}
```

### Return search snippet based on search description and location


```json
// GET localhost:3000/snippet_search?find_desc=Burger&find_loc=Duesseldorf
// NOTE: This request returns a HUGE amount of data, here is some part of the returned object
{
    "pageTitle": "Top 10 Burger in Düsseldorf, Nordrhein-Westfalen - Yelp",
    "searchPageProps": {
        "searchMapProps": {
            "locale": "de_DE",
            "hovercardData": {
                "Ln_0Qu4OM7W4X8KgDaCwRw": {
                    "rating": 4,
                    "photoPageUrl": "/biz_photos/stier-royal-d%C3%BCsseldorf-3?select=VsXxsDquerSH9UQvI9RnJQ",
                    "name": "Stier Royal",
                    "neighborhoods": [
                        "Friedrichstadt"
                    ],
                    "businessUrl": "/biz/stier-royal-d%C3%BCsseldorf-3?osq=Burger",
                    "isAd": false,
                    "photoSrcSet": "https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/180s.jpg 2.00x,https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/ms.jpg 1.11x,https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/120s.jpg 1.33x,https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/168s.jpg 1.87x,https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/ls.jpg 2.78x,https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/258s.jpg 2.87x",
                    "photoSrc": "https://s3-media3.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/90s.jpg",
                    "numReviews": 73,
                    "addressLines": [
                        "Zimmerstr. 28",
                        "40215 Düsseldorf"
                    ],
                    "categories": [
                        {
                            "url": "/search?cflt=burgers&find_desc=Burger&find_loc=Duesseldorf",
                            "title": "Burger"
                        },
                        {
                            "url": "/search?cflt=tradamerican&find_desc=Burger&find_loc=Duesseldorf",
                            "title": "Amerikanisch (Traditionell)"
                        }
                    ],
                    "showRecommended": false
                }
            },
            "mapState": {
                "adPinColor": "blue",
                "markers": [
                    {
                        "resourceType": "business",
                        "url": "/biz/stier-royal-d%C3%BCsseldorf-3",
                        "resourceId": "BR4pC5jDnH9zLpTPSyLxLg",
                        "shouldOpenInNewTab": false,
                        "location": {
                            "latitude": 51.2093694,
                            "longitude": 6.7821559
                        },
                        "key": 2,
                        "hovercardId": "Ln_0Qu4OM7W4X8KgDaCwRw",
                        "icon": {
                            "name": "business",
                            "anchorOffset": [
                                12,
                                32
                            ],
                            "activeOrigin": [
                                24,
                                32
                            ],
                            "scaledSize": [
                                48,
                                320
                            ],
                            "regularUri": "https://media2.fl.yelpcdn.com/mapmarkers/yelp_map_range/20160801/1/10.png",
                            "size": [
                                24,
                                32
                            ],
                            "activeUri": "https://media2.fl.yelpcdn.com/mapmarkers/yelp_map_range/20160801/1/10.png",
                            "regularOrigin": [
                                0,
                                32
                            ]
                        }
                    }
                ],
                "shouldDrawCheckbox": false,
                "overlayWidth": null,
                "topBizBounds": null,
                "market": null,
                "center": {
                    "latitude": 51.23852570606634,
                    "longitude": 6.81427001953125
                }
            }
        },
        "searchResultsProps": {
            "categoryFoldingInfo": null,
            "isAdDemo": false,
            "searchResults": [
                {
                    "searchActions": [],
                    "bizId": "BR4pC5jDnH9zLpTPSyLxLg",
                    "tags": [],
                    "searchResultLayoutType": "largerScrollablePhotos",
                    "scrollablePhotos": {
                        "allPhotosHref": "/biz_photos/BR4pC5jDnH9zLpTPSyLxLg",
                        "photoHref": "/biz/stier-royal-d%C3%BCsseldorf-3?osq=Burger",
                        "size": 210,
                        "photoList": [
                            {
                                "src": "https://s3-media2.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/ls.jpg",
                                "srcset": "https://s3-media2.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/258s.jpg 1.03x,https://s3-media2.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/348s.jpg 1.39x,https://s3-media2.fl.yelpcdn.com/bphoto/VsXxsDquerSH9UQvI9RnJQ/300s.jpg 1.20x"
                            }
                        ],
                        "isScrollable": false
                    },
                    "snippet": null,
                    "markerKey": 2,
                    "searchResultBusiness": {
                        "parentBusiness": null,
                        "ranking": 2,
                        "reviewCount": 73,
                        "name": "Stier Royal",
                        "neighborhoods": [
                            "Friedrichstadt"
                        ],
                        "rating": 4,
                        "businessUrl": "/biz/stier-royal-d%C3%BCsseldorf-3?osq=Burger",
                        "isAd": false,
                        "serviceArea": null,
                        "phone": "0211 93079854",
                        "priceRange": "€€",
                        "alternateNames": [],
                        "formattedAddress": "Zimmerstr. 28",
                        "renderAdInfo": false,
                        "categories": [
                            {
                                "url": "/search?cflt=burgers&find_desc=Burger&find_loc=Duesseldorf",
                                "title": "Burger"
                            },
                            {
                                "url": "/search?cflt=tradamerican&find_desc=Burger&find_loc=Duesseldorf",
                                "title": "Amerikanisch (Traditionell)"
                            }
                        ]
                    },
                    "childrenBusinessInfo": null
                }
            ]
        }
    }
}
```
