import { getDll, getWString } from "./util";
import * as koffi from "koffi";
import * as iconv from "iconv-lite";
import wchar from "./wchar";

const dll = getDll();
if (!dll) throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);

koffi.pointer("LPWSTR", "uint16_t*");

const fn = {
  init: lib.func("AU3_Init", "void", []),
  mouseMove: lib.func("AU3_MouseMove", "int", ["int", "int", "int"]),
  send: lib.func("AU3_Send", "void", ["string16", "int"]),
  clipGet: lib.func("AU3_ClipGet", "void", ["LPWSTR", "int"]),
};

export const init = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    fn.init.async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseMove = (
  x: number,
  y: number,
  speed = -1,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    fn.mouseMove.async(x, y, speed, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const send = (keys: string, flag = 0): Promise<void> => {
  return new Promise((resolve, reject) => {
    fn.send.async(keys, flag, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const clipGet = (nBufSize = 1024): Promise<string> => {
  return new Promise((resolve, reject) => {
    let szClip = Buffer.alloc(nBufSize * wchar.size);

    fn.clipGet.async(szClip, nBufSize, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(getWString(szClip));
    });
  });
};
