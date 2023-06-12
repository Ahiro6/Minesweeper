import { createBoard } from '@wixc3/react-board';
import Timer from '../../../components/timer/timer';

export default createBoard({
    name: 'Timer',
    Board: () => <Timer />
});
