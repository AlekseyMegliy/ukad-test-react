import Card from "../components/ui/productCard/ProductCard";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Cards",
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    imgStyle: {
      control: { type: "select" },
      options: ["default", "square", "contain"],
      description: "Select image style",
      defaultValue: "default",
    },
  },
} as Meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {
    imgStyle: "default",
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    image: {
      id: "BJa4kxc4X",
      width: 1600,
      height: 1199,
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    },
  },
};
export const Square: Story = {
  args: {
    imgStyle: "square",
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    image: {
      id: "BJa4kxc4X",
      width: 1600,
      height: 1199,
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    },
  },
};
export const Contain: Story = {
  args: {
    imgStyle: "contain",
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6",
    },
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29",
    },
    id: 1,
    name: "Affenpinscher",
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    life_span: "10 - 12 years",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    image: {
      id: "BJa4kxc4X",
      width: 1600,
      height: 1199,
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    },
  },
};
