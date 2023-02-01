import React, { useState } from 'react';
import StarsBackground from '../../components/HomeComponents/AnimatedBackgrounds/StarsBackground';
import HomeNavbar from '../../components/HomeComponents/HomeNavbar/HomeNavbar';

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
        <StarsBackground/>
        <HomeNavbar/>
    </React.Fragment>
  )
}

export default HomePage