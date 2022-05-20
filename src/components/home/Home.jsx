import "./home.css";
import logo from "../../images/logo.jpeg";
import { useEffect } from "react";

import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <img data-aos="slide-right" className="w-25 col-lg-6 col-sm-10 d-block mx-auto border border-5 rounded rounded-circle" src={logo} alt="logo" />
                <div data-aos="slide-left" className="col-lg-6 col-sm-10 mx-auto my-auto">
                    <h1>Journalism club of VNRVJIET</h1>
                </div>
            </div>

            <div>
                Times of VNR is an emerging newspaper club of VNRVJIET. We are a team of students,
                aiming to circulate news from student sources across our college.
                Every aspect would be taken care of, as our team consists of exceptional scrutinizers.
                Even you too can contribute articles. More details would be out soon.
            </div>
        </div>
    );
}
export default Home;