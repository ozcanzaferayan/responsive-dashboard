var data = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: 'Spending',
        backgroundColor: "rgb(51, 38, 174)",
        data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
    }, {
        label: 'Arrival',
        backgroundColor: "rgb(51, 38, 174)",
        data: [1000, 800, 1800, 1100, 1000, 800, 1800, 1600, 1800, 1200],
    }, ]
};

var options = {
    cornerRadius: 0,
    maintainAspectRatio: false,
    legend: {
        display: false,
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
            boxWidth: 10,
            padding: 10
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                color: "rgba(91,37,245, 0.03)"
            },
            ticks: {
                maxTicksLimit: 5,
            }
        }],
        xAxes: [{}]
    }
};


var ctx = document.getElementById('statisticsChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});