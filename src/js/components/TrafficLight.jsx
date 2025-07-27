import React, {useState} from "react";


//NOTES: const/component MUST to match pascal case in React to be recognized - ex trafficLight was not rendering because it was not recognized as a component name
//classNames and file(.jsx) names do NOT have to be in Pascal case inorder to be recognized by REact



const TrafficLight = () => {
// useState sets/assigns glow to clicked Light
    const [selectedColor, setSelectedColor] = useState(" ");
    // {} <- activates Javascript; need to use Javascript to change the setting of the glow based on userinput/click. 
    // we are using JS to create TERNARY f(x) -aka "Lazy if"

        return(

                <div className="traffic-light container bg-dark ps-5 pt-5">
                 
                          
                       <div onClick={() => setSelectedColor("red")} className={"Light red"+((selectedColor === "red") ? " glow" : "")}></div> 
    
                       <div onClick={() => setSelectedColor("yellow")}  className={"Light yellow"+((selectedColor === "yellow") ? " glow" : "")}></div>
 
                       <div onClick={() => setSelectedColor("green")} className={"Light green"+((selectedColor === "green")? " glow" : "")}></div>

                 </div>

               );
}
export default TrafficLight;








