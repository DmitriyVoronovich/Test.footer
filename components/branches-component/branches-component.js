class BranchesComponent extends HTMLElement {
  constructor() {
    super();
    this.branches = [
      {address: "ул. Лесная, д.23, корп 100.", phone: "+7 917 017-04-22"},
      {address: "ул. Центральная, д.45.", phone: "+7 917 123-45-67"},
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="branches">
  <ul class="branches__list">
    <li class="branches__item">
      <span class="branches__address">ул. Лесная, д.23, корп 100.</span>
      <span class="branches__phone">тел.: +7 917 017-04-22</span>
    </li>
    <li class="branches__item">
      <span class="branches__address">ул. Центральная, д.45.</span>
      <span class="branches__phone">тел.: +7 917 123-45-67</span>
    </li>
    <li class="branches__item">
      <span class="branches__address">Проспект Победы, д.12</span>
      <span class="branches__phone branches__phone--secondary">тел.: +7 917 987-65-43</span>
    </li>
  </ul>
</div>
    `;
  }
}

customElements.define('branches-component', BranchesComponent);
