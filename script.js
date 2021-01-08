const dashboard = {
    QuestionOne: function() {
        ChartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "The average amount of Benzo(b)fluoranthene (µg/l) in Boonsri across each month of the year",
            "width": 800,
            "height": 500,
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
                    "title": "The Average amount of Benzo(b)fluoranthene (µg/l)",
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
            "transform": [{ "filter": { "field": "location", "equal": "Boonsri" } }, { "filter": { "field": "measure", "equal": "Benzo(b)fluoranthene" } }]

        }
        vegaEmbed('#chart1', ChartOne);

        ChartTwo = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "The average amount of Sodium (mg/l) in Sakda across each years",
            "width": 800,
            "height": 500,
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
                    "title": "The average amount of Sodium (mg/l)",
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
            "title": "The average amount of Aluminium (µg/l) in each location across each year",
            "width": 800,
            "height": 500,
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
            "mark": { "type": "line", "strokeWidth": 4, "point": { "filled": false, "fill": "white", "size": 50 } },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal",
                    "scale": { "domain": [2008, 2009, 2010, 2011, 2012, 2013, 2014] }
                },
                "y": {
                    "title": "Average amount of Aluminium(µg/l)",
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
        vegaEmbed("#chart3", ChartThree)
    },

    QuestionTwo: function() {
        ChartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "A dashboard containing the average amount of Sodium (µg/l) in each location across each year",
            "width": 800,
            "height": 500,
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
                    "title": "Average amount of Sodium(µg/l)",
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
                    },
                    {
                        "field": "location",
                        "type": "nominal",
                        "title": "Location"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Sodium" } }]
        }
        vegaEmbed("#chart4", ChartOne)

        ChartTwo = {
                "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
                "title": "The average amount of Total Coliform (mg/l) in each location in the year 2009",
                "width": 800,
                "height": 500,
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
                        "title": "The Average amount of Total Coliforms(mg/l)",
                        "aggregate": "average",
                        "field": "value",
                        "type": "quantitative"
                    },
                    "color": {
                        "field": "location",
                        "type": "nominal"
                    },
                    "tooltip": [{
                            "field": "location",
                            "type": "nominal",
                            "title": "Location"
                        },
                        {
                            "field": "value",
                            "type": "quantitative",
                            "aggregate": "average",
                            "title": "Average Amount of  Total coliforms(mg/l)"
                        }
                    ]
                },
                "transform": [{ "filter": { "field": "measure", "equal": "Total coliforms" } }, { "filter": { "field": "sample date", "timeUnit": "year", "equal": 2009 } }]
            },
            vegaEmbed("#chart5", ChartTwo)
    },
    QuestionThree: function() {
        {
            ChartOne = {
                "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
                "title": "The average amount of Methylosmoline (µg/l) in Somchair across each year",
                "width": 800,
                "height": 500,
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
                        "title": "Average amount of Methylosmoline(µg/l)",
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

            ChartTwo = {
                "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
                "title": "The average amount of Aluminium (µg/l) in each location across each month",
                "width": 800,
                "height": 500,
                "data": {
                    "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                    "format": { "type": "csv" }
                },
                "mark": {
                    "type": "line",
                    "strokeWidth": 4,
                    "point": { "filled": false, "fill": "white", "size": 20 }
                },
                "selection": {
                    "org": {
                        "type": "single",
                        "fields": ["location"],
                        "bind": { "input": "select", "options": [null, "Chai", "Sakda", "Somchair", "Kannika", "Busarakhan"] }
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
                        "title": "Average amount of Aluminium(µg/l)",
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
                            "field": "location",
                            "type": "nominal",
                            "title": "Location"
                        },
                        {
                            "field": "value",
                            "type": "quantitative",
                            "aggregate": "average",
                            "title": "Average Amount of  Total Aluminium(µg/l)"
                        },
                        {
                            "field": "sample date",
                            "timeUnit": "month",
                            "type": "ordinal",
                            "title": "Month"
                        }
                    ]
                },
                "transform": [{ "filter": { "field": "measure", "equal": "Aluminium" } }]
            }
            vegaEmbed("#chart7", ChartTwo)
        }
    }
}