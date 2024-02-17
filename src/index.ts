import { getDll } from "./util";
import * as koffi from "koffi";

const dll = getDll();
if (!dll) throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);
const fn = {
  init: lib.func("AU3_Init", "void", []),
};

export const init = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    fn.init.async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

init().then(console.log).catch(console.error);
