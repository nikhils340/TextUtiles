// import React ,{useState} from 'react'   //things that is to be imported is written in commas
// //useState is the type of the Hook there are another types of the Hooks
// export default function TextForm(props) {    
//   //BACKEND TYPE CODE
//     const handleUpClick=()=>{
//         console.log("Uppercase Was Clicked"+text);
//         let newText=text.toUpperCase();
//         setText(newText);  //for getting the modified text
//         props.showAlert("Converted to uppercase!", "success");
//     }
//     const handleLoClick=()=>{
//         console.log("Uppercase Was Clicked"+text);
//         let newText=text.toLowerCase();
//         setText(newText);
//         props.showAlert("Converted to lowercase!", "success");
//     }  
//     const handleclearClick=()=>{
//         // console.log("Uppercase Was Clicked"+text);
//         let newText='';
//         setText(newText);
//         props.showAlert("Text Cleared!", "success");
//     } 
//     const handleExtraSpaces=()=>{
//       let newText=text.split(/[ ]+/);
//       setText(newText.join(" "));
//       props.showAlert("Extra spaces removed!", "success");
//     }
//     const handleCopy=()=>{
//       console.log('I am copy');
//       var text=document.getElementById("myBox");
//       text.select();
//       navigator.clipboard.writeText(text.value);
//       document.getSelection().removeAllRanges();// for resolving the issue when we copy the text it gets the selected 
//       props.showAlert("Copied to Clipboard!", "success");
//     }
//     const handlereverseClick=()=>{
//         // console.log("Uppercase Was Clicked"+text);
//         let newText=text.split(" ");
//         newText=newText.reverse();
//         newText=newText.join(" ");
//         newText=newText.replace(","," ");
//         setText(newText);
//         props.showAlert("Text Entered is Reversed","success");
//     }
//     //require every time in program for resolving the error in console
//     const handleOnChange=(event)=>{  //event created when useState following statement is written
//         console.log("On Change");
//         setText(event.target.value);
//     } 
//     //text is name of the variable
//     //setText is the function used for setting or changing the value in the text
//   const [text,setText] =useState('');  //it creates an event automatically //from documentation
// //   text = "new text";    //wrong way to change state
// // we can change the state form only through the use of setText 
// //   setText("new Text");//correct way to change the state
//   return (
//     <>
//     <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
//         <h1 className='mb-4'>{props.heading}</h1>
//         <div className="mb-3">    {/* mb-3 is the class in the bootstrap automatically change the style*/}
//           <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
//           color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear Text</button>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlereverseClick}>Reverse String</button>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
//           <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//     </div>
//     <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>  {/* my-2 is for giving the padding for larger use my-3 --gives the more padding*/}
//       <h2>Your Text Summary</h2>
//       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
//       <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read Time</p>
//       <p>PREVIEW</p>
//       <p>{text.length>0?text:"Nothing to preview"}</p>
//     </div>
//     </>
//   )
// }
// //filter method id used here which initializes the array completely empty which solves the issue of the count of words
// //if return chi value true rahnar tar filter function will execute


import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}