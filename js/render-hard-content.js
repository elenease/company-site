// Контейнеры
const hard_techs_block = document.querySelector(`.hard-techs .row`);
const hard_small_batch_block = document.querySelector(`.b-small-prod .row`);
const orders_done_block = document.querySelector(`.b-orders .row`);

// Рендерит элемент из строки
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

//////////////////////////////////////////////////////
// Рендеринг списка Выполненных заказов

// Рендеринг одной карточки мелкосер-го произв-ва
const render_order_card = (cardData) => {
  const string = `<div class="col-lg-4 col-md-12">
    <div class="card mb-4">
      <div class="view overlay" title="${cardData.tooltip}">
        <img class="card-img-top" src="img/hardware/orders/order-${cardData.img_id}.jpg" alt="${cardData.alt}">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body elegant-color white-text rounded-bottom">
        <p class="card-text white-text mb-4">${cardData.title}</p>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка карточек
const render_orders_done_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const order_card = render_order_card(element);
    fragment.appendChild(order_card);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_orders_done_list(orders_done_data, orders_done_block);

//////////////////////////////////////////////////////
// Рендеринг списка Мелкосерийного производства

// Рендеринг одной карточки мелкосер-го произв-ва
const render_batch_icon = (iconData) => {
  const string = `<div class="col-lg-4 col-md-12">
    <div class="card mb-5">
      <div class="view overlay z-depth-2 rounded" title="${iconData.tooltip}">
        <img class="card-img-top" src="img/hardware/small-batch/${iconData.img}" alt="${iconData.alt}">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body text-center z-depth-1 rounded pt-5">
        <h6 class="card-title">${iconData.title}</h6>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка технологий
const render_small_batch_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const batch_icon = render_batch_icon(element);
    fragment.appendChild(batch_icon);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_small_batch_list(small_serial_data, hard_small_batch_block);

//////////////////////////////////////////////////////

// Рендеринг одной иконки технологий
const render_hard_tech = (iconData) => {
  const string = `<div class="col mb-3">
     <div class="card hard-techs__card grey lighten-1 d-flex flex-column align-items-center justify-content-center px-2" style="min-height: 70px;">
       <h4 class="card-title text-center h4-responsive my-0">${iconData.title}</h4>
     </div>
   </div>`;
  return renderElement(string);
};

// Рендеринг списка технологий
const render_techs_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const hard_tech = render_hard_tech(element);
    fragment.appendChild(hard_tech);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_techs_list(hard_techns, hard_techs_block);
