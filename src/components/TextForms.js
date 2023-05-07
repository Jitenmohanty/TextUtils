import React,{useState} from "react";
//Use state use to create state variable.
export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    
    const handleLoClick = () => {
        // console.log("UpperCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
       
        // console.log("on Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here ');

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>

      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minute to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
