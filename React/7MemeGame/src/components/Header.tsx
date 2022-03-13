import React from 'react';

const Header = () => {
  return (
      <header className='header'>
        <img className='header--image' src={"/troll.png"} alt="logo" />
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React</h4>
      </header>
  );
}
export default Header