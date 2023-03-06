export type Length = {
  imperial: string;
  metric: string;
};
export type LinkProps = {
  isActive: boolean;
};
export type ImageType = {
  id: string;
  url: string;
  breeds?: BreedType;
  width: number;
  height: number;
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
  image?: ImageType;
};

export interface ProductCardProps {
  dogy: BreedType;
}

export interface SliderComponentProps {
  breed: BreedType[];
}

type BreedsSpecs = [string, string | number | Length | ImageType][];

export interface BreedDataProps {
  breed: BreedType;
  breedsSpecs: BreedsSpecs;
  image?: ImageType;
}
