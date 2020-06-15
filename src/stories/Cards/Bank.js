import React, { Component } from 'react';
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Bank extends Component {
    render() {

        const titletext = text("Title Text", "Bank account");
        const val = text("Value", "1148.9");
      
        const options1 = ['left', 'right', 'center']
        const align1 = select("Title Text allignment", options1, "left");
        
        const size1 = text("Title Font Size", "14px");

        const color1 = color(" Title Text color","#bc658d");
        
        const options2 = ['normal','bold']
        const font1 = select("Title Font Weight", options2, "normal");

        const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
        const family1 = select("Title Font Family", options3, "Arial");

        const option1 = ['left', 'right', 'center']
        const align2 = select("Text allignment", option1, "left");
        
        const size2 = text("Paragraph Font Size","34px");

        const color2 = color("Paragraph Text color", "#10375c");
                
        const font2 = select("Paragraph Font Weight", options2, "bold");

        const family2 = select("Paragraph Font Family", options3, "Arial");
        
        
        const width = text("Card Width", "314.3px");
        const height = text("Card Height", "130.2px");
        
        const bcolor = color("Background color", " #fff");

        
        

        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: width,
                minHeight: height,           
                        
                
                margin: "50px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
               
                backgroundColor: bcolor,
              };
              
                
                
                const h2style= {
                
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: "30px",
                 
                padding:"30px 20px 10px 30px",
                fontFamily: family1,
                fontSize:size1,
                fontWeight:"bold",
                color:color1,
                textAlign:align1,
                letterSpacing: ".1rem"
              }
             
                
        
                const vstyle={
                 
                  fontFamily: family2,
                  color: color2,
                  paddingLeft:"30px ",
                  fontWeight:font2,
                  letterSpacing: "0.10px",
                  lineHeight: "1rem",
                  fontSize: size2,
                  wordBreak: "break-all",
                  wordWrap: "pre-wrap",
                  letterSpacing: ".1rem",
                  
                  textAlign:align2
                  };
                  const spstyle={
                    fontSize: "34px",
                    color:"#888888",
                    paddingLeft:"5px",
                    fontWeight:"normal",
                  };
                
                const button1={
                  border: "none",
                  backgroundColor: "black",
                  width: "50%",
                  margin: "30px auto",
                  padding: "15px 30px",
                  color: "white",
                  fontFamily: "Arial",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight:font1,
                };
                
              
              
              
        return (
            <div class="container center" style={cont}>
            <div class="card" style={card1}>
              <div>
              <h2  style={h2style}>{titletext}</h2>
              </div>
              <div className="card-value" style={vstyle} >
              {val}
              <span style={spstyle}>$</span>
              </div>
 
              
           </div>
          </div>
        );
      }
}
export default Bank;