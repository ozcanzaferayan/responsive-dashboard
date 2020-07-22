var gradientFill = ctx.createLinearGradient(0, 0, 0, 125);
gradientFill.addColorStop(0, "rgba(244,246,255, 1)");
gradientFill.addColorStop(1, "rgba(255,255,255, 1)");


var data = {
    labels: ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ""],
    datasets: [{
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(255,57,43, 1)",
            borderWidth: 2,
            data: [5, 3, 8, 6, 10, 8, 13],
        },
        {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#f0f2fa",
            borderWidth: 1,
            fill: true,
            backgroundColor: gradientFill,
            data: [3, 5, 4, 10, 8, 9, 3, 15, 14, 17],
        }
    ]
};

var options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        mode: 'index',
        intersect: true,
        yPadding: 10,
        xPadding: 10,
        caretSize: 8,
        backgroundColor: 'rgba(255,57,43, 1)',
        titleFontColor: "#fff",
        bodyFontStyle: 'bold',
        bodyFontColor: "#fff",
        displayColors: false,
        callbacks: {
            label: function(tooltipItems, data) {
                return "4h 26 min";
            }
        }
    },
    showAllTooltips: true,

    // annotation: {
    //     events: ["click"],
    //     annotations: [{
    //             drawTime: "afterDatasetsDraw",
    //             id: "hline",
    //             type: "line",
    //             mode: "horizontal",
    //             scaleID: "y-axis-0",
    //             value: 13,
    //             borderColor: "#000",
    //             borderWidth: 1,
    //             label: {
    //                 backgroundColor: "red",
    //                 content: "Test Label",
    //                 enabled: true,
    //                 position: "center",
    //                 xAdjust: 100,
    //             },
    //             onClick: function(e) {
    //                 // The annotation is is bound to the `this` variable
    //                 console.log("Annotation", e.type, this);
    //             }
    //         }
    //         //     {
    //         //     drawTime: "beforeDatasetsDraw",
    //         //     type: "box",
    //         //     xScaleID: "x-axis-0",
    //         //     yScaleID: "y-axis-0",
    //         //     xMin: "Thu",
    //         //     xMax: "Sat",
    //         //     yMin: 13,
    //         //     yMax: 15,
    //         //     backgroundColor: "rgba(101, 33, 171, 0.5)",
    //         //     borderColor: "rgb(101, 33, 171)",
    //         //     borderWidth: 1,
    //         //     onClick: function(e) {
    //         //         console.log("Box", e.type, this);
    //         //     }
    //         // }
    //     ]
    // },
    scales: {
        yAxes: [{
            display: false,
            ticks: {
                maxTicksLimit: 5,
                min: 0,
            },
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            display: true,
            ticks: {
                fontSize: 12,
                fontColor: '#c3c6de'
            },
            gridLines: {
                display: false
            }
        }]
    },
    elements: {
        point: {
            radius: 0
        }
    }
};


Chart.pluginService.register({
    beforeRender: function(chart) {
        if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function(dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function(sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },
    afterDraw: function(chart, easing) {
        if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function(tooltip, i) {
                if (i !== 6) return;
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
    }
});

var ctx = document.getElementById('spentTimeChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});