import { render, screen, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import GeneralFormInput from '../GeneralFormInput';
import GeneralTextArea from '../GeneralTextArea';
import SubmitButton from "../SubmitButton";
import ReturnButton from '../ReturnButton';

describe('GeneralFormInput.tsx', () => {

  test('GeneralFormInput.tsx render test', () => {
    const getInputValue = jest.fn(x => x);
    let tree = renderer
      .create(
        <GeneralFormInput id="fullName" labelName="Full Name" getInputValue={getInputValue}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('GeneralFormInput.tsx controled input test + state lift up test on getInputValue', () => {
    const getInputValue = jest.fn(x => x);
    // ARRANGE
    render(
        <GeneralFormInput id="fullName" labelName="Full Name" getInputValue={getInputValue}/>
    )
    const input = screen.getByLabelText('Full Name')
    fireEvent.change(input, {target: {value: '23'}})
    expect(getInputValue.mock.calls).toHaveLength(1);
    expect(getInputValue).toHaveBeenLastCalledWith('23','fullName');
  });
});

describe('GeneralTextArea.tsx', () => {
  test('GeneralTextArea.tsx render test', () => {
    const tree = renderer
      .create(
        <GeneralTextArea id="messageContent" labelName="Write your message here ..."/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('GeneralTextArea.tsx placeholder disappear when writing some test', () => {
    // ARRANGE
    render(<GeneralTextArea id="messageContent" labelName="Write your message here ..."/>)
    // expect(screen.getByText("Write your message here ...")).toBeInTheDocument();
    const input = screen.getByLabelText("Write your message here ...")
    fireEvent.blur(input, { target: { value: 'Test input' } });
    // expect(input.firstChild).toHaveClass('user-label-hidde'); // class after input
    expect(input).toBeEmptyDOMElement();
  });
});

describe('SubmitButton.tsx', () => {
  test('SubmitButton.tsx render test', () => {
    const tree = renderer
      .create(
        <div>
          <SubmitButton buttonName={"TEST SUBMIT BUTTON!"}/>
        </div>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('ReturnButton.tsx', () => {
//   test('SubmitButton.tsx render test', () => {
//     const tree = renderer
//       .create(
//         <div>
//           <ReturnButton/>
//         </div>
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });