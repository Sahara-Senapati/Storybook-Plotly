/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";

class Tree extends Component {
  render() {
    const name = text("Title", "Venn Diagram");

    const label = 'Color1';
    const defaultValue = '#127681';
    const color1 = color(label, defaultValue);

    const label2 = 'Color2';
    const defaultValue2 = '#ea907a';
    const color2 = color(label2, defaultValue2);

    const color3 = color("Line Color", "#444");

    const width = number("Line Width", 3);

    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(label1, 0.6, options);

    const text1 = text("Text on plot-1", "A");
    const text2 = text("Text on plot-2", "B");
    const text3 = text("Common text", "A + B");
   
    const tcolor = color("Text Color", "Black");

    const tsize = number("Text Size", 20);
    
    const options1 = [ "Arial", "Balto", "Courier New", "Droid Sans","Gravitas One", "Old Standard TT", "Open Sans", "Raleway", "Times New Roman"]
    const tfamily = select("Text Family", options1, "#Arial");

  
    return (
      <div className="body">
      <Plot className="plot"
        data={[
            {
  x: [1, 1.75, 2.5],
  y: [1, 1, 1],
  type: 'scatter',
  mode: 'text',
  text: [text1, text3, text2],
  textfont: {
    color: `${tcolor}`,
    size: `${tsize}`,
    family: `${tfamily}`
  }
            }

        ]}
        layout={ {width: 750, height: 520, 
  xaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  shapes: [{
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: `${color1}`,
    opacity: `${opac}`,
    x0: 0,
    y0: 0,
    x1: 2,
    y1: 2,
    type: 'circle',
    line: {
      color: `${color3}`,
      width:`${width}`
    }
  }, {
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: `${color2}`,
    opacity: `${opac}`,
    x0: 1.5,
    y0: 0,
    x1: 3.5,
    y1: 2,
    type: 'circle',
    line: {
      color: `${color3}`,
      width: `${width}`
    }
  }],
  margin: {
    l: 20,
    r: 20,
    b: 100
  },
  title:`${name}`
}}  
      />
      
      </div>
    );
  }
}

export default Tree;