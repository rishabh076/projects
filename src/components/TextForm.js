import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" +  text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        // console.log("UpperCase was clicked" +  text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clear = ()=>{
      // console.log("UpperCase was clicked" +  text);
      let newText='';
      setText(newText);
  }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }




  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
       <h1>{props.heading} </h1>
      
      <div className="mb-3">
         <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>

    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}
