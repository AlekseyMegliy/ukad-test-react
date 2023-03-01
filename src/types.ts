export type Length = {
  imperial: string;
  metric: string;
};
export type LinkProps = {
  isActive: boolean;
};

export type BreedType = {
  weight: Length;
  height: Length;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id?: string;
  description: string;
  image?: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

export interface ProductCardProps {
  limit: number;
  dogy: BreedType;
}

export interface SliderComponentProps {
  breed: BreedType[];
}
