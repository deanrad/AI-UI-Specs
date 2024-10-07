// src/Counter.stories.tsx
import React, { useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Counter, countEffect } from "./Counter";
import { after } from "@rxfx/after";
import { useWhileMounted } from "@rxfx/react";

export default {
  title: "Counter",
  component: Counter,
} as Meta<typeof Counter>;

const RENDER_DELAY = 1000;

const Template: StoryFn<typeof Counter> = (args: any) => {
  useWhileMounted(() => {
    countEffect.reset();
    return after(RENDER_DELAY, () => {
      args.postRender?.();
    });
  });

  return <Counter {...args} />;
};

export const SingleClick = Template.bind({});
SingleClick.args = {
  postRender: doSingleClick,
};

export const SingleClickWithCancel = Template.bind({});
// SingleClickWithCancel.name = "Single Click with Cancelation";
SingleClickWithCancel.args = {
  postRender: doSingleClickThenCancel,
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

async function doSingleClickThenCancel() {
  const button = document.querySelector(
    '[data-testid="increment-button"]'
  ) as HTMLButtonElement;
  const cancelBtn = document.querySelector(
    '[data-testid="cancel-button"]'
  ) as HTMLButtonElement;
  button?.click();
  await after(100);
  cancelBtn.click();
}
async function doDoubleClick() {
  const button = document.querySelector(
    '[data-testid="increment-button"]'
  ) as HTMLButtonElement;

  button?.click();
  await after(100);
  button?.click();
}
