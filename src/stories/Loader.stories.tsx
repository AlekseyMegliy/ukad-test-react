import Loader from "../components/ui/loader/Loader";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Loaders",
  component: Loader,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: [50, 100, 150],
      description: "Select size",
    },
    color: {
      control: { type: "radio" },
      options: ["#022b32", "black", "blue"],
      description: "Select size",
    },
  },
} as Meta;

type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  args: {
    size: 100,
    radius: 5,
    color: "#022b32",
  },
};
export const Small: Story = {
  args: {
    size: 50,
    radius: 5,
    color: "#022b32",
  },
};
export const Big: Story = {
  args: {
    size: 150,
    radius: 5,
    color: "#022b32",
  },
};
