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
  fontSize = "md",
  imgStyle = "default",
  item = {
    weight: { imperial: "6 - 13", metric: "3 - 6" },
    height: { imperial: "9 - 11.5", metric: "23 - 29" },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
  },

  breedSpecs = [
    ["weight", { imperial: "6 - 13", metric: "3 - 6" }],
    ["height", { imperial: "9 - 11.5", metric: "23 - 29" }],
    ["bred_for", "Small rodent hunting, lapdog"],
    ["breed_group", "Toy"],
    ["life_span", "10 - 12 years"],
    [
      "temperament",
      "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    ],
    ["origin", "Germany, France"],
  ],
}: {
  fontSize?: string;
  imgStyle?: string;
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
  console.log(breedsSpecs);
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
          breedsSpecs={breedsSpecs && breedSpecs}
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
