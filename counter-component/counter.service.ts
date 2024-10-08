import { createService } from "@rxfx/react";
import { countEffect } from "./counter.effect";

const reducerProducer =
  ({ isResponse }) =>
  (count = 0, evt) => {
    return isResponse(evt) ? count + 1 : count;
  };

export const countService = createService<void, void, void, number>(
  "count",
  countEffect,
  reducerProducer
);
