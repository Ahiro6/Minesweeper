import React, { useEffect, useState } from 'react';
import Block_module from './Block.module.scss';
import { block } from '../../js/gameplay';

const Block = (props: { block: block, click: any }): JSX.Element => {
    const [cleared, setCleared] = useState(false);
    const [flagged, setFlagged] = useState(false);

    const isBomb: boolean = props.block.count >= 10;

    const style = cleared
        ? isBomb
            ? Block_module.bomb
            : Block_module.cleared
        : flagged
        ? Block_module.flagged
        : Block_module.start;

    const btnCleared = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!flagged && !cleared) {
            e.preventDefault();
            setCleared(true);

            props.click(props.block)
        }
    };

    const btnFlagged = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setFlagged(!flagged);
    };

    useEffect(() => {
        setCleared(false)
        setFlagged(false)
    }, [props.block])

    return (
        <div onContextMenu={btnFlagged} onClick={btnCleared} className={Block_module.Squares}>
            <div className={style}>
                {cleared ? 
                    !isBomb ? props.block.count : 'B'
                    : flagged ? 'F':
                    ''}
            </div>
        </div>
    );
};

export default Block;
