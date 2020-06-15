/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

/* importing required knobs */
import {text, color,number,select} from "@storybook/addon-knobs";

class Column extends Component {
  render() {
    const name = text("Title", "Basic Bar Plot");

    const xlabel=text("x-axis label","Month") ;
    const ylabel=text("y-axis label","Percent") ;

    const label = 'Color';
    const defaultValue = '#721b65';
    const value = color(label, defaultValue);

    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
    };
    const value2 = number(label1, 0.6, options);

    const label2= 'x-axis tick angle';
    const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
    };
    const xangle= number(label2, -45 , options2);
    const yangle= number("y-axis tick angle", -45 , options2);
   
   
    const options1 = ['v', 'h']
    const defaultValue4 = 'v';    
    const value3 = select("Orientation", options1, defaultValue4);

    const options4 = ['inside', 'outside','auto','none'];
    const defaultValue5 = 'inside';    
    const tpos = select("Text position", options4, defaultValue5);

    const gap = number("Bargap", 0.2);

    const width = number("Bar Width", 0.7);

    const legend=text("Legend text","2020 sales");
    
    const options3 = [0,1]  
    const xlegend = select('X-Legend coordinates', options3, 1);
    const ylegend = select('Y-Legend coordinates', options3, 1);
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
             x: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
             y: [60, 23, 47, 40, 70, 17, 38],
             name: `${legend}` ,
             width: `${width}` ,
             type: 'bar',
             texttemplate: '%{x}<br> %{y}<br>',
             textposition:`${tpos}` ,
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}` }
            
        ]}
        layout={ {width: 750, height: 600,  showlegend: true,
       
          xaxis: {
            title: `${xlabel}`,
    
            tickangle: `${xangle}`
          },
          yaxis: {
            title: `${ylabel}`,
            tickangle: `${yangle}`
    
          },
          legend: {
            x: `${xlegend}`,
            y:`${ylegend}`
          }, title: `${name}`, 
          bargap :`${gap}`} }
              />
      
      </div>
    );
  }
}

export default Column;
