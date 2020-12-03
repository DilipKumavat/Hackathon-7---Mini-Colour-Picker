import React,{useState} from 'react';
function Selection(props){
    const addColor = (evt,bg)=>{
        
    
        evt.target.style.background=bg.background;
        //console.log(props.applyColor+" color");
        //console.log(evt);
        //console.log(evt.target.style);
        
    }
    return (<div className="fix-box"   onClick={(e)=>{props.applyColor(e,addColor)}} >
            <h2 className="subheading">Selection</h2>
        </div>)
}
export default Selection;