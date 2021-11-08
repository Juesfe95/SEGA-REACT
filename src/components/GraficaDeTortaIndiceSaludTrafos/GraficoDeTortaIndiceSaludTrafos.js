import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default  function GraficoDeTortaIndiceSaludTrafos(props){

  const url = 'http://10.240.238.94:8080/epsa-api/api/transformador/dashboard-tortas-trafos-'+props.zona;
  const [total, setTodos] = useState();
  const [buenos, setBuenos] = useState();
  const [segumiento, setSeguimiento] = useState();
  const [criticos, setCriticos] = useState();

    const fetchApi=async()=>{
      await axios.get(url,
        {
            headers:{
              "Authorization": "bearer " + sessionStorage.getItem('USER_TOKEN')
            }
        })
        .then(response=>{
          setTodos(response.data.objeto_respuesta.totalEquipos)
          setBuenos(response.data.objeto_respuesta.totalEquiposBueno)
          setCriticos(response.data.objeto_respuesta.totalEquiposCritico)
          setSeguimiento(response.data.objeto_respuesta.totalEquiposSeguimiento)
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
  },[total,buenos,segumiento,criticos]);

  const myChart = useRef(null);

  const fillChart = () =>{
    if(myChart.current){
        am4core.ready(function() {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end
            // Create chart instance
            var chart = am4core.create("chartdiv-trafo", am4charts.PieChart);
            // Add data
            chart.data = [{
                "country": "Pobre",
                "litres": criticos
            }, {
                "country": "Razonable",
                "litres": segumiento
            }, {
                "country": "Bueno",
                "litres": buenos
            }];
            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "litres";
            pieSeries.dataFields.category = "country";
            pieSeries.innerRadius = am4core.percent(50);
            pieSeries.legendSettings.valueText = "{litres}"; 
            pieSeries.ticks.template.disabled = true;
            pieSeries.labels.template.disabled = true;
            pieSeries.tooltip.label.interactionsEnabled = true;
            pieSeries.tooltip.keepTargetHover = true;
            var colorSet = new am4core.ColorSet();
        colorSet.list = ["#FD3434", "#FFC120", "#6FC248", "#BCC5BE"].map(function (color) {
            return new am4core.color(color);
            });
            pieSeries.colors = colorSet;
            
            var label = chart.seriesContainer.createChild(am4core.Label);
            label.text = total;
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.fontSize = 18;
            /*chart.legend = new am4charts.Legend();
            chart.legend.position = "right";
            chart.legend.fontSize = 12;*/
            });
    }
  };

  return(<div 
              id="chartdiv-trafo" 
              style={{ width: "100%", height: "250px", backgroundColor: "#FAFAFA" }}
              ref = {myChart}>
        </div>);


} ;