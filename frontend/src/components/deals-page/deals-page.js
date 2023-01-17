import React, { useState } from "react";
import styles from "./deals-page.module.css";
import Days from "./Days";
import BlueOwlDemo from "./images/Blue-Owl-Demo.png";
import AJSDemo from "./images/AJS-Demo.png";
import Paddys from "./images/Paddy-Demo.png";
import WelchAve from "./images/Welch-Ave-Demo.png";

export default function DealsPage () {

  const [active, setActive] = useState('PageLoad');

  return (

    <div>

    {/* Displays the placholders for the payed promotions */}
    <div>
      <h1 className={styles.headers1}>Promotions</h1>
      <a href="/BlueOwlBarPage">
        <img className={styles.images} src={BlueOwlDemo} alt="Blue Owl Advertisement"/>
      </a>
      <a href="/AjsPage">
        <img className={styles.images} src={AJSDemo} alt="AJs Ultralounge Advertisement" />
      </a>
      <a href="/PaddysPage">
        <img className={styles.images} src={Paddys} alt="Paddy's Irish Pub Advertisement"/>
      </a>
      <a href="/WelchAveStationPage">
        <img className={styles.images} src={WelchAve} alt="Welch Ave Station Advertisement"/>
      </a>
    </div>

    <h2></h2> {/* Space buffer */} 
    
    <a className={styles.advertiseRequest} href="/ContactPage">
      <p1>Want to advertise here?</p1>
    </a>

    <h2></h2> {/* Space buffer */}

    {/* The buttons for selecting a day */}
    <nav className={styles.daysSelection}>
      <h2 className={styles.headers2}>Daily Deals</h2>
      <button className={styles.daysButton} onClick={() => setActive("Sunday")}>Sunday</button>
      <button className={styles.daysButton} onClick={() => setActive("Monday")}>Monday</button>
      <button className={styles.daysButton} onClick={() => setActive("Tuesday")}>Tuesday</button>
      <button className={styles.daysButton} onClick={() => setActive("Wednesday")}>Wednesday</button>
      <button className={styles.daysButton} onClick={() => setActive("Thursday")}>Thursday</button>
      <button className={styles.daysButton} onClick={() => setActive("Friday")}>Friday</button>
      <button className={styles.daysButton} onClick={() => setActive("Saturday")}>Saturday</button>
    </nav>
    
    <h3></h3> {/* Space buffer */}

    {/* Displays the data from the buttons */}
    <div className={styles.daysSelection}>
      {active === 'Sunday' && <Days dayIndex={0}/>}
      {active === 'Monday' && <Days dayIndex={1}/>}
      {active === 'Tuesday' && <Days dayIndex={2}/>}
      {active === 'Wednesday' && <Days dayIndex={3}/>}
      {active === 'Thursday' && <Days dayIndex={4}/>}
      {active === 'Friday' && <Days dayIndex={5}/>}
      {active === 'Saturday' && <Days dayIndex={6}/>}
      {active === 'PageLoad' && <Days dayIndex={7}/>}
    </div>

    <h1></h1> {/* Space buffer */}

  </div>
);

}


