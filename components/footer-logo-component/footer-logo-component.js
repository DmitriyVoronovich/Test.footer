class FooterLogoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer-logo">
        <img class="footer-logo__img" src="accepts/logo.svg" alt="Логотип">
        <p class="footer-logo__info">
          Лицензия на осуществление медицинской
          деятельности Л041-01137-77/00496389
          от 15.06.2022г.
        </p>
      </div>
    `;
  }
}
customElements.define('footer-logo-component', FooterLogoComponent);
