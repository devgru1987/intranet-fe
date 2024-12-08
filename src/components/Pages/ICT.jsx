import HeroUnit from "../Partials/HeroUnit"
import ICTBanner from '../../assets/images-website/ict_banner.jpg'
import MISLogo from '../../assets/images-website/mis_logo.png'
import RetailerTechLogo from '../../assets/images-website/retailer_tech.png'
import ITDepartmentLogo from '../../assets/images-website/it_department_logo.png'
import PLSLogo from '../../assets/images-website/it_department_logo.png'
import HelpDeskLogo from '../../assets/images-website/help_desk.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'
import Footer from "../Partials/Footer"
import { CgProfile } from "react-icons/cg";



const ICT = () => (
  <div>
    <div id="page-header">
      <Header />
    </div>

    <section className="main-content">
      <HeroUnit banner={ICTBanner} />

      <section className="general-page-columns">
        <div className="left-column flex-display flex-column width-38-percent">
          <h3>About ICT</h3>
          <p>This is the nerve centre of Ithuba, as we provide services to all areas of the company business. Our primary function is to keep the lottery systems operational to maximise our sales and revenue. Alongside this we provide the Enterprise IT technology and user support to Ithuba and the other companies within the Zamani Group. We are a service driven department: all users are our customers and our goal is to provide first class service using trusted technology to ensure everyone has the tools to carry out their job functions efficiently, irrespective of where they are physically located.</p>
          <h5>Our services include:</h5>
          <ul className="list-items">
            <li className="main-list-item">Lottery System Operation</li>
            <li className="main-list-item">Retailer Technical Support</li>
            <li className="main-list-item">Configuration and monitoring of :</li>
              <li className="sub-list-items">Networks</li>
              <li className="sub-list-items">Servers</li>
              <li className="sub-list-items">Storage</li>
            <li className="main-list-item">Application Management</li>
            <li className="main-list-item">Reporting</li>
            <li className="main-list-item">Security</li>
            <li className="main-list-item">IT Helpdesk </li>
          </ul>
          <p>The team of dedicated experts reside on the 1st floor Zamani House, and are contactable via telephone, email, or the help desk. Please contact us for assistance should you require any IT related help or advice.</p>

        <article className="article">
          <h5>
            {/* <img src={MISLogo} alt="MIS logo" className="logo-panel"/> */}
            MIS Department</h5>
          <p>This section is responsible for:</p>
          <ul className="list-items">
            <li className="main-list-item">All the software applications used by the companies i.e. Enterprise Series, SAGE X3, CRM, VIP etc.</li>
            <li className="main-list-item">All data reporting requirements</li>
            <li className="main-list-item">IT Security Standards</li>
          </ul>
        </article>

        <article className="article">
          <h5>
            {/* <img src={RetailerTechLogo} alt="retailer technology logo" className="logo-panel"/> */}
            Retailer Technology </h5>
          <ul className="list-items">
            <li className="main-list-item">Ensures that the retailer network is able to communicate with the primary and secondary data centres to facilitate the sale of Lottery product.</li>
            <li className="main-list-item">Provides second line support to retailers for all technical problems</li>
            <li className="main-list-item">Dispatches engineers to the field to rectify faults.</li>
            <li className="main-list-item">The staff operates in shifts to cover the operating hours required.</li>
            <li className="main-list-item">The telephone system also falls under this section.</li>
          </ul>
        </article>

        <article className="article">
          <h5>
            {/* <img src={ITDepartmentLogo} alt="IT department logo"  className="logo-panel" /> */}
            IT Departm​ent</h5>
          <p>This section is responsible for the connectivity and IT equipment within the group.</p>
          <p>This consists of servers, network equipment and PC's. Ensures that the links connecting the datacentres, regional offices, and third parties are fully operational 24/7 using the Vodacom MPLS network</p>
          <p>The IT helpdesk is run by this section.</p>
        </article>

        <article className="article">
          <h5>
            {/* <img src={PLSLogo} alt="lottery operations logo"  className="logo-panel"/>   */}
            Lottery Operations​  ​</h5>
          <p>The Lottery Operations section is responsible for the running of the Enterprise Series Lottery System 24 hours per day.</p>
          <p>The operators are currently employed by IPLS.</p>
        </article>
        </div>

      

        <div className="right-column flex-display flex-column width-38-percent">
        <article>
          <h3>Organisation structure</h3>
          <div>
            <img src={OrganChart} alt="IT organisation chart" />
          </div>
          </article>

          <h3>Help Desk</h3>
          <div>
          <img src={HelpDeskLogo} alt="help desk logo" />
          </div>
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

export default ICT