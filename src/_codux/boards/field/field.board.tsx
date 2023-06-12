import { createBoard } from '@wixc3/react-board';
import { Field } from '../../../components/field/field';
import Field_module from '../../../components/field/field.module.scss';
import { generateField } from '../../../js/gameplay';

export default createBoard({
    name: 'Field',
    Board: () => (
        <Field
            className={Field_module.field}
            row={5}
            column={5}
            field={generateField(5, 5, [3, 3])}
        />
    ),
    environmentProps: {
        canvasHeight: 260,
        canvasWidth: 324,
    },
});
