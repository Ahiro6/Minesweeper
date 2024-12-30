import { createBoard } from '@wixc3/react-board';
import { Field } from '../../../components/field/Field';
import { baseField, block, generateField } from '../../../js/gameplay';
import { useState } from 'react';

export default createBoard({
    name: 'Field',
    Board: () => (
        <Field
            field={generateField(baseField(5, 5), [3,3])}
            setClicked={useState<block>({pos: [0, 0], cleared: false, flagged: false, count: 0})[1]}
        />
    ),
    environmentProps: {
        canvasHeight: 260,
        canvasWidth: 324,
    },
});
