import { createBoard } from '@wixc3/react-board';
import Block from '../../../components/block/Block';

export default createBoard({
    name: 'Block',
    Board: () => <Block count={2} pos={['0', '0']} />,
    environmentProps: {
        canvasWidth: 17,
    },
});
