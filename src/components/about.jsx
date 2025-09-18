import placeholderImage from "../assets/placeholderImage.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Mokoka Web Studio</strong>, we specialize in building
            clean, modern, and responsive websites tailored to your business
            needs. Our goal is to help you establish a strong digital presence
            and grow your brand online.
          </p>
          <p>
            With a focus on design, performance, and search optimization, we
            ensure every project not only looks great but also delivers results.
          </p>
        </div>

        <div className="about-image">
          <img src={placeholderImage} alt="About Mokoka Web Studio" />
        </div>
      </div>
    </section>
  );
}

export default About;
