import "./_profile_card.scss"
import { useState, useEffect} from "react";
import { motion} from "framer-motion";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";

function ProfileCard() {
  const tabs = [
    { label: "ABOUT" , card_class_name: "card-about"},
    { label: "EXPERIENCE" , card_class_name: "card-experience"},
    { label: "CONTACT" , card_class_name: "card-contact"}
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  
  return (
    <div className={selectedTab.card_class_name}>
      <main>
        {selectedTab.label === "ABOUT" ? <AboutTab/> : null}
        {selectedTab.label === "EXPERIENCE" ? <ExperienceTab/> : null}
        {selectedTab.label === "CONTACT" ? <ContactTab/> : null}
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
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
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
