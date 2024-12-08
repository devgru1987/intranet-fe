import HeroUnit from "../Partials/HeroUnit"
import LegalBanner from '../../assets/images-website/legal_banner.jpg'
import OrganChart from '../../assets/images-website/organ_chart.avif'
import Header from "../Partials/Header"
import Footer from "../Partials/Footer"
import { CgProfile } from "react-icons/cg";

const Legal = () => (
  <div>
    <div id="page-header">
      <Header />
    </div>

    <section className="main-content">
      <HeroUnit banner={LegalBanner} />

      <section className="general-page-columns">
        <div className="left-column flex-display flex-column width-38-percent">
          <article className="article">
            <h3>About Legal</h3>
            <p>The Legal Department is the epicentre of Ithuba's smooth functioning and operation pertaining to contractual obligations and litigious matters - our main role is being the advisor to each department within the company.  We aim to ensure that the best interest of the company is our main objective when acting on behalf of the company.</p>
            <p>We are service driven, by this we ensure that all contracts are concluded efficiently and within the shortest time period. We work within a fast paced environment and irrespective of any obstacles we may face, we negotiate all contractual obligations maintaining the best interest of the company.</p>
            <p>In addition, the department serves as the Company Secretary of Ithuba: we provide support and co-ordinate all roles and responsibilities set out in the Company's Memorandum of Incorporation related to our Board members and Board meetings.</p>
            <h5>Our services include;</h5>
            <ul className="list-items">
              <li className="main-list-item">Draft, Review and Execute Service Level Agreements​</li>
              <li className="main-list-item">Contract Management​</li>
              <li className="main-list-item">Debt Collection disputes​</li>
              <li className="main-list-item">Advisor to the CEO's office and all Departments​</li>
              <li className="main-list-item">Advise and Defend Court proceedings instituted against the company and its subsidiaries​</li>
              <li className="main-list-item">Preparation and hosting of Board Meetings​</li>
              <li className="main-list-item">Labour Dispute Resolution (Employee)​</li>
              <li className="main-list-item">Holder of all Contracts and Court Pleadings​</li>
            </ul>
          </article>
        </div>

        <div className="right-column flex-display flex-column width-38-percent">
          <article className="article">
            <h3>Legal Organisational Structure</h3>
            <div>
            <img src={OrganChart} alt="IT organisation chart" />
          </div>
          </article>

          <article className="article">
            <h3>Service level agreements</h3>
          </article>

          <article className="article">
            <h3>Procedures</h3>
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

export default Legal;