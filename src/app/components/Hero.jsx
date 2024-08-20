"use client";
import React, { useEffect, useRef } from 'react';

const carouselItems = [
  {
    imgSrc: "assets/img/hero-carousel/hero-carousel-1.jpg",
    title: "Delicious Restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    btnText1: "Our Menu",
    btnLink1: "#menu",
    btnText2: "Book a table",
    btnLink2: "#book-a-table"
  },
  {
    imgSrc: "assets/img/hero-carousel/hero-carousel-2.jpg",
    title: "At vero eos et accusamus",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
    btnText1: "Our Menu",
    btnLink1: "#menu",
    btnText2: "Book a table",
    btnLink2: "#book-a-table"
  },
  {
    imgSrc: "assets/img/hero-carousel/hero-carousel-3.jpg",
    title: "Temporibus autem quibusdam",
    description: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
    btnText1: "Our Menu",
    btnLink1: "#menu",
    btnText2: "Book a table",
    btnLink2: "#book-a-table"
  }
];

export default function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        const activeItem = carousel.querySelector('.carousel-item.active');
        const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
        activeItem.classList.remove('active');
        nextItem.classList.add('active');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div
        ref={carouselRef}
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        {carouselItems.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="carousel-container">
              <h2>
                <span>{item.title.split(' ')[0]}</span> {item.title.split(' ').slice(1).join(' ')}
              </h2>
              <p>{item.description}</p>
              <div>
                <a href={item.btnLink1} className="btn-get-started">
                  {item.btnText1}
                </a>
                <a href={item.btnLink2} className="btn-get-started">
                  {item.btnText2}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
