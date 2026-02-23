import React from 'react';
import { BsPencil } from 'react-icons/bs';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="aside-container ms-3">
      
      {/* 1. CARD LINGUA E URL */}
      <div className="card shadow-none border-1 mb-2" style={{ borderRadius: '10px' }}>
        <div className="card-body p-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Lingua del profilo</div>
              <div className="text-secondary" style={{ fontSize: '14px' }}>Italiano</div>
            </div>
            {/* Aggiunto mt-1 per allinearla a quella sotto */}
            <BsPencil className="flex-shrink-0 pencil-icon mt-1" />
          </div>

          <hr className="my-3 opacity-25" />

          <div className="d-flex justify-content-between align-items-start">
            <div className="pe-2">
              <div className="fw-bold text-dark mb-0" style={{ fontSize: '16px' }}>Profilo pubblico e URL</div>
              <div className="text-secondary text-break" style={{ fontSize: '14px', lineHeight: '1.2' }}>
                www.linkedin.com/in/mario-rossi-363b47250
              </div>
            </div>
            <BsPencil className="flex-shrink-0 pencil-icon mt-1" />
          </div>
        </div>
      </div>

      {/* 2. CARD PUBBLICITÀ LEARNING */}
      <div className="card shadow-none border-1 overflow-hidden" style={{ borderRadius: '10px' }}>
        <img 
          src="https://media.licdn.com/media/AAYAAQTPAAgAAQAAAAAAADBJg6kiYYJxTUOBq1MuLPcNcQ.png" 
          className="card-img-top" 
          alt="LinkedIn Learning" 
        />
      </div>


    </aside>
  );
};

export default Aside;