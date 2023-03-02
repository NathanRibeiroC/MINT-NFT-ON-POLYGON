import { ReactComponent as ClipboardIcon } from "../../../../public/clipboard-icon.svg";
import "./_clipboard_button.scss"

function ClipboardButton() {
    return (
        <button className="clipboard-button">
            <ClipboardIcon className="clipboard-icon"/>
        </button>
    );
}
export default ClipboardButton;
