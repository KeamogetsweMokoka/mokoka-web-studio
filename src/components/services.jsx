import placeholderImage from "../assets/placeholderImage.jpg"; 

function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Simple copy for web design card",
      image: placeholderImage,
    },
    {
      title: "Search Engine Optimization",
      description: "Simple copy for SEO card",
      image: placeholderImage,
    },
    {
      title: "Copywriting",
      description: "Simple copy for copywriting card",
      image: placeholderImage,
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="text-container">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services