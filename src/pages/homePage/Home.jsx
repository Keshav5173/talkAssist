// Home.jsx
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../homePage/home.module.css";

function Home() {
  const [viewHamBurger, setViewHamBurger] = useState(false);
  const [activePage, setActivePage] =useState("Home")
  const handleHamBurgerBtn = () => {
    setViewHamBurger(!viewHamBurger);
  };

  const changePage=()=>{
    setViewHamBurger(false);
  }
  

  return (
    <div className={styles.main}>
      {/* NAVBAR */}
      <div className={styles.nav}>
        <h2>Talk Assist</h2>
        {!viewHamBurger && (
          <svg
            className={styles.hamBurgerBtn}
            onClick={handleHamBurgerBtn}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
        {viewHamBurger && (
          <svg
            onClick={() => setViewHamBurger(!viewHamBurger)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        )}
      </div>

      {/* HAMBURGER MENU */}
      {viewHamBurger && (
        <div className={styles.aboutOption}>
          <Link onClick={changePage} to="/"><p>Home</p></Link>
          <Link onClick={changePage} to="textToBraille"><p>Text to Braille</p></Link>
          <Link onClick={changePage} to="brailleToText"><p>Braille to Text</p></Link>
          <Link onClick={changePage} to="speechToText"><p>Speech to Text</p></Link>
          <Link onClick={changePage} to="textToSpeech"><p>Text to Speech</p></Link>
          <Link onClick={changePage} to="textToSign"><p>Text to Sign</p></Link>
        </div>
      )}

      {/* HERO SECTION: Render nested routes here */}
      <div className={styles.hero}>
      
        <Outlet />
      </div>
    </div>
  );
}

export default Home;