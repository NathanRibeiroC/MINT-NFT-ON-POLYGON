import "./_profile_card.scss"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePicture from "../../../../public/profile img-1.jpg";
import githubIcon from "../../../../public/iconmonstr-github-1.svg";
import linkedinIcon from "../../../../public/iconmonstr-linkedin-4.svg";
import GithubIcon from "../../../assets/GithubIcon";

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
            <GithubIcon fill="blue"/>
            <img src={githubIcon} className="github-icon"/>
            <img src={linkedinIcon} className="linkedin-icon"/>
        </div>
    </div>
  );
}

export default AboutTab;