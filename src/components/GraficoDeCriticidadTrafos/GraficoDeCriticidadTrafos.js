import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
export default  function GraficoDeCriticidadTrafos(props){

  const url = 'http://10.240.238.94:8080/epsa-api/api/transformador/listar-matriz-criticidad-'+props.zona;
  const [todos, setTodos] = useState();

    const fetchApi=async()=>{
      await axios.get(url,
        {
            headers:{
              "Authorization": "bearer " + sessionStorage.getItem('USER_TOKEN')
            }
        })
        .then(response=>{
          setTodos(response.data.objeto_respuesta)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  
  useEffect(() =>{
    fetchApi();
  },[props.zona]);

  useEffect(() =>{
    fillChart();
  },[todos]);

  const myChart = useRef(null);

  const fillChart = () =>{
    if(myChart.current){
    let chart = myChart.current;
    chart = am4core.create("chartdiv-matriz", am4charts.XYChart);
    let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.title.text = '[bold]Factor de consecuencia';
    let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.title.text = '[bold]Probabilidad de falla';
    valueAxisY.renderer.grid.template.strokeOpacity = 0;
    valueAxisX.renderer.grid.template.strokeOpacity = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "consecuencia";
    series.dataFields.valueY = "falla";
    series.dataFields.value = "value";
    series.tooltip.label.interactionsEnabled = true;

    let bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#ffffff");
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 1;
    bullet.fillOpacity = 1;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;

    bullet.tooltipHTML = '<div class="puntoGrafica" style="cursor:pointer; color:#fff" data-value="{nombre}">{nombre}<br> P. Falla: {valueY.value}<br> F. consecuencia: {valueX.value}</div>';
    let outline = chart.plotContainer.createChild(am4core.Circle);
    outline.fillOpacity = 0;
    outline.strokeOpacity = 1;
    outline.stroke = am4core.color("#ffffff");
    outline.strokeWidth = 2;
    outline.hide(0);

    let blurFilter = new am4core.BlurFilter();
    outline.filters.push(blurFilter);

    let hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;

        series.heatRules.push({ target: bullet, min: 3, max: 4, property: "radius" });

        bullet.adapter.add("tooltipY", function(tooltipY, target) {
            return -target.radius;
        })

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomXY";
        chart.cursor.snapToSeries = series;
        chart.responsive.enabled = true;
        chart.data = todos;



        var area = chart.series.push(new am4charts.LineSeries());
        area.dataFields.valueY = "y1";
        area.dataFields.valueX = "x1";
        area.fill=am4core.color("#8BE98B");
        area.fillOpacity = 0.6;
        area.strokeWidth = 0;
        area.data = [{
        x1: 0,
        y1: 0.80,
        }, {
        x1: 0.80,
        y1: 0,
        }];

        var area2 = chart.series.push(new am4charts.LineSeries());
        area2.dataFields.valueY = "y1";
        area2.dataFields.valueX = "x1";
        area2.fill=am4core.color("#F1F18C");
        area2.fillOpacity = 0.6;
        area2.strokeWidth = 0;
        area2.endValue = 1;
        area2.data = [{
        x1: 0.80,
        y1: 0,
        }, {
        x1: 0,
        y1: 0.80,
        },
        {
        x1: 0,
        y1: 1,
        }, 
        {
        x1: 0.20,
        y1: 0.80,
        },{
        x1: 1,
        y1: 0,
        }];

        var area3 = chart.series.push(new am4charts.LineSeries());
        area3.dataFields.valueY = "y1";
        area3.dataFields.valueX = "x1";
        area3.fill=am4core.color("#F1F18C");
        area3.fillOpacity = 0.6;
        area3.strokeWidth = 0;
        area3.data = [{
        x1: 1,
        y1: 0,
        }, {
        x1: 0,
        y1: 1,
        }, 
        {
        x1: 0.20,
        y1: 1,
        },{
        x1: 1,
        y1: 0.20,
        }];

        var area4 = chart.series.push(new am4charts.LineSeries());
        area4.dataFields.valueY = "y1";
        area4.dataFields.valueX = "x1";
        area4.fill=am4core.color("#FAC48F");
        area4.fillOpacity = 0.6;
        area4.strokeWidth = 0;
        area4.data = [{
        x1: 1,
        y1: 0.20,
        }, {
        x1: 0.20,
        y1: 1,
        }, 
        {
        x1: 0.40,
        y1: 1,
        },{
        x1: 1,
        y1: 0.40,
        }];

        var area5 = chart.series.push(new am4charts.LineSeries());
        area5.dataFields.valueY = "y1";
        area5.dataFields.valueX = "x1";
        area5.fill=am4core.color("#FE9898");
        area5.fillOpacity = 0.6;
        area5.strokeWidth = 0;
        area5.data = [{
        x1: 1,
        y1: 0.40,
        }, {
        x1: 0.40,
        y1: 1,
        }, 
        {
        x1: 1,
        y1: 1,
        }];

        // Scrollbars
        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();

        chart.events.on("ready", function () {
        setTimeout(() => {
                valueAxisX.zoomToValues(0, 1, true,false);
            }, 1600);
        });

        chart.events.on("ready", function () {
            setTimeout(() => {
                valueAxisY.zoomToValues(0, 1, true,false);
            }, 1600);
        });
    }
  };

  return(<div 
              id="chartdiv-matriz" 
              style={{ width: "100%", height: "580px", backgroundColor: "#FAFAFA" }}
              ref = {myChart}>
        </div>);


} ;
