import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/images-website/ithuba_logo.png'
import { FaArrowRight } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import './Navigation.css'

const Navigation = () => {
    return (
        <section id="wrapper" className="full-width">
            <div id="container" className="flex-display">
                <nav id="main-nav" className="flex-display flex-column">
                
                    <ul id="nav-list" className="full-width flex-display flex-column">
                        <div id="nav-logo">
                            <Link to={`/home`} id="logo-link">
                                <img src={logo} alt="ithuba logo" id="logo" className="full-width"/>
                            </Link>
                        </div>
                        <li>
                            <Link to={`/home`} className="nav-item">Home</Link>
                        </li>
                        <li>
                            <Link to={`/finance`} className="nav-item">Finance</Link>
                        </li>
                        <li>
                            <Link to={`/hr`} className="nav-item">Human Resource</Link>
                        </li>
                        <li>
                            <Link to={`/ict`} className="nav-item">ICT</Link>
                        </li>
                        <li>
                            <Link to={`/legal`} className="nav-item">Legal</Link>
                        </li>
                        <li >
                            <Link to={`/marketing`} className="nav-item">Marketing</Link>
                        </li>
                        <li>
                            <Link to={`/operations`} className="nav-item">Operations</Link>
                        </li>
                        <li>
                            <Link to={`/sales`} className="nav-item">Sales</Link>
                        </li>
                        <li>
                            <Link to={`/policies`} className="nav-item">Policies</Link>
                        </li>
                        <li >
                            <Link to={`/events`} className="nav-item">Events</Link>
                        </li>
                        <li>
                            <Link to={`/gallery`} className="nav-item">Gallery</Link>
                        </li>
                        <li >
                            <Link to={`/policyupload`} className="nav-item">Upload Policies</Link>
                        </li><li >
                            <Link to={`/galleryupload`} className="nav-item">Upload Pictures</Link>
                        </li>
                        <li>
                            <Link to={`/addevents`} className="nav-item">Add Events</Link>
                        </li>

                        <li id="newsletter-block" className="flex-display">
                            <div id="newsletter-download" className="full-width flex-column flex-display">
                                <RxDownload size="3em" id="downloader"/>
                                <p id="spacer">READ</p>
                                <p> OUR</p>
                                <p>MONTHLY</p>
                                <p>NEWSLETTER</p>
                            </div>
                        </li>
                    </ul>

                    {/* <div id="news-letter-block">

                    </div> */}
                </nav>
                <main id="outlet">
                    <Outlet />
                </main>
            </div>
    
        </section>
    )
}
  
export default Navigation;