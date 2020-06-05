/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";




class Frequency extends Component {
  render() {
    const name = text("Title", "Frequency Polygon");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 ='#37cdb0';
    const color2 = color(label2, defaultValue2);
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);
   const option1 = ["lines","lines+markers","none"]  
    const mode = select("Mode", option1, "lines+markers");
   const legend1 = text("Legend of plot-1", "2016 sales");
    const legend2 = text("Legend of plot-2", "2017 sales");
    const value2 = number("Line Width", 5);
    const size = number("Marker Size", 12);

    const label1 = 'Marker Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(label1, 1, options);
    const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const shape = select("Line Shape", options3, "linear");
    const options4 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options4, "solid");

    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 2.5, 3, 4, 5, 6, 7],
              y: [1, 2, 5, 4, 4.5, 1, 2, 2.5],
              mode:`${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend1}` ,
              line:{
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`,
              
              },
              marker:{
                  size:`${size}`,
                  color:`${color1}` ,
                  opacity:`${opac}`
              }
            },

             {
              x: [1, 2, 3, 4, 4.5, 5, 6, 7],
              y: [1.5, 2.5, 2, 5, 3.5, 4, 0.5],
              
              mode:`${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend2}` ,
              line: {
                color: `${color2}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`,
                
              },
              marker:{
                  size:15,
                  color:`${color2}`,
                  opacity:`${opac}`
              }
            }
        ]}
        layout={ {width: 750, height: 520,
          xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },title:`${name}`} }
      />
      
      </div>
    );
  }
}
export default Frequency;