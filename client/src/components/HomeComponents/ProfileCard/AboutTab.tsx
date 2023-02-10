import "./_profile_card.scss"
import { useState } from "react";
import profilePicture from "../../../../public/profile img-1.jpg";
import { ReactComponent as GithubIcon } from '../../../../public/iconmonstr-github-1.svg';
import { ReactComponent as LinkedinIcon } from '../../../../public/iconmonstr-linkedin-4.svg';

function AboutTab() {
  return (
    <div className="about-tab">
        <img src={profilePicture} className="about-profile-picture"/>
        <h1>William Rocheald</h1>
        <h2>UI DEVELOPER</h2>
        <div className="main-text">
            <h3>ABOUT</h3>
            <p>
            Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
            </p>
        </div>
        <div className="contact-card">
            <a href="https://github.com/NathanRibeiroC?tab=overview&from=2022-08-01&to=2022-08-07" target="_blank">
            <GithubIcon className="github-icon"/>
            </a>
            <a href="https://github.com/NathanRibeiroC?tab=overview&from=2022-08-01&to=2022-08-07" target="_blank">
            <LinkedinIcon className="linkedin-icon"/>
            </a>
        </div>
    </div>
  );
}

export default AboutTab;