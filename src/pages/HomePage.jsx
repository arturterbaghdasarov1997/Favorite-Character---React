import chandlerBingImage from '../Assets/chandler-bing.jpg';
import '../App.css';

const HomePage = () => {
    return (
        <div className='homePage'>
        <div>
            <h1>Home Page</h1>
        </div>
        <div className="photo">
            <img src={chandlerBingImage} alt="Chandler Bing" />
        </div>
        <div className="name">
            <h2>Chandler Bing</h2>
        </div>
    </div>
    )
}

export default HomePage;