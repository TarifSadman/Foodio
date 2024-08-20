"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      imgSrc: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      title: "Ceo & Founder",
      stars: 5,
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      imgSrc: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      title: "Designer",
      stars: 5,
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      imgSrc: "assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      title: "Store Owner",
      stars: 5,
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      imgSrc: "assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      title: "Freelancer",
      stars: 5,
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      imgSrc: "assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      title: "Entrepreneur",
      stars: 5,
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  useEffect(() => {
    console.log("Swiper loaded");
  }, []);

  return (
    <section id="testimonials" className="testimonials section dark-background">
      <img
        src="assets/img/testimonials-bg.jpg"
        className="testimonials-bg"
        alt=""
      />
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => swiper.update()}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img
                  src={testimonial.imgSrc}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.title}</h4>
                <div className="stars">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill" />
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}