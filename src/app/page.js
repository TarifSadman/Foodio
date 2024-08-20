import { Suspense } from "react";
import About from "./components/About";
import BookATable from "./components/BookTable";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import "./page.css";

export default function Home() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
      <main className="main">
        <Hero />

        <About />

        <WhyUs />

        <Menu />

        <Specials />

        <Events />

        <BookATable />

        <Gallery />

        <Chefs />

        <Testimonial />

        <Contact />
      </main>
      
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon" />
              <div className="address">
                <h4>Address</h4>
                <p>XYZ123 Street</p>
                <p>Dhaka, DK 1230</p>
                <p />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-telephone icon" />
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>+8801855464672</span>
                  <br />
                  <strong>Email:</strong> <span>sadmantaha228@gmail.com</span>
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>11AM - 10PM</span>
                  <br />
                  <strong>Sunday</strong>: <span>Closed</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Foodio</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Tarif Sadman</a>
          </div>
        </div>
      </footer>
      </Suspense>
  );
}
