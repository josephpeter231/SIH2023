import React from 'react';
import './Car.css';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';


const Car = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    
  ];

  const tooltipData = [
    { index: 1, text: 'Front Right Tyre', color: 'color-green',value: 711.9 },
    { index: 4, text: 'Rear Right Tyre', color: 'color-yellow',value: 711.9 },
    { index: 5, text: 'Engine', color: 'color-red',value: 1396 },
    { index: 6, text: 'Transmission Gear Ratio', color: 'color-green',value: 0.55 },
    { index: 9, text: 'Front Left Tyre', color: 'color-yellow',value: 711.9 },
    { index: 10, text: 'Transmission Fuel Drive', color: 'color-red',value: 711.9 },
    { index: 12, text: 'Rear Left Tyre', color: 'color-red',value: 711.9 },
  ];


  const showTooltip = (index) => tooltipData.some((data) => data.index === index + 1);

  return (
    <div className="grid-container">
      {images.map((imageUrl, index) => (
        <div key={index} className="grid-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} className="grid-image" />
          {showTooltip(index) && (
            <div className="tooltip">
              <div className="tooltip-content">
                {tooltipData.find((data) => data.index === index + 1)?.text}
                <div className="value">{tooltipData.find((data) => data.index === index + 1)?.value}</div>
                <div className={`color-code ${tooltipData.find((data) => data.index === index + 1)?.color}`} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Car;
