import React, { Component } from 'react';

/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Pro extends Component {
    render() {

        const titletext = text("Title Text", "Total Revenue");
        const val = text("Revenue Value", "14.54k");
      
        const options1 = ['left', 'right', 'center']
        const align1 = select("Title Text allignment", options1, "center");
        
        const size1 = text("Title Font Size", "14px");

        const color1 = color(" Title Text color","#abc2e8");
        
        const options2 = ['normal','bold']
        const font1 = select("Title Font Weight", options2, "normal");

        const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
        const family1 = select("Title Font Family", options3, "Arial");

        const option1 = ['left', 'right', 'center']
        const align2 = select("Text allignment", option1, "left");
        
        const size2 = text("Paragraph Font Size", "26px");

        const color2 = color("Paragraph Text color", "#fff");
                
        const font2 = select("Paragraph Font Weight", options2, "normal");

        const family2 = select("Paragraph Font Family", options3, "Arial");
        
        
        const width = text("Card Width", "314.3px");
        const height = text("Card Height", "153.2px");
        
        const bcolor = color("Background color", "#202a3b");

       
        
        
        

        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: `${width}`,
                minHeight: `${height}`,           
                        
                
                margin: "50px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
                
                backgroundColor:bcolor
              };
              
                
                
                const h2style= {
                
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: "30px",
                 
                padding:"30px 20px 0px 30px",
                fontFamily: family1,
                fontSize:size1,
                fontWeight:font1,
                color: color1,
                textAlign:align1,
                letterSpacing: ".05rem"
              }
             
                
                const vstyle={
                  padding:"30px 20px 0px 0px",
                  fontFamily: family2,
                  color: color2,
                  padding:"20px ",
                  fontWeight: font2,
                  letterSpacing: "0.10px",
                  lineHeight: "1rem",
                  fontSize: size2,
                  wordBreak: "break-all",
                  wordWrap: "pre-wrap",
                  letterSpacing: ".1rem",
                  
                  textAlign:align2
                  };
                  const spstyle={
                    fontSize: "16px",
                    paddingLeft:"10px ",
                    textAlign:align2
                  };
                
               
                
              
              
              
        return (
            <div class="container center" style={cont}>
            <div class="card" style={card1}>
              <div>
              <h2  style={h2style}>{titletext}</h2>
              </div>
              <div className="card-value" style={vstyle} >
              <span style={spstyle}>$</span>
              {val}
              </div>
 
              
           </div>
          </div>
        );
      }
}
export default Pro;