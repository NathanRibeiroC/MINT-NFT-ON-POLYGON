import { ReactComponent as ClipboardIcon } from "../../../../public/clipboard-icon.svg";
import { ReactComponent as CheckIcon } from "../../../../public/check-icon.svg";
import "./_clipboard_button.scss";
import isEmpty from "../../../utils/isEmpty";
import {useEffect, useState } from 'react';

interface PropsType {
  dataClassName: string,
}

const MILLISECONDS = 800;

function ClipboardButton(props: PropsType): JSX.Element {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState<boolean>(false);
  const [triggerUseEffect, setTriggerUseEffect] = useState<boolean>(false);

  const copyToClipboard = () => {
    let classTextContent = document.getElementsByClassName(props.dataClassName)[0].textContent;

    if (!isEmpty(classTextContent)) {
      navigator.clipboard.writeText(classTextContent || "");
      setTriggerUseEffect(true);
      setIsCopiedToClipboard(true);
    }

  };

  const resetState = () => {
    setTriggerUseEffect(false);
    setIsCopiedToClipboard(false);
  }

  useEffect(
    () => {
      if(triggerUseEffect){
        let timer = setTimeout(() => resetState(), MILLISECONDS);
        return () => {
          clearTimeout(timer);
        };
      }
    },
    [triggerUseEffect]
  );

  const copyToClipboardTextAdd = (
    <span className="tooltiptext">
      Copy to
      <br />
      clipboard
    </span>
  );

  const copiedToClipboardTextAdd = (
    <span className="tooltiptext copied">
      Copied !
    </span>
  );

  return (
    <button className={isCopiedToClipboard ? "clipboard-button content-copied" : "clipboard-button"} onClick={copyToClipboard}>
      {isCopiedToClipboard ? copiedToClipboardTextAdd : copyToClipboardTextAdd}
      {isCopiedToClipboard ? <CheckIcon className="check-icon" /> : <ClipboardIcon className="clipboard-icon" />}
    </button>
  );
}
export default ClipboardButton;
