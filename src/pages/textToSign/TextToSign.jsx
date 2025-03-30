import styles from "../textToSign/textToSign.module.css";
import { useState } from "react";

// Importing ASL Images
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

// Importing BSL Images
import bsl_a from "../../assets/BSL_database/bsl_a.png";
import bsl_b from "../../assets/BSL_database/bsl_b.png";
import bsl_c from "../../assets/BSL_database/bsl_c.jpeg";
import bsl_d from "../../assets/BSL_database/bsl_d.png";
import bsl_e from "../../assets/BSL_database/bsl_e.png";
import bsl_f from "../../assets/BSL_database/bsl_f.png";
import bsl_g from "../../assets/BSL_database/bsl_g.jpeg";
import bsl_h from "../../assets/BSL_database/bsl_h.jpeg";
import bsl_i from "../../assets/BSL_database/bsl_i.png";
import bsl_j from "../../assets/BSL_database/bsl_j.png";
import bsl_k from "../../assets/BSL_database/bsl_k.png";
import bsl_l from "../../assets/BSL_database/bsl_l.jpeg";
import bsl_m from "../../assets/BSL_database/bsl_m.jpeg";
import bsl_n from "../../assets/BSL_database/bsl_n.jpeg";
import bsl_o from "../../assets/BSL_database/bsl_o.png";
import bsl_p from "../../assets/BSL_database/bsl_p.png";
import bsl_q from "../../assets/BSL_database/bsl_q.png";
import bsl_r from "../../assets/BSL_database/bsl_r.png";
import bsl_s from "../../assets/BSL_database/bsl_s.jpeg";
import bsl_t from "../../assets/BSL_database/bsl_t.png";
import bsl_u from "../../assets/BSL_database/bsl_u.png";
import bsl_v from "../../assets/BSL_database/bsl_v.jpeg";
import bsl_w from "../../assets/BSL_database/bsl_w.jpeg";
import bsl_x from "../../assets/BSL_database/bsl_x.png";
import bsl_y from "../../assets/BSL_database/bsl_y.png";
import bsl_z from "../../assets/BSL_database/bsl_z.png";

function TextToSign() {
  const [inputText, setInputText] = useState("");
  const [outputWords, setOutputWords] = useState([]);
  const [signType, setSignType] = useState("ASL"); // Track sign language type

  // Mapping ASL Letters
  const ASLLetterToImage = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z };

  // Mapping BSL Letters (Fixed Keys)
  const BSLLetterToImage = {
    a: bsl_a, b: bsl_b, c: bsl_c, d: bsl_d, e: bsl_e, f: bsl_f, g: bsl_g, h: bsl_h, i: bsl_i, j: bsl_j, 
    k: bsl_k, l: bsl_l, m: bsl_m, n: bsl_n, o: bsl_o, p: bsl_p, q: bsl_q, r: bsl_r, s: bsl_s, t: bsl_t, 
    u: bsl_u, v: bsl_v, w: bsl_w, x: bsl_x, y: bsl_y, z: bsl_z
  };

  const ConvertToSign = (type) => {
    setSignType(type); // Update sign type

    const words = inputText.toLowerCase().split(" ");
    const letterToImage = type === "ASL" ? ASLLetterToImage : BSLLetterToImage;

    const wordImages = words.map((word) => ({
      word,
      images: word
        .split("")
        .map((char) => letterToImage[char])
        .filter((img) => img),
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
        <div className={styles.choice}>
          <button onClick={() => ConvertToSign("ASL")} className={styles.finalBtn}>Convert to ASL</button>
        <button onClick={() => ConvertToSign("BSL")} className={styles.finalBtn}>Convert to BSL</button>
        </div>
        <div className={styles.output}>
          {outputWords.map((wordObj, index) => (
            <div key={index} className={styles.wordContainer}>
              <h3 className={styles.wordTitle}>{wordObj.word}</h3>
              <div className={styles.signGroup}>
                {wordObj.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={img} 
                    alt={signType === "ASL" ? "ASL Sign" : "BSL Sign"} 
                    className={styles.signImage} 
                  />
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