

    

function fetchDataAndUpdateChart2() {
        // Fetch data from the server endpoint
    fetch('/get-data2')
        .then(response => response.json())
        .then(data => {
        // Call the updateChart2 function with the retrieved data
            updateChart2(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChart3() {
    fetch('/get-data3')
        .then(response => response.json())
        .then(data => {
            updateChart3(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChart4() {
    fetch('/get-data4')
        .then(response => response.json())
        .then(data => {
            updateChart4(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChart5() {
    fetch('/get-data5')
        .then(response => response.json())
        .then(data => {
            updateChart5(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChartline() {
    fetch('/get-dataline')
        .then(response => response.json())
        .then(data => {
            updateChartline(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChartline2() {
    fetch('/get-dataline2')
        .then(response => response.json())
        .then(data => {
            updateChartline2(data);
        })
        .catch(error => console.error('Error', error));
}
function fetchDataAndUpdateChartline3() {
    fetch('/get-dataline3')
        .then(response => response.json())
        .then(data => {
            updateChartline3(data);
        })
        .catch(error => console.error('Error', error));
}

function fetchDataAndUpdateChartpie() {
    fetch('/get-datapie')
        .then(response => response.json())
        .then(data => {
            updateChartpie(data);
        })
        .catch(error => console.error('Error:', error));
}
function updateChartpie(data) {
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdivpie");
        
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
          layout: root.verticalLayout,
          innerRadius: am5.percent(50)
        }));
        
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "status",
          alignLabels: false
        }));
        
        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0
        });
        
        
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll( data
         );
        
        
        // Create legend
        // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          marginTop: 15,
          marginBottom: 15,
        }));
        
        legend.data.setAll(series.dataItems);
        
        
        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);
        
        }); // end am5.ready()

    }

function updateChart2(data) {
    // am5.ready ensures that amCharts is loaded before executing the code
    am5.ready(function () {
        // Create and configure the Pie Chart
        var root = am5.Root.new("chartdiv2");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart=root.container.children.push(am5xy.XYChart.new(root,{
            panX:true,
            panY:true,
            wheelX:"panX",
            wheelY:"panY",
            pinchZoomX:true
        }));
        var cursor=chart.set("cursor",am5xy.XYCursor.new(root,{}));
        cursor.lineY.set("visible",false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30 });
        xRenderer.labels.template.setAll({
        rotation: -90,
        centery: am5.p50,
        centerX: am5.p100, 
        paddingRight: 15
        });
        xRenderer.grid.template.setAll({
        location: 1
        })
        

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        // Make charts and axes appear with animation
        series.appear(1000);
        chart.appear(1000, 100);
    });
}
function updateChart3(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdiv3");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart=root.container.children.push(am5xy.XYChart.new(root,{
            panX:true,
            panY:true,
            wheelX:"panX",
            wheelY:"panY",
            pinchZoomX:true
        }));
        var cursor=chart.set("cursor",am5xy.XYCursor.new(root,{}));
        cursor.lineY.set("visible",false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30 });
        xRenderer.labels.template.setAll({
        rotation: -90,
        centery: am5.p50,
        centerX: am5.p100, 
        paddingRight: 15
        });
        xRenderer.grid.template.setAll({
        location: 1
        })
        

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        // Make stuff animate on load
        series.appear(1000);
        chart.appear(1000, 100);
    });
}
function updateChart4(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdiv4");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart=root.container.children.push(am5xy.XYChart.new(root,{
            panX:true,
            panY:true,
            wheelX:"panX",
            wheelY:"panY",
            pinchZoomX:true
        }));
        var cursor=chart.set("cursor",am5xy.XYCursor.new(root,{}));
        cursor.lineY.set("visible",false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30 });
        xRenderer.labels.template.setAll({
        rotation: -90,
        centery: am5.p50,
        centerX: am5.p100, 
        paddingRight: 15
        });
        xRenderer.grid.template.setAll({
        location: 1
        })
        

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        // Make stuff animate on load
        series.appear(1000);
        chart.appear(1000, 100);
    });
}

function updateChart5(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdiv5");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart=root.container.children.push(am5xy.XYChart.new(root,{
            panX:true,
            panY:true,
            wheelX:"panX",
            wheelY:"panY",
            pinchZoomX:true
        }));
        var cursor=chart.set("cursor",am5xy.XYCursor.new(root,{}));
        cursor.lineY.set("visible",false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30 });
        xRenderer.labels.template.setAll({
        rotation: -90,
        centery: am5.p50,
        centerX: am5.p100, 
        paddingRight: 15
        });
        xRenderer.grid.template.setAll({
        location: 1
        })
        

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);
    });
}
function updateChartline(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdivline");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "panY",
            pinchZoomX: true
        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centery: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });
        xRenderer.grid.template.setAll({
            location: 1
        })

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);
    });
}
function updateChartline2(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdivline2");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "panY",
            pinchZoomX: true
        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centery: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });
        xRenderer.grid.template.setAll({
            location: 1
        })

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);
    });
}
function updateChartline3(data) {
    am5.ready(function () {
        var root = am5.Root.new("chartdivline3");
        root.setThemes([am5themes_Animated.new(root)]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "panY",
            pinchZoomX: true
        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        // Create axes
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centery: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });
        xRenderer.grid.template.setAll({
            location: 1
        })

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);
    });
}






document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateChart2();
    fetchDataAndUpdateChart3();
    fetchDataAndUpdateChart4();
    fetchDataAndUpdateChart5();
    fetchDataAndUpdateChartline();
    fetchDataAndUpdateChartline2();
    fetchDataAndUpdateChartline3();
    fetchDataAndUpdateChartpie();

    
});
