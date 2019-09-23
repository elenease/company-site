// Контейнеры
const projects_block = document.querySelector(`.cards .row`);
const clients_block = document.querySelector(`.clients__list`);
const advantages_block = document.querySelector(`.our-features .row`);

// Рендерит элемент из строки
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// Рендеринг одного проекта
const render_project = (projectData) => {
  const string = `<div class="cards__card col-lg-4 col-md-12 animated ${projectData.show_animation}">
    <div class="card mb-5">
      <div class="card-image view ${projectData.photo_effect} overlay" title="${projectData.tooltip}">
        <img src="${projectData.img}" class="card-img-top" alt="${projectData.alt}">
        <a href="${projectData.details_link}">
          <div class="mask rgba-white-slight"></div>
        </a>
        <span class="card-body__badge badge badge-primary mb-2">#${projectData.badge}</span>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title">${projectData.title}</h4>
        <p class="card-text">${projectData.description}</p>
        <a href="${projectData.more_screens_link}" class="btn btn-dark btn-sm"><i class="fas fa-clone left"></i>Рассмотреть</a>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка клиентов
const render_projects_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const project = render_project(element);
    fragment.appendChild(project);
  });

  container.appendChild(fragment);
};

// Отрисовка списка проектов на страницу
render_projects_list(projects, projects_block);

// Рендеринг одного клиента
const render_client = (clientData) => {
  const string = `<li class="clients__item mx-4 my-3">
    <a class="d-flex flex-column align-items-center" href="${clientData.link}" rel="nofollow">
      <img class="mb-2" src="${clientData.img}" alt="${clientData.alt}" width="${clientData.width}" title="${clientData.tooltip}">
      <p class="black-text">${clientData.title}</p>
    </a>
  </li>`;
  return renderElement(string);
};

// Рендеринг списка клиентов
const render_clients_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const client = render_client(element);
    fragment.appendChild(client);
  });

  container.appendChild(fragment);
};

// Отрисовка списка клиентов на страницу
render_clients_list(clients, clients_block);

// Рендеринг одного преимущества
const render_advantage = (advData) => {
  const string = `<div class="col-12 col-sm-6 col-lg-4 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title text-center my-3">${advData.title}</h4>
        <p class="card-text text-center">${advData.description}</p>
      </div>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка преимуществ
const render_advant_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const advantage = render_advantage(element);
    fragment.appendChild(advantage);
  });

  container.appendChild(fragment);
};

// Отрисовка списка преимуществ на страницу
render_advant_list(advantages, advantages_block);
