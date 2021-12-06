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
        labels: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',],
        datasets: [{
            label: 'GRAFICA TOTALMENTE EN VIVO 3',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(30, 169, 244, 0.2)',
            ],
            borderWidth: 5
        }]
    },
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
