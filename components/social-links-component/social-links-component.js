class SocialLinksComponent extends HTMLElement {
  constructor() {
    super();
    this.socialLinks = [
      {img: "accepts/vk.svg", url: "/"},
      {img: "accepts/telegram.svg", url: "/"},
      {img: "accepts/ok.svg", url: "/"},
      {img: "accepts/instagram.svg", url: "/"},
      {img: "accepts/facebook.svg", url: "/"},
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="social-links">
  <ul class="social-links__list">
    ${this.socialLinks.map(item => `
      <li class="social-links__item">
        <a href="${item.url}" >
          <img src="${item.img}" alt="Иконка социальной сети">
        </a>
      </li>
    `).join('')}
  </ul>
</div>
    `;
  }
}

customElements.define('social-links-component', SocialLinksComponent);
