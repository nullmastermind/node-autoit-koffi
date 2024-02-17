import { getDll, getWString } from "./util";
import * as koffi from "koffi";
import * as iconv from "iconv-lite";
import wchar from "./wchar";

const dll = getDll();
if (!dll) throw new Error("This operating system is not supported!");
const lib = koffi.load(dll);

koffi.pointer("LPWSTR", "uint16_t*");
koffi.pointer(
  "LPRECT",
  koffi.struct({
    left: "long",
    top: "long",
    right: "long",
    bottom: "long",
  }),
);
koffi.pointer(
  "LPPOINT",
  koffi.struct({
    x: "long",
    y: "long",
  }),
);

const fn = {
  init: lib.func("AU3_Init", "void", []),
  error: lib.func("AU3_error", "int", []),
  autoItSetOption: lib.func("AU3_AutoItSetOption", "int", ["string16", "int"]),
  clipGet: lib.func("AU3_ClipGet", "void", ["LPWSTR", "int"]),
  clipPut: lib.func("AU3_ClipPut", "void", ["string16"]),
  controlClick: lib.func("AU3_ControlClick", "int", [
    "string16",
    "string16",
    "string16",
    "string16",
    "int",
    "int",
    "int",
  ]),
  controlClickByHandle: lib.func("AU3_ControlClickByHandle", "int", [
    "int",
    "int",
    "string16",
    "int",
    "int",
    "int",
  ]),
  controlCommand: lib.func("AU3_ControlCommand", "void", [
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlCommandByHandle: lib.func("AU3_ControlCommandByHandle", "void", [
    "int",
    "int",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlListView: lib.func("AU3_ControlListView", "void", [
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlListViewByHandle: lib.func("AU3_ControlListViewByHandle", "void", [
    "int",
    "int",
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlDisable: lib.func("AU3_ControlDisable", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  controlDisableByHandle: lib.func("AU3_ControlDisableByHandle", "int", [
    "int",
    "int",
  ]),
  controlEnable: lib.func("AU3_ControlEnable", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  controlEnableByHandle: lib.func("AU3_ControlEnableByHandle", "int", [
    "int",
    "int",
  ]),
  controlFocus: lib.func("AU3_ControlFocus", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  controlFocusByHandle: lib.func("AU3_ControlFocusByHandle", "int", [
    "int",
    "int",
  ]),
  controlGetFocus: lib.func("AU3_ControlGetFocus", "void", [
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlGetFocusByHandle: lib.func("AU3_ControlGetFocusByHandle", "void", [
    "int",
    "LPWSTR",
    "int",
  ]),
  controlGetHandle: lib.func("AU3_ControlGetHandle", "int", [
    "int",
    "string16",
  ]),
  controlGetHandleAsText: lib.func("AU3_ControlGetHandleAsText", "void", [
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlGetPos: lib.func("AU3_ControlGetPos", "int", [
    "string16",
    "string16",
    "string16",
    "LPRECT",
  ]),
  controlGetPosByHandle: lib.func("AU3_ControlGetPosByHandle", "int", [
    "int",
    "int",
    "LPRECT",
  ]),
  controlGetText: lib.func("AU3_ControlGetText", "void", [
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlGetTextByHandle: lib.func("AU3_ControlGetTextByHandle", "void", [
    "int",
    "int",
    "LPWSTR",
    "int",
  ]),
  controlHide: lib.func("AU3_ControlHide", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  controlHideByHandle: lib.func("AU3_ControlHideByHandle", "int", [
    "int",
    "int",
  ]),
  controlMove: lib.func("AU3_ControlMove", "int", [
    "string16",
    "string16",
    "string16",
    "int",
    "int",
    "int",
    "int",
  ]),
  controlMoveByHandle: lib.func("AU3_ControlMoveByHandle", "int", [
    "int",
    "int",
    "int",
    "int",
    "int",
    "int",
  ]),
  controlSend: lib.func("AU3_ControlSend", "int", [
    "string16",
    "string16",
    "string16",
    "string16",
    "int",
  ]),
  controlSendByHandle: lib.func("AU3_ControlSendByHandle", "int", [
    "int",
    "int",
    "string16",
    "int",
  ]),
  controlSetText: lib.func("AU3_ControlSetText", "int", [
    "string16",
    "string16",
    "string16",
    "string16",
  ]),
  controlSetTextByHandle: lib.func("AU3_ControlSetTextByHandle", "int", [
    "int",
    "int",
    "string16",
  ]),
  controlShow: lib.func("AU3_ControlShow", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  controlShowByHandle: lib.func("AU3_ControlShowByHandle", "int", [
    "int",
    "int",
  ]),
  controlTreeView: lib.func("AU3_ControlTreeView", "void", [
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  controlTreeViewByHandle: lib.func("AU3_ControlTreeViewByHandle", "void", [
    "int",
    "int",
    "string16",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  driveMapAdd: lib.func("AU3_DriveMapAdd", "void", [
    "string16",
    "string16",
    "int",
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  driveMapDel: lib.func("AU3_DriveMapDel", "int", ["string16"]),
  driveMapGet: lib.func("AU3_DriveMapGet", "void", [
    "string16",
    "LPWSTR",
    "int",
  ]),
  isAdmin: lib.func("AU3_IsAdmin", "int", []),
  mouseClick: lib.func("AU3_MouseClick", "int", [
    "string16",
    "int",
    "int",
    "int",
    "int",
  ]),
  mouseClickDrag: lib.func("AU3_MouseClickDrag", "int", [
    "string16",
    "int",
    "int",
    "int",
    "int",
    "int",
  ]),
  mouseDown: lib.func("AU3_MouseDown", "void", ["string16"]),
  mouseGetCursor: lib.func("AU3_MouseGetCursor", "int", []),
  mouseGetPos: lib.func("AU3_MouseGetPos", "void", ["LPPOINT"]),
  mouseMove: lib.func("AU3_MouseMove", "int", ["int", "int", "int"]),
  mouseUp: lib.func("AU3_MouseUp", "void", ["string16"]),
  mouseWheel: lib.func("AU3_MouseWheel", "void", ["string16", "int"]),
  opt: lib.func("AU3_Opt", "int", ["string16", "int"]),
  pixelChecksum: lib.func("AU3_PixelChecksum", "uint", ["LPRECT", "int"]),
  pixelGetColor: lib.func("AU3_PixelGetColor", "int", ["int", "int"]),
  pixelSearch: lib.func("AU3_PixelSearch", "void", [
    "LPRECT",
    "int",
    "int",
    "int",
    "LPPOINT",
  ]),
  processClose: lib.func("AU3_ProcessClose", "int", ["string16"]),
  processExists: lib.func("AU3_ProcessExists", "int", ["string16"]),
  processSetPriority: lib.func("AU3_ProcessSetPriority", "int", [
    "string16",
    "int",
  ]),
  processWait: lib.func("AU3_ProcessWait", "int", ["string16", "int"]),
  processWaitClose: lib.func("AU3_ProcessWaitClose", "int", [
    "string16",
    "int",
  ]),
  run: lib.func("AU3_Run", "int", ["string16", "string16", "int"]),
  runWait: lib.func("AU3_RunWait", "int", ["string16", "string16", "int"]),
  runAs: lib.func("AU3_RunAs", "int", [
    "string16",
    "string16",
    "string16",
    "int",
    "string16",
    "string16",
    "int",
  ]),
  runAsWait: lib.func("AU3_RunAsWait", "int", [
    "string16",
    "string16",
    "string16",
    "int",
    "string16",
    "string16",
    "int",
  ]),
  send: lib.func("AU3_Send", "void", ["string16", "int"]),
  shutdown: lib.func("AU3_Shutdown", "int", ["int"]),
  sleep: lib.func("AU3_Sleep", "void", ["int"]),
  statusbarGetText: lib.func("AU3_StatusbarGetText", "int", [
    "string16",
    "string16",
    "int",
    "LPWSTR",
    "int",
  ]),
  statusbarGetTextByHandle: lib.func("AU3_StatusbarGetTextByHandle", "int", [
    "int",
    "int",
    "LPWSTR",
    "int",
  ]),
  toolTip: lib.func("AU3_ToolTip", "void", ["string16", "int", "int"]),
  winActivate: lib.func("AU3_WinActivate", "int", ["string16", "string16"]),
  winActivateByHandle: lib.func("AU3_WinActivateByHandle", "int", ["int"]),
  winActive: lib.func("AU3_WinActive", "int", ["string16", "string16"]),
  winActiveByHandle: lib.func("AU3_WinActiveByHandle", "int", ["int"]),
  winClose: lib.func("AU3_WinClose", "int", ["string16", "string16"]),
  winCloseByHandle: lib.func("AU3_WinCloseByHandle", "int", ["int"]),
  winExists: lib.func("AU3_WinExists", "int", ["string16", "string16"]),
  winExistsByHandle: lib.func("AU3_WinExistsByHandle", "int", ["int"]),
  winGetCaretPos: lib.func("AU3_WinGetCaretPos", "int", ["LPPOINT"]),
  winGetClassList: lib.func("AU3_WinGetClassList", "void", [
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  winGetClassListByHandle: lib.func("AU3_WinGetClassListByHandle", "void", [
    "int",
    "LPWSTR",
    "int",
  ]),
  winGetClientSize: lib.func("AU3_WinGetClientSize", "int", [
    "string16",
    "string16",
    "LPRECT",
  ]),
  winGetClientSizeByHandle: lib.func("AU3_WinGetClientSizeByHandle", "int", [
    "int",
    "LPRECT",
  ]),
  winGetHandle: lib.func("AU3_WinGetHandle", "int", ["string16", "string16"]),
  winGetHandleAsText: lib.func("AU3_WinGetHandleAsText", "void", [
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  winGetPos: lib.func("AU3_WinGetPos", "int", [
    "string16",
    "string16",
    "LPRECT",
  ]),
  winGetPosByHandle: lib.func("AU3_WinGetPosByHandle", "int", [
    "int",
    "LPRECT",
  ]),
  winGetProcess: lib.func("AU3_WinGetProcess", "uint32", [
    "string16",
    "string16",
  ]),
  winGetProcessByHandle: lib.func("AU3_WinGetProcessByHandle", "uint32", [
    "int",
  ]),
  winGetState: lib.func("AU3_WinGetState", "int", ["string16", "string16"]),
  winGetStateByHandle: lib.func("AU3_WinGetStateByHandle", "int", ["int"]),
  winGetText: lib.func("AU3_WinGetText", "void", [
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  winGetTextByHandle: lib.func("AU3_WinGetTextByHandle", "void", [
    "int",
    "LPWSTR",
    "int",
  ]),
  winGetTitle: lib.func("AU3_WinGetTitle", "void", [
    "string16",
    "string16",
    "LPWSTR",
    "int",
  ]),
  winGetTitleByHandle: lib.func("AU3_WinGetTitleByHandle", "void", [
    "int",
    "LPWSTR",
    "int",
  ]),
  winKill: lib.func("AU3_WinKill", "int", ["string16", "string16"]),
  winKillByHandle: lib.func("AU3_WinKillByHandle", "int", ["int"]),
  winMenuSelectItem: lib.func("AU3_WinMenuSelectItem", "int", [
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
  ]),
  winMenuSelectItemByHandle: lib.func("AU3_WinMenuSelectItemByHandle", "int", [
    "int",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
    "string16",
  ]),
  winMinimizeAll: lib.func("AU3_WinMinimizeAll", "void", []),
  winMinimizeAllUndo: lib.func("AU3_WinMinimizeAllUndo", "void", []),
  winMove: lib.func("AU3_WinMove", "int", [
    "string16",
    "string16",
    "int",
    "int",
    "int",
    "int",
  ]),
  winMoveByHandle: lib.func("AU3_WinMoveByHandle", "int", [
    "int",
    "int",
    "int",
    "int",
    "int",
  ]),
  winSetOnTop: lib.func("AU3_WinSetOnTop", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winSetOnTopByHandle: lib.func("AU3_WinSetOnTopByHandle", "int", [
    "int",
    "int",
  ]),
  winSetState: lib.func("AU3_WinSetState", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winSetStateByHandle: lib.func("AU3_WinSetStateByHandle", "int", [
    "int",
    "int",
  ]),
  winSetTitle: lib.func("AU3_WinSetTitle", "int", [
    "string16",
    "string16",
    "string16",
  ]),
  winSetTitleByHandle: lib.func("AU3_WinSetTitleByHandle", "int", [
    "int",
    "string16",
  ]),
  winSetTrans: lib.func("AU3_WinSetTrans", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winSetTransByHandle: lib.func("AU3_WinSetTransByHandle", "int", [
    "int",
    "int",
  ]),
  winWait: lib.func("AU3_WinWait", "int", ["string16", "string16", "int"]),
  winWaitByHandle: lib.func("AU3_WinWaitByHandle", "int", ["int", "int"]),
  winWaitActive: lib.func("AU3_WinWaitActive", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winWaitActiveByHandle: lib.func("AU3_WinWaitActiveByHandle", "int", [
    "int",
    "int",
  ]),
  winWaitClose: lib.func("AU3_WinWaitClose", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winWaitCloseByHandle: lib.func("AU3_WinWaitCloseByHandle", "int", [
    "int",
    "int",
  ]),
  winWaitNotActive: lib.func("AU3_WinWaitNotActive", "int", [
    "string16",
    "string16",
    "int",
  ]),
  winWaitNotActiveByHandle: lib.func("AU3_WinWaitNotActiveByHandle", "int", [
    "int",
    "int",
  ]),
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
