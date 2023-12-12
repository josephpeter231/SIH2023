import React from "react";
import styles from "./Luxury.module.css";
import {Link} from 'react-router-dom';
const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h2>Vehicle Selection</h2>
        <div className={styles.text_bg}>
          <p>
            <span>Select  the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>

      {/*container for cards */}
      <div className={styles.container}>
    
              
        <div className={styles.card}>
        <Link to="/Dashboard">
          <img
            src="https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
           </Link>
          
          <div className={styles.content}>
            
            <h3>Fueled Vehicles</h3>
          </div>
        </div>
       

        <div className={styles.card}>
        <Link to="/Dashboard">
          <img
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmdlJTIwcm92ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          </Link>
          <div className={styles.content}>
            <h3>Electric Vehicles</h3>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default Luxury;
