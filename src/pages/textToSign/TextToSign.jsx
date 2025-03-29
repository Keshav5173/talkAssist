import styles from "../textToSign/textToSign.module.css";
import { useState } from "react";

// Importing Images
import a from "../../assets/ASLDatabase/image A.jpeg";
import b from "../../assets/ASLDatabase/image B.png";
import c from "../../assets/ASLDatabase/image C.png";
import d from "../../assets/ASLDatabase/image D.jpeg";
import e from "../../assets/ASLDatabase/image E.jpeg";
import f from "../../assets/ASLDatabase/image F.png";
import g from "../../assets/ASLDatabase/image G.png";
import h from "../../assets/ASLDatabase/image H.png";
import i from "../../assets/ASLDatabase/image I.png";
import j from "../../assets/ASLDatabase/image J.png";
import k from "../../assets/ASLDatabase/image K.png";
import l from "../../assets/ASLDatabase/image L.png";
import m from "../../assets/ASLDatabase/image M.png";
import n from "../../assets/ASLDatabase/image N.png";
import o from "../../assets/ASLDatabase/image O.png";
import p from "../../assets/ASLDatabase/image P.png";
import q from "../../assets/ASLDatabase/image Q.png";
import r from "../../assets/ASLDatabase/image R.png";
import s from "../../assets/ASLDatabase/image S.jpeg";
import t from "../../assets/ASLDatabase/image T.png";
import u from "../../assets/ASLDatabase/image U.png";
import v from "../../assets/ASLDatabase/image V.png";
import w from "../../assets/ASLDatabase/image W.png";
import x from "../../assets/ASLDatabase/image X.png";
import y from "../../assets/ASLDatabase/image Y.png";
import z from "../../assets/ASLDatabase/image Z.png";

function TextToSign() {
  const [inputText, setInputText] = useState("");
  const [outputWords, setOutputWords] = useState([]);

  // Map letters to images
  const letterToImage = {
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
  };

  const ConvertToSign = () => {
    const words = inputText.toLowerCase().split(" "); // Split input text into words
    const wordImages = words.map((word) => ({
      word,
      images: word
        .split("")
        .map((char) => letterToImage[char]) // Get image for each letter
        .filter((img) => img), // Remove undefined values
    }));
    setOutputWords(wordImages);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Text to Sign Language Converter</h1>
      <div className={styles.body}>
        <textarea
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          className={styles.inputBox}
          rows="5"
          cols="50"
          placeholder="Type your text here"
        ></textarea>
        <button onClick={ConvertToSign} className={styles.finalBtn}>Convert to ASL</button>
        <div className={styles.output}>
          {outputWords.map((wordObj, index) => (
            <div key={index} className={styles.wordContainer}>
              <h3 className={styles.wordTitle}>{wordObj.word}</h3>
              <div className={styles.signGroup}>
                {wordObj.images.map((img, imgIndex) => (
                  <img key={imgIndex} src={img} alt="ASL Sign" className={styles.signImage} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextToSign;