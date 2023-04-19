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
  imgStyle?: "default" | "square" | "contain";
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
  items: BreedType[];
}

type BreedsSpecs = [string, string | number | Length | ImageType][];

export interface BreedDataProps {
  fontSize?: "sm" | "md" | "lg";
  imgStyle?: "default" | "square" | "3/4";
  breed: BreedType;
  breedsSpecs: BreedsSpecs;
  image?: ImageType;
}

export interface UsePaginationProps {
  numberOfCards: number;
  listLength: number;
}
export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
}
export type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn;
