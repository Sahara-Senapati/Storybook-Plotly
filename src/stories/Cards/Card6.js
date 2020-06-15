import React, { Component } from 'react';
import {FaArrowAltCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Card6 extends Component {
    render() {

      const val1 = text("Value", "-15%");
      const title = text("Title text", "Outcome");
      const Date = text("Date", "January 2019");
    
      const options1 = ['left', 'right', 'center']
      const align = select("Text allignment", options1, "left");
      
      const size1 = text("Value Font Size", "30px");

      const color1 = color(" Value Text color", "#000000");
      
      const options2 = ['normal','bold']
      const font1 = select("Value Font Weight", options2, "bold");

      const sizeicon = text("Icon Size", "2.5rem");

      const col1 = color(" Title Text color", "#f37121");

      const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
      const family1 = select("Value Font Family", options3, "Arial");
      
      const size2 = text("Title and Date Font Size", "16px");

      const color2 = color("Date Text color", "#5f6769");
              
      const font2 = select("Title and Date Font Weight", options2, "bold");

      const family2 = select("Title and Date Font Family", options3, "Arial");
      
      
      const width = text("Card Width",  "160px");

      const height = text("Card Height",  "100px");
      
      const bcolor = color("Background color", "#fff");   


        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: "160px",
                minHeight: "100px",           
                marginTop:"40px",        
                
                padding:"20px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
                backgroundColor:" #fff",
              };
              
                
                
                const h2style= {
                
                    
                   
                    color: color1,
                    fontWeight: "700",
                    overflow: "hidden" ,
                 margin:"20px auto 10px 0",
                padding:"40px auto 30px auto",
                fontFamily: family1,
                fontSize:size1,
                fontWeight:font1,
                
                textAlign:align,
                letterSpacing: "0.20px",
              }
             
                
                
               
                
                const flex1= {
                  padding: "20px 60px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
                
               
                
                const meta1= {
                    paddingBottom:"15px",
                    fontWeight: font2,
                    overflow: "hidden" ,
                    color: col1,
                    fontSize:size2,
                    fontFamily:family2,
                    letterSpacing: "0.20px"
                }
                const meta2= {
                    
                    fontWeight:font2,
                    overflow: "hidden" ,
                    color:color2,
                    fontSize:size2,
                    fontFamily:family2,
                    letterSpacing: "0.20px"
                }
                
              
              
        return (
            <div class="container center" style={cont}>
                
                 <div style={flex1}>
                 <div class="card" style={card1}>
                    <IconContext.Provider value={{ color: "#f37121",textAlign:"left", size:sizeicon,marginBottom:"20px", }}>
                      <div>
                        <FaArrowAltCircleDown />
                      </div>
                    </IconContext.Provider>
                    <h2 style={h2style}>{val1}</h2> 
                    <p style={meta1}>{title}</p>
                    <p style={meta2}>{Date}</p>
                    </div>
                 </div> 
                  
            </div>
                 
      
                   
               
        );
      }
}
export default Card6;