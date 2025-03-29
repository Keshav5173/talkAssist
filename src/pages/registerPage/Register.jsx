import React, { useState } from "react";
import styles from "./Register.module.css"; 
import backImg from "../../assets/loginBackImage.jpg"
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get } from "firebase/database";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dissability, setDissability] = useState("")
  const navigate = useNavigate();


  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const db = getDatabase();
      const userRef = ref(db, "User Data");
      const snapshot = await get(userRef);
      const userCount = snapshot.exists() ? Object.keys(snapshot.val()).length + 1 : 1;

      await set(ref(db, `User Data/user_${userCount}`), {
        email: email,
        password: password, 
        Dissability:dissability,
      });
      navigate("/home");
      
    } catch (error) {
      console.error("Error registering:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className={styles.body}>
      <img className={styles.img1} src={backImg} alt="" />
      <img className={styles.img2} src={backImg} alt="" />
      <img className={styles.img3} src={backImg} alt="" />
      <div className={styles.registerContainer}>
        <h2 className={styles.heading}>Register</h2>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Create Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.options}>
          <select onChange={(e)=>setDissability(e.target.value)}>
            <option value="">Select Disability</option>
            <option value="deaf">Deaf</option>
            <option value="mute">Mute</option>
            <option value="deaf_and_mute">Deaf and Mute</option>
          </select>
        </div>
        <button className={styles.submitBtn} onClick={handleRegister}>
          Sign up
        </button>
        <div className={styles.paragraph}>
            <p>Already have an account? <button onClick={() => navigate("/login")} className={styles.login}>Login</button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
