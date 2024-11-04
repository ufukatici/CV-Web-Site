const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Ufuk Atıcı</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://ufukatici.online"
          >
            Ufuk Atıcı
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/ufukatc">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ufuk-atici">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@ufukatici">
              <i className="fa-brands fa-medium" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/ufuukatc/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
