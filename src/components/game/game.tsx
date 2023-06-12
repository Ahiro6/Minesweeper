import React, { useEffect, useState } from 'react';
import { generateField } from '../../js/gameplay';
import { Field } from '../field/field';
import Field_module from '../field/field.module.scss';
import Game_module from './game.module.scss';
import Game0 from './game';
import Timer from '../timer/timer';
import { SaveBtn } from '../save-btn/save-btn';
import Classnames from 'classnames';

const Game = () => {

    const easyBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel("easy")
    }

    const medBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel("medium")
    }

    const hardBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLevel("hard")
    }


    const [level, setLevel] = useState("easy");
    const [row, setRow] = useState(5)
    const [column, setColumn] = useState(5)

    const field: number[][] = generateField(row, column, [3, 3]); 

    useEffect(() => {
        if(level == "easy") {
            setRow(5)
            setColumn(5)
        }
        else if(level == "medium") {
            setRow(10)
            setColumn(10)
        }
        else if(level == "hard") {
            setRow(15)
            setColumn(15)
        }

    }, [level])

    return (
        <div className={Game_module.game}>
            <div className={Game_module['board-top']}>
                <div className={Game_module.modes_panel}>
                    <button onClick={easyBtn} className={Game_module.mode_btn}>Easy</button>
                    <button onClick={medBtn} className={Game_module.mode_btn}>Medium</button>
                    <button onClick={hardBtn} className={Game_module.mode_btn}>Hard</button>
                </div>
                <Timer />
                <SaveBtn />
            </div>
            <div className={Game_module.board}>
                <Field field={field} row={row} column={column}></Field>
            </div>
        </div>
    );
};

export default Game;
