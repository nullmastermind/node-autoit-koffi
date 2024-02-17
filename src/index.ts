import { getDll, getWString } from "./util";
import * as koffi from "koffi";
import wchar from "./wchar";

const dll = getDll();
if (!dll) throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);

const Rect = koffi.struct({
  left: "long",
  top: "long",
  right: "long",
  bottom: "long",
});
const Point = koffi.struct({
  x: "long",
  y: "long",
});

koffi.pointer("LPWSTR", "uint16_t*");
koffi.pointer("LPRECT", Rect);
koffi.pointer("LPPOINT", Point);

const fn: Record<string, koffi.KoffiFunction> = {};

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
  arg0: string,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("autoItSetOption")) {
    fn["autoItSetOption"] = lib.func("AU3_AutoItSetOption", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["autoItSetOption"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const clipGet = (arg1: number = 512): Promise<string> => {
  if (!fn.hasOwnProperty("clipGet")) {
    fn["clipGet"] = lib.func("AU3_ClipGet", "void", ["LPWSTR", "int"]);
  }
  let result = Buffer.alloc(arg1 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["clipGet"].async(result, arg1, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
  });
};

export const clipPut = (arg0: string): Promise<void> => {
  if (!fn.hasOwnProperty("clipPut")) {
    fn["clipPut"] = lib.func("AU3_ClipPut", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["clipPut"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlClick = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string = "LEFT",
  arg4: number = 1,
  arg5: number = -2147483647,
  arg6: number = -2147483647,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlClickByHandle = (
  arg0: number,
  arg1: number,
  arg2: string = "LEFT",
  arg3: number = 1,
  arg4: number = -2147483647,
  arg5: number = -2147483647,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlCommand = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string,
  arg4: string = "",
  arg6: number = 256,
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
  let result = Buffer.alloc(arg6 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlCommand"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      result,
      arg6,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlCommandByHandle = (
  arg0: number,
  arg1: number,
  arg2: string,
  arg3: string = "",
  arg5: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlCommandByHandle")) {
    fn["controlCommandByHandle"] = lib.func(
      "AU3_ControlCommandByHandle",
      "void",
      ["int", "int", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg5 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlCommandByHandle"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      result,
      arg5,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlListView = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string,
  arg4: string = "",
  arg5: string = "",
  arg7: number = 256,
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
  let result = Buffer.alloc(arg7 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlListView"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      result,
      arg7,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlListViewByHandle = (
  arg0: number,
  arg1: number,
  arg2: string,
  arg3: string = "",
  arg4: string = "",
  arg6: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlListViewByHandle")) {
    fn["controlListViewByHandle"] = lib.func(
      "AU3_ControlListViewByHandle",
      "void",
      ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg6 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlListViewByHandle"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      result,
      arg6,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlDisable = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlDisable")) {
    fn["controlDisable"] = lib.func("AU3_ControlDisable", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlDisable"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlDisableByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlDisableByHandle")) {
    fn["controlDisableByHandle"] = lib.func(
      "AU3_ControlDisableByHandle",
      "int",
      ["int", "int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["controlDisableByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlEnable = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlEnable")) {
    fn["controlEnable"] = lib.func("AU3_ControlEnable", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlEnable"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlEnableByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlEnableByHandle")) {
    fn["controlEnableByHandle"] = lib.func("AU3_ControlEnableByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlEnableByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlFocus = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlFocus")) {
    fn["controlFocus"] = lib.func("AU3_ControlFocus", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlFocus"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlFocusByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlFocusByHandle")) {
    fn["controlFocusByHandle"] = lib.func("AU3_ControlFocusByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlFocusByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetFocus = (
  arg0: string,
  arg1: string = "",
  arg3: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetFocus")) {
    fn["controlGetFocus"] = lib.func("AU3_ControlGetFocus", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetFocus"].async(
      arg0,
      arg1,
      result,
      arg3,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetFocusByHandle = (
  arg0: number,
  arg2: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetFocusByHandle")) {
    fn["controlGetFocusByHandle"] = lib.func(
      "AU3_ControlGetFocusByHandle",
      "void",
      ["int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg2 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetFocusByHandle"].async(
      arg0,
      result,
      arg2,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetHandle = (
  arg0: number,
  arg1: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlGetHandle")) {
    fn["controlGetHandle"] = lib.func("AU3_ControlGetHandle", "int", [
      "int",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlGetHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetHandleAsText = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg4: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetHandleAsText")) {
    fn["controlGetHandleAsText"] = lib.func(
      "AU3_ControlGetHandleAsText",
      "void",
      ["string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg4 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetHandleAsText"].async(
      arg0,
      arg1,
      arg2,
      result,
      arg4,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetPos = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlGetPos")) {
    fn["controlGetPos"] = lib.func("AU3_ControlGetPos", "int", [
      "string16",
      "string16",
      "string16",
      "LPRECT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlGetPos"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetPosByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlGetPosByHandle")) {
    fn["controlGetPosByHandle"] = lib.func("AU3_ControlGetPosByHandle", "int", [
      "int",
      "int",
      "LPRECT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlGetPosByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlGetText = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg4: number = 512,
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
  let result = Buffer.alloc(arg4 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetText"].async(
      arg0,
      arg1,
      arg2,
      result,
      arg4,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlGetTextByHandle = (
  arg0: number,
  arg1: number,
  arg3: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlGetTextByHandle")) {
    fn["controlGetTextByHandle"] = lib.func(
      "AU3_ControlGetTextByHandle",
      "void",
      ["int", "int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlGetTextByHandle"].async(
      arg0,
      arg1,
      result,
      arg3,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlHide = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlHide")) {
    fn["controlHide"] = lib.func("AU3_ControlHide", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlHide"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlHideByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlHideByHandle")) {
    fn["controlHideByHandle"] = lib.func("AU3_ControlHideByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlHideByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlMove = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: number,
  arg4: number,
  arg5: number = -1,
  arg6: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlMoveByHandle = (
  arg0: number,
  arg1: number,
  arg2: number,
  arg3: number,
  arg4: number = -1,
  arg5: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSend = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string,
  arg4: number = 0,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSendByHandle = (
  arg0: number,
  arg1: number,
  arg2: string,
  arg3: number = 0,
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
      arg0,
      arg1,
      arg2,
      arg3,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSetText = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string,
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
      arg0,
      arg1,
      arg2,
      arg3,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlSetTextByHandle = (
  arg0: number,
  arg1: number,
  arg2: string,
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
      arg0,
      arg1,
      arg2,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const controlShow = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlShow")) {
    fn["controlShow"] = lib.func("AU3_ControlShow", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlShow"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlShowByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("controlShowByHandle")) {
    fn["controlShowByHandle"] = lib.func("AU3_ControlShowByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["controlShowByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const controlTreeView = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string,
  arg4: string = "",
  arg5: string = "",
  arg7: number = 256,
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
  let result = Buffer.alloc(arg7 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlTreeView"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      result,
      arg7,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const controlTreeViewByHandle = (
  arg0: number,
  arg1: number,
  arg2: string,
  arg3: string = "",
  arg4: string = "",
  arg6: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("controlTreeViewByHandle")) {
    fn["controlTreeViewByHandle"] = lib.func(
      "AU3_ControlTreeViewByHandle",
      "void",
      ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg6 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["controlTreeViewByHandle"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      result,
      arg6,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const driveMapAdd = (
  arg0: string,
  arg1: string,
  arg2: number,
  arg3: string = "",
  arg4: string = "",
  arg6: number = 256,
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
  let result = Buffer.alloc(arg6 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["driveMapAdd"].async(
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      result,
      arg6,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const driveMapDel = (arg0: string): Promise<number> => {
  if (!fn.hasOwnProperty("driveMapDel")) {
    fn["driveMapDel"] = lib.func("AU3_DriveMapDel", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["driveMapDel"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const driveMapGet = (
  arg0: string,
  arg2: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("driveMapGet")) {
    fn["driveMapGet"] = lib.func("AU3_DriveMapGet", "void", [
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg2 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["driveMapGet"].async(arg0, result, arg2, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
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
  arg0: string = "LEFT",
  arg1: number = -2147483647,
  arg2: number = -2147483647,
  arg3: number = 1,
  arg4: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const mouseClickDrag = (
  arg0: string,
  arg1: number,
  arg2: number,
  arg3: number,
  arg4: number,
  arg5: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const mouseDown = (arg0: string = "LEFT"): Promise<void> => {
  if (!fn.hasOwnProperty("mouseDown")) {
    fn["mouseDown"] = lib.func("AU3_MouseDown", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseDown"].async(arg0, (err: Error, res: any) => {
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

export const mouseGetPos = (): Promise<void> => {
  if (!fn.hasOwnProperty("mouseGetPos")) {
    fn["mouseGetPos"] = lib.func("AU3_MouseGetPos", "void", ["LPPOINT"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseGetPos"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseMove = (
  arg0: number,
  arg1: number,
  arg2: number = -1,
): Promise<number> => {
  if (!fn.hasOwnProperty("mouseMove")) {
    fn["mouseMove"] = lib.func("AU3_MouseMove", "int", ["int", "int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseMove"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseUp = (arg0: string = "LEFT"): Promise<void> => {
  if (!fn.hasOwnProperty("mouseUp")) {
    fn["mouseUp"] = lib.func("AU3_MouseUp", "void", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseUp"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const mouseWheel = (arg0: string, arg1: number): Promise<void> => {
  if (!fn.hasOwnProperty("mouseWheel")) {
    fn["mouseWheel"] = lib.func("AU3_MouseWheel", "void", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["mouseWheel"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const opt = (arg0: string, arg1: number): Promise<number> => {
  if (!fn.hasOwnProperty("opt")) {
    fn["opt"] = lib.func("AU3_Opt", "int", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["opt"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelChecksum = (arg1: number = 1): Promise<number> => {
  if (!fn.hasOwnProperty("pixelChecksum")) {
    fn["pixelChecksum"] = lib.func("AU3_PixelChecksum", "uint", [
      "LPRECT",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["pixelChecksum"].async(arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelGetColor = (arg0: number, arg1: number): Promise<number> => {
  if (!fn.hasOwnProperty("pixelGetColor")) {
    fn["pixelGetColor"] = lib.func("AU3_PixelGetColor", "int", ["int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["pixelGetColor"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const pixelSearch = (
  arg1: number,
  arg2: number = 0,
  arg3: number = 1,
): Promise<void> => {
  if (!fn.hasOwnProperty("pixelSearch")) {
    fn["pixelSearch"] = lib.func("AU3_PixelSearch", "void", [
      "LPRECT",
      "int",
      "int",
      "int",
      "LPPOINT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["pixelSearch"].async(arg1, arg2, arg3, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processClose = (arg0: string): Promise<number> => {
  if (!fn.hasOwnProperty("processClose")) {
    fn["processClose"] = lib.func("AU3_ProcessClose", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["processClose"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processExists = (arg0: string): Promise<number> => {
  if (!fn.hasOwnProperty("processExists")) {
    fn["processExists"] = lib.func("AU3_ProcessExists", "int", ["string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["processExists"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processSetPriority = (
  arg0: string,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("processSetPriority")) {
    fn["processSetPriority"] = lib.func("AU3_ProcessSetPriority", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["processSetPriority"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processWait = (
  arg0: string,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("processWait")) {
    fn["processWait"] = lib.func("AU3_ProcessWait", "int", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["processWait"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const processWaitClose = (
  arg0: string,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("processWaitClose")) {
    fn["processWaitClose"] = lib.func("AU3_ProcessWaitClose", "int", [
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["processWaitClose"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const run = (
  arg0: string,
  arg1: string = "",
  arg2: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("run")) {
    fn["run"] = lib.func("AU3_Run", "int", ["string16", "string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["run"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const runWait = (
  arg0: string,
  arg1: string = "",
  arg2: number = 1,
): Promise<number> => {
  if (!fn.hasOwnProperty("runWait")) {
    fn["runWait"] = lib.func("AU3_RunWait", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["runWait"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const runAs = (
  arg0: string,
  arg1: string,
  arg2: string,
  arg3: number,
  arg4: string,
  arg5: string = "",
  arg6: number = 1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const runAsWait = (
  arg0: string,
  arg1: string,
  arg2: string,
  arg3: number,
  arg4: string,
  arg5: string = "",
  arg6: number = 1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const send = (arg0: string, arg1: number = 0): Promise<void> => {
  if (!fn.hasOwnProperty("send")) {
    fn["send"] = lib.func("AU3_Send", "void", ["string16", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["send"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const shutdown = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("shutdown")) {
    fn["shutdown"] = lib.func("AU3_Shutdown", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["shutdown"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const sleep = (arg0: number): Promise<void> => {
  if (!fn.hasOwnProperty("sleep")) {
    fn["sleep"] = lib.func("AU3_Sleep", "void", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["sleep"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const statusbarGetText = (
  arg0: string,
  arg1: string = "",
  arg2: number = 1,
  arg4: number = 256,
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
  let result = Buffer.alloc(arg4 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["statusbarGetText"].async(
      arg0,
      arg1,
      arg2,
      result,
      arg4,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const statusbarGetTextByHandle = (
  arg0: number,
  arg1: number = 1,
  arg3: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("statusbarGetTextByHandle")) {
    fn["statusbarGetTextByHandle"] = lib.func(
      "AU3_StatusbarGetTextByHandle",
      "int",
      ["int", "int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["statusbarGetTextByHandle"].async(
      arg0,
      arg1,
      result,
      arg3,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const toolTip = (
  arg0: string,
  arg1: number = -2147483647,
  arg2: number = -2147483647,
): Promise<void> => {
  if (!fn.hasOwnProperty("toolTip")) {
    fn["toolTip"] = lib.func("AU3_ToolTip", "void", ["string16", "int", "int"]);
  }

  return new Promise((resolve, reject) => {
    fn["toolTip"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActivate = (
  arg0: string,
  arg1: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winActivate")) {
    fn["winActivate"] = lib.func("AU3_WinActivate", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActivate"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActivateByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winActivateByHandle")) {
    fn["winActivateByHandle"] = lib.func("AU3_WinActivateByHandle", "int", [
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActivateByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActive = (arg0: string, arg1: string): Promise<number> => {
  if (!fn.hasOwnProperty("winActive")) {
    fn["winActive"] = lib.func("AU3_WinActive", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winActive"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winActiveByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winActiveByHandle")) {
    fn["winActiveByHandle"] = lib.func("AU3_WinActiveByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winActiveByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winClose = (arg0: string, arg1: string = ""): Promise<number> => {
  if (!fn.hasOwnProperty("winClose")) {
    fn["winClose"] = lib.func("AU3_WinClose", "int", ["string16", "string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["winClose"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winCloseByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winCloseByHandle")) {
    fn["winCloseByHandle"] = lib.func("AU3_WinCloseByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winCloseByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winExists = (arg0: string, arg1: string = ""): Promise<number> => {
  if (!fn.hasOwnProperty("winExists")) {
    fn["winExists"] = lib.func("AU3_WinExists", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winExists"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winExistsByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winExistsByHandle")) {
    fn["winExistsByHandle"] = lib.func("AU3_WinExistsByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winExistsByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetCaretPos = (): Promise<number> => {
  if (!fn.hasOwnProperty("winGetCaretPos")) {
    fn["winGetCaretPos"] = lib.func("AU3_WinGetCaretPos", "int", ["LPPOINT"]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetCaretPos"].async((err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetClassList = (
  arg0: string,
  arg1: string = "",
  arg3: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetClassList")) {
    fn["winGetClassList"] = lib.func("AU3_WinGetClassList", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetClassList"].async(
      arg0,
      arg1,
      result,
      arg3,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetClassListByHandle = (
  arg0: number,
  arg2: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetClassListByHandle")) {
    fn["winGetClassListByHandle"] = lib.func(
      "AU3_WinGetClassListByHandle",
      "void",
      ["int", "LPWSTR", "int"],
    );
  }
  let result = Buffer.alloc(arg2 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetClassListByHandle"].async(
      arg0,
      result,
      arg2,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetClientSize = (
  arg0: string,
  arg1: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetClientSize")) {
    fn["winGetClientSize"] = lib.func("AU3_WinGetClientSize", "int", [
      "string16",
      "string16",
      "LPRECT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetClientSize"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetClientSizeByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetClientSizeByHandle")) {
    fn["winGetClientSizeByHandle"] = lib.func(
      "AU3_WinGetClientSizeByHandle",
      "int",
      ["int", "LPRECT"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winGetClientSizeByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetHandle = (
  arg0: string,
  arg1: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetHandle")) {
    fn["winGetHandle"] = lib.func("AU3_WinGetHandle", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetHandleAsText = (
  arg0: string,
  arg1: string = "",
  arg3: number = 256,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetHandleAsText")) {
    fn["winGetHandleAsText"] = lib.func("AU3_WinGetHandleAsText", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetHandleAsText"].async(
      arg0,
      arg1,
      result,
      arg3,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winGetPos = (arg0: string, arg1: string = ""): Promise<number> => {
  if (!fn.hasOwnProperty("winGetPos")) {
    fn["winGetPos"] = lib.func("AU3_WinGetPos", "int", [
      "string16",
      "string16",
      "LPRECT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetPos"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetPosByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetPosByHandle")) {
    fn["winGetPosByHandle"] = lib.func("AU3_WinGetPosByHandle", "int", [
      "int",
      "LPRECT",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetPosByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetProcess = (
  arg0: string,
  arg1: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetProcess")) {
    fn["winGetProcess"] = lib.func("AU3_WinGetProcess", "uint32", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetProcess"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetProcessByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetProcessByHandle")) {
    fn["winGetProcessByHandle"] = lib.func(
      "AU3_WinGetProcessByHandle",
      "uint32",
      ["int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winGetProcessByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetState = (
  arg0: string,
  arg1: string = "",
): Promise<number> => {
  if (!fn.hasOwnProperty("winGetState")) {
    fn["winGetState"] = lib.func("AU3_WinGetState", "int", [
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetState"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetStateByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winGetStateByHandle")) {
    fn["winGetStateByHandle"] = lib.func("AU3_WinGetStateByHandle", "int", [
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winGetStateByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winGetText = (
  arg0: string,
  arg1: string = "",
  arg3: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetText")) {
    fn["winGetText"] = lib.func("AU3_WinGetText", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetText"].async(arg0, arg1, result, arg3, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
  });
};

export const winGetTextByHandle = (
  arg0: number,
  arg2: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTextByHandle")) {
    fn["winGetTextByHandle"] = lib.func("AU3_WinGetTextByHandle", "void", [
      "int",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg2 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTextByHandle"].async(arg0, result, arg2, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
  });
};

export const winGetTitle = (
  arg0: string,
  arg1: string = "",
  arg3: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTitle")) {
    fn["winGetTitle"] = lib.func("AU3_WinGetTitle", "void", [
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg3 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTitle"].async(arg0, arg1, result, arg3, (err: Error, _: any) => {
      if (err) reject(err);
      else resolve(getWString(result));
    });
  });
};

export const winGetTitleByHandle = (
  arg0: number,
  arg2: number = 512,
): Promise<string> => {
  if (!fn.hasOwnProperty("winGetTitleByHandle")) {
    fn["winGetTitleByHandle"] = lib.func("AU3_WinGetTitleByHandle", "void", [
      "int",
      "LPWSTR",
      "int",
    ]);
  }
  let result = Buffer.alloc(arg2 * wchar.size);

  return new Promise((resolve, reject) => {
    fn["winGetTitleByHandle"].async(
      arg0,
      result,
      arg2,
      (err: Error, _: any) => {
        if (err) reject(err);
        else resolve(getWString(result));
      },
    );
  });
};

export const winKill = (arg0: string, arg1: string = ""): Promise<number> => {
  if (!fn.hasOwnProperty("winKill")) {
    fn["winKill"] = lib.func("AU3_WinKill", "int", ["string16", "string16"]);
  }

  return new Promise((resolve, reject) => {
    fn["winKill"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winKillByHandle = (arg0: number): Promise<number> => {
  if (!fn.hasOwnProperty("winKillByHandle")) {
    fn["winKillByHandle"] = lib.func("AU3_WinKillByHandle", "int", ["int"]);
  }

  return new Promise((resolve, reject) => {
    fn["winKillByHandle"].async(arg0, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winMenuSelectItem = (
  arg0: string,
  arg1: string = "",
  arg2: string,
  arg3: string = "",
  arg4: string = "",
  arg5: string = "",
  arg6: string = "",
  arg7: string = "",
  arg8: string = "",
  arg9: string = "",
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      arg7,
      arg8,
      arg9,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winMenuSelectItemByHandle = (
  arg0: number,
  arg1: string,
  arg2: string = "",
  arg3: string = "",
  arg4: string = "",
  arg5: string = "",
  arg6: string = "",
  arg7: string = "",
  arg8: string = "",
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      arg6,
      arg7,
      arg8,
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
  arg0: string,
  arg1: string = "",
  arg2: number,
  arg3: number,
  arg4: number = -1,
  arg5: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      arg5,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winMoveByHandle = (
  arg0: number,
  arg1: number,
  arg2: number,
  arg3: number = -1,
  arg4: number = -1,
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
      arg0,
      arg1,
      arg2,
      arg3,
      arg4,
      (err: Error, res: any) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
};

export const winSetOnTop = (
  arg0: string,
  arg1: string = "",
  arg2: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetOnTop")) {
    fn["winSetOnTop"] = lib.func("AU3_WinSetOnTop", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetOnTop"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetOnTopByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetOnTopByHandle")) {
    fn["winSetOnTopByHandle"] = lib.func("AU3_WinSetOnTopByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetOnTopByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetState = (
  arg0: string,
  arg1: string = "",
  arg2: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetState")) {
    fn["winSetState"] = lib.func("AU3_WinSetState", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetState"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetStateByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetStateByHandle")) {
    fn["winSetStateByHandle"] = lib.func("AU3_WinSetStateByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetStateByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTitle = (
  arg0: string,
  arg1: string = "",
  arg2: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTitle")) {
    fn["winSetTitle"] = lib.func("AU3_WinSetTitle", "int", [
      "string16",
      "string16",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTitle"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTitleByHandle = (
  arg0: number,
  arg1: string,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTitleByHandle")) {
    fn["winSetTitleByHandle"] = lib.func("AU3_WinSetTitleByHandle", "int", [
      "int",
      "string16",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTitleByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTrans = (
  arg0: string,
  arg1: string = "",
  arg2: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTrans")) {
    fn["winSetTrans"] = lib.func("AU3_WinSetTrans", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTrans"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winSetTransByHandle = (
  arg0: number,
  arg1: number,
): Promise<number> => {
  if (!fn.hasOwnProperty("winSetTransByHandle")) {
    fn["winSetTransByHandle"] = lib.func("AU3_WinSetTransByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winSetTransByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWait = (
  arg0: string,
  arg1: string = "",
  arg2: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWait")) {
    fn["winWait"] = lib.func("AU3_WinWait", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWait"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitByHandle = (
  arg0: number,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitByHandle")) {
    fn["winWaitByHandle"] = lib.func("AU3_WinWaitByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitActive = (
  arg0: string,
  arg1: string = "",
  arg2: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitActive")) {
    fn["winWaitActive"] = lib.func("AU3_WinWaitActive", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitActive"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitActiveByHandle = (
  arg0: number,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitActiveByHandle")) {
    fn["winWaitActiveByHandle"] = lib.func("AU3_WinWaitActiveByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitActiveByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitClose = (
  arg0: string,
  arg1: string = "",
  arg2: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitClose")) {
    fn["winWaitClose"] = lib.func("AU3_WinWaitClose", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitClose"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitCloseByHandle = (
  arg0: number,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitCloseByHandle")) {
    fn["winWaitCloseByHandle"] = lib.func("AU3_WinWaitCloseByHandle", "int", [
      "int",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitCloseByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitNotActive = (
  arg0: string,
  arg1: string = "",
  arg2: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitNotActive")) {
    fn["winWaitNotActive"] = lib.func("AU3_WinWaitNotActive", "int", [
      "string16",
      "string16",
      "int",
    ]);
  }

  return new Promise((resolve, reject) => {
    fn["winWaitNotActive"].async(arg0, arg1, arg2, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

export const winWaitNotActiveByHandle = (
  arg0: number,
  arg1: number = 0,
): Promise<number> => {
  if (!fn.hasOwnProperty("winWaitNotActiveByHandle")) {
    fn["winWaitNotActiveByHandle"] = lib.func(
      "AU3_WinWaitNotActiveByHandle",
      "int",
      ["int", "int"],
    );
  }

  return new Promise((resolve, reject) => {
    fn["winWaitNotActiveByHandle"].async(arg0, arg1, (err: Error, res: any) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};
