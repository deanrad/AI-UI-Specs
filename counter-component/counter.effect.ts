import { after } from "@rxfx/react";
export const REQ_TIME = 2000;
export const countEffect = () => after<void>(REQ_TIME);
