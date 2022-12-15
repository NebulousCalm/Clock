import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaExpand } from "react-icons/fa";

function tick() {
  function fullScreen(e) {
    e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  const element = (
    <div>
      <h2>{new Date().toLocaleTimeString('en-US',{hour12:true,hour:"numeric",minute:"numeric",second:"numeric"}).replace("pm", "woah")}</h2>
      <FaExpand onClick={fullScreen} className="expand" />
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);