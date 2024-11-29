import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "primary")
}
const handleLoClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
}
const handleOnChange = (event) => {        
    setText(event.target.value)
}
const [text, setText] = useState('');
  return (
    <>
    <div className='container pt-5' style={{color: props.mode==='dark'?'white':'black'}}>      
        <div className="my-3">
            <h2>{props.heading}</h2>            
            <textarea className="form-control" id="myBoxx" placeholder='Enter Your Text Here....' onChange={handleOnChange} rows="6" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} value={text}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
        <button className='btn btn-primary ms-2' onClick={handleLoClick}>Convert To Lowercase</button>
    </div>
    <div className='container mt-4' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summery</h2>
      <p>{ text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.length} Characters | { 0.008 * text.split(" ").length } Minuts to read </p>
      <p>{text.trim().length } characters</p>      
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something text above to preview here"}</p>
    </div>
    </>
  )
}
