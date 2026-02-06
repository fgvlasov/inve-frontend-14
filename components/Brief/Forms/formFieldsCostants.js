import {
  ADVERTISED_PRODUCT,
  ANIMATION_TASK,
  BUDGET,
  CHRONOMETRY_VIDEO,
  DESCRIPTION_PRODUCT,
  EXAMPLE_LINK,
  EXTRA_DESCRIPTION,
  FILM_TYPE,
  HEIGHT_POINT_VIEW,
  MAP_LINK,
  MATERIALS,
  MODEL_3D,
  MODEL_QUANTITY,
  MORNING_POINT_VIEW,
  NIGHT_POINT_VIEW,
  PROJECT_DATES,
  PROJECT_NAME,
  PROJECT_QUANTITY,
  PROJECT_RESOLUTION,
  PROJECT_SQUARE,
  PROJECT_TASK,
  PROPERTY_CLASS,
  RENDERING_MOVIE,
  RENDER_NO_OPACITY,
  RENDER_OPACITY,
  SCENARIO,
  SEASON,
  TECHNICAL_REQUIREMENTS,
  VIDEO_TYPE,
  VISUALIZATION_OBJECT,
} from "./fieldNames";

export const ARCHITECH_VIS = "Архитектурная визуализация для ваших проектов";
export const INTERIOR = "Интерьерная";
export const EXTERIOR = "Экстерьерная";
export const PRODUCT_VIS = "Продуктовая 3D визуализация";
export const MOTION = "Моушн дизайн & Видеопродакшн";
export const ANIMATION = "3D Анимация: От Идеи до Воплощения Вашего Проекта";
export const VIDEO_KEY = "Видеопродакшн под ключ";
export const MODELING = "Интерактивное 3D моделирование для бизнеса";

const interiorSelectOptions = [
  { attributes: { Title: "Квартира" } },
  { attributes: { Title: "Частный дом" } },
  { attributes: { Title: "Кафе" } },
  { attributes: { Title: "Ресторан" } },
  { attributes: { Title: "Офисное Помещение" } },
  { attributes: { Title: "Другое" } },
];

const visualizationObjectOptions = [
  { attributes: { Title: "Коммерческая недвижимость" } },
  { attributes: { Title: "Продукт" } },
  { attributes: { Title: "Ландшафт" } },
];

export const interiorFieldsInputs = [
  {
    name: PROJECT_NAME,
    type: "input",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: VISUALIZATION_OBJECT,
    label: { text: "Объект визуализации", required: true },
    input: {
      options: interiorSelectOptions,
    },
  },
  {
    type: "input",
    name: PROJECT_DATES,
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,

      error: "This field is required",
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },
  {
    name: PROJECT_SQUARE,
    type: "input",
    label: {
      text: "Площадь помещений визуализации",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите площадь",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    name: PROJECT_RESOLUTION,
    type: "input",
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,

      error: "",
    },
  },
  {
    type: "input",
    name: EXTRA_DESCRIPTION,
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

const exteriorSelectOptions = [
  { attributes: { Title: "Частный дом" } },
  { attributes: { Title: "Многоквартирный жилой дом" } },
  { attributes: { Title: "Коттеджный поселок" } },
  { attributes: { Title: "Жилой комплекс" } },
  { attributes: { Title: "Офисное здание" } },
  { attributes: { Title: "Здание общепита" } },
];

const exteriorClassOptions = [
  { attributes: { Title: "Комфорт класса" } },
  { attributes: { Title: "Бизнес класса" } },
  { attributes: { Title: "Элит класса" } },
];

const exteriorModelOptions = [
  { attributes: { Title: "Есть" } },
  { attributes: { Title: "Нет" } },
  { attributes: { Title: "Требует доработки" } },
];

const exteriorSeasonOptions = [
  { attributes: { Title: "Весна" } },
  { attributes: { Title: "Лето" } },
  { attributes: { Title: "Осень" } },
  { attributes: { Title: "Зима" } },
];

const yesNoOptions = [
  { attributes: { Title: "Да" } },
  { attributes: { Title: "Нет" } },
];

export const exteriorFieldsInputs = [
  {
    name: PROJECT_NAME,
    type: "input",
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    name: VISUALIZATION_OBJECT,
    type: "select",
    label: { text: "Объект визуализации", required: true },
    input: {
      options: exteriorSelectOptions,
    },
  },
  {
    name: MODEL_3D,
    type: "select",
    label: { text: "3D модель", required: true },
    input: {
      options: exteriorModelOptions,
    },
  },
  {
    name: PROJECT_DATES,
    type: "input",
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: PROPERTY_CLASS,
    label: {
      text: "Класс недвижимости",
      required: true,
    },
    input: {
      options: exteriorClassOptions,
    },
  },
  {
    type: "input",
    name: MAP_LINK,
    label: {
      text: "Местоположение обьекта",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите местоположение обьекта",
      pattern: false,
      error: "",
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество необходимых ракурсов",
      required: false,
    },
  },

  {
    type: "select",
    name: SEASON,
    label: {
      text: "Время года",
      required: true,
    },
    input: {
      options: exteriorSeasonOptions,
    },
  },
  {
    type: "input",
    name: HEIGHT_POINT_VIEW,
    label: {
      text: "Количество ракурсов с высоты птичьего полета",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество ракурсов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: NIGHT_POINT_VIEW,
    label: {
      text: "Количество ночных/вечерних изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      error: "",
    },
  },

  {
    type: "input",
    name: MORNING_POINT_VIEW,
    label: {
      text: "Количество утренних/дневных изображений",
      required: false,
    },
    input: {
      type: "number",
      placeholder: "Введите количество изображений",
      pattern: false,
      error: "",
    },
  },
  {
    type: "select",
    name: RENDERING_MOVIE,
    label: {
      text: "Фотосъемка для рендеринга",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "input",
    name: PROJECT_RESOLUTION,
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXTRA_DESCRIPTION,
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

export const productVisualization = [
  {
    type: "input",
    name: PROJECT_NAME,
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "select",
    name: VISUALIZATION_OBJECT,
    label: { text: "Объект визуализации", required: true },
    input: {
      options: visualizationObjectOptions,
    },
  },
  {
    type: "select",
    name: MODEL_3D,
    label: { text: "3D модель", required: true },
    input: {
      options: exteriorModelOptions,
    },
  },
  {
    type: "input",
    name: PROJECT_QUANTITY,
    label: {
      text: "Клоличество продуктов",
      required: true,
    },
    input: {
      type: "number",
      placeholder: "Введите количество продуктов",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: PROJECT_DATES,
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "select",
    name: RENDER_OPACITY,
    label: {
      text: "Рендер на прозрачном фоне",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "select",
    name: RENDER_NO_OPACITY,
    label: {
      text: "Рендер продукта в интерьере",
      required: false,
    },
    input: {
      options: yesNoOptions,
    },
  },
  {
    type: "counter",
    name: "counter",
    label: {
      text: "Общее количество ракурсов на продукт",
      required: false,
    },
  },

  {
    type: "input",
    name: PROJECT_RESOLUTION,
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXTRA_DESCRIPTION,
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

const videoTypesProdyction = [
  { attributes: { Title: "Имиджевый" } },
  { attributes: { Title: "Продуктовый" } },
  { attributes: { Title: "Акционный (промо)" } },
  { attributes: { Title: "Презентация" } },
];

const filmTypesProdyction = [
  { attributes: { Title: "2D-графика" } },
  { attributes: { Title: "3D-графика" } },
  { attributes: { Title: "Мультипликация" } },
  { attributes: { Title: "Смешанный" } },
];

export const videoBykey = [
  {
    type: "input",
    name: PROJECT_NAME,
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "select",
    name: VIDEO_TYPE,
    label: {
      text: "Тип видеоролика",
      required: true,
    },
    input: {
      options: videoTypesProdyction,
    },
  },

  {
    type: "select",
    name: FILM_TYPE,
    label: {
      text: "Вид видеоролика",
      required: true,
    },
    input: {
      options: filmTypesProdyction,
    },
  },
  {
    type: "input",
    name: ADVERTISED_PRODUCT,
    label: {
      text: "Рекламируемый товар/услуга/продукт",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: PROJECT_DATES,
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: DESCRIPTION_PRODUCT,
    label: {
      text: "Описание товар/услуга/продукт",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите тип",
      pattern: false,
      error: "",
    },
  },

  {
    type: "input",
    name: CHRONOMETRY_VIDEO,
    label: {
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: BUDGET,
    label: {
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: MATERIALS,
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXAMPLE_LINK,
    label: {
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: PROJECT_RESOLUTION,
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXTRA_DESCRIPTION,
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

const scenarioOptions = [
  { attributes: { Title: "Да" } },
  { attributes: { Title: "Нет" } },
  { attributes: { Title: "Доработать" } },
];

export const videoAnimation = [
  {
    type: "input",
    name: PROJECT_NAME,
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: ANIMATION_TASK,
    label: {
      text: "Задача анимации",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Введите задача анимации",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: PROJECT_DATES,
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: CHRONOMETRY_VIDEO,
    label: {
      text: "Хронометраж видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый хронометраж",
      pattern: false,
      error: "",
    },
  },
  {
    type: "select",
    name: SCENARIO,
    label: {
      text: "Наличие сценария",
      required: true,
    },
    input: {
      options: scenarioOptions,
    },
  },
  {
    type: "input",
    name: BUDGET,
    label: {
      text: "Бюджет на создание видеоролика",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите пердполагаемый бюджет",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: MATERIALS,
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXAMPLE_LINK,
    label: {
      text: "Ссылка на пример видеоролика:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите ссылку на пример видеоролика",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: PROJECT_RESOLUTION,
    label: {
      text: "Необходимое разрешение финальных обьектов",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите необходимое разрешение",
      pattern: false,
      error: "",
    },
  },
  {
    type: "input",
    name: EXTRA_DESCRIPTION,
    label: {
      text: "Дополнительное описание:",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Дополнительное описание:",
      pattern: false,
      error: "",
    },
  },
];

const requirementsOptions = [
  { attributes: { Title: "Инженерная CAD модель" } },
  { attributes: { Title: "Для печати/фрезеровки" } },
  { attributes: { Title: "Для визуализации" } },
];

export const modeling = [
  {
    type: "input",
    name: PROJECT_NAME,
    label: { text: "Название проекта", required: true },
    input: {
      type: "text",
      placeholder: "Введите название вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },
  {
    type: "input",
    name: MODEL_QUANTITY,
    label: {
      text: "Количество моделей",
      required: true,
    },
    input: {
      type: "number",
      max: 50,
      placeholder: "Введите количество моделей",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: PROJECT_TASK,
    label: {
      text: "Модель чего нужно создать",
      required: true,
    },
    input: {
      type: "text",
      placeholder: "Опишите модель",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: PROJECT_DATES,
    label: { text: "Срок сдачи", required: true },
    input: {
      type: "text",
      placeholder: "Введите сроки вашего проекта",
      pattern: true,
      error: "This field is required",
    },
  },

  {
    type: "input",
    name: MATERIALS,
    label: {
      text: "Материалы которые можете предоставить",
      required: false,
    },
    input: {
      type: "text",
      placeholder: "Введите примеры материалов",
      pattern: false,
      error: "",
    },
  },

  {
    type: "select",
    name: TECHNICAL_REQUIREMENTS,
    label: {
      text: "Технические требования",
      required: true,
    },
    input: {
      options: requirementsOptions,
    },
  },
];
