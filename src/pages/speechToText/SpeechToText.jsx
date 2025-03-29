import { useState } from "react";
import styles from "../speechToText/speechToText.module.css";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function SpeechToText() {
    const [language, setLanguage] = useState("en-IN"); // Default to English (India)
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const handlePlayBtn = () => {
        SpeechRecognition.startListening({ continuous: true, language });
    };

    const handlePauseBtn = () => {
        SpeechRecognition.stopListening();
    };

    const handleResetBtn = () => {
        resetTranscript();
        SpeechRecognition.stopListening();
    };

    return (
        <div className={styles.main}>
            <h1>Speech to Text Converter</h1>
            
            {/* Language Selection Dropdown */}
            <select className={styles.languageSelect} value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en-IN">English (India)</option>
                <option value="en-US">English (US)</option>
                <option value="hi-IN">Hindi (India)</option>
                <option value="fr-FR">French</option>
                <option value="es-ES">Spanish</option>
                <option value="de-DE">German</option>
            </select>

            <div className={styles.textOutputBox}>{transcript || "Start speaking..."}</div>
            
            <div className={styles.speechControll}>
                <div className={styles.playNpause}>
                    {!listening ? (
                        <svg onClick={handlePlayBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                    ) : (
                        <svg onClick={handlePauseBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" /></svg>
                    )}
                </div>
                <div className={styles.resetBtn}>
                <svg onClick={handleResetBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" /></svg>
                </div>
            </div>

            <button className={styles.copyBtn} onClick={() => navigator.clipboard.writeText(transcript)}>
                Copy to Clipboard
            </button>
        </div>
    );
}

export default SpeechToText;
