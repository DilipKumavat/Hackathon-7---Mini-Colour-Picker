import React,{useState} from 'react';
function Selection(props){
    const [color, setcolor] = useState('');
    const addColor = (evt)=>{
        evt.target.style.background=props.applyColor;
        console.log(evt);
        console.log(evt.target.style);
        
    }
    return (<div className="fix-box"   onClick={addColor} >
            <h2 className="subheading">Selection</h2>
        </div>)
}
export default Selection;