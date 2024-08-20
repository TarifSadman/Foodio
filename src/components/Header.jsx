import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Specials", href: "#specials" },
    { name: "Events", href: "#events" },
    { name: "Chefs", href: "#chefs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
  };

  return (
    <header id="header" className="header fixed-top" style={{backgroundColor: scrolled ? 'rgba(21, 17, 13, 0.85)' : 'rgba(255, 255, 255, 0)', transition: 'background-color 0.01s'}}>
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-end justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center d-none d-lg-block">
              <span>+8801855464672</span>
            </i>
            <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
              <span>Mon-Sat: 11:00 AM - 10:00 PM</span>
            </i>
          </div>
          <a href="#book-a-table" className="cta-btn">
            Book a table
          </a>
        </div>
      </div>
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <h1 className="sitename">Delicious</h1>
          </a>
          <nav id="navmenu" className="navmenu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? "active" : ""}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
        </div>
      </div>
    </header>
  );
}
