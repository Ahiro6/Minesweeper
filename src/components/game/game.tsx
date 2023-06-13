import React, { useEffect, useState } from 'react';
import { baseField, generateField } from '../../js/gameplay';
import { Field } from '../field/field';
import Game_module from './game.module.scss';
import Timer from '../timer/timer';
import { SaveBtn } from '../save-btn/save-btn';
import { block } from '../../js/gameplay';

const Game = () => {

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
        setLevel(4)
    }

    const restart = () => {
        row = level*5
        column = level*5
        setField(baseField(level*5, level*5))
    }

    const gameStart = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!game) {
            console.log("start")
            e.preventDefault()
            setField(generateField(field, clicked.pos))
            setGame(true)
        }
    }

    const exit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setGame(false)
        restart()
    }

    const save = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setGame(false)
        restart()
    }

    const [clicked, setClicked] = useState<block>({
        pos: [-1, -1],
        count: -1,
        flagged: false,
        cleared: false
    })
    const [game, setGame] = useState(false)
    const [level, setLevel] = useState(1);
    let row = level*5
    let column = level*5
    const [field, setField] = useState(baseField(row, column))

    useEffect(() => {
        if(!game) {
            restart()
        }
        console.log("refreshed")
    }, [level, game])

    return (
        <div className={Game_module.game}>
            <div className={Game_module['board-top']}>
                <div className={Game_module.modes_panel}>
                    <button disabled={game} onClick={easyBtn} className={Game_module.mode_btn}>Easy</button>
                    <button disabled={game} onClick={medBtn} className={Game_module.mode_btn}>Medium</button>
                    <button disabled={game} onClick={hardBtn} className={Game_module.mode_btn}>Hard</button>
                </div>
                <Timer />
                <button onClick={exit}>Quit</button>
                <button onClick={save}>Save</button> 
            </div>
            <div onClick={gameStart} className={Game_module.board}>
                <Field setClicked={setClicked} field={field}></Field>
            </div>
        </div>
    );
};

export default Game;
