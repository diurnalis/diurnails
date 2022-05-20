import "./home.css";
import logo from "../../images/logo.jpeg";
import { useEffect } from "react";
import news from "../../images/news.gif"

import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="mt-5">
            <div className="row justify-content-center w-100">
                <img data-aos="slide-right" className="w-25 col-lg-5 col-sm-10 d-block mx-auto border border-5 rounded rounded-circle" src={logo} alt="logo" />
                <div data-aos="slide-left" className="col-lg-5 col-sm-10 mx-auto my-auto">
                    <h1>Journalism club of VNRVJIET</h1>
                </div>
            </div>

            <div>
                {/* 
                <img data-aos="zoom-in-up" src={news} className="w-50" />
                */}
                <h2 data-aos="zoom-in-up" className="container fw-bolder text-success mt-5">
                    Times of VNR is an emerging newspaper club of VNRVJIET. We are a team of students,
                    aiming to circulate news from student sources across our college.
                    Every aspect would be taken care of, as our team consists of exceptional scrutinizers.
                    Even you too can contribute articles. More details would be out soon.
                </h2>
            </div>
        </div>
    );
}
export default Home;