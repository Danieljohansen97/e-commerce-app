import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="feature-link-container">
                <Link className="feature-link" to="/shop">
                    <h1>SHOP</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home