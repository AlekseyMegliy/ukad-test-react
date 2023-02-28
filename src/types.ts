export type BreedType = {
  weight: { imperial: string; metric: string };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
  [key: string]: any;
};

export interface ProductCardProps {
  limit: number;
  dogy: BreedType;
}

export interface SliderComponentProps {
  breed: BreedType[];
}
