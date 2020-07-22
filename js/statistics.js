var data = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
            label: 'A',
            backgroundColor: "rgb(51, 38, 174)",
            data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
        },
        {
            label: 'B',
            backgroundColor: "rgb(51, 38, 174)",
            data: [300, 400, 150, 200, 100, 500, 400, 350, 700, 200],
        },
        {
            label: 'C',
            backgroundColor: "rgb(51, 38, 174)",
            data: [450, 700, 300, 650, 150, 300, 600, 450, 835, 75],
        },
    ]
};

var options = {
    cornerRadius: 0,
    maintainAspectRatio: false,
    legend: {
        display: false,
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 5,
            }
        }],
        xAxes: [{
            barPercentage: 0.25,
            gridLines: {
                display: false,
            },
        }]
    }
};


var ctx = document.getElementById('statisticsChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});