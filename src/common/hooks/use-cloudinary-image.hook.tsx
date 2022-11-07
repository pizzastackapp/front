import { cloudinary } from '@app/core/cloudinary';

export const useCloudinaryImage = (
  cloudinaryImage: string,
  transformations: string[]
) => {
  const image = cloudinary.image(cloudinaryImage);

  const transforms = [...transformations, 'dpr_2.0'];

  image.addTransformation(transforms.join(','));

  return image;
};
