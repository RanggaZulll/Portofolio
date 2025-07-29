// src/Home.jsx
import './Home.css';
import ComponentLighting from '../ComponentLighting/Lighting.jsx'; 
import SplitText from '../ComponentLighting/SplitText.jsx';
import LogoIG from '../assets/instagram.png';
import LogoWA from '../assets/Whatsapp.png';
import LogoLinkedin from '../assets/Linkedin.png';
import LogoLine from '../assets/Line.png';
import Biography from '../halaman2/Biography.jsx';

const handleAnimationComplete = () => {
    console.log('Animasi teks PORTOFOLIO telah selesai!');
};


function Home() {
    return(
    <div className="HomeContent"> 
        <div className="ObjectLogo">
            PORT<br />
            OFO<br />
            LIO
        </div>
        
        <div className='ObjectLighting'> 
        <ComponentLighting /> 
        </div>

    <div  id="Home-intro-section" className="intro-hero-section" >
        <div className="title-subtitle-container">
            <div className="MainTitleSection">
                 <SplitText
                    text="PORTOFOLIO"
                    className="MainTitle"
                    delay={50}
                    duration={1}
                    ease="elastic.in(1,0,3)"
                    splitType="chars"
                    from={{ opacity: 1, y: 0 }}
                    to={{ opacity: 0, y: 50 }}
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                    />     
            </div>            

            <div className='GroupSubtitle'>
                <div className="Subtitle">
                    <span className= 'TeksSubtitle'>Muhammad Rangga Zulfikar</span>
                </div>
            </div>

        </div>
     </div>


 
         <Biography/> 


        <div className='LogoSocmed'>
            <a href="https://www.instagram.com/ranggazulll/" target="_blank" rel="noopener noreferrer">
            <img src={LogoIG} className='LogoIGcss' alt='LogoInstagram'/>
            </a>

            <a href="https://wa.me/6287782228733" target="_blank" rel="noopener noreferrer"> {/* Ganti dengan nomor WA Anda */}
                <img src={LogoWA} className='LogoWAcss' alt='LogoWhatsapp'/>
            </a>

            <a href="https://www.linkedin.com/in/muhammad-rangga-zulfikar-90511932b/" target="_blank" rel="noopener noreferrer"> {/* Ganti dengan profil LinkedIn Anda */}
                <img src={LogoLinkedin} className='LogoLinkedincss' alt='LogoLinkedin'/>
            </a>

            <a href="https://line.me/ti/p/r.a.ngga" target="_blank" rel="noopener noreferrer"> {/* Ganti dengan Line ID Anda atau link yang relevan */}
                <img src={LogoLine} className='LogoLinecss' alt='LogoLine'/>
            </a>

        </div>
    </div>  
         );

}
export default Home;

