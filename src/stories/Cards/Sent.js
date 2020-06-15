import React, { Component } from 'react';
import {FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Sent extends Component {
    render() {

      const rname = text("Receiver name", "Alex Williams");
      const val1 = text("Value", "-$126");
      const details = text("Details", "Sent 7h ago");
    
      const options1 = ['left', 'right', 'center']
      const align = select("Title Text allignment", options1, "left");
      
      const size1 = text("Title Font Size", "20px");

      const color1 = color(" Title Text color", "#fff");
      
      const options2 = ['normal','bold']
      const font1 = select("Title Font Weight", options2, "bold");

      const sizeicon = text("Icon Size", "3.5rem");

      const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
      const family1 = select("Value Font Family", options3, "Arial");
      
      const size2 = text("Value Font Size", "30px");

      const color2 = color("Value Text color", " #fff");
              
      const font2 = select("Value Font Weight", options2, "bold");

      const family2 = select("Value and Details Font Family", options3, "Arial");

      const size3 = text("Details Font Size", "14px");

      const color3 = color("Details Text color", "#a6a6a6");
              
      const font3 = select("Details Font Weight", options2, "normal");
      
      
      const width = text("Card Width",  "150px");

      const height = text("Card Height",  "180px");
      
      const bcolor = color("Background color", " #222831");   

        
        

        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: width,
                minHeight:height,           
                marginTop:"40px",        
                
                padding:"30px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
                backgroundColor:bcolor,
              };
              
                
                
                const h2style= {
                color: color1,
                overflow: "hidden" ,
                
                margin:"15px auto 30px auto",
                fontFamily: family1,
                fontSize:size1,
                fontWeight:font1,
                
                textAlign:align,
                letterSpacing: "0.20px",
              }
             
                
                
               
                const flex1= {
                  
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
                
               
                
                const meta1= {
                    
                    fontWeight: font2,
                    fontSize: size2,
                    overflow: "hidden" ,
                    color: color2,
                    fontFamily:family2,
                    letterSpacing: "0.3px",
                    marginBottom:"0"
                }
                const meta2= {
                    fontSize: size3,
                    fontWeight:font3,
                    overflow: "hidden" ,
                    color: color3,
                    fontFamily:family2,
                    letterSpacing: "0.20px",
                    marginTop:"8px"
                }
                
                
            
              
        return (
            <div class="container center" style={cont}>
                
                 <div style={flex1}>
                 <div class="card" style={card1}>
                    <IconContext.Provider value={{ color: "#f4f6ff",textAlign:"left", size:sizeicon }}>
                      <div>
                        <FaUserCircle />
                      </div>
                    </IconContext.Provider>
                    <h2 style={h2style}> {rname} </h2> 
                    <p style={meta1}> {val1} </p>
                    <p style={meta2}> {details} </p>
                    </div>
                 </div> 
                  
            </div>
                 
      
                   
               
        );
      }
}
export default Sent;