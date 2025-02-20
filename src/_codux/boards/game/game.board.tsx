import { createBoard } from '@wixc3/react-board';
import Game from '../../../components/game/game';

export default createBoard({
    name: 'Game',
    Board: () => <Game />,
    environmentProps: {
        canvasHeight: 552,
        windowHeight: 639,
        canvasWidth: 880,
    },
});
