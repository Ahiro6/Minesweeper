import { createBoard } from '@wixc3/react-board';
import Leaderboard from '../../../components/leaderboard/leaderboard';

export default createBoard({
    name: 'Leaderboard',
    Board: () => <Leaderboard />
});
