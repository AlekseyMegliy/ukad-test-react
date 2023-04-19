import SingleBreed from "../pages/SingleBreedPage/SingleBreed";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "SingleBreeds",
  component: SingleBreed,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    imgStyle: {
      control: { type: "radio" },
      options: ["default", "square", "3/4"],
      description: "Select direction",
    },
    fontSize: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "Select direction",
    },
  },
} as Meta;

type Story = StoryObj<typeof SingleBreed>;

export const Base: Story = {
  args: {
    imgStyle: "default",
    fontSize: "md",
    item: {
      weight: { imperial: "6 - 13", metric: "3 - 6" },
      height: { imperial: "9 - 11.5", metric: "23 - 29" },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      reference_image_id: "BJa4kxc4X",
    },

    breedSpecs: [
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
  },
};
export const Square: Story = {
  args: {
    imgStyle: "square",
    fontSize: "md",
    item: {
      weight: { imperial: "6 - 13", metric: "3 - 6" },
      height: { imperial: "9 - 11.5", metric: "23 - 29" },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      reference_image_id: "BJa4kxc4X",
    },

    breedSpecs: [
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
  },
};
export const ThreeFour: Story = {
  args: {
    imgStyle: "3/4",
    fontSize: "lg",
    item: {
      weight: { imperial: "6 - 13", metric: "3 - 6" },
      height: { imperial: "9 - 11.5", metric: "23 - 29" },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      reference_image_id: "BJa4kxc4X",
    },

    breedSpecs: [
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
  },
};
