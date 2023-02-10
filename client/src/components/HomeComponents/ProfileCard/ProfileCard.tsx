import "./_profile_card.scss"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutTab from "./AboutTab";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";

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
        {/* <ProfileBackgroundAnimatedGradient/> */}
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
              {`${item.label}`}
              {item.label === selectedTab.label ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProfileCard;
