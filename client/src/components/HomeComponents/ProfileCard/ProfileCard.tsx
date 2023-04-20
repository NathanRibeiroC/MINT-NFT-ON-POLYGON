import './_profile_card.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AboutTab from './AboutTab';
import ExperienceTab from './ExperienceTab';
import ContactTab from './ContactTab';
import { useAppSelector } from '../../../redux/app/hooks';
import SendMessageCard from './SendMessage';

function ProfileCard(): JSX.Element {
  const tabs = [
    { label: 'ABOUT', card_class_name: 'card-about' },
    { label: 'EXPERIENCE', card_class_name: 'card-experience' },
    { label: 'CONTACT', card_class_name: 'card-contact' },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const flipcard = useAppSelector((state) => state.flipProfileCard.value);

  const cardTabs = (
    <div className="front-card">
      <div className={selectedTab.card_class_name}>
        <main>
          {selectedTab.label === 'ABOUT' ? <AboutTab /> : null}
          {selectedTab.label === 'EXPERIENCE' ? <ExperienceTab /> : null}
          {selectedTab.label === 'CONTACT' ? <ContactTab /> : null}
        </main>
        <nav className="card-navbar">
          <ul>
            {tabs.map((item) => (
              <li
                role="tab"
                key={item.label}
                className={item.label === selectedTab.label ? 'selected' : ''}
                onClick={() => setSelectedTab(item)}
                onKeyDown={() => setSelectedTab(item)}
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
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  />
                ) : null}
                {`${item.label}`}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  const sendMessageBackCard = (
    <div className="back-card">
      <SendMessageCard />
    </div>
  );

  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        {!flipcard ? cardTabs : sendMessageBackCard}
      </div>
    </div>
  );
}

export default ProfileCard;
