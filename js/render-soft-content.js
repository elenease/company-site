// Контейнеры
const techns_block = document.querySelector(`.b-techns .row`);
const offer_block = document.querySelector(`.soft-offers`);
// const advantages_block = document.querySelector(`.our-features .row`);

const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

///////////////////////////////////////

// Рендеринг одного предложения 
const render_offer_el = (offerData) => {
  const string = `<div class="col-12 col-sm-6 col-lg-3 mb-1 animated ${offerData.animation}" style="animation-delay: ${offerData.animation_delay}s;">
     <i class="fas ${offerData.icon} fa-4x ${offerData.icon_color}-text"></i>
     <div>
       <h4 class="font-weight-bold my-4">${offerData.title}</h4>
       <p class="black-text">${offerData.description}</p>
     </div>
   </div>`;
  return renderElement(string);
};

// Рендеринг списка технологий
const render_offers_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const offer_el = render_offer_el(element);
    fragment.appendChild(offer_el);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_offers_list(software_offers, offer_block);

///////////////////////////////////////

// Рендеринг одного элемента технологий 
const render_techns_el = (elData) => {
  const string = `<div class="col">
    <div class="card">
      <div class="b-techns__img d-flex flex-column align-items-center justify-content-center mb-2">
        ${elData.img}
      </div>
      <h5 class="card-title">${elData.title}</h5>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка технологий
const render_techns_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const tech_el = render_techns_el(element);
    fragment.appendChild(tech_el);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_techns_list(code_techns, techns_block);
