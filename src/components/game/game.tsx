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


    const [level, setLevel] = useState(1);
    const [row, setRow] = useState(5)
    const [column, setColumn] = useState(5)

    const field: number[][] = generateField(row, column, [3, 3]); 

    useEffect(() => {
        setRow(level*5)
        setColumn(level*5)
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
