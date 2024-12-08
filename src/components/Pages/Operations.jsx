import HeroUnit from "../Partials/HeroUnit"
import OperationsBanner from '../../assets/images-website/operations_banner.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'

/*placehonder: to be deleted when replaced with content*/ 
import { CgProfile } from "react-icons/cg";

const Operations = () => (
  <div>
     <div id="page-header">
      <Header />
    </div>
    
  <section className="main-content">
     <HeroUnit banner={OperationsBanner} />

     <section className="general-page-columns">
       <div className="left-column flex-display flex-column width-38-percent">
        <article>
         <h3>About Operations</h3>
         <p>Logistics, Facilities, Field Services (LFFS) ensure that the Lottery is supported in terms of Logistics, which focusses mainly on warehousing and distribution of, primarily, Lottery Consumables to the regions and from there to retailers , Field Services that install, maintain and repair Lottery equipment to ensure that the terminals are operational so that retailers can sell Lottery products and Facilities, that ensure that the Head Office and Regional Offices are maintained to provide a safe and functionional working environment for all staff. ​</p>
        </article>

        <article>
        <h3>Field Services​​​</h3>
        <h5>Field Services is responsible for:</h5>
        <ul>
          <li>Restoring all Terminal faults in a quick and timely manner, thus reducing the retailers' downtime.</li>
          <li>​Redeployment of terminals from one retailer to the other.</li>
          <li>Change of Ownership.</li>
          <li>Repairs  and Preventative maintenance</li>
          <li>Terminal Relocations</li>
        </ul>
        <p>Our objective is to ensure that we deliver and exceed the expectations of our Retailers.​​</p>
        </article>

        <h3>Logistics</h3>
       <h5>We are responsible for Receiving, Storage, Dispatching and Distributing of:</h5> 
        <ul>
            <li>Point of Sale Material</li>
            <li>Equipment spares</li>
            <li>Lottery terminals & printers and the allocation of terminals to all regions</li>
            <li>Lottery consumables</li>
            <li>Display centre stands</li>
            <li>IT equipment & printers</li>
            <li>Stationery, Teas & Coffees.</li>
        </ul>
    
        <p>We manage:</p>

        <h5>Production Planning</h5>
        <ul>
          <li>Production Management on Consumables/Bet Slips with our suppliers</li>
          <li>QA testing of consumables</li>
        </ul>
        <h5>Logistics</h5>
        <ul>
          <li>All Inbound & Outbound Deliveries</li>
          <li>Logistics Service Providers</li>
          <li>Stock & Inventory</li>
          <li>Monthly Reporting on stock Levels</li>
          <li>Operational coordination with our suppliers</li>
        </ul>
       
       </div>

       <div className="right-column flex-display flex-column width-38-percent">
         <h3>Operations Organisation structure</h3>
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

export default Operations