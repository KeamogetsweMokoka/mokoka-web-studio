function Pricing() {
  const websitePlans = [
    {
      title: "Standard",
      price: "R5,999 (once-off)",
      description: "Perfect for small businesses needing a professional online presence.",
      features: ["Up to 3 pages", "Responsive design", "Basic SEO setup"],
    },
    {
      title: "Premium",
      price: "R7,999 (once-off)",
      description: "Ideal for growing businesses that want more flexibility.",
      features: [
        "Up to 6 pages",
        "Custom design",
        "Advanced SEO setup",
        "Blog integration",
      ],
    },
  ];

  const monthlyPlan = {
    title: "Hosting, Maintenance & SEO",
    price: "R300 / month",
    description:
      "Keep your website updated, optimized, and running smoothly with our ongoing plan.",
    features: [
      "Monthly updates & backups",
      "Bug fixes & security patches",
      "Ongoing SEO improvements",
      "Priority support",
    ],
  };

  return (
    <section className="pricing" id="pricing">
      <h2 className="pricing-title">Our Pricing</h2>
      {/* Once-off website builds */}
      <div className="pricing-container">
        {websitePlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="plan-btn">Choose {plan.title}</button>
          </div>
        ))}
      </div>
      {/* Monthly plan */}
      <div className="pricing-container">
        <div className="pricing-card featured">
          <h3 className="plan-title">{monthlyPlan.title}</h3>
          <p className="plan-price">{monthlyPlan.price}</p>
          <p className="plan-description">{monthlyPlan.description}</p>
          <ul className="plan-features">
            {monthlyPlan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="plan-btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing