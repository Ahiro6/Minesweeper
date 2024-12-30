import { useState } from 'react';
import styles from './App.module.scss';
import Game from './components/Game_/Game';

function App() {

    return <div className={styles.App}>
        <Game/>
    </div>;
}

export default App;
