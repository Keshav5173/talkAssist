import React, { useState } from "react";
import styles from "./Login.module.css"; // Import CSS Module
import backImg from "../../assets/loginBackImage.jpg"
import { database } from "../../firebase/firebase"
import { Navigate, useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logingIn, setLogingIn]=useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLogingIn(true);
  
    const usersRef = ref(database, "User Data");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const usersArray = Object.keys(data).map((user) => ({
            email: data[user].email,
            password: data[user].password,
          }));
          const foundUser = usersArray.find(
            (user) => email === user.email && password === user.password
          );
  
          if (foundUser) {
            navigate("/home"); // Use navigate here
          } else {
            alert("Wrong email or password");
            setEmail("");
            setPassword("");
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  

  return (
    <div className={styles.body}>
        <img className={styles.img1} src={backImg} alt="" />
        <img className={styles.img1} src={backImg} alt="" />
        <img className={styles.img1} src={backImg} alt="" />
      <div className={styles.loginContainer}>
        <h2 className={styles.heading}>Login</h2>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Email</label>
          <input
          required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Password</label>
          <input
          required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <button className={styles.loginBtn} onClick={handleLogin}>
          {logingIn?"Login...":"Login"}
        </button>

        
      </div>
    </div>
  );
};

export default Login;
