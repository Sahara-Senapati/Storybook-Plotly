/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class ColumnLine extends Component {
  render() {
    const name = text("Title", "Column + Line");
    const xlabel=text("x-axis label","Year") ;
    const ylabel=text("y-axis label","Percentage increase") ;
    const label = 'Line Color';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const label2 = 'Bar Color';
    const defaultValue2 ='orange';
    const color2 = color(label2, defaultValue2);
   const option = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number('x-axis tick angle', -45 , option);
    const label1 = 'Marker Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(label1, 1,options);

    const label3 = 'Bar Opacity';
    const options2 = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac2 = number(label3, 1,options2);

    const value = number("Marker Size", 12);
    const value2 = number("Line Width", 5);
    const option1 = ["lines","lines+markers","none"]  
    const mode = select("Mode", option1, "lines+markers");
    const options4 = [0,0.5,1]  
    const xlegend = select("X-Legend", options4, 1);
    const label5 = 'Y-Legend';
    const options5 = [0,0.5,1]  
    const ylegend = select(label5, options5, 1);
    const legend1=text("Legend for Line Plot","2018 sales");
    const legend2=text("Legend for Bar Chart","2019 sales");
    const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const shape = select("Line Shape", options3, "linear");
    const options6 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options6, "solid");
    
    
    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [2001, 2002, 2003, 2004, 2005, 2006],
              y: [2.8, 3.3, 4.7, 1.7, 2.5, 0.7],
              type: 'lines+scatter',
              mode:`${mode}`,
              line:{
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`,
                opacity:`${opac}`
              },
              name: `${legend1}` ,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              
              marker:{
                  size:`${value}`,
                  color: `${color1}`,
                  opacity:`${opac}`
              }
            },

             {
              x: [2001, 2002, 2003, 2004, 2005, 2006],
              y: [6, 5.2, 4.3, 3.9, 3.3, 1.4],
              name: `${legend2}` ,
              type: 'bar', 
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              marker: {
             opacity:`${opac2}` ,
             color: `${color2}`
              }

            }
        ]}
        layout={ {width: 750, height: 520,title:`${name}`, showlegend: true,
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
  }} }
      />
      
      </div>
    );
  }
}
export default ColumnLine;