import { useState} from 'react'
import Banner from "../Partials/Banner"
import HomePageBanner from '../../assets/images-website/hero.webp'
import IthubaLogo from '../../assets/images-website/ithuba_logo.png'
import OfficeOfTheGM from '../../assets/images-website/officeOfTheGM.jpg'
import IthubaCEO from '../../assets/images-website/ithuba-ceo.jpg'
import ArticleImage from "../Partials/ArticleImage"
import Welcome from '../../assets/images-website/Welcome-Mobile.png'
import Header from "../Partials/Header"
import Footer from '../Partials/Footer'
import './Home.css'

const Home = () => {

  const [isCEOExpanded, setIsCEOExpanded] = useState(false);
  const [isGMExpanded, setIsEMExpanded] = useState(false);
  const maxLength = 50

  const handleExp = (CEO, GM) => {
    if(CEO){
      setIsCEOExpanded(!isCEOExpanded)
    }else if(GM){
      setIsEMExpanded(!isGMExpanded)
    }
  };

  const CEO_MESSAGE = 'Laborum dolor reprehenderit eu duis fugiat voluptate excepteur. Qui ad amet quis incididunt deserunt laboris laboris enim laborum. Lorem aliquip voluptate amet tempor elit nulla nulla et anim qui. Do ullamco minim proident eu ipsum nulla aliquip sit. Aliqua adipisicing labore est sit tempor aute.'
  const GM_MESSAGE = 'Incididunt magna eiusmod veniam cillum exercitation irure mollit amet do culpa esse eiusmod excepteur proident. Enim duis velit ullamco quis irure consequat. Magna adipisicing tempor esse voluptate. Aute tempor nostrud anim duis voluptate laboris esse laboris ipsum sunt irure labore. Aute excepteur dolor tempor proident labore. Duis id excepteur incididunt ipsum non elit non ad quis commodo qui ex. Aliqua deserunt elit tempor officia laboris nostrud et consectetur sit cupidatat.'
  
  
  
  return (
    <div>
      <div id="page-header">
        <Header />
      </div>

      <div id="page-70-30">
        <section id="content-70">
            <Banner banner={HomePageBanner} />
            <h1 id="home-page-header">
              <img src={Welcome} />
            </h1>
            <section className="home-page-columns">
              <article>
                <h2>Our Mission</h2>
                <p>The ITHUBA Uganda mission is to play a vital role in the socio-economic development of Uganda through the ethical and efficient operation of the National Lottery</p>
              </article>
              <article>
                <h2>Our Vision</h2>
                <p>Our vision is to be a force for positive change and community empowerment, where innovation, responsibility, and inclusivity form the bedrock of our operations</p>
              </article>
            </section>
        </section>

        <aside id="content-30">
          <div className="sub-content">
            <ArticleImage image={IthubaCEO} />
            <h3 className="office-headings">Office of the CEO</h3>
            <p>
              {isCEOExpanded ? CEO_MESSAGE : `${CEO_MESSAGE.slice(0, maxLength)}...`}
              <button 
                onClick={() => handleExp(true, false)} 
                style={{ marginLeft: '10px', color: 'var(--title)', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                {isCEOExpanded ? 'View Less' : 'View More'}
              </button>
            </p>
          </div>

          <div className="sub-content">
            <ArticleImage image={OfficeOfTheGM} />
            <h3 className="office-headings">Office of the GM</h3>
            <p>
              {isGMExpanded ? GM_MESSAGE : `${GM_MESSAGE.slice(0, maxLength)}...`}
              <button 
                onClick={() => handleExp(false, true)} 
                style={{ marginLeft: '10px', color: 'var(--title)', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                {isGMExpanded ? 'View Less' : 'View More'}
              </button>
            </p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Home