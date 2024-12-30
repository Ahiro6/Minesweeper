import { useState } from 'react';
import styles from './App.module.scss';
import Game from './components/game/game';

function App() {

    return <div className={styles.App}>
        <Game/>
    </div>;
}

export default App;
