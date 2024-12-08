import HeroUnit from "../Partials/HeroUnit"
import FinanceBanner from '../../assets/images-website/finance_banner.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'
import Footer from "../Partials/Footer"
 
import { CgProfile } from "react-icons/cg";

const Finance = () => (
    <div>
      <div id="page-header">
        <Header />
      </div>

      <section className="main-content">
        <HeroUnit banner={FinanceBanner} />

        <section className="general-page-columns">
          <div className="left-column flex-display flex-column width-38-percent">
            <h3>About Finance</h3>
            <p>The Finance Department is responsible for the sound financial management of the Zamani Group, which includes Ithuba.</p>
            <p>Corporate Finance is responsible for the financial management of the various Zamani companies, as well as the Procurement function for the Zamani Companies and Ithuba.</p>
​            <p>Lottery Operations manages the financial aspects related to Ithuba’s Lottery operations in accordance with World Lottery Association practices.  This includes lottery sales by retailers and alternate channels as well as the payment of sales commission and prizes.    The department is also responsible to report to the National Lottery Commission on Ithuba’s financial status as required by the Lottery License</p>
          </div>

          <div className="right-column flex-display flex-column width-38-percent">
            <h3>Organisation structure</h3>
            <div className="organ-structure">
              <img src={OrganChart} alt="finance organisation chart" />
            </div>
            <p>You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.</p>
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
      <Footer />
    </div>
)

export default Finance