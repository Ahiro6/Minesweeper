import classNames from 'classnames';
import Block from '../block/Block';
import styles from './field.module.scss';

export interface FieldProps {
    className?: string;
    row?: number;
    column?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Field = ({ className, row, column }: FieldProps) => {

    const blockCreate = (row: number, column: number): JSX.Element[] => {

        const blockArr: JSX.Element[] = []
        for (let i = 0; i < row; i++) {
            for(let j = 0; j < column; j++) {
                const newBlock: JSX.Element = <Block count={0} pos={[`${i}`, `${j}`]}/>
                blockArr.push(newBlock)
            }
        }

        return blockArr
    }   

    return <div className={classNames(styles.root, className)}>
        { 
            blockCreate(row, column)
        }
    </div>;
};
