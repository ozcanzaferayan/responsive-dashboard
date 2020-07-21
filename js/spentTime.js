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
    plugins: {
        annotation: {
            // Defines when the annotations are drawn.
            // This allows positioning of the annotation relative to the other
            // elements of the graph.
            //
            // Should be one of: afterDraw, afterDatasetsDraw, beforeDatasetsDraw
            // See http://www.chartjs.org/docs/#advanced-usage-creating-plugins
            drawTime: 'afterDatasetsDraw', // (default)

            // Mouse events to enable on each annotation.
            // Should be an array of one or more browser-supported mouse events
            // See https://developer.mozilla.org/en-US/docs/Web/Events
            events: ['click'],

            // Double-click speed in ms used to distinguish single-clicks from
            // double-clicks whenever you need to capture both. When listening for
            // both click and dblclick, click events will be delayed by this
            // amount.
            dblClickSpeed: 350, // ms (default)

            // Array of annotation configuration objects
            // See below for detailed descriptions of the annotation options
            annotations: [{
                drawTime: 'afterDraw', // overrides annotation.drawTime if set
                id: 'a-line-1', // optional
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '25',
                borderColor: 'red',
                borderWidth: 2,

                // Fires when the user clicks this annotation on the chart
                // (be sure to enable the event in the events array below).
                onClick: function(e) {
                    // `this` is bound to the annotation element
                }
            }]
        }
    },
    scales: {
        yAxes: [{
            display: false,
            ticks: {
                maxTicksLimit: 5,
                min: 0,
                max: 16
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


var ctx = document.getElementById('spentTimeChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});