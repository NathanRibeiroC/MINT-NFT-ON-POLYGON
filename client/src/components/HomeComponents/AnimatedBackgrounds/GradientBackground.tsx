import { useState } from 'react';
import './_gradient_brackground.scss'

function GradientBackground(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className='gradient_background'>
        <div className="gradient"/>
        <div className="gradient"/>
    </div>
  )
}

export default GradientBackground