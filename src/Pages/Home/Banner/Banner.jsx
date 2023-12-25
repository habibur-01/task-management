
import { useContext } from "react";
import bannerImg from "../../../assets/img/banner.jpg"
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Banner = () => {
    const { user } = useContext(AuthContext)

    const bannerBg = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '800px',
    };
    return (
        <div>
            <div className="hero" style={bannerBg}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div>
                            {user?<Link to={"/taskmangement"}><button className="btn btn-primary">Let Explore</button></Link>:<Link to={"/login"}><button className="btn btn-primary">Let Explore</button></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;