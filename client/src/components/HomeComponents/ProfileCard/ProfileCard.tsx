import "./_profile_card.scss"
import { useState } from "react";
import { motion} from "framer-motion";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";

function ProfileCard() {
  const tabs = [
    { label: "ABOUT" , card_class_name: "card-about"},
    { label: "EXPERIENCE" , card_class_name: "card-experience"},
    { label: "CONTACT" , card_class_name: "card-about"}
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  console.log("SELECTED TAB: ",selectedTab);
  return (
    <div className={selectedTab.card_class_name}>
      <main>
        {selectedTab.label === "ABOUT" ? <AboutTab/> : null}
        {selectedTab.label === "EXPERIENCE" ? <ExperienceTab/> : null}
        {selectedTab.label === "CONTACT" ? <AboutTab/> : null}
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
                      duration: 0.08,
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
