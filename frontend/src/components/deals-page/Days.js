import React from 'react';
import DealsData from './DealsData'
import styles from "./deals-page.module.css";

const Days = ( {dayIndex} ) => {
return (
    <div>
    {DealsData[dayIndex].map(item => (
        <div className='days'>
            {item.AllDay && (<h1 className={styles.timeSlot}>
                {item.AllDay && (<p1>All Day</p1>)}
                {item.AllDay && (<p1 className={styles.deal}>{item.AllDay['WelchAve']}</p1>)}
                {item.AllDay && (<p1 className={styles.deal}>{item.AllDay['Paddys']}</p1>)}
                {item.AllDay && (<p1 className={styles.deal}>{item.AllDay['BlueOwl']}</p1>)}
                {item.AllDay && (<p1 className={styles.deal}>{item.AllDay['AJs']}</p1>)}
            </h1>)}
            {item.Four && (<h1 className={styles.timeSlot}>
               {item.Four && (<p1>4pm-5pm</p1>)}
               {item.Four && (<p1 className={styles.deal}>{item.Four['WelchAve']}</p1>)}
               {item.Four && (<p1 className={styles.deal}>{item.Four['Paddys']}</p1>)}
               {item.Four && (<p1 className={styles.deal}>{item.Four['BlueOwl']}</p1>)}
               {item.Four && (<p1 className={styles.deal}>{item.Four['AJs']}</p1>)}
           </h1>)}
           {item.Five && (<h1 className={styles.timeSlot}>
              {item.Five && (<p1>5pm-6pm</p1>)}
              {item.Five && (<p1 className={styles.deal}>{item.Five['WelchAve']}</p1>)}
              {item.Five && (<p1 className={styles.deal}>{item.Five['Paddys']}</p1>)}
              {item.Five && (<p1 className={styles.deal}>{item.Five['BlueOwl']}</p1>)}
              {item.Five && (<p1 className={styles.deal}>{item.Five['AJs']}</p1>)}
           </h1>)}
           {item.Six && (<h1 className={styles.timeSlot}>
              {item.Six && (<p1>6pm-7pm</p1>)}
              {item.Six && (<p1 className={styles.deal}>{item.Six['WelchAve']}</p1>)}
              {item.Six && (<p1 className={styles.deal}>{item.Six['Paddys']}</p1>)}
              {item.Six && (<p1 className={styles.deal}>{item.Six['BlueOwl']}</p1>)}
              {item.Six && (<p1 className={styles.deal}>{item.Six['AJs']}</p1>)}
           </h1>)}
           {item.Seven && (<h1 className={styles.timeSlot}>
              {item.Seven && (<p1>7pm-8pm</p1>)}
              {item.Seven && (<p1 className={styles.deal}>{item.Seven['WelchAve']}</p1>)}
              {item.Seven && (<p1 className={styles.deal}>{item.Seven['Paddys']}</p1>)}
              {item.Seven && (<p1 className={styles.deal}>{item.Seven['BlueOwl']}</p1>)}
              {item.Seven && (<p1 className={styles.deal}>{item.Seven['AJs']}</p1>)}
           </h1>)}
           {item.Eight && (<h1 className={styles.timeSlot}>
              {item.Eight && (<p1>8pm-9pm</p1>)}
              {item.Eight && (<p1 className={styles.deal}>{item.Eight['WelchAve']}</p1>)}
              {item.Eight && (<p1 className={styles.deal}>{item.Eight['Paddys']}</p1>)}
              {item.Eight && (<p1 className={styles.deal}>{item.Eight['BlueOwl']}</p1>)}
              {item.Eight && (<p1 className={styles.deal}>{item.Eight['AJs']}</p1>)}
           </h1>)}
           {item.Nine && (<h1 className={styles.timeSlot}>
             {item.Nine && (<p1>9pm-10pm</p1>)}
             {item.Nine && (<p1 className={styles.deal}>{item.Nine['WelchAve']}</p1>)}
             {item.Nine && (<p1 className={styles.deal}>{item.Nine['Paddys']}</p1>)}
             {item.Nine && (<p1 className={styles.deal}>{item.Nine['BlueOwl']}</p1>)}
             {item.Nine && (<p1 className={styles.deal}>{item.Nine['AJs']}</p1>)}
           </h1>)}
           {item.Ten && (<h1 className={styles.timeSlot}>
             {item.Ten && (<p1>10pm-11pm</p1>)}
             {item.Ten && (<p1 className={styles.deal}>{item.Ten['WelchAve']}</p1>)}
             {item.Ten && (<p1 className={styles.deal}>{item.Ten['Paddys']}</p1>)}
             {item.Ten && (<p1 className={styles.deal}>{item.Ten['BlueOwl']}</p1>)}
             {item.Ten && (<p1 className={styles.deal}>{item.Ten['AJs']}</p1>)}
           </h1>)}
           {item.Eleven && (<h1 className={styles.timeSlot}>
             {item.Eleven && (<p1>11pm-12pm</p1>)}
             {item.Eleven && (<p1 className={styles.deal}>{item.Eleven['WelchAve']}</p1>)}
             {item.Eleven && (<p1 className={styles.deal}>{item.Eleven['Paddys']}</p1>)}
             {item.Eleven && (<p1 className={styles.deal}>{item.Eleven['BlueOwl']}</p1>)}
             {item.Eleven && (<p1 className={styles.deal}>{item.Eleven['AJs']}</p1>)}
           </h1>)}
           {item.Midnight && (<h1 className={styles.timeSlot}>
             {item.Midnight && (<p1>Midnight-Close</p1>)}
             {item.Midnight && (<p1 className={styles.deal}>{item.Midnight['WelchAve']}</p1>)}
             {item.Midnight && (<p1 className={styles.deal}>{item.Midnight['Paddys']}</p1>)}
             {item.Midnight && (<p1 className={styles.deal}>{item.Midnight['BlueOwl']}</p1>)}
             {item.Midnight && (<p1 className={styles.deal}>{item.Midnight['AJs']}</p1>)}
           </h1>)} 
        </div>
    ))}    
    </div>
);
}

export default Days;