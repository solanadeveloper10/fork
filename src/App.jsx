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
      

        <div
          className="image-wrapper"
          onClick={handleImageClick}
          style={{ animationDuration: `${animationTime}ms` }}
        >
          <img src="/fork.png" alt="Fork" className="image" />
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
