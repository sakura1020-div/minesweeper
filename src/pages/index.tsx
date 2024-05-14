import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  const mp: number[] = [];
  const mp2: number[] = [];
  const getNumber = (m: number) => {
    mp.length = 0;
    m = Math.floor(Math.random() * 9);
    // const random2 = Math.floor(Math.random() * 9);
    // console.log(random2);
    mp.push(m);
    // mp.push(random2);
    // console.log(mp);
    return mp;
  };
  const getNumbering = (n: number) => {
    mp2.length = 0;
    n = Math.floor(Math.random() * 9);
    // const random2 = Math.floor(Math.random() * 9);
    // console.log(random2);
    mp2.push(n);
    // mp.push(random2);
    // console.log(mp);
    return mp2;
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
  // const [userInputs, setUserInputs] = useState([
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ]);
  const clickHandler = (x: number, y: number) => {
    // const newUserInputs: number[][] = structuredClone(userInputs);
    const newBombMap: number[][] = structuredClone(bombMap);
    const bombNum = bombMap.flat().filter((num) => num === -1);
    // while (bombNum.length < 11) {
    console.log(newBombMap)
    if (getNumber(mp) !== [y] && getNumbering(mp2) !== [x]) {
      console.log(y, x);
      console.log(getNumber(mp));
      console.log(getNumbering(mp2));

      newBombMap[mp][mp2] = -1;
      // }
      console.log(newBombMap);
      setBombMap(bombMap);
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
