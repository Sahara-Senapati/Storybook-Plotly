import React, { Component } from 'react';
import {FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";
 
/* importing required knobs */
import {text, color,select} from "@storybook/addon-knobs";

class Pro extends Component {
    render() {

        const titletext = text("Title Text", "TOP 3 CUSTOMERS");

        const cust1 = text("Customer 1", "Saraswati Tech Infra Private Limited ");
        const cust2 = text("Customer 2", "United Breweries Limited ");
        const cust3 = text("Customer 3", "Power Tools And Tackles Limited");
      
        const options1 = ['left', 'right', 'center']
        const align = select("Text allignment", options1, "center");
        
        const size1 = text("Title Font Size", "30px");

        const color1 = color(" Title Text color", "#282828");
        
        const options2 = ['normal','bold']
        const font1 = select("Title Font Weight", options2, "bold");

        const options3 = ["Times New Roman", "Arial", "cursive", "sans-serif",  "fantasy", "monospace"]
        const family1 = select("Title Font Family", options3, "sans-serif");
        
        const size2 = text("Paragraph Font Size", "18px");

        const color2 = color("Paragraph Text color", "#282828");
                
        const font2 = select("Paragraph Font Weight", options2, "bold");

        const family2 = select("Paragraph Font Family", options3, "Arial");
        
        const options4 = ['300px','350px', '400px', '450px','500px', '550px', '600px']
        const width = select("Card Width", options4, "400px");
        
        const bcolor = color("Background color", "#ffcb74");

        const url = text("Next Url", "https://google.com");
        
        
        

        
              const cont={
                
                               
               marginLeft:"400px"
               
              };
              
              
              const card1={
                
                width: width,
                minHeight: "300px",           
                        
                
                margin: "5px",
                
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.3)",      
                borderRadius: "10px",
                textAlign:"center"
              };
                
                const h2style= {
                
                margin: "0px",
                padding:"10px",
                fontFamily: family1,
                fontSize: size1,
                fontWeight:font1,
                color: color1,
                textAlign:align
              }
              const head1={
                
                backgroundColor:bcolor,
                width:"100%",
                height:"150px"
                
               };
                
                
                
                const hrstyle={
                  display:"block",
                  border: "none",
                  height: "3px",
                  backgroundColor: "black",
                  margin: "0px"
                  
                 };
                
                const pstyle={
                  margin:"15px 0px 0px 0px",
                  fontFamily: family2,
                  color: color2,
                  paddingLeft:"10px",
                  
                  fontWeight: font2,
                  letterSpacing: "0.10px",
                  lineHeight: "1rem",
                  fontSize: size2,
                  wordBreak: "break-all",
                  wordWrap: "pre-wrap",
                  color: "#282828",
                  textAlign:align
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
              <div style={head1}>
              <IconContext.Provider value={{ color: "black", size:"8rem",margin:"40px auto 40px auto " }}>
                <div>
                  <FaUsers />
                </div>
              </IconContext.Provider>
              </div>
              <hr  style={hrstyle}></hr>
              <h2  style={h2style}>{titletext}</h2>
              
              <p style={pstyle}> {cust1} </p>
              <p style={pstyle}> {cust2} </p>
              <p style={pstyle}> {cust3} </p>
              <form action={url}>
              <input type="submit" value="Next"  style={button1}/>
              </form> </div>
          </div>
        );
      }
}
export default Pro;