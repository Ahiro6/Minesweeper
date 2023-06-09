import { createBoard } from '@wixc3/react-board';
import { Field } from '../../../components/field/field';
import Field_module from '../../../components/field/field.module.scss';

export default createBoard({
    name: 'Field',
    Board: () => <Field className={Field_module.field} row={5} column={5} />,
});
