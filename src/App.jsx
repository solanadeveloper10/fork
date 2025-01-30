import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        {/* <a href="https://x.com/DeepCommunizm" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/DeepCommunizm" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/FeB9v9sio2oVRwCjFSyPti4PenYK7cAPoq1dYY97cLAv?t=1737997474072" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Raydium
        </a> */}
        <a href="#" target='_blank' className='social-link'>
          X
        </a>
        <a href="#" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="#" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <div className='image-wrapper'>
        <img src="/fork.png" alt="Fork" className='image' />
      </div>

      <Contract />
    </div>

  </>
}

export default App
