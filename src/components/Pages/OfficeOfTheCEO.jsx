import Banner from "../Partials/Banner"
import HomePageBanner from '../../assets/images-website/home_page_banner.jpg'

const OfficeOfTheCEO = () => (
    <div className="component">
         <section className="main-content">
            <Banner banner={HomePageBanner} />

            {/* <div>
                <h1>Welcome to <span id="logo-in-text"><img src={IthubaLogo} alt="ithuba uganda logo" /></span>intranet</h1>
            </div> */}

            {/* <section className="page-columns">
              <article>
                <h2>Our Mission</h2>
                <p>The ITHUBA Uganda mission is to play a vital role in the socio-economic development of Uganda through the ethical and efficient operation of the National Lottery</p>
              </article>
              <article>
                <h2>Our Vision</h2>
                <p>Our vision is to be a force for positive change and community empowerment, where innovation, responsibility, and inclusivity form the bedrock of our operations</p>
              </article>
            </section> */}
        </section>

        <aside className="side-content">
        </aside>
    </div>
)

export default OfficeOfTheCEO;