import React, { Component } from 'react';
import {FaArrowUp, FaArrowDown} from "react-icons/fa";
import { IconContext } from "react-icons";
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Card4 extends Component {
    render() {

      const titletext1 = text("Title Text 1", "Outgoing");
      const titletext2 = text("Title Text 2", "Incoming");

      const Val1 = text("Value 1", "$1453.95");
      const Val2 = text("Value 2", "$754.29 ");
    
      const options1 = ['left', 'right', 'center']
      const align = select("Title Text allignment", options1, "left");

      const sizeicon = text("Icon Size", "3rem");
      
      const size1 = text("Title Font Size", "22px");

      const color1 = color(" Title Text color", "#eeeeee");
      
      const options2 = ['normal','bold']
      const font1 = select("Title Font Weight", options2, "bold");

      const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
      const family1 = select("Title Font Family", options3, "Arial");
      
      const size2 = text("Paragraph Font Size","16px");

      const color2 = color("Paragraph Text color", "#8091ab");
              
      const font2 = select("Paragraph Font Weight", options2, "bold");

      const family2 = select("Paragraph Font Family", options3, "Arial");

      const hrheight =text("hr Height",  "1px");
      
      const options4 = ['300px','350px', '400px', '450px','500px', '550px', '600px']
      const width = select("Card Width", options4, "314.3px");
      const height = select("Card Height", options4, "200px");
      
      const bcolor = color("Background color", "#202a3b");
      
        

        
              const cont={
                
                               
               marginLeft:"400px",
               
               
              };
              
              
              const card1={
                
                width: width,
                minHeight: height,         
                margin: "50px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
                backgroundColor:bcolor,
              };
              
                
                
                const h2style= {
                
                margin: "0 15px 5px auto",
                marginRight:" 15px",
                color: color1,
                fontWeight: "700",
                overflow: "hidden" ,
                
                
                fontFamily: family1,
                fontSize:size1,
                fontWeight:font1,
                
                textAlign:align,
                letterSpacing: ".05rem"
              }
             
                
                
                const hrstyle={
                  display:"block",
                  border: "none",
                  
                  padding:"auto 10px auto 10px",
                  height: hrheight,
                  backgroundColor: "#8091ab",
                  margin: "0px",
                  textAlign:"center"
                  
                  
                };          
               
               const flex1= {
                  padding: "20px 60px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
                
               
                
                const meta1= {
                    marginTop: "0",
                    marginRight:" 15px",
                    fontWeight: font2,
                    overflow: "hidden" ,
                    color: color2,
                    fontFamily:family2,
                    fontSize:size2
                }
                
                const icons= {
                    float: "right"
                }
                
                const social= {
                    display:"inline-block",
                    padding: "5px 0"
                }
                
            
              
        return (
            <div class="container center" style={cont}>
                 <div class="card" style={card1}>
                 
                 
                 <div style={flex1}>
                 <ul  style={icons}>
                    <li style={social}>
                    <IconContext.Provider value={{ color: "#d32626",textAlign:"left", size:sizeicon,margin:"40px 10px 40px auto " }}>
                      <div>
                        <FaArrowUp />
                      </div>
                    </IconContext.Provider>
                    </li>
                
                  </ul>
                  <div> 
                  <ul style={{listStyleType: "none"}}>
                  <li> <h2 style={h2style}>{Val1}</h2></li>
                  <li> <p style={meta1}>{titletext1}</p></li>
                  </ul>
                  </div>
                  </div>

                  <hr  style={hrstyle}></hr>

                  <div style={flex1}>
                  <ul  style={icons}>
                    <li style={social}>
                    <IconContext.Provider value={{ color: "#f5a31a",textAlign:"left", size:"3rem",margin:"40px 10px 40px auto " }}>
                      <div>
                        <FaArrowDown />
                      </div>
                    </IconContext.Provider>
                    </li>
              
                  </ul>
                  <div> <ul style={{listStyleType: "none"}}>
                  <li> <h2 style={h2style}>{Val2}</h2></li>
                  <li> <p style={meta1}>{titletext2}</p></li>
                  </ul></div>
                  
                  
                  </div>
                  </div>
                  </div>
      
                   
               
        );
      }
}
export default Card4;