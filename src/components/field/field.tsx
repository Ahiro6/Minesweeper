
import Block from '../block/Block';
import Field_module from './field.module.scss';

export interface FieldProps {
    row?: number;
    column?: number;
    field?: number[][];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Field = ({ row, column, field }: FieldProps) => {

    const blockCreate = (row: number, column: number, field: number[][]): JSX.Element[] => {

        const blockArr: JSX.Element[] = []
        for (let i = 0; i < row; i++) {
            for(let j = 0; j < column; j++) {
                const newBlock: JSX.Element = <Block count={field[i][j]} pos={[`${i}`, `${j}`]}/>
                blockArr.push(newBlock)
            }
        }

        return blockArr
    }   

    return <div className={Field_module.field} style={{ '--w': `${column}em`, '--h': `${row}`}}>
        { 
            blockCreate(row, column, field)
        }
    </div>;
};
