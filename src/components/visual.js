import React, { Component } from "react";
import tableau from 'tableau-api';

class Visual extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {  
        this.initViz()  
      }  

      initViz() {  
        var url = "https://public.tableau.com/views/BirthRateByYear/BirthRatebyYear?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer = this.vizContainer;  
            var options = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz = new window.tableau.Viz(vizContainer, url, options)  

        var url2 = "https://public.tableau.com/views/PopulationByYear/Sheet2?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer2 = this.vizContainer2;  
            var options2 = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz2 = new window.tableau.Viz(vizContainer2, url2, options2)  
    
      }  

    render() {
        // var placeholderDiv = document.getElementById("tableauViz");
        
    
    //     var viz = new tableau.Viz(placeholderDiv, url, options);   
        
        return(
          <div>
            <div ref={(div) => { this.vizContainer = div }}> </div>  
            <div ref={(div) => { this.vizContainer2 = div }}> </div> 
          </div>
        );
    }
}
export default Visual;