import './HomePageCSS.css';
import {gsap} from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import img10 from './img/mekas/10.png'
import img11jpg from './img/mekas/AUTREIMAGE.jpg'
import img12 from './img/mekas/12.png'

function HomePage () {

    //to be deleted
    let img4, img5, img6, img7 = 'image';

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
            
            <section className='heroHome'>
                <div className='titleHome'>
                    <h2 style={{color:'white'}}><strong><span className='red'>COMIC FRIEND</span></strong><br/>Museum connected to the WEB3</h2>
                </div>
            </section>
            
            <section className="hero">
                <div className="logo">Comic Friends</div>
                <div style={{fontFamily:"Roboto, sans-serif"}} className="socials">
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
                    <div style={{width:'60%'}}>
                        <h1 style={{color:'white'}}>Connect your<span className="red"> Wallet</span></h1>
                        <p>Connect your favorite wallet to be ready for the mint and see your minted moebius collection NFT !</p>
                        <a href="#">
                            <button className="btn">Authenticate</button>
                        </a>
                    </div>
                </div>
                <div className="heroD"></div>
            </section>

            <section className="info">
                <div className="container">
                    <h2 data-aos="zoom-in-up">
                        Whitelist Mint{" "}
                        <span className="red"> {/* <NativeBalance /> */} </span>
                    </h2>
                    <a href="#" data-aos="zoom-in-up">
                        <button className="btn">Go !</button>
                    </a>
                </div>
                <div className="container">
                    <h2 data-aos="zoom-in-up">
                    NFT <span className="red">Minted</span>
                    <br />
                    <span className="red">0</span>/8888
                    </h2>
                </div>
            </section>

            <section className="hero">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD"></div>
                    <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroG">
                        <div>
                            <h1>
                                <span className="red">Comic Friends</span>
                            </h1>
                            <p>
                                COMIC Friends Museum is a place where Comic creators and comic fans can meet by mint, exchanges or sell NFT of collections newly created eatch month by a brandnew comic creator. 
                            </p>
                            <a href="#">
                                <button className="btn">See on OpenSea</button>
                            </a>
                        </div>
                </div>
            </section>

            <section>
                <div className="team">
                    <div className="container">
                    <h2 data-aos="zoom-in">
                        About the <span className="red">project</span>
                    </h2>
                    <div className="team__flex">
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            COMIC FRIENDS IS AN AMBITIOUS PROJECT.
                            <span className="job">   
                            AN NFT TO SHARE THE MAJOR MOMENTS OF A CAREER WITH FANS VIA AN
                            NFT THAT ALLOWS YOU TO IMMORTALIZE AND APPROPRIATE FOR LIFE AN
                            EXCEPTIONAL MOMENT IN HISTORY.
                            </span>
                        </h4>
                        <img src={img10} alt="Image" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            THE BEGINNING OF A WHOLE ECOSYSTEM FOR OUR COMMUNITY.
                            <span className="job">
                            In the 80s, fans collected comics. Then there were the
                            collectors of original boards
                            </span>
                        </h4>
                        <img src={img11jpg} alt="Imagejpg" />
                        </div>
                        <div className="member" data-aos="zoom-in">
                        <h4>
                            QUALITY-FOCUSED, HIGH-END AVATARS, READY FOR VIRTUAL EXPOSITION.{" "}
                            <span className="job">
                            FAN ENGAGEMENT TODAY IS DONE BY SHARING UNIQUE MOMENTS THROUGH
                            NFT.
                            </span>
                        </h4>
                        <img src={img12} alt="Image" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="hero">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroG">
                    <div>
                        <h1>
                            <span className="red">Check your NFT minted</span>
                        </h1>
                        <p>
                            Every NFT are on the Ethereum blockchain because we trust in it for security and the futur of this technology. As soon as you have minted an NFT from Moebius collection, you can find all your nft minted on Opensea but no only: You can see for art collection Here! Don't forget to connect your metamask.
                        </p>
                        <a href="#">
                            <button className="btn">Access to the market place</button>
                        </a>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="heroD"></div>
            </section>
            <section className="info">
                <div className="container">
                    <h2 data-aos='zoom-in-up'>
                        Join <span className='red'>our Discord</span>
                    </h2>
                    <a href='#' data-aos='zoom-in-up'>
                        <button className='btn'>Go !</button>
                    </a>
                </div>
            </section>

            <section>
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
            </section>

            <section>
                <div className="team">
                    <div className="container">
                        <h2 data-aos="zoom-in">The <span className="red">Team</span></h2>
                        <div className="team__flex">
                            <div className="member" data-aos="zoom-in">
                                <h4>Bastien <br/><span className="job">Blockchain Developper</span></h4>
                                <img src={img11jpg} alt="Bastien VDB" />
                            </div>
                            <div className="member" data-aos="zoom-in">
                                <h4>Adrien <br/><span className="job">Coordinator</span></h4>
                                <img src={img12} alt="Adrien" />
                            </div>
                            <div className="member" data-aos="zoom-in">
                                <h4>Jennifer <br/><span className="job">Chief Designer</span></h4>
                                <img src={img10} alt="Jennifer" />
                            </div>
                            <div className="member" data-aos="zoom-in">
                                <h4>Rubens <br/><span className="job">Marketer</span></h4>
                                <img src={img11jpg} alt="Rubens" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer__flex">
                        <div className="footerG">
                            Comic Friends
                        </div>
                        <div className="footerD">
                            <ul>
                                <li><a href="#">Developement</a></li>
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