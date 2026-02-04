import {
  ANIMATION,
  EXTERIOR,
  INTERIOR,
  VIDEO_KEY,
} from '@/components/Brief/Forms/formFieldsCostants';

/*const VISION_EXTERIOR_RU = "vision-exterior_ru";
const VISUAL_INTERIOR_RU = "visual-interior_ru";
const VISUAL_PREDMET_RU = "visual-predmet_ru";
const ARCHITECTURE_ANIMATION_RU = "architecture_animation_ru";
const MOTION_RU = "motion_ru";
const VIDEO_3D_RU = "3d_videos_ru";*/
const VISION_EXTERIOR_RU = '4'; //Экстерьерная Визуализация
const VISUAL_INTERIOR_RU = '5'; //Интерьерная визуализация
const VISUAL_PREDMET_RU = '6'; //Предметная 3D визуализация
const ARCHITECTURE_ANIMATION_RU = '2'; //Архитектурная анимация
const MOTION_RU = '1'; //Моушн Графика
const VIDEO_3D_RU = '3'; //3D Анимационные видео ролики
const selectedProject = [
  { attributes: { name: INTERIOR } },
  { attributes: { name: EXTERIOR } },
  { attributes: { name: ANIMATION } },
  { attributes: { name: VIDEO_KEY } },
];

export const getCategoryProject = (categoryId, directionId, categories) => {
  let selectCategory = categories[0];
  let selectProject = selectedProject[0];

  //if (categoryId === '7')
  if (categoryId === '1') {
    if (directionId === '2') {
      selectProject = selectedProject[1];
    }
  }
  //if (categoryId === '1')
  if (categoryId === '2') {
    selectCategory = categories[1];
  }

  //if (categoryId === '9')
  if (categoryId === '3') {
    selectCategory = categories[2];
    if (directionId === '3') {
      selectProject = selectedProject[2];
    }
    if (directionId === '4') {
      selectProject = selectedProject[3];
    }
  }
  return { selectCategory, selectProject };
};
