import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <>
      <div className="fixed-button1">
        <button>
          <Link to="https://wa.me/7851876946"> 7851876946</Link>
        </button>
      </div>
      <div className="fixed-button2">
        <button>
        <Link to="mailto:business@kotiboxglobaltech.com">E-mail</Link>
        </button>
      </div>
      <div className="fixed-button3">
        <button>
          <Link to="tel:7851876946"> 7851876946</Link>
        </button>
      </div>

    </>
  );
}
