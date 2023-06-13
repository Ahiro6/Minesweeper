import React, { useEffect, useState } from 'react';
import Block_module from './Block.module.scss';
import Classnames from 'classnames';
import { block } from '../../js/gameplay';

const Block = (props: { block: block, setClicked:  React.Dispatch<React.SetStateAction<block>> }): JSX.Element => {
    const [cleared, setCleared] = useState(props.block.cleared);
    const [flagged, setFlagged] = useState(props.block.flagged);

    const isBomb: boolean = props.block.count >= 10;

    const style = cleared
        ? isBomb
            ? Block_module.bomb
            : Block_module.cleared
        : flagged
        ? Block_module.flagged
        : Block_module.start;

    const btnCleared = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!flagged) {
            e.preventDefault();
            props.setClicked(props.block)
            setCleared(true);
        }
    };

    const btnFlagged = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFlagged(!flagged);
    };

    useEffect(() => {

    }, []);

    return (
        <div onContextMenu={btnFlagged} onClick={btnCleared} className={Block_module.Squares}>
            <div className={style}>
                {(cleared && !isBomb) ? props.block.count : 'B'}
            </div>
        </div>
    );
};

export default Block;
