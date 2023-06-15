
import Block from '../block/Block';
import Field_module from './field.module.scss';
import { block } from '../../js/gameplay';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
interface CSSProperties {
    [key: string]: string | number;
}

export const Field = (props: { field: block[][], setClicked: React.Dispatch<React.SetStateAction<block>> }) => {

    const blockCreate = (field: block[][]): JSX.Element[] => {

        const blockArr: JSX.Element[] = []
        for (let i = 0; i < field.length; i++) {
            for(let j = 0; j < field[0].length; j++) {
                const newBlock: JSX.Element = <Block setClicked={props.setClicked} block={field[i][j]} />
                blockArr.push(newBlock)
            }
        }

        return blockArr
    }   
    const blocks = blockCreate(props.field)

    const style: CSSProperties =  {'--w': `${props.field[0].length}em`, '--h': `${props.field.length}em`}

    return <div className={Field_module.field} style={style}>
        { 
            blocks
        }
    </div>;
};
