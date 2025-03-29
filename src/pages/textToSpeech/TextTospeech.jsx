import { useState } from "react";
import styles from "../textToSpeech/textToSpeech.module.css"
import {useSpeechSynthesis} from 'react-speech-kit';

function TextToSpeech(){
    const {speak, voices}=useSpeechSynthesis();
    const [inputText, setInputText]=useState("");
    const [voiceIndex, setVoiceIndex]=useState(null);
    const [rate, setRate] = useState(0.1);

    const handleSpeak=()=>{
        speak({text:inputText, rate: rate, voice:voices[voiceIndex]});
        console.log(voices[voiceIndex]);
        console.log(inputText);
    }
    const handleInputText=(e)=>{
        setInputText(e.target.value);

    }
    return(
        <div className={styles.main}>
            <h1>Text to speech Converter</h1>
            <textarea className={styles.textInputBox} rows='5' cols='50' placeholder="Enter Some Text here" onChange={(e)=>handleInputText(e)} />
                <select className={styles.multipleLanguages} value={voiceIndex || ""} onChange={(e)=>setVoiceIndex(e.target.value)}>
                    <option value="">Default</option>
                    {voices.map((voice,index)=>(
                        <option key={voice.name} value={index}>{voice.name}</option>
                    ))}
                </select>
            <button onClick={handleSpeak} className={styles.finalBtn}>Speak</button>
                <br /><br />
                <input type="range" min="0.1" max="5" step="0.01"  onChange={(e)=>setRate(e.target.value)}/>
                <h2>current Speech Rate: {rate}</h2>
        </div>

    )
}
export default TextToSpeech