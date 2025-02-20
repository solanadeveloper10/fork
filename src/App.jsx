import { useState, useEffect } from 'react';
import Contract from './Contract';
import './App.css';

const INITIAL_SPEED = 8000; // Initial animation duration in ms

function App() {
  const [animationTime, setAnimationTime] = useState(INITIAL_SPEED);

  const handleImageClick = () => {
    setAnimationTime(previousValue => {
      return previousValue > 20 ? previousValue / 2 : INITIAL_SPEED
    })
  };

  const [imageSrc, setImageSrc] = useState(getImageSrc());

  function getImageSrc() {
    const width = window.innerWidth;
    if (width <= 768) {
      return '/fork_it_mobile.png';  // Mobile image
    } else if (width <= 1024) {
      return '/fork_it_tablet.png';  // Tablet image
    } else {
      return '/fork_it_desktop.png'; // Desktop image
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(getImageSrc());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="color-bg" />
      <div className="wrapper">
        <header className="header">
          <a href="#" target="_blank" className="social-link">X</a>
          <a href="#" target="_blank" className="social-link">Telegram</a>
          <a href="#" target="_blank" className="social-link">Dextools</a>
          <a href="#" target="_blank" className="social-link">Dexscreener</a>
          <a href="#" target="_blank" className="social-link">Raydium</a>
        </header>

        <div
          className="image-wrapper"
          onClick={handleImageClick}
          style={{ animationDuration: `${animationTime}ms` }}
        >
          <img src="/fork.webp" alt="Fork" className="image" />
        </div>

        <div className='fork-it-wrapper'>
          <img src={imageSrc} alt="Fork it." className="fork-it-image" />
        </div>

        <Contract />
      </div>
    </>
  );
}

export default App;
