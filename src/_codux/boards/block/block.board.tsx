import { createBoard } from '@wixc3/react-board';
import Block from '../../../components/block/Block';

export default createBoard({
    name: 'Block',
    Board: () => <Block count={11} pos={['0', '0']} />,
});
