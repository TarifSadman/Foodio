import React from 'react'

export default function About() {
  return (
    <section id="about" className="about section light-background">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 position-relative align-self-start"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <img src="assets/img/about.jpg" style={{ borderRadius: 10 }} className="img-fluid" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=mk48xRzuNvA"
                  className="glightbox pulsating-play-btn"
                />
              </div>
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all" />{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                      trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.
                    </span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
