import React, { Component } from 'react';
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Last extends Component {
    render() {

        const titletext = text("Title Text", "$3,783,00");
        const val = text("Time Value", "23 MARCH 00:00 UTC");
      
        const options1 = ['left', 'right', 'center']
        const align1 = select("Title Text allignment", options1, "center");
        
        const size1 = text("Title Font Size", "18px");

        const color1 = color(" Title Text color","#fff");
        
        const options2 = ['normal','bold']
        const font1 = select("Title Font Weight", options2, "bold");

        const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
        const family1 = select("Title Font Family", options3, "Arial");

        const option1 = ['left', 'right', 'center']
        const align2 = select("Text allignment", option1, "center");
        
        const size2 = text("Paragraph Font Size", "12px");

        const color2 = color("Paragraph Text color", "#bbceec");
                
        const font2 = select("Paragraph Font Weight", options2, "normal");

        const family2 = select("Paragraph Font Family", options3, "Arial");
        
        
        const width = text("Card Width", "314.3px");
        const height = text("Card Height","100.2px");
        
        const bcolor = color("Background color", "#202a3b");

       
        
        

        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: width,
                minHeight: height,           
                        
                
                margin: "50px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "5px",
                textAlign:"center",
                backgroundColor:bcolor,
              };
              
                
                
                const h2style= {
                
                    color: color1,
                 
                padding:"30px 20px 0px 30px",
                marginBottom:"5px",
                fontFamily: family1,
                fontSize: size1,
                fontWeight: font1,
                textAlign:align1,
                letterSpacing: ".05rem"
              }
             
                
                const vstyle={
                  
                  fontFamily: family2,
                  
                  
                  fontSize:size2,
                fontWeight:font2,
                color:color2 ,
                  letterSpacing: "0.10px",
                  lineHeight: "1rem",
                  
                  wordBreak: "break-all",
                  wordWrap: "pre-wrap",
                  letterSpacing: ".1rem",
                  
                  textAlign:align2
                  };
                 
                
              
        return (
            <div class="container center" style={cont}>
            <div class="card" style={card1}>
              <div>
              <h2  style={h2style}>{titletext}</h2>
              </div>
              <div className="card-value" style={vstyle} >
              {val}
              </div>
 
              
           </div>
          </div>
        );
      }
}
export default Last;