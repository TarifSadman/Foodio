const chefs = [
  {
    id: 1,
    imgSrc: 'assets/img/chefs/salt-bae.webp',
    name: 'Walter White',
    role: 'Master Chef',
    socialLinks: {
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  },
  {
    id: 2,
    imgSrc: 'assets/img/chefs/chefs-2.jpg',
    name: 'Sarah Jhonson',
    role: 'Patissier',
    socialLinks: {
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  },
  {
    id: 3,
    imgSrc: 'assets/img/chefs/chefs-3.jpg',
    name: 'William Anderson',
    role: 'Cook',
    socialLinks: {
      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: ''
    }
  }
];

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Chefs</h2>
        <div>
          <span>Our Professional</span>{" "}
          <span className="description-title">Chefs</span>
        </div>
      </div>
      <div className="container">
        <div className="row gy-5">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * chef.id}
            >
              <div className="member">
                <div className="pic">
                  <img
                    src={chef.imgSrc}
                    className="img-fluid"
                    alt={chef.name}
                  />
                </div>
                <div className="member-info">
                  <h4>{chef.name}</h4>
                  <span>{chef.role}</span>
                  <div className="social">
                    {chef.socialLinks.twitter && (
                      <a href={chef.socialLinks.twitter}>
                        <i className="bi bi-twitter-x" />
                      </a>
                    )}
                    {chef.socialLinks.facebook && (
                      <a href={chef.socialLinks.facebook}>
                        <i className="bi bi-facebook" />
                      </a>
                    )}
                    {chef.socialLinks.instagram && (
                      <a href={chef.socialLinks.instagram}>
                        <i className="bi bi-instagram" />
                      </a>
                    )}
                    {chef.socialLinks.linkedin && (
                      <a href={chef.socialLinks.linkedin}>
                        <i className="bi bi-linkedin" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chefs;
