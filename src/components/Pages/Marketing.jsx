import HeroUnit from "../Partials/HeroUnit"
import MarketingBanner from '../../assets/images-website/marketing_banner.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'
import { CgProfile } from "react-icons/cg";


const Marketing = () => (
    <div>
      <div id="page-header">
        <Header />
      </div>

      <section className="main-content">
        <HeroUnit banner={MarketingBanner} />

        <section className="general-page-columns">
          <div className="left-column flex-display flex-column width-38-percent">
            <h3>About Marketing</h3>
              <p>Ithuba strives to provide Ugandan customers with the best entertainment experience available through its products. New games and game enhancements are constantly being developed to keep the National Lottery games innovative and exciting for SA players. The Marketing Department plays a key role in delivering world class lottery entertainment in line with the best trends in the world.  </p>
              <p>The value of Marketing:</p>
              <ul  className="list-items">
                <li  className="main-list-item">Marketing helps us reach our target audience, boost our customer base, and ultimately increase our bottom line.</li> 
                <li  className="main-list-item">Marketing is a strategic mix of business activities that work towards a bigger goal of building our brand and business.</li>
                <li  className="main-list-item">Marketing is about identifying and understanding our customers and developing products and services that meet their needs.</li>
                <li  className="main-list-item">Marketing is important across many areas of our business, including how our customers are greeted on the phone, our customer service procedures, what our staff wear, and our email signature.</li>
                <li  className="main-list-item">Good marketing helps us examine all aspects of our business, no matter how small, and think about how they affect the perception our customers' have of our business.  Although Marketing may be time consuming and require intensive research and analysis, successful marketing can help us increase our bottom line.</li>
              </ul>
              <p>Our activities are focused on assessing long-term market potential; helping drive sales, designing and launching new games, optimising current channels and creating new sales channels, creating marketing plans and budgets, implementing marketing plans, conducting ongoing advertising research and analysis and coordinating marketing activities with the NLC, all Ithuba's departments and multiple contracted agencies.</p>
          </div>

          <div className="right-column flex-display flex-column width-38-percent">
            <article>
              <h3>Marketing Organisation structure</h3>
              <div>
                <img src={OrganChart} alt="Marketing organisation chart" />
              </div>
            </article>

            <article>
              <h3>Marketing campaign</h3>
            </article>
          </div>

          <div className="aside-column">
            <h4>Key Personnel​ in this Department ​</h4>

            <div className="profile-container">
              <div className="profile">
                <CgProfile size="10em" />
              </div>
              <p><span>Name:</span> John Doe</p>
              <p><span>Role:</span>Head of Finance</p>
            </div>

            <div className="profile-container">
              <div className="profile">
                <CgProfile size="10em" />
              </div>
              <p><span>Name:</span> John Doe</p>
              <p><span>Role:</span>Head of Finance</p>
            </div>
          </div>
        </section>
    </section>
    </div>
)

export default Marketing;