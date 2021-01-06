const dashboard = {
    DashboardOne: function() {
        ChartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "mark": {
                "type": "line",
                "color": "red",
                "point": {
                    "filled": false,
                    "fill": "white"
                }
            },
            "encoding": {
                "x": {
                    "title": "Month",
                    "field": "sample date",
                    "timeUnit": "month",
                    "type": "ordinal"
                },
                "y": {
                    "title": "Benzo(b)fluoranthene (µg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative"
                },
                "tooltip": [{
                        "field": "sample date",
                        "timeUnit": "month",
                        "type": "ordinal",
                        "title": "Month"
                    },
                    {
                        "field": "value",
                        "type": "quantitative",
                        "aggregate": "average",
                        "title": "Average Amount of Benzo(b)fluoranthene (µg/l)"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "location", "equal": "Boonsri" } }, { "filter": { "field": "measure", "equal": "Benzo(b)fluoranthene" } }, { "filter": { "field": "value", "gt": 0 } }]

        }
        vegaEmbed('#chart1', ChartOne);

        ChartTwo = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "mark": { "type": "line", "color": "yellowgreen", "strokeWidth": 3, "point": { "filled": false, "fill": "white", "size": 100 } },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal"
                },
                "y": {
                    "title": "Sodium (mg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative",
                    "scale": { "domain": [0, 100] }
                },
                "tooltip": [{
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "ordinal",
                        "title": "Year"
                    },
                    {
                        "field": "value",
                        "type": "quantitative",
                        "aggregate": "average",
                        "title": "Average Amount of Sodium (mg/l)"
                    },
                    { "field": "location", "title": "Location" }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Sodium" } }, { "filter": { "field": "location", "equal": "Sakda" } }]

        }
        vegaEmbed("#chart2", ChartTwo)

        ChartThree = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "mark": { "type": "circle" },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal"
                },
                "y": {
                    "title": "Copper (µg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative"
                },
                "color": {
                    "field": "value",
                    "aggregate": "average",
                    "type": "quantitative"
                },
                "size": { "field": "value", "aggregate": "average", "type": "quantitative" },
                "tooltip": [{
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "ordinal",
                        "title": "Year"
                    },
                    {
                        "field": "value",
                        "type": "quantitative",
                        "aggregate": "average",
                        "title": "Average Amount of Copper (µg/l)"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Copper" } }]

        }
        vegaEmbed("#chart3", ChartThree)

        ChartFour = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "width": 600,
            "height": 350,
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "selection": {
                "org": {
                    "type": "single",
                    "fields": ["location"],
                    "bind": { "input": "select", "options": [null, "Chai", "Sakda", "Somchair", "Kannika", "Busarakhan"] }
                }
            },
            "mark": { "type": "line", "strokeWidth": 4, "point": { "filled": false, "fill": "white", "size": 100 } },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal",
                    "scale": { "domain": [2008, 2009, 2010, 2011, 2012, 2013, 2014] }
                },
                "y": {
                    "title": "Value Aluminium(µg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative"
                },
                "color": {
                    "condition": {
                        "selection": "org",
                        "field": "location",
                        "type": "nominal"
                    },
                    "value": "grey"
                },
                "tooltip": [{
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "ordinal",
                        "title": "Year"
                    },
                    {
                        "field": "value",
                        "type": "quantitative",
                        "aggregate": "average",
                        "title": "Average Amount of  Aluminium(µg/l)"
                    },
                    {
                        "field": "location",
                        "type": "nominal",
                        "title": "Location"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Aluminium" } }]
        }
        vegaEmbed("#chart3b", ChartFour)
    },

    DashboardTwo: function() {
        ChartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "mark": { "type": "bar" },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal"
                },
                "y": {
                    "title": "Value Sodium(µg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative"
                },
                "color": { "field": "sample date", "timeUnit": "year", "type": "nominal" },
                "row": { "field": "location" },
                "tooltip": [{
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "ordinal",
                        "title": "Year"
                    },
                    {
                        "field": "value",
                        "type": "quantitative",
                        "aggregate": "average",
                        "title": "Average Amount of  Sodium(µg/l)"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Sodium" } }]
        }
        vegaEmbed("#chart4", ChartOne)
    },
    DashboardThree: function() {
        {
            ChartOne = {
                "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
                "title": "",
                "data": {
                    "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                    "format": { "type": "csv" }
                },
                "mark": { "type": "bar" },
                "encoding": {
                    "x": {
                        "title": "Year",
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "ordinal"
                    },
                    "y": {
                        "title": "Value Methylosmoline(µg/l)",
                        "aggregate": "average",
                        "field": "value",
                        "type": "quantitative"
                    },
                    "color": {
                        "field": "sample date",
                        "timeUnit": "year",
                        "type": "nominal"
                    },
                    "tooltip": [{
                            "field": "sample date",
                            "timeUnit": "year",
                            "type": "ordinal",
                            "title": "Year"
                        },
                        {
                            "field": "value",
                            "type": "quantitative",
                            "aggregate": "average",
                            "title": "Average Amount of  Methylosmoline(µg/l)"
                        }
                    ]
                },
                "transform": [{ "filter": { "field": "measure", "equal": "Methylosmoline" } }, { "filter": { "field": "location", "equal": "Somchair" } }]
            }
            vegaEmbed("#chart6", ChartOne)
        }
    }
}