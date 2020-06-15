/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

/* importing required knobs */
import {text, color,number,select} from "@storybook/addon-knobs";

var x = [];
for (var i = 0; i < 100; i ++) {
	x[i] = Math.random();
}





class Hist extends Component {
  render() {
    const name = text("Title", "Histogram");

    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;

    const label = 'Color';
    const defaultValue = '#721b65';
    const color1 = color(label, defaultValue);

    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const opac = number(label1, 0.6, options);

   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const xangle= number(label2, -45 , options2);
  const yangle= number("y-axis tick angle", -45 , options2);
    
    const options10 = ['v', 'h']
    const defaultValue4 = 'v';    
    const value3 = select("Orientation", options10, defaultValue4);

    const option1 = ['inside', 'outside','auto','none'];
    const dValue1 = 'inside';    
    const tpos = select("Text position", option1, dValue1);

    const width = number("Bar Width", 0.7);

    const legend=text("Legend text","2020 sales");
    
    const options8 = [0,1]  
    const xlegend = select('X-Legend coordinates', options8, 1); 
    const ylegend = select('Y-Legend coordinates', options8, 1);
 
   
   
    const gap = number("Bargap", 0);
    
    
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
             type: 'histogram',
             x: x,
             name: `${legend}` ,
             texttemplate: 'x: %{x}<br>',
             textposition:`${tpos}` ,
             hovertemplate: ' Value of x: %{x}<br>',
             width: `${width}` ,
             orientation:`${value3}` ,
             marker:{
                 color:`${color1}`,
                 opacity: `${opac}`
             },
            
             
          }
            
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

export default Hist;
