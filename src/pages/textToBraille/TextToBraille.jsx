import { useState } from "react"
import styles from "../textToBraille/textToBraille.module.css"

function TextToBraille(){
    const [textInput, setTextInput]=useState("");
    const [brailleOutput, setBrailleOutput]=useState("Braille Output");
    const [message, setMessage]=useState("");
    const [copyMessage, setCopyMessage]= useState("");

    const braille={
        a: "⠁",
        b: "⠃",
        c: "⠉",
        d: "⠙",
        e: "⠑",
        f: "⠋",
        g: "⠛",
        h: "⠓",
        i: "⠊",
        j: "⠚",
        k: "⠅",
        l: "⠇",
        m: "⠍",
        n: "⠝",
        o: "⠕",
        p: "⠏",
        q: "⠟",
        r: "⠗",
        s: "⠎",
        t: "⠞",
        u: "⠥",
        v: "⠧",
        w: "⠺",
        x: "⠭",
        y: "⠽",
        z: "⠵",
    }
    const manageTextInput = (e) => {
        let inputText = e.target.value.toLowerCase(); 
        let brailleText = "";
        let invalidChars = false;

        for (let char of inputText) {
            if (char === " ") {
                brailleText += " "; 
            } else if (braille[char]) {
                brailleText += braille[char]; 
            } else {
                invalidChars = true; 
            }
        }

        setTextInput(inputText.replace(/[^a-z ]/g, "")); 
        setBrailleOutput(brailleText || "Braille Output"); 
        setMessage(invalidChars ? "Numbers, puncuations and contratictions are not currently available" : "");
    };

    const handleCopyBtn=()=>{
        if (brailleOutput !== "Braille Output" && brailleOutput.trim() !== "") {
            navigator.clipboard.writeText(brailleOutput).then(() => {
                setCopyMessage("Copied to clipboard!");
                setTimeout(() => setCopyMessage(""), 2000); 
            }).catch(() => {
                setCopyMessage("Failed to copy.");
            });
        }
    }

    return(
        <div className={styles.main}>
            <h1 className={styles.title}>Text to Braille Converter</h1>
            <input className={styles.inputBox} onChange={(e)=>manageTextInput(e)} type="text" placeholder="Enter Text" />
            <h5 className={styles.errorMessage}>{message}</h5>
            <div className={styles.outputBox}><h4>{brailleOutput}</h4></div>
            <button className={styles.copyBtn} onClick={handleCopyBtn}>Copy to Clipboard</button>
            <h5 className={styles.copyMessage}>{copyMessage}</h5>
        </div>

    )
}
export default TextToBraille