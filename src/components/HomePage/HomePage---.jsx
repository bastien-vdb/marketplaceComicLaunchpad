import './HomePageCSS.css';
import {gsap} from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function HomePage () {

useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);

    return (
    <div>
            <div style={{paddingBottom:"20px", backgroundColor: 'black', width:'100%', textAlign:'center', padding: '60px'}}>
                <h1 data-aos='zoom-in' style={{color:'white', paddingBottom:'60px'}}>Welcome in the best MarketPlace for comic launching</h1>
                <h2 data-aos='zoom-in' style={{color:'orange'}}>in the web3 industry !</h2>
            </div>
            <div data-aos='zoom-in' style={{backgroundColor: 'pink', width:'100%', textAlign:'center', padding: '60px', color: 'white', fontSize:'30px'}}>
                Another block about another case
            </div>
            <div style={{backgroundColor: 'black', width:'100%', textAlign:'center', padding: '60px'}}>
                <h1 data-aos='zoom-in' style={{color:'white', paddingBottom:'60px'}}>Welcome in the best MarketPlace for comic launching</h1>
            <h2 data-aos='zoom-in' style={{color:'pink'}}>in the web3 industry !</h2>
            </div>
            
        
 </div>
    )
}

export default HomePage;