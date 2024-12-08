import { useEffect } from 'react'
import { getAllPolicies } from "../../app/features/Policy/policySlice"
import { useSelector, useDispatch } from 'react-redux'
import { fetchPolicies } from '../../app/features/Policy/policySlice'
import HeroUnit from "../Partials/HeroUnit"
import PoliciesBanner from '../../assets/images-website/policies_banner.jpg'
import PolicyDownloadLink from '../Partials/PolicyDownLoadLink'
import Header from "../Partials/Header"
import './PolicyUpload.css'

const Policy = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPolicies())
  }, [])

  const policyList =  useSelector(getAllPolicies)

  const groupedPolicyList = policyList.reduce((department, policy) => {
    if (!department[policy.department]) {
      department[policy.department] = []
    }
    department[policy.department].push(policy);
    return department;
  }, {});

  const displayContent = Object.entries(groupedPolicyList).map(([department, departmentPolicyList]) => (
    <div key={department} id="policy-container">
      <h3 id="dept-title">{department}</h3>
      <ul id="policy-collection">
        {departmentPolicyList.map((file) => 
            <li key={file._id}>
              <PolicyDownloadLink 
                key={file._id} 
                filename={file.filename}
                originalname={file.originalname}
                department={file.department}
              />
            </li>
          )
        }
      </ul>
    </div>
  ))
    
  return (
    <div>
      <div id="page-header">
      <Header />
      </div>

      <section className="main-content">
          <HeroUnit banner={PoliciesBanner} />
          <p>​​​​​​​​​​​​​​​​​​​​​In this section you can find policies and procedures by department. To download the document you require, just click and save on you PC. ​​</p>
         
          <section id="policy-section">
            { displayContent }
          </section>
      </section>
    </div>
  )
}

export default Policy