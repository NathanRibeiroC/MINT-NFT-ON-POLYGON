import React, { useState } from 'react';
import StarsBackground from '../../components/HomeComponents/AnimatedBackgrounds/StarsBackground';
import HomeNavbar from '../../components/HomeComponents/HomeNavbar/HomeNavbar';
import "./_test_page.scss"
import ProfileCard from '../../components/HomeComponents/ProfileCard/ProfileCard';

function TestPage() {

  return (
    <div className='test-page'>
        <ProfileCard/>
    </div>
  )
}

export default TestPage