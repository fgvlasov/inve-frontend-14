import {
  ANIMATION,
  ARCHITECH_VIS,
  EXTERIOR,
  INTERIOR,
  MODELING,
  MOTION,
  PRODUCT_VIS,
  VIDEO_KEY,
  exteriorFieldsInputs,
  interiorFieldsInputs,
  modeling,
  productVisualization,
  videoAnimation,
  videoBykey,
} from "./formFieldsCostants";

export const selectFieldsForForm = (category, projectType) => {
  if (!category) return null;

  switch (category.attributes.name) {
  case ARCHITECH_VIS:
    if (projectType?.attributes?.name === INTERIOR)
      return interiorFieldsInputs;
    if (projectType?.attributes?.name === EXTERIOR)
      return exteriorFieldsInputs;
    return null;
  case PRODUCT_VIS:
    return productVisualization;
  case MOTION:
    if (projectType?.attributes?.name === ANIMATION) return videoAnimation;
    if (projectType?.attributes?.name === VIDEO_KEY) return videoBykey;
    return null;
  case MODELING:
    return modeling;
  default:
    return null;
  }
};
