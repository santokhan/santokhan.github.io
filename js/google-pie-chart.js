google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 6],
        ['CSS', 5],
        ['Bootstarp', 5],
        ['JavaScript', 6],
        ['React JS', 2]
    ]);

    var options = {
        title: 'My Front-end Development Skills',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}