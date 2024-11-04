const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "He delivered a website design that was perfectly aligned with our vision, exceeding our expectations. His comprehensive approach and attention to detail made working with him an exceptionally enjoyable experience."
              </span>
              <span className="person">Aysu Kılınç</span>
              <span className="job">Founder - Miella Studio</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Ufuk redesigned our website exactly as we wanted and exceeded our expectations. With his command of the process and attention to detail, we were very pleased to work with him. We highly recommend him."
              </span>
              <span className="person">Melek Atıcı</span>
              <span className="job">Broker - Atıcı Gayrimenkul</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
