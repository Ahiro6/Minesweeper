import { createBoard } from '@wixc3/react-board';
import Block from '../../../components/block/Block';
import { block } from '../../../js/gameplay';
import React, { useState } from 'react';

export default createBoard({
    name: 'Block',
    Board: () => <Block  setClicked={useState<block>({pos: [0, 0], cleared: false, flagged: false, count: 0})[1]} block={{pos: [-1, -1], cleared: false, flagged: false, count: 0}} />,
    environmentProps: {
        canvasWidth: 17,
    },
});
