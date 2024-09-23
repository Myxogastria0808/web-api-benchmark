import { useState } from "react";

const App = () => {
  const [rustResult, setRustResult] = useState<number>(0);
  const [rResult, setRResult] = useState<number>(0);
  const [pythonResult, setPythonResult] = useState<number>(0);
  const [rustIsFetching, setRustIsFetching] = useState<string>("");
  const [pythonIsFetching, setPythonIsFetching] = useState<string>("");
  const [rIsFetching, setRIsFetching] = useState<string>("");

  const rustApiHandler = async () => {
    try {
      setRustResult(0);
      setRustIsFetching("計測中");
      const startTime = performance.now(); //開始時間
      const result = await fetch("http://127.0.0.1:5000/1");
      const endTime = performance.now(); //終了時間
      setRustIsFetching("");
      setRustResult(endTime - startTime);
      console.log(`Rust API Response: ${await result.json()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const pythonApiHandler = async () => {
    try {
      setPythonResult(0);
      setPythonIsFetching("計測中");
      const startTime = performance.now(); //開始時間
      const result = await fetch("http://127.0.0.1:3000/1");
      const endTime = performance.now(); //終了時間
      setPythonIsFetching("");
      setPythonResult(endTime - startTime);
      console.log(`Python API Response: ${await result.json()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const rApiHandler = async () => {
    try {
      setRResult(0);
      setRIsFetching("計測中");
      const startTime = performance.now(); //開始時間
      const result = await fetch("http://127.0.0.1:7000/1");
      const endTime = performance.now(); //終了時間
      setRIsFetching("");
      setRResult(endTime - startTime);
      console.log(`R API Response: ${await result.json()}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Rust Web API (axum)</h1>
      <h3>{rustIsFetching}</h3>
      <h2>計算時間: {rustResult}ms</h2>
      <button onClick={rustApiHandler}>計測開始</button>
      <h1>Python Web API (FastAPI)</h1>
      <h3>{pythonIsFetching}</h3>
      <h2>計算時間: {pythonResult}ms</h2>
      <button onClick={pythonApiHandler}>計測開始</button>
      <h1>R Web API (plumber)</h1>
      <h3>{rIsFetching}</h3>
      <h2>計算時間: {rResult}ms</h2>
      <button onClick={rApiHandler}>計測開始</button>
    </>
  );
};

export default App;
