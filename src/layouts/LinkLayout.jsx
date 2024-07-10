import { Link, Outlet } from "react-router-dom";
import '../App.css';

const LinkLayout = () => {
    return (
        <div>
            <div className="LinkLayout">
                <Link to={'/main'}>Home</Link>
                <Link to={'/about-chandler-bing'}>About</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default LinkLayout;