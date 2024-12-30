
import Block from '../Block_/Block';
import Field_module from './Field.module.scss';
import { block } from '../../js/gameplay';
import { useEffect } from 'react';

interface CSSProperties {
    [key: string]: string | number;
}

export const Field = (props: { field: block[][], click: any }) => {

    const blockCreate = (field: block[][]): JSX.Element[] => {

        const blockArr: JSX.Element[] = []
        for (let y = 0; y < field.length; y++) {
            for (let x = 0; x < field[0].length; x++) {
                const newBlock: JSX.Element = <Block
                    click={props.click}
                    block={field[y][x]} />

                    blockArr.push(newBlock)
            }
        }

        return blockArr
    }
    const blocks = blockCreate(props.field)

    const style: CSSProperties = { '--w': `${props.field[0].length}em`, '--h': `${props.field.length}em` }

    return <div className={Field_module.field} style={style}>
        {
            blocks
        }
    </div>;
};
