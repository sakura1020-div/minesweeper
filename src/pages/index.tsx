import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const getNumber = () => {
    const mp: number[] = [];
    mp.length = 0;
    const random1 = Math.floor(Math.random() * 9);
    // const random2 = Math.floor(Math.random() * 9);
    console.log(random1);
    // console.log(random2);
    mp.push(random1);
    // mp.push(random2);
    // console.log(mp);
    return mp;
  };
  const getNumbering = () => {
    const mp: number[] = [];
    mp.length = 0;
    const random2 = Math.floor(Math.random() * 9);
    // const random2 = Math.floor(Math.random() * 9);
    console.log(random2);
    // console.log(random2);
    mp.push(random2);
    // mp.push(random2);
    // console.log(mp);
    return mp;
  };
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [userInputs, setUserInputs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    const newUserInputs: number[][] = structuredClone(userInputs);
    const newBombMap: number[][] = structuredClone(bombMap);
    const bombNum = bombMap.flat().filter((num) => num === -1);
    console.log(bombNum);
    console.log(getNumber());
    console.log(getNumbering());
     while (bombNum.length < 11) {
       console.log()
       if (getNumber() !== y && getNumbering() !== x) {
         newBombMap[y][x] = -1;
       }
       setBombMap(bombMap);
       console.log(getNumber);
       console.log(bombMap);
     }
  };
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        {bombMap.map((row, y) =>
          row.map((cell, x) => (
            <div className={styles.cellStyle} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {cell === -1 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-300px 0px' }} />
              )}
              {cell === 1 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '0px 0px' }} />
              )}
              {cell === 2 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-30px 0px' }} />
              )}
              {cell === 3 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-60px 0px' }} />
              )}
              {cell === 4 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-90px 0px' }} />
              )}
              {cell === 5 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-120px 0px' }} />
              )}
              {cell === 6 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-150px 0px' }} />
              )}
              {cell === 7 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-180px 0px' }} />
              )}
              {cell === 8 && (
                <div className={styles.sampleStyle} style={{ backgroundPosition: '-210px 0px' }} />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
