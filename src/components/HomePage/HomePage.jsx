import './HomePageCSS.css';
import {gsap} from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function HomePage () {

useEffect(() => {
    AOS.init();
    AOS.refresh();

let tl = gsap.timeline();

    tl.to('.loading', {
        left: '100%',
        duration: 0.75
    })

    tl.from('.hero', {
        duration: 0.5,
        filter: "blur(5px)"
    })

    tl.from('.logo', {
        opacity: 0,
        duration: 0.2
    })

    tl.from('.socials', {
        opacity: 0,
        duration: 0.2
    })

    tl.from('.heroG h1', {
        opacity: 0,
        duration: 0.2
    })

    tl.from('.heroG p', {
        opacity: 0,
        duration: 0.2
    })

    tl.from('.heroG .btn', {
        opacity: 0,
        duration: 0.2
    })

    tl.to('.loading', {
        display: 'none'})

}, []);

    return (
        <div>
            <section className="loading"></section>
            <section className="hero">
            <div className="logo">Comic Friends</div>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <i className="fab fa-discord"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="heroG">
                    <div>
                        <h1>Welcome on <span className="red">MekaVerse</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique doloremque vel laboriosam optio sunt eveniet illum, atque consequuntur quos omnis perferendis. Animi ex eveniet atque, ut enim nobis excepturi minus!</p>
                        <a href="#">
                            <button className="btn">See on OpenSea</button>
                        </a>
                    </div>
                </div>
                <div className="heroD">

                </div>
            </section>
            <section className="discord">
                <div className="container">
                    <h2 data-aos="zoom-in">Join <span className="red">our Discord</span></h2>
                    <a href="#" data-aos="zoom-in-up"><button className="btn">Go !</button></a>
                </div>
            </section>
            <div className="roadmap">
                <div className="container">
                    <h2 data-aos="zoom-in">The <span className="red">Roadmap</span></h2>
                    <div className="line"></div>
                    <div className="bloc" data-aos="zoom-in">
                        <div className="number">1</div>
                        <h4>Launch Roadmap</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                    </div>
                    <div className="bloc" data-aos="zoom-in">
                        <div className="number off">2</div>
                        <h4>Launch Presale</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                    </div>
                    <div className="bloc" data-aos="zoom-in">
                        <div className="number off">3</div>
                        <h4>Mint the remaining NFTs on OpenSea</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                    </div>
                    <div className="bloc" data-aos="zoom-in">
                        <div className="number off">4</div>
                        <h4>Mint the remaining NFTs on OpenSea</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a repellendus nemo minus alias officia culpa ab. Eveniet esse repudiandae quisquam, necessitatibus iure, voluptatum ullam reiciendis molestias commodi, minima nemo.</p>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="container">
                    <h2 data-aos="zoom-in">The <span className="red">Team</span></h2>
                    <div className="team__flex">
                        <div className="member" data-aos="zoom-in">
                            <h4>Ben / <span className="job">Blockchain Developper</span></h4>
                            <img src="img/mekas/5.png" alt="Ben" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                            <h4>Marc / <span className="job">Designer</span></h4>
                            <img src="img/mekas/6.png" alt="Marc" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                            <h4>Matt / <span className="job">Marketer</span></h4>
                            <img src="img/mekas/7.png" alt="Matt" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="footer__flex">
                        <div className="footerG">
                            MekaVerse
                        </div>
                        <div className="footerD">
                            <ul>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;