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
        labels: ['90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90','90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90','90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90'],
        datasets: [
	{
            label: 'PRESION (PSI)',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            label: 'VOLTAJE (Volts)',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(236, 247, 17, 0.3)',
            ],
            borderColor: [
                'rgba(236, 247, 17, 0.3)',
            ],
            borderWidth: 5,
            pointHitRadius: 20,
	        pointBorderWidth: 10,
	},
	{
            label: 'CORRIENTE (Ampers)',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

    var newGraphData1 = graphData.data.labels;
    newGraphData1.shift();
    newGraphData1.push(djangoData.value[1]);

    var newGraphData2 = graphData.data.datasets[1].data;
    newGraphData2.shift();
    newGraphData2.push(djangoData.value[2]);

    var newGraphData3 = graphData.data.datasets[2].data;
    newGraphData3.shift();
    newGraphData3.push(djangoData.value[3]);

    myChart.update()
}
