import React,{useState} from 'react';
function Selection(props){
    const [color, setcolor] = useState('');
    const addColor = (bg)=>{
        
        return bg.background;
        //evt.target.style.background=bg.background;
        //console.log(props.applyColor+" color");
        //console.log(evt);
        //console.log(evt.target.style);
        
    }
    const finalColor = ()=>{
        setcolor(props.applyColor(addColor))
    }
    return (<div className="fix-box"  style={{background : color}} onClick={finalColor} >
            <h2 className="subheading">Selection</h2>
        </div>)
}
export default Selection;