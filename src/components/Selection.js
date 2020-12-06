import React,{useState} from 'react';
function Selection(props){
    const [color, setcolor] = useState({background : ""});
    const { applyColor } = props;
    const addColor = (bg)=>{
        
        return bg.background;
        //evt.target.style.background=bg.background;
        //console.log(props.applyColor+" color");
        //console.log(evt);
        //console.log(evt.target.style);
        
    }
    return (<div className="fix-box"  style={color} onClick={()=>applyColor(setcolor)} >
            <h2 className="subheading">Selection</h2>
        </div>)
}
export default Selection;