import React, { useEffect, useState } from 'react';
import { baseField, field, generateField } from '../../js/gameplay';
import { Field } from '../field/Field';
import Game_module from './game.module.scss';
import Timer from '../timer/timer';
import { SaveBtn } from '../save-btn/save-btn';
import { block } from '../../js/gameplay';

const Game = () => {


    const [clicked, setClicked] = useState<block>()

    const [gameOn, setGameOn] = useState(false)
    const [status, setStatus] = useState('Start a game')
    const [play, setPlay] = useState(true)

    const [level, setLevel] = useState(1);
    const [count, setCount] = useState(2)
    const [field, setField] = useState<field>(baseField(level*5, level*5))

    const easyBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel(1)

    }

    const medBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel(2)
    }

    const hardBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel(3)
    }

    const restart = () => {
        setGameOn(false)
        setPlay(true)
        setStatus("Play")
        setField(baseField(level * 5, level * 5))
    }

    const gameStart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!gameOn) {
            setStatus('Clear the field')
            const pos = clicked ? clicked.pos : [0, 0]
            setField(generateField(field.blocks, pos))
            setCount(2)
            console.log(clicked, pos, field, count)
            setGameOn(true)
        }
    }

    const endGame = (msg: string) => {
        setGameOn(false)
        setPlay(false)

        setStatus(msg)

        setCount(1)
    }

    const exit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        restart()
    }

    const click = (block: block) => {
        console.group("Clicked")
        setClicked(block)
        console.log(clicked)
        console.groupEnd()
        
        console.group("Count")      
        console.log(count)
        setCount(count+1)
        console.log(count)
        console.groupEnd()

        if(field.target==count) {
            endGame("Victory!")
        }

        else if(block.count >= 10) {
            endGame("Game Over!")
        }
    }

    useEffect(() => {

    }, [count, clicked])

    useEffect(() => {
        restart()
    }, [level])

    return (
        <div className={Game_module.game}>
            <div className={Game_module['board-top']}>
                <div className={Game_module.modes_panel}>
                    <button disabled={gameOn} onClick={easyBtn} className={Game_module.mode_btn}>Easy</button>
                    <button disabled={gameOn} onClick={medBtn} className={Game_module.mode_btn}>Medium</button>
                    <button disabled={gameOn} onClick={hardBtn} className={Game_module.mode_btn}>Hard</button>
                </div>
                <Timer gameOn={gameOn} play={play}/>
                <button onClick={exit}>Restart</button>
                <h4>{status}</h4>
            </div>
            <button disabled={!gameOn && !play} onClick={gameStart} className={Game_module.board}>
                <Field field={field.blocks} click={click}></Field>
            </button>
        </div>
    );
};

export default Game;
