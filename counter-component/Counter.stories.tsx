// src/Counter.stories.tsx
import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
} as Meta<typeof Counter>;

const RENDER_DELAY = 1000;

const Template: StoryFn<typeof Counter> = (args) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const button = document.querySelector('[data-testid="increment-button"]');
      if (button) {
        (button as HTMLButtonElement).click();
      }
    }, RENDER_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return <Counter {...args} />;
};

export const SingleClick = Template.bind({});
SingleClick.args = {};
