import HeroUnit from "../Partials/HeroUnit"
import HRBanner from '../../assets/images-website/hr_banner.jpg'
import Header from "../Partials/Header"
import OrganChart from '../../assets/images-website/organ_chart.avif'
import { CgProfile } from "react-icons/cg";
import Footer from "../Partials/Footer";

const HR = () => (
  <div>
    <div id="page-header">
      <Header />
    </div>
    
  <section className="main-content">
     <HeroUnit banner={HRBanner} />

     <section className="general-page-columns">
       <div className="left-column flex-display flex-column width-38-percent">
        <article className="article">
          <h3>About Human Resources</h3>
          <p>Overseen by the Head Human Resources, the Human Resources Department is responsible for the recruitment, development, adding value and retaining the most competent and skilled staff necessary to achieve Ithuba's mission.​</p>
          <p>The HR's overall objective is to enhance the company's reputation, making an emphasis on the importance of the staff experience and their employability. The HR department acknowledges fully that this can only be achieved through the recruitment and retention of high quality, motivated staff that are managed appropriately and equipped to play their part in the Lottery Operations.​</p> 
          <p>Human Resource involves estimating the quantity and quality of employees required for the business. The estimate revolves around the specification of each portfolio in conjunction with each department objective.​</p>
          <p>With a staff compliment of five passionate individuals, the HR Department is able to cover all human related issues from recruitment, learning and development, compensation, staff discipline, performance management, legal compliance and all related administration,​</p>
          <p>Our comprehensive Human Resource Strategy plays a vital role in the achievement of Ithuba's overall strategic objective and visibly illustrates that the human resources within the company fully understand and support the direction in which the organization is moving​</p>
         </article>
       </div>

       <div className="right-column flex-display flex-column width-38-percent">
          <h3>Organisation structure</h3>
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
 <Footer />
</div>
)

export default HR;