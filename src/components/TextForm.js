import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setext] = useState('')
    const handleUpClick = () => {
        // console.log("Changed To uppercase", text);
        let newtext = text.toUpperCase();
        setext(newtext);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handlelowClick = () => {
        // console.log("Changed To uppercase", text);
        let newtext = text.toLowerCase();
        setext(newtext);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClear = () => {
        let newtext = '';
        setext(newtext);
        props.showAlert("Cleared Everything", "success")
    }

    const handlespaces = () => {
        let newtext = text.split(/[ ]+/);
        setext(newtext.join(" "))
        props.showAlert("Handle Spaces", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText = text;
        props.showAlert("Copied to clipboard", "success")
    }
    // const capitalize = () =>{
    //     let CapitalizeWords = text[0].toUpperCase();  
    //     for (let i = 1; i <= text.length - 1; i++) {  
    //         let currentCharacter,  previousCharacter = text[i - 1];  
    //         if ( previousCharacter && previousCharacter === ' ') {  
    //             currentCharacter = text[i].toUpperCase();  
    //         } else {  
    //             currentCharacter = text[i];  
    //         }  
    //         CapitalizeWords = CapitalizeWords + currentCharacter;  
    //     }  
    //     setext(CapitalizeWords);
    // }
    const handleonChange = (event) => {
        // console.log("OnChange function running");
        setext(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-info mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-success mx-3" onClick={handlelowClick}>Convert To LowerCase</button>
                <button className="btn btn-secondary mx-3" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-3" onClick={handlespaces}>Space Handle</button>
                {/* <button className="btn btn-danger mx-3" onClick={capitalize}>Capitalise</button> */}
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary here</h2>
                <p>
                    {text.length === 0 ? 0 : text.trim().split(" ").length}words & {text.length}characters</p>
                <p>
                    <b>{(text.length === 0 ? 0 : text.trim().split(" ").length) * 0.008}minutes taken</b>
                </p>
                <h2>Preview:</h2>
                <p>
                    {text.length > 0 ? text : "Enter something to preview"}
                </p>
            </div>
        </>
    )
}
