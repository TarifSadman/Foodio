"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Events() {
  const events = [
    {
      imgSrc: "assets/img/events-slider/events-slider-1.jpg",
      title: "Birthday Parties",
      price: "$189",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      additionalInfo:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      imgSrc: "assets/img/events-slider/events-slider-2.jpg",
      title: "Private Parties",
      price: "$290",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      additionalInfo:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      imgSrc: "assets/img/events-slider/events-slider-3.jpg",
      title: "Custom Parties",
      price: "$99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      additionalInfo:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section id="events" className="events section">
      <img
        className="slider-bg"
        src="assets/img/events-bg.jpg"
        alt=""
        data-aos="fade-in"
      />
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="row gy-4 event-item">
                <div className="col-lg-6">
                  <img
                    src={event.imgSrc}
                    className="img-fluid"
                    alt={event.title}
                  />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{event.title}</h3>
                  <div className="price">
                    <p>
                      <span>{event.price}</span>
                    </p>
                  </div>
                  <p className="fst-italic">{event.description}</p>
                  <ul>
                    {event.features.map((feature, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle" />{" "}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{event.additionalInfo}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
