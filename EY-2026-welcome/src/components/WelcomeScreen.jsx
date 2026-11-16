import React from 'react';
import Confetti from './Confetti';
import '../styles/welcome.css';

export default function WelcomeScreen() {
  return (
    <div className="welcome-container">
      <Confetti count={90} />
      <div className="welcome-content">
        <span className="welcome-tag">Conference 2026</span>
        <h1 className="welcome-title">Welcome to EY 2026</h1>
        <p className="welcome-subtitle">Powered by IBM Bob</p>
      </div>
    </div>
  );
}
