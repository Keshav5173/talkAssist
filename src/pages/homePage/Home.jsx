import styles from "../homePage/home.module.css"
import { useState } from "react";

import TextToBraille from "../textToBraille/TextToBraille"
import SpeechToText from "../speechToText/SpeechToText"
import TextToSpeech from "../textToSpeech/TextTospeech"
import TextToSign from "../textToSign/TextToSign"


function Home() {
    const [viewHamBurger, setViewHamBurger] = useState(false);
    const [activePage, setActivePage] = useState("Home");
  
    const handleHamBurgerBtn = () => {
      setViewHamBurger(!viewHamBurger);
    };
  
    // Function to change page
    const changePage = (page) => {
      setActivePage(page);
      setViewHamBurger(false); 
    };
  
    // Mapping pages to their components
    const pages = {
      Home: <h1>Welcome to Talk Assist</h1>,
      TextToBraille: <TextToBraille />,
      SpeechToText: <SpeechToText />,
      TextToSpeech: <TextToSpeech />,
      TextToSign: <TextToSign />
    };
  
    return (
      <div className={styles.main}>
        {/* NAVBAR */}
        <div className={styles.nav}>
          <h2>Talk Assist</h2>
          {!viewHamBurger && (<svg className={styles.hamBurgerBtn} onClick={handleHamBurgerBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>)}
          {viewHamBurger && (<svg onClick={()=>setViewHamBurger(!viewHamBurger)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>)}
        </div>
  
        {/* HAMBURGER MENU */}
        {viewHamBurger && (
          <div className={styles.aboutOption}>
            <p onClick={() => changePage("Home")}>Home</p>
            <p onClick={() => changePage("TextToBraille")}>Text to Braille</p>
            <p onClick={() => changePage("BrailleToText")}>Braille to Text</p>
            <p onClick={() => changePage("SpeechToText")}>Speech to Text</p>
            <p onClick={() => changePage("TextToSpeech")}>Text to Speech</p>
            <p onClick={() => changePage("TextToSign")}>Text to Sign</p>
          </div>
        )}
  
        {/* HERO SECTION - Displays the active page */}
        <div className={styles.hero}>
          {pages[activePage]}
        </div>
      </div>
    );
  }
export default Home
