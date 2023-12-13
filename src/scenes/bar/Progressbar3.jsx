import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cnt = 0;

    const intervalId = setInterval(() => {
      cnt += 1;
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress <= 60 ? newProgress : prevProgress;
      });

      if (cnt >= 100) clearInterval(intervalId);
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Determine the color based on the progress percentage
  let barColor;
  if (progress <= 40) {
    barColor = 'rgb(255, 30, 30)'; // Red
  } else if (progress <= 70) {
    barColor = 'rgb(255, 165, 0)'; // Orange
  } else {
    barColor = 'rgb(0, 128, 0)'; // Green
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', backgroundColor: 'rgb(214, 207, 207)', height: '15px', borderRadius: '10px', padding: '2px', marginTop: '10px', marginLeft: '55px' }}>
        <div style={{ height: '85%', backgroundColor: barColor, width: `${progress}%`, borderRadius: '10px', transition: 'all 0.5s', marginTop: '1px' }}> </div>
      </div>
      {/* <div style={{ color: 'white'}}>
      <p>{progress}%</p>
      </div> */}
    </div>


  );
};

export default ProgressBar;
