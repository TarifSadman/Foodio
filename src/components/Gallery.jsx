import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: "assets/img/gallery/gallery-1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "assets/img/gallery/gallery-2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "assets/img/gallery/gallery-3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "assets/img/gallery/gallery-4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "assets/img/gallery/gallery-5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "assets/img/gallery/gallery-6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "assets/img/gallery/gallery-7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "assets/img/gallery/gallery-8.jpg", alt: "Gallery Image 8" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lightbox = GLightbox({ selector: ".glightbox" });
      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <div>
          <span>Some photos from</span>{" "}
          <span className="description-title">Our Restaurant</span>
        </div>
      </div>
      <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-0">
          {galleryImages.map((image) => (
            <div key={image.id} className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={image.src}
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
