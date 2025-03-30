// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/homePage/Home.jsx";
import TextToBraille from "./pages/textToBraille/TextToBraille.jsx";

import SpeechToText from "./pages/speechToText/SpeechToText.jsx";
import TextToSpeech from "./pages/textToSpeech/TextToSpeech.jsx";
import TextToSign from "./pages/textToSign/TextToSign.jsx";
import Login from "./pages/loginPage/Login.jsx";
import Register from "./pages/registerPage/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Change the parent route to /home */}
      <Route path="/home" element={<Home />}>
        {/* Nested routes under /home */}
        <Route index element={<h1>Welcome to Talk Assist</h1>} />
        <Route path="textToBraille" element={<TextToBraille />} />
        
        <Route path="speechToText" element={<SpeechToText />} />
        <Route path="textToSpeech" element={<TextToSpeech />} />
        <Route path="textToSign" element={<TextToSign />} />
      </Route>
      {/* Optionally, redirect unknown routes */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;