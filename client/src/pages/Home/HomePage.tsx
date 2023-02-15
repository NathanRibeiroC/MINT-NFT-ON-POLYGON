import React, { useState } from 'react';
import StarsBackground from '../../components/HomeComponents/AnimatedBackgrounds/StarsBackground';
import HomeNavbar from '../../components/HomeComponents/HomeNavbar/HomeNavbar';
import ProfileCard from '../../components/HomeComponents/ProfileCard/ProfileCard';

function HomePage() {
  return (
    <main className='home-page-main'>
      <HomeNavbar/>
      <StarsBackground/>
    </main>
  )
}

export default HomePage