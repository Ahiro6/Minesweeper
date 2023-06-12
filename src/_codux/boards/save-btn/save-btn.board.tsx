import { createBoard } from '@wixc3/react-board';
import { SaveBtn } from '../../../components/save-btn/save-btn';

export default createBoard({
    name: 'SaveBtn',
    Board: () => <SaveBtn />
});
