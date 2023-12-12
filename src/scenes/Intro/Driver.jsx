import React from 'react'
import styles from "./Driver.module.css";
import { Link } from 'react-router-dom';
import Drive from "./drive.png";

const Driver = () => {
  return (
    <div className={styles.driver}>
        {/* containers grid */}
        <div className={styles.left}>
            <img src={Drive} alt='/'/>
        </div>

        <div className={styles.right}>
            <h2>Navigate the Future Uncover Insights with Precision in <span>Our Vehicle Analytics Hub</span></h2>
            <p>Make sure your future wheel work well with your lifestyle by taking your time in te driver's seat.</p>
            <Link to="/vehicletype">
              <button>Browse Cars</button>
            </Link>
        </div>
    </div>
  )
}

export default Driver