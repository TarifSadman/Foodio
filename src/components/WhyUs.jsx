export default function WhyUs() {
  const cards = [
    {
      delay: 100,
      number: '01',
      title: 'Lorem Ipsum',
      description: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
    },
    {
      delay: 200,
      number: '02',
      title: 'Repellat Nihil',
      description: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest'
    },
    {
      delay: 300,
      number: '03',
      title: 'Ad ad velit qui',
      description: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis'
    }
  ];

  return (
    <section id="why-us" className="why-us section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Us</h2>
        <div>
          <span>Why choose</span>{" "}
          <span className="description-title">Our Restaurant</span>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={card.delay}>
              <div className="card-item">
                <span>{card.number}</span>
                <h4>
                  <a href="" className="stretched-link">
                    {card.title}
                  </a>
                </h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
