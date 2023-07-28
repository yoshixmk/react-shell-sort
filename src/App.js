import "./styles.css";
import { useState } from "react";

function shellSort(arr) {
  const samples = [];
  samples.push([...arr]); // Record initial value

  let k = 10;
  while (k >= 1) {
    k = Math.floor(k / 2);
    let i = 0;
    while (i + k < 10) {
      let j = i;
      let flg = 0;
      while (j >= 0 && flg !== 1) {
        if (arr[j] > arr[j + k]) {
          let w = arr[j];
          arr[j] = arr[j + k];
          arr[j + k] = w;
          j = j - 1;
          samples.push([...arr]); // Record at the time of change
        } else {
          flg = 1;
        }
      }
      i = i + 1;
    }
  }
  // return arr;
  return samples;
}

export default function App() {
  const [count, setCount] = useState(0);

  const countUp = () => setCount((prevCount) => prevCount + 1);
  const countDown = () => setCount((prevCount) => prevCount - 1);

  const array = [26, 87, 45, 62, 91, 35, 58, 77, 13, 79];

  return (
    <div className="App">
      <header>
        <h1>Shell Sort</h1>
        <h2>Gift for こうがくん</h2>
      </header>
      <main>
        <button onClick={countDown} disabled={count <= 0}>
          Back
        </button>
        <button onClick={countUp} disabled={count >= 11}>
          Next
        </button>
        <p>step: {count}</p>
        <p>{shellSort(array)[count].join(", ")}</p>
      </main>
      <footer>produced by yoshixmk</footer>
    </div>
  );
}
