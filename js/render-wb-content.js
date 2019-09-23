// Отрисовка контента Мастерской

// Блок для отрисовки списка иконок техн-гий
const tech_list_block = document.querySelector(`.technologies__list`);
// Блок для отрисовки списка готовых работ
const wb_done_works = document.querySelector(`.completed-projects .row`);
// Аккордеон
const accordion = document.getElementById(`accordionEx23`);

// Рендерит элемент из строки
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

//////////////////// АККОРДЕОН ////////////////////////
const accord_id = accordion.id;

// Рендеринг одной вкладки аккордеона
const render_accord_el = (elData) => {
  const string = `<div class="card">
    <div class="card-header elegant-color z-depth-1" role="tab" id="heading${elData.id}">
      <h5 class="text-uppercase mb-0 py-1">
        <a class="${elData.show ? `` : `collapsed`} font-weight-bold white-text" data-toggle="collapse" href="#collapse${elData.id}" aria-expanded="${elData.show}" aria-controls="collapse${elData.id}">
          <i class="fas fa-arrow-down fa-lg white-text mr-3"></i>${elData.title}
        </a>
      </h5>
    </div>
    <div id="collapse${elData.id}" class="collapse ${elData.show ? `show` : ``}" role="tabpanel" aria-labelledby="heading${elData.id}" data-parent="#${accord_id}">
      <div class="card-body">
        <div class="row mb-4">
          <div class="col-md-8">
            <h2 class="font-weight-bold mb-3 black-text">${elData.subtitle}</h2>
            ${elData.description}
          </div>
          <div class="col-md-4 mt-3 pt-2">
            <div class="view z-depth-1" title="${elData.tooltip}">
              <img src="img/accordeon-work/${elData.img}" alt="${elData.alt}" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка готовых работ
const render_accordion_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const work = render_accord_el(element);
    fragment.appendChild(work);
  });

  container.appendChild(fragment);
};

// Вызываем рендеринг списка готовых работ
render_accordion_list(wb_accord_data, accordion);

//////////////////// ГОТОВЫЕ РАБОТЫ ////////////////////////

// Рендеринг одной готовой работы
const render_done_work = (workData) => {
  const href_attr = workData.link ? `href="${workData.link}"` : ``;
  const string = `<div class="col-lg-4 col-md-12">
    <div class="card mb-5">
      <div class="view ${workData.link ? `zoom` : ``} overlay">
        <img class="card-img-top" src="${workData.img}" alt="${workData.title}" title="${workData.tooltip}">
        <a ${href_attr}>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body elegant-color white-text rounded-bottom">
        <h4 class="card-title">${workData.title}</h4>
        <hr class="hr-light">
        <p class="card-text white-text mb-4">${workData.description}</p>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка готовых работ
const render_wb_works_done_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const work = render_done_work(element);
    fragment.appendChild(work);
  });

  container.appendChild(fragment);
};

// Вызываем рендеринг списка готовых работ
render_wb_works_done_list(wb_works, wb_done_works);

///////////////////// ИКОНКИ ТЕХНОЛОГИЙ ///////////////////////

// Рендеринг одной иконки
const render_tech_icon = (iconData) => {
  const string = `<li class="technologies__item mb-3 wow animated ${iconData.animation}">
    <a class="d-flex">
      <img class="mb-2" src="img/techs/${iconData.img}" alt="${iconData.title}" title="${iconData.tooltip}" width="100">
      <h6 class="card-title black-text">${iconData.title}</h6>
    </a>
    </li>`;
  return renderElement(string);
};

// Рендеринг списка иконок технологий из массива
const render_wb_techs_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const li = render_tech_icon(element);
    fragment.appendChild(li);
  });

  container.appendChild(fragment);
};

// Вызываем рендеринг списка иконок технологий
render_wb_techs_list(wb_techs, tech_list_block);
