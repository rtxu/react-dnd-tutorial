import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Borad';
import { observe } from './Game';
import './index.css';

// ========================================

const root = document.getElementById('root');
observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root),
)
