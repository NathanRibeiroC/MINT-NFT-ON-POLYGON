// app.test.js
// import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
// import App from '../../../../App'
// import React from 'react'
// import {BrowserRouter} from 'react-router-dom'
// import { describe, it, expect } from 'vitest';

// const renderWithRouter = (ui:any, {route = "/"} = {}) => {
//   window.history.pushState({}, 'Test page', route)

//   return {
//     user: userEvent.setup(),
//     ...render(ui, {wrapper: BrowserRouter}),
//   }
// }

// describe('Navbar Behavior', () => {
//   const navOptions = ["Services","Health & Wellness"];

//   it('Testing navbar expantion for Services option', async () => {

//     const {user} = renderWithRouter(App)

//     // expect(screen.getByText(navOptions[0])).toBeInTheDocument()
  
//     // await user.click(screen.getByText("CONTACT"))
  
//     expect(screen.getByText("ABOUT")).toBeInTheDocument()
//   })

//   // it('Testing navbar expantion for Health And Services option', async () => {

//   //   const {user} = renderWithRouter(<App />)

//   //   expect(screen.getByText(navOptions[1])).toBeInTheDocument()
  
//   //   await user.click(screen.getByText(navOptions[1]))
  
//   //   expect(screen.getByText("Exchange")).toBeInTheDocument()
//   // })
// });
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ProfileCard from '../ProfileCard';
import { Provider } from 'react-redux';
import isEmpty from '../../../../utils/isEmpty';
import ClipboardButton from '../ClipboardButton';
import renderer from 'react-test-renderer';
import GeneralFormInput from '../../../GeneralComponents/GeneralFormInput';
import { ErrorBoundary } from "react-error-boundary";

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
describe('App tests', () => {
  test('Link renders correctly', () => {
    const getInputValue = jest.fn(x => x);
    const tree = renderer
      .create(
        <GeneralFormInput id="fullName" labelName="Full Name" getInputValue={getInputValue}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();

  });

  test('loads and displays greeting', async () => {
    const getInputValue = jest.fn(x => x);
    // ARRANGE
    const { getByLabelText } = render(
        <GeneralFormInput id="fullName" labelName="Full Name" getInputValue={getInputValue}/>
    )
    const input = screen.getByLabelText('Full Name')
    fireEvent.change(input, {target: {value: '23'}})
    expect(getInputValue.mock.calls).toHaveLength(1);
  })
    
});
