import './_general_text_area.scss';
import { useState } from 'react';
import isEmpty from '../../utils/isEmpty';

interface GeneralFormInputPropsType {
  labelName: string;
  id: string;
}

function GeneralTextArea({ id, labelName }: GeneralFormInputPropsType) {
  const [inputContent, setInputContent] = useState<string>('');

  return (
    <div className="gen-text-area-group">
      <textarea
        id={id}
        required
        className="gen-text-area-input"
        onBlur={(e) => setInputContent(e.target.value)}
      />
      <label htmlFor={id} className={isEmpty(inputContent) ? 'user-label-show' : 'user-label-hidde'}>{labelName}</label>
    </div>
  );
}
export default GeneralTextArea;
