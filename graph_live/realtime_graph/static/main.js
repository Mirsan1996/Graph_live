var ctx = document.getElementById('myChart').getContext('2d');

var graphData = {
    type: 'line',

    options: {
        scale:{
            suggestedMin: 0,
            suggestedMax: 130
        }
    },

    data: {
        labels: ['90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90'],
        datasets: [
	{
            label: 'PRESION',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(30, 169, 244, 0.2)',
            ],
            borderColor: [
                'rgba(30, 169, 244, 0.2)',
            ],
            borderWidth: 5,
            pointHitRadius: 20,
	    pointBorderWidth: 10,
        },
	{
            label: 'VOLTAJE',
            data: [10, 12, 20, 29, 33, 37, 38, 41, 42, 54, 59, 67, 68, 71, 75, 77, 81, 86, 89, 99],
            backgroundColor: [
                'rgba(236, 247, 17, 0.2)',
            ],
            borderColor: [
                'rgba(236, 247, 17, 0.2)',
            ],
            borderWidth: 5,
            pointHitRadius: 20,
	    pointBorderWidth: 10,
	},
	{
            label: 'CORRIENTE',
            data: [40, 12, 35, 57, 38, 2, 44, 56, 40, 40, 40, 40, 40, 40, 20, 35, 56, 45, 12, 36],
            backgroundColor: [
                'rgba(247, 17, 17, 0.2)',
            ],
            borderColor: [
                'rgba(247, 17, 17, 0.2)',
            ],
            borderWidth: 5,
            pointHitRadius: 20,
	    pointBorderWidth: 10,
	},
		  ]
    }
}

var myChart = new Chart(ctx, graphData);

var socket = new WebSocket('ws://172.20.108.12:8000/ws/graph/');

socket.onmessage = function (e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);

    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value[0]);

    var newGraphData2 = graphData.data.labels;
    newGraphData2.shift();
    newGraphData2.push(djangoData.value[1]);

    graphData.data.datasets[0].data = newGraphData;
    myChart.update()
}
