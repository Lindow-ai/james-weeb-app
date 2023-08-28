import React from 'react';
import Frame from "@/app/assets/Frame";
import "./styles.css";
import Button from '../Button/Button';

const SuperCard = () => {

  const spacingValues = [
    0.80, 0.80, 0.80, 0.80, 0.80, 0.80,  // lignes 1 à 6
    1,                    // lignes 6 à 7
    1.20,                    // lignes 7 à 8
    1.30,                    // lignes 8 à 9
    1.40,                    // lignes 9 à 10
    1.60,                    // lignes 10 à 11
    1.85,                    // lignes 11 à 12
    1.95,                    // lignes 12 à 13
    2.05,                    // lignes 13 à 14
    2.40,                    // lignes 14 à 15
    2.60,                    // lignes 15 à 16
    3.30,                    // lignes 16 à 17
    3.90,                    // lignes 17 à 18
    4,                       // lignes 18 à 19
    4.80,                    // lignes 19 à 20
    5.30,                    // lignes 20 à 21
    6                    // lignes 21 à 22
  ];

  const verticalLines = spacingValues.map((spacing, index) => (
    <div
      key={index}
      className="vertical-line"
      style={{ marginLeft: `${spacing}vw` }}
    />
  ));


  return (
    <div className="super-card">
      <div className='super-card-container-title'>
        <h3>Our motto is to</h3>
        <h1>Push the boundaries of human knowledge</h1>
        <div className='super-card-subhead'>
          <h3 className='subtitle'>to the formation of the first galaxies and the horizons of other worlds</h3>
        </div>
      </div>
        <div className="super-card-container-line">
          {verticalLines}
        </div>
        <Button>Download options</Button>
    </div>
  );
};

export default SuperCard;