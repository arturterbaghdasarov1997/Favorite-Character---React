import React from 'react';
import '../App.css';
import chandlerBingImage from '../Assets/chandler-bing.jpg';

const MainPage = () => {
  return (
    <div className='homePage'>
        <div>
            <h1>Main Page</h1>
        </div>
        <div className="photo">
            <img src={chandlerBingImage} alt="Chandler Bing" />
        </div>
        <div className="name">
            <h2>Chandler Bing</h2>
        </div>
    </div>
  );
}

export default MainPage;