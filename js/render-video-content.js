// Контейнер
const video_block = document.querySelector(`.video-gallery .row`);

const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// <i class="fas fa-ethernet pr-2"></i> - иконка для hardware
// <i class="fas fa-code pr-2"></i> - иконка для IT

// Рендеринг одной видео-карточки
const render_video_el = (videoData) => {
  const string = `<div class="col-lg-6 col-md-12">
    <div class="single-news mb-4">
      <div class="view overlay rounded z-depth-1-half mb-4">
        <iframe width="560" height="315" src="${videoData.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="news-data d-flex justify-content-between">
        <a class="red-text">
          <h6 class="font-weight-bold">${videoData.icon}${videoData.badge}</h6>
        </a>
        <p class="font-weight-bold dark-grey-text"><i class="fas fa-clock-o pr-2"></i>${videoData.date}</p>
      </div>
      <h3 class="font-weight-bold dark-grey-text mb-3">${videoData.title}</h3>
      <p class="dark-grey-text">${videoData.description}</p>
    </div>
  </div>`;
  return renderElement(string);
};

// Рендеринг списка видео-роликов
const render_video_list = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const video_el = render_video_el(element);
    fragment.appendChild(video_el);
  });

  container.appendChild(fragment);
};

// Отрисовка списка технологий на страницу
render_video_list(video_tracks, video_block);
