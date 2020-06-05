/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number, select} from "@storybook/addon-knobs";


class Pair extends Component {
  render() {
    const name = text("Title", "Paired Bar Plot");
    const xlabel=text("x-axis label","Year") ;
    const ylabel=text("y-axis label","Percent") ;
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const color1 = color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#d9455f';
    const color2 = color(label2, defaultValue2);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
  
   const label3= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label3, -45 , options2);
    const value3 = text("Orientation", "v");
    const gap = number("Bargap", 0.1);
    const width = number("Bar Width", 0.45);
    const legend1=text("Legend text of plot-1","Summer");
    const legend2=text("Legend text of plot-2","Winter")
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [80, 54, 50, 35, 24, 10, 33] ,
              type: 'bar',
              name: `${legend1}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             
              marker: {
             opacity:`${value2}` ,
             color: `${color1}`
              },
            
             orientation: `${value3}` 
            },
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [53, 24, 47, 73, 8, 32, 60],
              type: 'bar',
              name: `${legend2}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             
              marker: {
             opacity:`${value2}` ,
             color: `${color2}`
              },
            
             orientation: `${value3}` 
            }
        ]}
        layout={ {width: 750, height: 520,showlegend: true,
        
          xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  },bargap:`${gap}`,title:` ${name}`} }
      />
      
      </div>
    );
  }
}

export default Pair;