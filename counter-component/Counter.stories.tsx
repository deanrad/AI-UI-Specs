// src/Counter.stories.tsx
import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Counter from "./Counter";
import { after } from "@rxfx/after";

export default {
  title: "Counter",
  component: Counter,
} as Meta<typeof Counter>;

const RENDER_DELAY = 1000;

const Template: StoryFn<typeof Counter> = (args: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      args.postRender?.();
    }, RENDER_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return <Counter {...args} />;
};

export const SingleClick = Template.bind({});
SingleClick.args = {
  postRender: doSingleClick,
};

export const DoubleClick = Template.bind({});
DoubleClick.args = {
  postRender: doDoubleClick,
};

function doSingleClick() {
  const button = document.querySelector(
    '[data-testid="increment-button"]'
  ) as HTMLButtonElement;
  button?.click();
}

async function doDoubleClick() {
  const button = document.querySelector(
    '[data-testid="increment-button"]'
  ) as HTMLButtonElement;

  button?.click();
  await after(100);
  button?.click();
}
