import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const slides = [];
    return (
        <div>
            <h1>hello </h1>
            <ImageSlider slides={slides} />
        </div>
    );
}

export default App;
