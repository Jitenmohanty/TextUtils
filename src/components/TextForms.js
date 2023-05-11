import React,{useState} from "react";
//Use state use to create state variable.
export default function TextForms(props) {
  const [text,setText] = useState('');
  const handleUpClick = () => {
    // console.log("UpperCase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase Sucessfully","success");
  }
  
  // const [copySuccess, setCopySuccess] = useState(null);
  const copyClick = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      props.showAlert("Copied! to ClipBoard","success");
      
      //  setText('Copied!');
    } 
    catch (err) {
      setText('Failed to copy!');
    }
  };
  
  
  const clearClick = () => {
    // console.log("UpperCase was clicked"+text);
    let newText='';
    setText(newText);
    props.showAlert("All Clear","success");
  }
  
  const removeExtraSpace = () => {
    // console.log("UpperCase was clicked"+text);
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Space removed","success");
}
    
    const handleLoClick = () => {
        // console.log("UpperCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase Sucessfully","success");
    }

    const handleOnChange = (event) => {
       
        // console.log("on Change");
        setText(event.target.value);
    }

  return (
    <>
    <div style={{color:props.mode  === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className=" container my-3" >
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} ></textarea>

      </div>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-secondary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={clearClick}>Clear all</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={removeExtraSpace}>removeExtraSpace</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={(e) => copyClick(text)}>Copy to Clipboard</button> 
   
    </div>
    
    
    <div className="container my-3" style={{color:props.mode  === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minute to read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above text box to Preview It"}</p>
    </div>
    </>
  );
}
