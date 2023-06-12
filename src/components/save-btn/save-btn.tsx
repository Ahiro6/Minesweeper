import Save_module from './save_btn.module.scss';
import SaveBtn_module from './save-btn.module.scss';

export interface SaveBtnProps {}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SaveBtn = ({}: SaveBtnProps) => {
    return (
        <div className={SaveBtn_module.save_btn}>
            <button>Save</button>
        </div>
    );
};
