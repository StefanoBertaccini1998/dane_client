// src/components/ProgressBar.tsx
import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  value: number;
  max: number;
  color: string;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, color, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar-label">{label}</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="progress-bar-text">{`${value} / ${max}`}</div>
    </div>
  );
}

export default ProgressBar;
