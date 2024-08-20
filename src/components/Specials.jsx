import { Tabs } from 'antd';

export default function Specials() {
  const specialItems = [
    {
      id: 'specials-tab-1',
      title: 'Modi sit est',
      heading: 'Architecto ut aperiam autem id',
      description: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      details: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
      imgSrc: 'assets/img/specials-1.jpg',
    },
    {
      id: 'specials-tab-2',
      title: 'Unde praesentium sed',
      heading: 'Et blanditiis nemo veritatis excepturi',
      description: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
      details: 'Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
      imgSrc: 'assets/img/specials-2.jpg',
    },
    {
      id: 'specials-tab-3',
      title: 'Pariatur explicabo vel',
      heading: 'Impedit facilis occaecati odio neque aperiam sit',
      description: 'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
      details: 'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
      imgSrc: 'assets/img/specials-3.jpg',
    },
    {
      id: 'specials-tab-4',
      title: 'Nostrum qui quasi',
      heading: 'Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore',
      description: 'Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus',
      details: 'Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore',
      imgSrc: 'assets/img/specials-4.jpg',
    },
    {
      id: 'specials-tab-5',
      title: 'Iusto ut expedita aut',
      heading: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
      description: 'Omnis blanditiis saepe eos autem qui sunt debitis porro quia.',
      details: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
      imgSrc: 'assets/img/specials-5.jpg',
    },
  ];

  const tabItems = specialItems.map((special) => ({
    key: special.id,
    label: special.title,
    children: (
      <div className="row">
        <div className="col-lg-8 details">
          <h3>{special.heading}</h3>
          <p className="fst-italic">{special.description}</p>
          <p>{special.details}</p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={special.imgSrc}
            alt={special.title}
            className="img-fluid"
          />
        </div>
      </div>
    ),
  }));

  return (
    <section id="specials" className="specials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Specials</h2>
        <div>
          <span>Check Our</span>{" "}
          <span className="description-title">Specials</span>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-12 mt-4 mt-lg-0">
            <Tabs tabPosition="left" items={tabItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
