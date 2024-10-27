import './App.scss'
import Avatar from './assets/avatar-michelle.jpg';
import ShareIcon from './assets/icon-share.svg';
import FacebookIcon from './assets/icon-facebook.svg';
import TwitterIcon from './assets/icon-twitter.svg';
import PinterestIcon from './assets/icon-pinterest.svg';
import { useState } from 'react';

function App() {
  const [modelController,setModelController] = useState<boolean>(false);

  const toggleModel =()=>setModelController(e=>!e);

  return (
    <div className='App'>
      <main className='main__wrapper'>
        <div className='drawers__container'></div>
        <article>
          <h1>Shift the overall look and feel by adding these wonderful
            touches to furniture in your home</h1>
          <p>Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.</p>
          <div className='author__wrapper'>
            <img src={Avatar} className='rounded-full w-10 h-10' alt="Michelles Avatar" />
            <div>
            <header>Michelle Appleton</header>
            <span>28 Jun 2020</span>
            </div>
            <i onClick={toggleModel} className={`fa-solid fa-share rounded-full w-8 h-8 lg:me-0 me-3 ms-auto p-2 z-10 ${modelController?"bg-desaturated-dark-blue text-white":"bg-light-grayish-blue text-desaturated-dark-blue"}`}></i>

            <div className={`model__wrapper ${modelController?"model__open":"hidden"}`} >
              <div>Share</div>
              <img src={FacebookIcon} alt="icon"/>
              <img src={TwitterIcon} alt="icon"/>
              <img src={PinterestIcon} alt="icon"/>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default App
