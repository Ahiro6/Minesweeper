import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 702,
        canvasWidth: 1160,
        windowBackgroundColor: '#5e5494',
    },
});
