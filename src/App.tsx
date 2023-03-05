import React from 'react';
import style from "./main.module.scss"
import MainWindow from "./components/MainWindow/MainWindow";


function App() {
  return (
    <div className={style.fakeClass}>
      <MainWindow/>
    </div>
  );
}

export default App;
