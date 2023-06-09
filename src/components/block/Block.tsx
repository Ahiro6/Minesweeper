import React, { useEffect, useState } from 'react';
import Block_module from './Block.module.scss';
import Classnames from 'classnames';

const Block = (props: { count: number; pos: string[] }): JSX.Element => {
    const [cleared, setCleared] = useState(true);
    const [flagged, setFlagged] = useState(false);

    const isBomb: boolean = props.count >= 10;

    const style = 
        cleared
            ? isBomb
                ? Block_module.bomb
                : Block_module.cleared
            : flagged
                ? Block_module.flagged
                : Block_module.start;

    const btnCleared = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCleared(true);
    };

    const btnFlagged = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFlagged(!flagged);
    };

    useEffect(() => {
        if (isBomb && cleared) {
        }
    }, [cleared]);

    return (
        <div onContextMenu={btnFlagged} className={Block_module.Squares}>
            <div className={style}>
                <button value={props.pos} onClick={btnCleared} disabled={flagged}>
                    {cleared && !isBomb ? props.count : ''}
                </button>
            </div>
        </div>
    );
};

export default Block;
