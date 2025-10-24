class MenuComponent extends HTMLElement {
  constructor() {
    super();
    this.menuItemsLeft = [
      { title: "Услуги", url: "/" },
      { title: "Цены", url: "/" },
      { title: "Акции", url: "/" },
      { title: "Врачи", url: "/" },
      { title: "Наши работы", url: "/" },
      { title: "Отзывы", url: "/" },
    ];
    this.menuItemsRight = [
      { title: "О нас", url: "/" },
      { title: "Документы", url: "/" },
      { title: "Статьи", url: "/" },
      { title: "Частые вопросы", url: "/" },
      { title: "Вакансии", url: "/" },
      { title: "Контакты", url: "/" },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="menu">
        <ul class="menu__list">
          ${this.menuItemsLeft.map(item => `
            <li class="menu__item">
              <a href="${item.url}" class="menu__link">${item.title}</a>
            </li>
          `).join('')}
        </ul>
        <ul class="menu__list">
          ${this.menuItemsRight.map(item => `
            <li class="menu__item">
              <a href="${item.url}" class="menu__link">${item.title}</a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}

customElements.define('menu-component', MenuComponent);
