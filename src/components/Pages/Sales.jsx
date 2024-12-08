import HeroUnit from "../Partials/HeroUnit"
import SalesBanner from '../../assets/images-website/sales_banner.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'

/*placehonder: to be deleted when replaced with content*/ 
import { CgProfile } from "react-icons/cg";

const Sales = () => (
  <div>
     <div id="page-header">
      <Header />
    </div>
    
  <section className="main-content">
     <HeroUnit banner={SalesBanner} />

     <section className="general-page-columns">
       <div className="left-column flex-display flex-column width-38-percent">
        <article>
         <h3>About Sales</h3>
         <p>The Sales Department is Ithuba’s most direct link to the retail trade and therefore our customer base.  The biggest department in Ithuba, Sales has almost 100 staff members servicing our 9000 strong accredited retailer estate.  Our proactive Regional Sales Force services these retailers on a predefined call cycle lasting 10 days twice every month.  Our dynamic Key Account Team manage all of the company’s chain retail groups representing 5000 retail outlets.</p>
         <p>​The department is both Head Office and regionally deployed with one focus, one drive, and one purpose “Exceed the Target”.​​  ​</p>
         <quote>"The Sales Department is responsible for Ithuba achieving its goal of R 6.9 Billion in sale</quote>
        </article>

         <article>
         <h3>Our Services</h3>
         <ul>
          <li>Retailer selection</li>
          <li>Retailer Optimisation</li>
          <li>Retailer Maintenance</li>
          <li>Retailer Terminal deployment</li>
          <li>Retailer Accreditation</li>
         </ul>
         </article>
       </div>

       <div className="right-column flex-display flex-column width-38-percent">
         <h3>Sales Organisation structure</h3>
         <div className="organ-structure">
              <img src={OrganChart} alt="finance organisation chart" />
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
  </div>
)

export default Sales