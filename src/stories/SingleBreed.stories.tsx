import SingleBreed from "../pages/SingleBreedPage/SingleBreed";
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

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
  },
};
export const Square: Story = {
  args: {
    imgStyle: "square",
    fontSize: "md",
  },
};
export const ThreeFour: Story = {
  args: {
    imgStyle: "3/4",
    fontSize: "lg",
  },
};
