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
            "mark": { "type": "point", "fill": "teal" },
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
    },

    DashboardTwo: function() {
        ChartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "",
            "data": {
                "url": "https://raw.githubusercontent.com/ronzydre/4060-CW2/main/Boonsong%20Lekagul%20waterways%20readings.csv",
                "format": { "type": "csv" }
            },
            "mark": { "type": "point", "fill": "yellow", "color": "crimson" },
            "encoding": {
                "x": {
                    "title": "Year",
                    "field": "sample date",
                    "timeUnit": "year",
                    "type": "ordinal"
                },
                "y": {
                    "title": "Value (µg/l)",
                    "aggregate": "average",
                    "field": "value",
                    "type": "quantitative"
                },
                "column": { "field": "location" },
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
                        "title": "Average Amount of  (µg/l)"
                    }
                ]
            },
            "transform": [{ "filter": { "field": "measure", "equal": "Sodium" } }]
        }
        vegaEmbed("#chart1", ChartOne)
    }
}