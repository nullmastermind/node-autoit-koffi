import { getDll, getWString } from "./util";
import * as koffi from "koffi";
import wchar from "./wchar";

const dll = getDll();
if (!dll) throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);

export type Point = {
  x: number;
  y: number;
};

export type Rect = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

koffi.struct("LPRECT", {
  left: "long",
  top: "long",
  right: "long",
  bottom: "long",
});
koffi.struct("LPPOINT", {
  x: "long",
  y: "long",
});
koffi.pointer("LPWSTR", "uint16_t*");

const fn: Record<string, koffi.KoffiFunction> = {};

// Generated code:
export const init = (): Promise<void> => {
  if (!fn.hasOwnProperty("init")) {
    fn["init"] = lib.func("AU3_Init", "void", []);
  }

  return new Promise((resolve, reject) => {
    fn["init"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const error = (): Promise<number> => {
  if (!fn.hasOwnProperty("error")) {
    fn["error"] = lib.func("AU3_error", "int", []);
  }

  return new Promise((resolve, reject) => {
    fn["error"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const autoItSetOption = (
  szOption: string,
  nValue: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("autoItSetOption")) {
    fn["autoItSetOption"] = lib.func("AU3_AutoItSetOption", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["autoItSetOption"].async(szOption, nValue, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const clipGet = (nBufSize: number = 512): Promise<string> => {
  if (!fn.hasOwnProperty("clipGet")) {
    fn["clipGet"] = lib.func("AU3_ClipGet", "void", ["LPWSTR", "int"]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["clipGet"].async(result, nBufSize, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
  });
};

export const clipPut = (szClip: string): Promise<void> => {
  if (!fn.hasOwnProperty("clipPut")) {
    fn["clipPut"] = lib.func("AU3_ClipPut", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["clipPut"].async(szClip, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlClick = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szButton: string = "LEFT",
  nNumClicks: number = 1,
  nX: number = -2147483647,
  nY: number = -2147483647,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlClick")) {
    fn["controlClick"] = lib.func("AU3_ControlClick", "int", [
      "string16",
      "string16",
      "string16",
      "string16",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlClick"].async(
      szTitle,
      szText,
      szControl,
      szButton,
      nNumClicks,
      nX,
      nY,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlClickByHandle = (
  hWnd: number,
  hCtrl: number,
  szButton: string = "LEFT",
  nNumClicks: number = 1,
  nX: number = -2147483647,
  nY: number = -2147483647,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlClickByHandle")) {
    fn["controlClickByHandle"] = lib.func("AU3_ControlClickByHandle", "int", [
      "int",
      "int",
      "string16",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlClickByHandle"].async(
      hWnd,
      hCtrl,
      szButton,
      nNumClicks,
      nX,
      nY,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlCommand = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szCommand: string,
  szExtra: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlCommand")) {
    fn["controlCommand"] = lib.func("AU3_ControlCommand", "void", [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlCommand"].async(
      szTitle,
      szText,
      szControl,
      szCommand,
      szExtra,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlCommandByHandle = (
  hWnd: number,
  hCtrl: number,
  szCommand: string,
  szExtra: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlCommandByHandle")) {
    fn["controlCommandByHandle"] = lib.func(
      "AU3_ControlCommandByHandle",
      "void",
      ["int", "int", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlCommandByHandle"].async(
      hWnd,
      hCtrl,
      szCommand,
      szExtra,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlListView = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szCommand: string,
  szExtra1: string = "",
  szExtra2: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlListView")) {
    fn["controlListView"] = lib.func("AU3_ControlListView", "void", [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlListView"].async(
      szTitle,
      szText,
      szControl,
      szCommand,
      szExtra1,
      szExtra2,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlListViewByHandle = (
  hWnd: number,
  hCtrl: number,
  szCommand: string,
  szExtra1: string = "",
  szExtra2: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlListViewByHandle")) {
    fn["controlListViewByHandle"] = lib.func(
      "AU3_ControlListViewByHandle",
      "void",
      ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlListViewByHandle"].async(
      hWnd,
      hCtrl,
      szCommand,
      szExtra1,
      szExtra2,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlDisable = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlDisable")) {
    fn["controlDisable"] = lib.func("AU3_ControlDisable", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlDisable"].async(
      szTitle,
      szText,
      szControl,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlDisableByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlDisableByHandle")) {
    fn["controlDisableByHandle"] = lib.func(
      "AU3_ControlDisableByHandle",
      "int",
      ["int", "int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["controlDisableByHandle"].async(hWnd, hCtrl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlEnable = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlEnable")) {
    fn["controlEnable"] = lib.func("AU3_ControlEnable", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlEnable"].async(
      szTitle,
      szText,
      szControl,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlEnableByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlEnableByHandle")) {
    fn["controlEnableByHandle"] = lib.func("AU3_ControlEnableByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlEnableByHandle"].async(hWnd, hCtrl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlFocus = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlFocus")) {
    fn["controlFocus"] = lib.func("AU3_ControlFocus", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlFocus"].async(
      szTitle,
      szText,
      szControl,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlFocusByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlFocusByHandle")) {
    fn["controlFocusByHandle"] = lib.func("AU3_ControlFocusByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlFocusByHandle"].async(hWnd, hCtrl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetFocus = (
  szTitle: string,
  szText: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetFocus")) {
    fn["controlGetFocus"] = lib.func("AU3_ControlGetFocus", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetFocus"].async(
      szTitle,
      szText,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetFocusByHandle = (
  hWnd: number,
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetFocusByHandle")) {
    fn["controlGetFocusByHandle"] = lib.func(
      "AU3_ControlGetFocusByHandle",
      "void",
      ["int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetFocusByHandle"].async(
      hWnd,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetHandle = (
  hWnd: number,
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlGetHandle")) {
    fn["controlGetHandle"] = lib.func("AU3_ControlGetHandle", "int", [
      "int",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlGetHandle"].async(hWnd, szControl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetHandleAsText = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetHandleAsText")) {
    fn["controlGetHandleAsText"] = lib.func(
      "AU3_ControlGetHandleAsText",
      "void",
      ["string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetHandleAsText"].async(
      szTitle,
      szText,
      szControl,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetPos = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<Rect> => {
  if (!fn.hasOwnProperty("controlGetPos")) {
    fn["controlGetPos"] = lib.func("AU3_ControlGetPos", "int", [
      "string16",
      "string16",
      "string16",
      "_Out_ LPRECT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["controlGetPos"].async(
      szTitle,
      szText,
      szControl,
      result,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(result);
      },
    );
  });
};

export const controlGetPosByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<Rect> => {
  if (!fn.hasOwnProperty("controlGetPosByHandle")) {
    fn["controlGetPosByHandle"] = lib.func("AU3_ControlGetPosByHandle", "int", [
      "int",
      "int",
      "_Out_ LPRECT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["controlGetPosByHandle"].async(
      hWnd,
      hCtrl,
      result,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(result);
      },
    );
  });
};

export const controlGetText = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetText")) {
    fn["controlGetText"] = lib.func("AU3_ControlGetText", "void", [
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetText"].async(
      szTitle,
      szText,
      szControl,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetTextByHandle = (
  hWnd: number,
  hCtrl: number,
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetTextByHandle")) {
    fn["controlGetTextByHandle"] = lib.func(
      "AU3_ControlGetTextByHandle",
      "void",
      ["int", "int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetTextByHandle"].async(
      hWnd,
      hCtrl,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlHide = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlHide")) {
    fn["controlHide"] = lib.func("AU3_ControlHide", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlHide"].async(
      szTitle,
      szText,
      szControl,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlHideByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlHideByHandle")) {
    fn["controlHideByHandle"] = lib.func("AU3_ControlHideByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlHideByHandle"].async(hWnd, hCtrl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlMove = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  nX: number,
  nY: number,
  nWidth: number = -1,
  nHeight: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlMove")) {
    fn["controlMove"] = lib.func("AU3_ControlMove", "int", [
      "string16",
      "string16",
      "string16",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlMove"].async(
      szTitle,
      szText,
      szControl,
      nX,
      nY,
      nWidth,
      nHeight,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlMoveByHandle = (
  hWnd: number,
  hCtrl: number,
  nX: number,
  nY: number,
  nWidth: number = -1,
  nHeight: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlMoveByHandle")) {
    fn["controlMoveByHandle"] = lib.func("AU3_ControlMoveByHandle", "int", [
      "int",
      "int",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlMoveByHandle"].async(
      hWnd,
      hCtrl,
      nX,
      nY,
      nWidth,
      nHeight,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSend = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szSendText: string,
  nMode: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlSend")) {
    fn["controlSend"] = lib.func("AU3_ControlSend", "int", [
      "string16",
      "string16",
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlSend"].async(
      szTitle,
      szText,
      szControl,
      szSendText,
      nMode,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSendByHandle = (
  hWnd: number,
  hCtrl: number,
  szSendText: string,
  nMode: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlSendByHandle")) {
    fn["controlSendByHandle"] = lib.func("AU3_ControlSendByHandle", "int", [
      "int",
      "int",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlSendByHandle"].async(
      hWnd,
      hCtrl,
      szSendText,
      nMode,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSetText = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szControlText: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlSetText")) {
    fn["controlSetText"] = lib.func("AU3_ControlSetText", "int", [
      "string16",
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlSetText"].async(
      szTitle,
      szText,
      szControl,
      szControlText,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSetTextByHandle = (
  hWnd: number,
  hCtrl: number,
  szControlText: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlSetTextByHandle")) {
    fn["controlSetTextByHandle"] = lib.func(
      "AU3_ControlSetTextByHandle",
      "int",
      ["int", "int", "string16"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["controlSetTextByHandle"].async(
      hWnd,
      hCtrl,
      szControlText,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlShow = (
  szTitle: string,
  szText: string = "",
  szControl: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlShow")) {
    fn["controlShow"] = lib.func("AU3_ControlShow", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlShow"].async(
      szTitle,
      szText,
      szControl,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlShowByHandle = (
  hWnd: number,
  hCtrl: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlShowByHandle")) {
    fn["controlShowByHandle"] = lib.func("AU3_ControlShowByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlShowByHandle"].async(hWnd, hCtrl, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlTreeView = (
  szTitle: string,
  szText: string = "",
  szControl: string,
  szCommand: string,
  szExtra1: string = "",
  szExtra2: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlTreeView")) {
    fn["controlTreeView"] = lib.func("AU3_ControlTreeView", "void", [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlTreeView"].async(
      szTitle,
      szText,
      szControl,
      szCommand,
      szExtra1,
      szExtra2,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlTreeViewByHandle = (
  hWnd: number,
  hCtrl: number,
  szCommand: string,
  szExtra1: string = "",
  szExtra2: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlTreeViewByHandle")) {
    fn["controlTreeViewByHandle"] = lib.func(
      "AU3_ControlTreeViewByHandle",
      "void",
      ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlTreeViewByHandle"].async(
      hWnd,
      hCtrl,
      szCommand,
      szExtra1,
      szExtra2,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const driveMapAdd = (
  szDevice: string,
  szShare: string,
  nFlags: number,
  szUser: string = "",
  szPwd: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("driveMapAdd")) {
    fn["driveMapAdd"] = lib.func("AU3_DriveMapAdd", "void", [
      "string16",
      "string16",
      "int",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["driveMapAdd"].async(
      szDevice,
      szShare,
      nFlags,
      szUser,
      szPwd,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const driveMapDel = (szDevice: string): Promise<number> => {
  if (!fn.hasOwnProperty("driveMapDel")) {
    fn["driveMapDel"] = lib.func("AU3_DriveMapDel", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["driveMapDel"].async(szDevice, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const driveMapGet = (
  szDevice: string,
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("driveMapGet")) {
    fn["driveMapGet"] = lib.func("AU3_DriveMapGet", "void", [
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["driveMapGet"].async(
      szDevice,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const isAdmin = (): Promise<number> => {
  if (!fn.hasOwnProperty("isAdmin")) {
    fn["isAdmin"] = lib.func("AU3_IsAdmin", "int", []);
  }

  return new Promise((resolve, reject) => {
    fn["isAdmin"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseClick = (
  szButton: string = "LEFT",
  nX: number = -2147483647,
  nY: number = -2147483647,
  nClicks: number = 1,
  nSpeed: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("mouseClick")) {
    fn["mouseClick"] = lib.func("AU3_MouseClick", "int", [
      "string16",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseClick"].async(
      szButton,
      nX,
      nY,
      nClicks,
      nSpeed,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const mouseClickDrag = (
  szButton: string,
  nX1: number,
  nY1: number,
  nX2: number,
  nY2: number,
  nSpeed: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("mouseClickDrag")) {
    fn["mouseClickDrag"] = lib.func("AU3_MouseClickDrag", "int", [
      "string16",
      "int",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseClickDrag"].async(
      szButton,
      nX1,
      nY1,
      nX2,
      nY2,
      nSpeed,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const mouseDown = (szButton: string = "LEFT"): Promise<void> => {
  if (!fn.hasOwnProperty("mouseDown")) {
    fn["mouseDown"] = lib.func("AU3_MouseDown", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseDown"].async(szButton, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseGetCursor = (): Promise<number> => {
  if (!fn.hasOwnProperty("mouseGetCursor")) {
    fn["mouseGetCursor"] = lib.func("AU3_MouseGetCursor", "int", []);
  }

  return new Promise((resolve, reject) => {
    fn["mouseGetCursor"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseGetPos = (): Promise<Point> => {
  if (!fn.hasOwnProperty("mouseGetPos")) {
    fn["mouseGetPos"] = lib.func("AU3_MouseGetPos", "void", ["_Out_ LPPOINT*"]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["mouseGetPos"].async(result, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const mouseMove = (
  nX: number,
  nY: number,
  nSpeed: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("mouseMove")) {
    fn["mouseMove"] = lib.func("AU3_MouseMove", "int", ["int", "int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseMove"].async(nX, nY, nSpeed, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseUp = (szButton: string = "LEFT"): Promise<void> => {
  if (!fn.hasOwnProperty("mouseUp")) {
    fn["mouseUp"] = lib.func("AU3_MouseUp", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseUp"].async(szButton, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseWheel = (
  szDirection: string,
  nClicks: number,
): Promise<void> => {
  if (!fn.hasOwnProperty("mouseWheel")) {
    fn["mouseWheel"] = lib.func("AU3_MouseWheel", "void", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseWheel"].async(szDirection, nClicks, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const opt = (szOption: string, nValue: number): Promise<number> => {
  if (!fn.hasOwnProperty("opt")) {
    fn["opt"] = lib.func("AU3_Opt", "int", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["opt"].async(szOption, nValue, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelChecksum = (
  lpRect: Rect,
  nStep: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("pixelChecksum")) {
    fn["pixelChecksum"] = lib.func("AU3_PixelChecksum", "uint", [
      "LPRECT",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["pixelChecksum"].async(lpRect, nStep, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelGetColor = (nX: number, nY: number): Promise<number> => {
  if (!fn.hasOwnProperty("pixelGetColor")) {
    fn["pixelGetColor"] = lib.func("AU3_PixelGetColor", "int", ["int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["pixelGetColor"].async(nX, nY, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelSearch = (
  lpRect: Rect,
  nCol: number,
  nVar: number = 0,
  nStep: number = 1,
): Promise<Point> => {
  if (!fn.hasOwnProperty("pixelSearch")) {
    fn["pixelSearch"] = lib.func("AU3_PixelSearch", "void", [
      "LPRECT",
      "int",
      "int",
      "int",
      "_Out_ LPPOINT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["pixelSearch"].async(
      lpRect,
      nCol,
      nVar,
      nStep,
      result,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(result);
      },
    );
  });
};

export const processClose = (szProcess: string): Promise<number> => {
  if (!fn.hasOwnProperty("processClose")) {
    fn["processClose"] = lib.func("AU3_ProcessClose", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["processClose"].async(szProcess, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processExists = (szProcess: string): Promise<number> => {
  if (!fn.hasOwnProperty("processExists")) {
    fn["processExists"] = lib.func("AU3_ProcessExists", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["processExists"].async(szProcess, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processSetPriority = (
  szProcess: string,
  nPriority: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("processSetPriority")) {
    fn["processSetPriority"] = lib.func("AU3_ProcessSetPriority", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["processSetPriority"].async(
      szProcess,
      nPriority,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const processWait = (
  szProcess: string,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("processWait")) {
    fn["processWait"] = lib.func("AU3_ProcessWait", "int", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["processWait"].async(szProcess, nTimeout, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processWaitClose = (
  szProcess: string,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("processWaitClose")) {
    fn["processWaitClose"] = lib.func("AU3_ProcessWaitClose", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["processWaitClose"].async(
      szProcess,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const run = (
  szProgram: string,
  szDir: string = "",
  nShowFlag: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("run")) {
    fn["run"] = lib.func("AU3_Run", "int", ["string16", "string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["run"].async(szProgram, szDir, nShowFlag, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const runWait = (
  szProgram: string,
  szDir: string = "",
  nShowFlag: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("runWait")) {
    fn["runWait"] = lib.func("AU3_RunWait", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["runWait"].async(szProgram, szDir, nShowFlag, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const runAs = (
  szUser: string,
  szDomain: string,
  szPassword: string,
  nLogonFlag: number,
  szProgram: string,
  szDir: string = "",
  nShowFlag: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("runAs")) {
    fn["runAs"] = lib.func("AU3_RunAs", "int", [
      "string16",
      "string16",
      "string16",
      "int",
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["runAs"].async(
      szUser,
      szDomain,
      szPassword,
      nLogonFlag,
      szProgram,
      szDir,
      nShowFlag,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const runAsWait = (
  szUser: string,
  szDomain: string,
  szPassword: string,
  nLogonFlag: number,
  szProgram: string,
  szDir: string = "",
  nShowFlag: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("runAsWait")) {
    fn["runAsWait"] = lib.func("AU3_RunAsWait", "int", [
      "string16",
      "string16",
      "string16",
      "int",
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["runAsWait"].async(
      szUser,
      szDomain,
      szPassword,
      nLogonFlag,
      szProgram,
      szDir,
      nShowFlag,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const send = (szSendText: string, nMode: number = 0): Promise<void> => {
  if (!fn.hasOwnProperty("send")) {
    fn["send"] = lib.func("AU3_Send", "void", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["send"].async(szSendText, nMode, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const shutdown = (nFlags: number): Promise<number> => {
  if (!fn.hasOwnProperty("shutdown")) {
    fn["shutdown"] = lib.func("AU3_Shutdown", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["shutdown"].async(nFlags, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const sleep = (nMilliseconds: number): Promise<void> => {
  if (!fn.hasOwnProperty("sleep")) {
    fn["sleep"] = lib.func("AU3_Sleep", "void", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["sleep"].async(nMilliseconds, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const statusbarGetText = (
  szTitle: string,
  szText: string = "",
  nPart: number = 1,
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("statusbarGetText")) {
    fn["statusbarGetText"] = lib.func("AU3_StatusbarGetText", "int", [
      "string16",
      "string16",
      "int",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["statusbarGetText"].async(
      szTitle,
      szText,
      nPart,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const statusbarGetTextByHandle = (
  hWnd: number,
  nPart: number = 1,
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("statusbarGetTextByHandle")) {
    fn["statusbarGetTextByHandle"] = lib.func(
      "AU3_StatusbarGetTextByHandle",
      "int",
      ["int", "int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["statusbarGetTextByHandle"].async(
      hWnd,
      nPart,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const toolTip = (
  szTip: string,
  nX: number = -2147483647,
  nY: number = -2147483647,
): Promise<void> => {
  if (!fn.hasOwnProperty("toolTip")) {
    fn["toolTip"] = lib.func("AU3_ToolTip", "void", ["string16", "int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["toolTip"].async(szTip, nX, nY, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActivate = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winActivate")) {
    fn["winActivate"] = lib.func("AU3_WinActivate", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActivate"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActivateByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winActivateByHandle")) {
    fn["winActivateByHandle"] = lib.func("AU3_WinActivateByHandle", "int", [
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActivateByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActive = (szTitle: string, szText: string): Promise<number> => {
  if (!fn.hasOwnProperty("winActive")) {
    fn["winActive"] = lib.func("AU3_WinActive", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActive"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActiveByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winActiveByHandle")) {
    fn["winActiveByHandle"] = lib.func("AU3_WinActiveByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winActiveByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winClose = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winClose")) {
    fn["winClose"] = lib.func("AU3_WinClose", "int", ["string16", "string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["winClose"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winCloseByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winCloseByHandle")) {
    fn["winCloseByHandle"] = lib.func("AU3_WinCloseByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winCloseByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winExists = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winExists")) {
    fn["winExists"] = lib.func("AU3_WinExists", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winExists"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winExistsByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winExistsByHandle")) {
    fn["winExistsByHandle"] = lib.func("AU3_WinExistsByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winExistsByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetCaretPos = (): Promise<Point> => {
  if (!fn.hasOwnProperty("winGetCaretPos")) {
    fn["winGetCaretPos"] = lib.func("AU3_WinGetCaretPos", "int", [
      "_Out_ LPPOINT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["winGetCaretPos"].async(result, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const winGetClassList = (
  szTitle: string,
  szText: string = "",
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetClassList")) {
    fn["winGetClassList"] = lib.func("AU3_WinGetClassList", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetClassList"].async(
      szTitle,
      szText,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetClassListByHandle = (
  hWnd: number,
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetClassListByHandle")) {
    fn["winGetClassListByHandle"] = lib.func(
      "AU3_WinGetClassListByHandle",
      "void",
      ["int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetClassListByHandle"].async(
      hWnd,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetClientSize = (
  szTitle: string,
  szText: string = "",
): Promise<Rect> => {
  if (!fn.hasOwnProperty("winGetClientSize")) {
    fn["winGetClientSize"] = lib.func("AU3_WinGetClientSize", "int", [
      "string16",
      "string16",
      "_Out_ LPRECT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["winGetClientSize"].async(
      szTitle,
      szText,
      result,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(result);
      },
    );
  });
};

export const winGetClientSizeByHandle = (hWnd: number): Promise<Rect> => {
  if (!fn.hasOwnProperty("winGetClientSizeByHandle")) {
    fn["winGetClientSizeByHandle"] = lib.func(
      "AU3_WinGetClientSizeByHandle",
      "int",
      ["int", "_Out_ LPRECT*"],
    );
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["winGetClientSizeByHandle"].async(hWnd, result, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const winGetHandle = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetHandle")) {
    fn["winGetHandle"] = lib.func("AU3_WinGetHandle", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetHandle"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetHandleAsText = (
  szTitle: string,
  szText: string = "",
  nBufSize: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetHandleAsText")) {
    fn["winGetHandleAsText"] = lib.func("AU3_WinGetHandleAsText", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetHandleAsText"].async(
      szTitle,
      szText,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetPos = (
  szTitle: string,
  szText: string = "",
): Promise<Rect> => {
  if (!fn.hasOwnProperty("winGetPos")) {
    fn["winGetPos"] = lib.func("AU3_WinGetPos", "int", [
      "string16",
      "string16",
      "_Out_ LPRECT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["winGetPos"].async(szTitle, szText, result, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const winGetPosByHandle = (hWnd: number): Promise<Rect> => {
  if (!fn.hasOwnProperty("winGetPosByHandle")) {
    fn["winGetPosByHandle"] = lib.func("AU3_WinGetPosByHandle", "int", [
      "int",
      "_Out_ LPRECT*",
    ]);
  }
  let result: any = {};

  return new Promise((resolve, reject) => {
    fn["winGetPosByHandle"].async(hWnd, result, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const winGetProcess = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetProcess")) {
    fn["winGetProcess"] = lib.func("AU3_WinGetProcess", "uint32", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetProcess"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetProcessByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetProcessByHandle")) {
    fn["winGetProcessByHandle"] = lib.func(
      "AU3_WinGetProcessByHandle",
      "uint32",
      ["int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winGetProcessByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetState = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetState")) {
    fn["winGetState"] = lib.func("AU3_WinGetState", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetState"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetStateByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetStateByHandle")) {
    fn["winGetStateByHandle"] = lib.func("AU3_WinGetStateByHandle", "int", [
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetStateByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetText = (
  szTitle: string,
  szText: string = "",
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetText")) {
    fn["winGetText"] = lib.func("AU3_WinGetText", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetText"].async(
      szTitle,
      szText,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetTextByHandle = (
  hWnd: number,
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTextByHandle")) {
    fn["winGetTextByHandle"] = lib.func("AU3_WinGetTextByHandle", "void", [
      "int",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTextByHandle"].async(
      hWnd,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetTitle = (
  szTitle: string,
  szText: string = "",
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTitle")) {
    fn["winGetTitle"] = lib.func("AU3_WinGetTitle", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTitle"].async(
      szTitle,
      szText,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetTitleByHandle = (
  hWnd: number,
  nBufSize: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTitleByHandle")) {
    fn["winGetTitleByHandle"] = lib.func("AU3_WinGetTitleByHandle", "void", [
      "int",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(nBufSize * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTitleByHandle"].async(
      hWnd,
      result,
      nBufSize,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winKill = (
  szTitle: string,
  szText: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winKill")) {
    fn["winKill"] = lib.func("AU3_WinKill", "int", ["string16", "string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["winKill"].async(szTitle, szText, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winKillByHandle = (hWnd: number): Promise<number> => {
  if (!fn.hasOwnProperty("winKillByHandle")) {
    fn["winKillByHandle"] = lib.func("AU3_WinKillByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winKillByHandle"].async(hWnd, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winMenuSelectItem = (
  szTitle: string,
  szText: string = "",
  szItem1: string,
  szItem2: string = "",
  szItem3: string = "",
  szItem4: string = "",
  szItem5: string = "",
  szItem6: string = "",
  szItem7: string = "",
  szItem8: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winMenuSelectItem")) {
    fn["winMenuSelectItem"] = lib.func("AU3_WinMenuSelectItem", "int", [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winMenuSelectItem"].async(
      szTitle,
      szText,
      szItem1,
      szItem2,
      szItem3,
      szItem4,
      szItem5,
      szItem6,
      szItem7,
      szItem8,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winMenuSelectItemByHandle = (
  hWnd: number,
  szItem1: string,
  szItem2: string = "",
  szItem3: string = "",
  szItem4: string = "",
  szItem5: string = "",
  szItem6: string = "",
  szItem7: string = "",
  szItem8: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winMenuSelectItemByHandle")) {
    fn["winMenuSelectItemByHandle"] = lib.func(
      "AU3_WinMenuSelectItemByHandle",
      "int",
      [
        "int",
        "string16",
        "string16",
        "string16",
        "string16",
        "string16",
        "string16",
        "string16",
        "string16",
      ],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winMenuSelectItemByHandle"].async(
      hWnd,
      szItem1,
      szItem2,
      szItem3,
      szItem4,
      szItem5,
      szItem6,
      szItem7,
      szItem8,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winMinimizeAll = (): Promise<void> => {
  if (!fn.hasOwnProperty("winMinimizeAll")) {
    fn["winMinimizeAll"] = lib.func("AU3_WinMinimizeAll", "void", []);
  }

  return new Promise((resolve, reject) => {
    fn["winMinimizeAll"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winMinimizeAllUndo = (): Promise<void> => {
  if (!fn.hasOwnProperty("winMinimizeAllUndo")) {
    fn["winMinimizeAllUndo"] = lib.func("AU3_WinMinimizeAllUndo", "void", []);
  }

  return new Promise((resolve, reject) => {
    fn["winMinimizeAllUndo"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winMove = (
  szTitle: string,
  szText: string = "",
  nX: number,
  nY: number,
  nWidth: number = -1,
  nHeight: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("winMove")) {
    fn["winMove"] = lib.func("AU3_WinMove", "int", [
      "string16",
      "string16",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winMove"].async(
      szTitle,
      szText,
      nX,
      nY,
      nWidth,
      nHeight,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winMoveByHandle = (
  hWnd: number,
  nX: number,
  nY: number,
  nWidth: number = -1,
  nHeight: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("winMoveByHandle")) {
    fn["winMoveByHandle"] = lib.func("AU3_WinMoveByHandle", "int", [
      "int",
      "int",
      "int",
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winMoveByHandle"].async(
      hWnd,
      nX,
      nY,
      nWidth,
      nHeight,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winSetOnTop = (
  szTitle: string,
  szText: string = "",
  nFlag: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetOnTop")) {
    fn["winSetOnTop"] = lib.func("AU3_WinSetOnTop", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetOnTop"].async(szTitle, szText, nFlag, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetOnTopByHandle = (
  hWnd: number,
  nFlag: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetOnTopByHandle")) {
    fn["winSetOnTopByHandle"] = lib.func("AU3_WinSetOnTopByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetOnTopByHandle"].async(hWnd, nFlag, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetState = (
  szTitle: string,
  szText: string = "",
  nFlags: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetState")) {
    fn["winSetState"] = lib.func("AU3_WinSetState", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetState"].async(szTitle, szText, nFlags, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetStateByHandle = (
  hWnd: number,
  nFlags: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetStateByHandle")) {
    fn["winSetStateByHandle"] = lib.func("AU3_WinSetStateByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetStateByHandle"].async(hWnd, nFlags, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTitle = (
  szTitle: string,
  szText: string = "",
  szNewTitle: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTitle")) {
    fn["winSetTitle"] = lib.func("AU3_WinSetTitle", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTitle"].async(
      szTitle,
      szText,
      szNewTitle,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winSetTitleByHandle = (
  hWnd: number,
  szNewTitle: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTitleByHandle")) {
    fn["winSetTitleByHandle"] = lib.func("AU3_WinSetTitleByHandle", "int", [
      "int",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTitleByHandle"].async(
      hWnd,
      szNewTitle,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winSetTrans = (
  szTitle: string,
  szText: string = "",
  nTrans: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTrans")) {
    fn["winSetTrans"] = lib.func("AU3_WinSetTrans", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTrans"].async(szTitle, szText, nTrans, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTransByHandle = (
  hWnd: number,
  nTrans: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTransByHandle")) {
    fn["winSetTransByHandle"] = lib.func("AU3_WinSetTransByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTransByHandle"].async(hWnd, nTrans, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWait = (
  szTitle: string,
  szText: string = "",
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWait")) {
    fn["winWait"] = lib.func("AU3_WinWait", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWait"].async(szTitle, szText, nTimeout, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitByHandle = (
  hWnd: number,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitByHandle")) {
    fn["winWaitByHandle"] = lib.func("AU3_WinWaitByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitByHandle"].async(hWnd, nTimeout, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitActive = (
  szTitle: string,
  szText: string = "",
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitActive")) {
    fn["winWaitActive"] = lib.func("AU3_WinWaitActive", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitActive"].async(
      szTitle,
      szText,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winWaitActiveByHandle = (
  hWnd: number,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitActiveByHandle")) {
    fn["winWaitActiveByHandle"] = lib.func("AU3_WinWaitActiveByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitActiveByHandle"].async(
      hWnd,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winWaitClose = (
  szTitle: string,
  szText: string = "",
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitClose")) {
    fn["winWaitClose"] = lib.func("AU3_WinWaitClose", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitClose"].async(
      szTitle,
      szText,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winWaitCloseByHandle = (
  hWnd: number,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitCloseByHandle")) {
    fn["winWaitCloseByHandle"] = lib.func("AU3_WinWaitCloseByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitCloseByHandle"].async(hWnd, nTimeout, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitNotActive = (
  szTitle: string,
  szText: string = "",
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitNotActive")) {
    fn["winWaitNotActive"] = lib.func("AU3_WinWaitNotActive", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitNotActive"].async(
      szTitle,
      szText,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winWaitNotActiveByHandle = (
  hWnd: number,
  nTimeout: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitNotActiveByHandle")) {
    fn["winWaitNotActiveByHandle"] = lib.func(
      "AU3_WinWaitNotActiveByHandle",
      "int",
      ["int", "int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winWaitNotActiveByHandle"].async(
      hWnd,
      nTimeout,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};
