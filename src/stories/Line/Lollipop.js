/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Pop extends Component {
  render() {
    const name = text("Title", "Lollipop");
    const xlabel=text("x-axis label","Month") ;
    const ylabel=text("y-axis label","Percentage increase") ;
    const label = 'Line Color';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const label2 = 'Bar Color';
    const defaultValue2 ='blue';
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
    const option1 = ["lines","lines+markers","none"]  
    const mode = select("Mode", option1, "lines");
    const legend1 = text("Legend of plot-1", "2015 sales");
    const legend2 = text("Legend of plot-2", "2016 sales");
    const legend3 = text("Legend of plot-3", "2017 sales");
    const legend4 = text("Legend of plot-4", "2018 sales");
    const legend5 = text("Legend of plot-5", "Maximum sales");
   
    const value = number("Marker Size", 12);
    const value2 = number("Line Width", 5);
    const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const shape = select("Line Shape", options3, "linear");
    const options4 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options4, "solid");
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: ["Jan", "Feb"],
              y: [1, 1],
              mode:`${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend1}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: ["Jan", "Feb","Mar"],
              y: [2, 2, 2],
              mode:`${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend2}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: ["Jan", "Feb","Mar","Apr"],
              y: [3, 3, 3, 3],
              mode:`${mode}`,
              name: `${legend3}` ,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                line: {
                  color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: ["Jan", "Feb","Mar","Apr","May"],
              y: [4, 4, 4, 4, 4],
              mode:`${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend4}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`
              }
            },
            
            {
              x: ["Feb","Mar","Apr","May"],
              y: [1, 2, 3, 4],
              mode: 'markers',
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend5}` ,
              marker: {
              color:  `${color2}`,
              size:  `${value}`,
              opacity: `${opac}`
              }
            }
        ]}
        layout={ {width: 750, height: 520,title:`${name}`,
        xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },} }
      />
      
      </div>
    );
  }
}
export default Pop;