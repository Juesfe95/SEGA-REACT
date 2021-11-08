import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default  function GraficoTortaCriticidadTrafos(props){

  const url = 'http://10.240.238.94:8080/epsa-api/api/transformador/dashboard-tortas-trafos-criticidad-'+props.zona;
  const [total, setTodos] = useState();
  const [muyAltoRiesgo, setMuyAltoRiesgo] = useState();
  const [altoRiesgo, setAltoRiesgo] = useState();
  const [medianoRiesgo, setMedianoRiesgo] = useState();
  const [bajoRiesgo, setBajoRiesgo] = useState();

    const fetchApi=async()=>{
      await axios.get(url,
        {
            headers:{
              "Authorization": "bearer " + sessionStorage.getItem('USER_TOKEN')
            }
        })
        .then(response=>{
          setTodos(response.data.objeto_respuesta.totalEquipos)
          setMuyAltoRiesgo(response.data.objeto_respuesta.muyAltoRiesgo)
          setAltoRiesgo(response.data.objeto_respuesta.altoRiesgo)
          setMedianoRiesgo(response.data.objeto_respuesta.medianoRiesgo)
          setBajoRiesgo(response.data.objeto_respuesta.bajoRiesgo)
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
  },[total,muyAltoRiesgo,altoRiesgo,medianoRiesgo,bajoRiesgo]);

  const myChart = useRef(null);

  const fillChart = () =>{
    if(myChart.current){
        am4core.ready(function() {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end
            // Create chart instance
            var chart = am4core.create("chartdiv-trafo-criticidad", am4charts.PieChart);
            // Add data
            chart.data = [{
                "country": "Muy alta criticidad",
                "litres": muyAltoRiesgo
            }, {
                "country": "Alta criticidad",
                "litres": altoRiesgo
            },{
                "country": "Media criticidad",
                "litres": medianoRiesgo
            },{
                "country": "Baja criticidad",
                "litres": bajoRiesgo
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
        colorSet.list = ["#FD3434", "#FE7B2A", "#FFC120", "#6FC248"].map(function (color) {
            return new am4core.color(color);
            });
            pieSeries.colors = colorSet;
            //pieSeries.slices.template.tooltipHTML = '<b></b><br><div name="{country}" class="porcionTortaGraficaTrafo" style="cursor:pointer; color:#000" data-value="{country}">{country}:({litres})</div>';
        
            var label = chart.seriesContainer.createChild(am4core.Label);
            label.text = total;
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.fontSize = 18;
            /*chart.legend = new am4charts.Legend();
            chart.legend.position = "right";
            chart.legend.fontSize = 12;*/
            }); // end am4core.ready()
    }
  };

  return(<div 
              id="chartdiv-trafo-criticidad" 
              style={{ width: "100%", height: "250px", backgroundColor: "#FAFAFA" }}
              ref = {myChart}>
        </div>);


} ;