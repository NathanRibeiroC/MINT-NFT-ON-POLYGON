import "./_profile_card.scss"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutTab from "./AboutTab";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import { ReactComponent as Waves } from '../../../../public/waves.svg';

function ProfileCard() {
  const tabs = [
    { label: "ABOUT" },
    { label: "EXPERIENCE" },
    { label: "CONTACT" }
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  console.log("SELECTED TAB: ",selectedTab);
  return (
    <div className="card">
      <main>
        <ProfileBackgroundAnimatedGradient/>
        <div>
          <Waves className="waves"/>
          <div className="aux-wave-container"/>
        </div>
        <AboutTab/>
      </main>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
            key={item.label}
            className={item.label === selectedTab.label ? "selected" : ""}
            onClick={() => setSelectedTab(item)}
            >
              {item.label === selectedTab.label ? (
                <motion.div 
                  className="underline" 
                  layoutId="underline" 
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 1 }}
                  transition={{
                    layout: {
                      duration: 0.1,
                      ease: 'easeOut'
                    },
                  }}
                />
              ) : null}
              {`${item.label}`}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProfileCard;
