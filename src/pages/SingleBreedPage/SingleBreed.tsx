import { useState, useEffect, useMemo } from "react";
import "./singleBreed.scss";
import { useLocation } from "react-router-dom";
import { BreedType } from "../../types";
import { ImageType } from "../../types";
import { Link } from "react-router-dom";
import BreedData from "../../components/ui/singleBreed/BreedData";
import Loader from "../../components/ui/loader/Loader";
import { useAppSelector } from "../../shared/utils";

export default function SingleBreed({
  fontSize,
  imgStyle,
  item,
  breedSpecs,
}: {
  fontSize?: "sm" | "md" | "lg";
  imgStyle?: "default" | "square" | "3/4";
  item?: any;
  breedSpecs?: any;
}) {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const [breed, setBreed] = useState<BreedType>(item);
  const [image, setImage] = useState<ImageType>();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((res) => res.json())
      .then((data) => setBreed(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
      });
  }, [id]);

  useEffect(() => {
    if (!breed) {
      return;
    }
    fetch(`https://api.thedogapi.com/v1/images/${breed.reference_image_id}`)
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
      });
  }, [breed]);

  const breedsSpecs = useMemo(() => {
    return (
      breed &&
      Object.entries(breed).filter(
        ([name]) =>
          !["reference_image_id", "description", "id", "name"].includes(name)
      )
    );
  }, [breed]);
  return (
    <div className="single-breed container-fluid ">
      <Link
        to={{
          pathname: "/products",
          search: `?page=${useAppSelector((state) => state.page.page)}`,
        }}
        className="single-breed__link offset-md-1 col-md-7 col-lg-4"
      >
        &lt;-Go to product list
      </Link>
      {breed && breedsSpecs ? (
        <BreedData
          breed={breed}
          breedsSpecs={breedSpecs}
          image={image}
          imgStyle={imgStyle}
          fontSize={fontSize}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
