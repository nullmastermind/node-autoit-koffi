// Ignore this script, everyone.

const { forEach } = require("lodash");
const fs = require("fs");
const autoitFunctions = {
  AU3_Init: ["void", []],
  AU3_error: ["int", []],
  AU3_AutoItSetOption: ["int", ["string16", "int"]],
  AU3_ClipGet: ["void", ["LPWSTR", "int"]],
  AU3_ClipPut: ["void", ["string16"]],
  AU3_ControlClick: [
    "int",
    ["string16", "string16", "string16", "string16", "int", "int", "int"],
  ],
  AU3_ControlClickByHandle: [
    "int",
    ["int", "int", "string16", "int", "int", "int"],
  ],
  AU3_ControlCommand: [
    "void",
    [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_ControlCommandByHandle: [
    "void",
    ["int", "int", "string16", "string16", "LPWSTR", "int"],
  ],
  AU3_ControlListView: [
    "void",
    [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_ControlListViewByHandle: [
    "void",
    ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
  ],
  AU3_ControlDisable: ["int", ["string16", "string16", "string16"]],
  AU3_ControlDisableByHandle: ["int", ["int", "int"]],
  AU3_ControlEnable: ["int", ["string16", "string16", "string16"]],
  AU3_ControlEnableByHandle: ["int", ["int", "int"]],
  AU3_ControlFocus: ["int", ["string16", "string16", "string16"]],
  AU3_ControlFocusByHandle: ["int", ["int", "int"]],
  AU3_ControlGetFocus: ["void", ["string16", "string16", "LPWSTR", "int"]],
  AU3_ControlGetFocusByHandle: ["void", ["int", "LPWSTR", "int"]],
  AU3_ControlGetHandle: ["int", ["int", "string16"]],
  AU3_ControlGetHandleAsText: [
    "void",
    [
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "string16",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_ControlGetPos: ["int", ["string16", "string16", "string16", "LPRECT"]],
  AU3_ControlGetPosByHandle: ["int", ["int", "int", "LPRECT"]],
  AU3_ControlGetText: [
    "void",
    ["string16", "string16", "string16", "LPWSTR", "int"],
  ],
  AU3_ControlGetTextByHandle: ["void", ["int", "int", "LPWSTR", "int"]],
  AU3_ControlHide: ["int", ["string16", "string16", "string16"]],
  AU3_ControlHideByHandle: ["int", ["int", "int"]],
  AU3_ControlMove: [
    "int",
    ["string16", "string16", "string16", "int", "int", "int", "int"],
  ],
  AU3_ControlMoveByHandle: ["int", ["int", "int", "int", "int", "int", "int"]],
  AU3_ControlSend: [
    "int",
    ["string16", "string16", "string16", "string16", "int"],
  ],
  AU3_ControlSendByHandle: ["int", ["int", "int", "string16", "int"]],
  AU3_ControlSetText: ["int", ["string16", "string16", "string16", "string16"]],
  AU3_ControlSetTextByHandle: ["int", ["int", "int", "string16"]],
  AU3_ControlShow: ["int", ["string16", "string16", "string16"]],
  AU3_ControlShowByHandle: ["int", ["int", "int"]],
  AU3_ControlTreeView: [
    "void",
    [
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_ControlTreeViewByHandle: [
    "void",
    ["int", "int", "string16", "string16", "string16", "LPWSTR", "int"],
  ],
  AU3_DriveMapAdd: [
    "void",
    [
      "string16",
      "string16",
      "int",
      /*[in,defaultvalue("")]*/ "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_DriveMapDel: ["int", ["string16"]],
  AU3_DriveMapGet: ["void", ["string16", "LPWSTR", "int"]],
  AU3_IsAdmin: ["int", []],
  AU3_MouseClick: [
    "int",
    [/*[in,defaultvalue("LEFT")]*/ "string16", "int", "int", "int", "int"],
  ],
  AU3_MouseClickDrag: ["int", ["string16", "int", "int", "int", "int", "int"]],
  AU3_MouseDown: ["void", [/*[in,defaultvalue("LEFT")]*/ "string16"]],
  AU3_MouseGetCursor: ["int", []],
  AU3_MouseGetPos: ["void", ["LPPOINT"]],
  AU3_MouseMove: ["int", ["int", "int", "int"]],
  AU3_MouseUp: ["void", [/*[in,defaultvalue("LEFT")]*/ "string16"]],
  AU3_MouseWheel: ["void", ["string16", "int"]],
  AU3_Opt: ["int", ["string16", "int"]],
  AU3_PixelChecksum: ["uint", ["LPRECT", "int"]],
  AU3_PixelGetColor: ["int", ["int", "int"]],
  AU3_PixelSearch: [
    "void",
    ["LPRECT", "int", /*default 0*/ "int", /*default 1*/ "int", "LPPOINT"],
  ],
  AU3_ProcessClose: ["int", ["string16"]],
  AU3_ProcessExists: ["int", ["string16"]],
  AU3_ProcessSetPriority: ["int", ["string16", "int"]],
  AU3_ProcessWait: ["int", ["string16", "int"]],
  AU3_ProcessWaitClose: ["int", ["string16", "int"]],
  AU3_Run: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16", "int"]],
  AU3_RunWait: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_RunAs: [
    "int",
    [
      "string16",
      "string16",
      "string16",
      "int",
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "int",
    ],
  ],
  AU3_RunAsWait: [
    "int",
    [
      "string16",
      "string16",
      "string16",
      "int",
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "int",
    ],
  ],
  AU3_Send: ["void", ["string16", "int"]],
  AU3_Shutdown: ["int", ["int"]],
  AU3_Sleep: ["void", ["int"]],
  AU3_StatusbarGetText: [
    "int",
    [
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      /*[in,defaultvalue(1)]*/ "int",
      "LPWSTR",
      "int",
    ],
  ],
  AU3_StatusbarGetTextByHandle: [
    "int",
    ["int", /*[in,defaultvalue(1)]*/ "int", "LPWSTR", "int"],
  ],
  AU3_ToolTip: ["void", ["string16", "int", "int"]],
  AU3_WinActivate: ["int", ["string16", "string16"]],
  AU3_WinActivateByHandle: ["int", ["int"]],
  AU3_WinActive: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinActiveByHandle: ["int", ["int"]],
  AU3_WinClose: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinCloseByHandle: ["int", ["int"]],
  AU3_WinExists: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinExistsByHandle: ["int", ["int"]],
  AU3_WinGetCaretPos: ["int", ["LPPOINT"]],
  AU3_WinGetClassList: [
    "void",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPWSTR", "int"],
  ],
  AU3_WinGetClassListByHandle: ["void", ["int", "LPWSTR", "int"]],
  AU3_WinGetClientSize: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPRECT"],
  ],
  AU3_WinGetClientSizeByHandle: ["int", ["int", "LPRECT"]],
  AU3_WinGetHandle: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinGetHandleAsText: [
    "void",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPWSTR", "int"],
  ],
  AU3_WinGetPos: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPRECT"],
  ],
  AU3_WinGetPosByHandle: ["int", ["int", "LPRECT"]],
  AU3_WinGetProcess: [
    "uint32",
    ["string16", /*[in,defaultvalue("")]*/ "string16"],
  ],
  AU3_WinGetProcessByHandle: ["uint32", ["int"]],
  AU3_WinGetState: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinGetStateByHandle: ["int", ["int"]],
  AU3_WinGetText: [
    "void",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPWSTR", "int"],
  ],
  AU3_WinGetTextByHandle: ["void", ["int", "LPWSTR", "int"]],
  AU3_WinGetTitle: [
    "void",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "LPWSTR", "int"],
  ],
  AU3_WinGetTitleByHandle: ["void", ["int", "LPWSTR", "int"]],
  AU3_WinKill: ["int", ["string16", /*[in,defaultvalue("")]*/ "string16"]],
  AU3_WinKillByHandle: ["int", ["int"]],
  AU3_WinMenuSelectItem: [
    "int",
    [
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
      "string16",
    ],
  ],
  AU3_WinMenuSelectItemByHandle: [
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
  ],
  AU3_WinMinimizeAll: ["void", []],
  AU3_WinMinimizeAllUndo: ["void", []],
  AU3_WinMove: [
    "int",
    [
      "string16",
      /*[in,defaultvalue("")]*/ "string16",
      "int",
      "int",
      "int",
      "int",
    ],
  ],
  AU3_WinMoveByHandle: ["int", ["int", "int", "int", "int", "int"]],
  AU3_WinSetOnTop: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinSetOnTopByHandle: ["int", ["int", "int"]],
  AU3_WinSetState: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinSetStateByHandle: ["int", ["int", "int"]],
  AU3_WinSetTitle: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "string16"],
  ],
  AU3_WinSetTitleByHandle: ["int", ["int", "string16"]],
  AU3_WinSetTrans: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinSetTransByHandle: ["int", ["int", "int"]],
  AU3_WinWait: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinWaitByHandle: ["int", ["int", "int"]],
  AU3_WinWaitActive: ["int", ["string16", "string16", "int"]],
  AU3_WinWaitActiveByHandle: ["int", ["int", "int"]],
  AU3_WinWaitClose: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinWaitCloseByHandle: ["int", ["int", "int"]],
  AU3_WinWaitNotActive: [
    "int",
    ["string16", /*[in,defaultvalue("")]*/ "string16", "int"],
  ],
  AU3_WinWaitNotActiveByHandle: ["int", ["int", "int"]],
};
const AU3_INTDEFAULT = -2147483647;
const SW_SHOWNORMAL = 1;
const defaultArgs = {
  ClipGet: { 1: 512 },
  ControlClick: {
    1: "",
    3: "LEFT",
    4: 1,
    5: AU3_INTDEFAULT,
    6: AU3_INTDEFAULT,
  },
  ControlClickByHandle: {
    2: "LEFT",
    3: 1,
    4: AU3_INTDEFAULT,
    5: AU3_INTDEFAULT,
  },
  ControlCommand: { 1: "", 4: "", 6: 256 },
  ControlCommandByHandle: { 3: "", 5: 256 },
  ControlListView: { 1: "", 4: "", 5: "", 7: 256 },
  ControlListViewByHandle: { 3: "", 4: "", 6: 256 },
  ControlDisable: { 1: "" },
  ControlEnable: { 1: "" },
  ControlFocus: { 1: "" },
  ControlGetFocus: { 1: "", 3: 256 },
  ControlGetFocusByHandle: { 2: 256 },
  ControlGetHandleAsText: { 1: "", 4: 256 },
  ControlGetPos: { 1: "" },
  ControlGetText: { 1: "", 4: 512 },
  ControlGetTextByHandle: { 3: 512 },
  ControlHide: { 1: "" },
  ControlMove: { 1: "", 5: -1, 6: -1 },
  ControlMoveByHandle: { 4: -1, 5: -1 },
  ControlSend: { 1: "", 4: 0 },
  ControlSendByHandle: { 3: 0 },
  ControlSetText: { 1: "" },
  ControlShow: { 1: "" },
  ControlTreeView: { 1: "", 4: "", 5: "", 7: 256 },
  ControlTreeViewByHandle: { 3: "", 4: "", 6: 256 },
  DriveMapAdd: { 3: "", 4: "", 6: 256 },
  DriveMapGet: { 2: 256 },
  MouseClick: { 0: "LEFT", 1: AU3_INTDEFAULT, 2: AU3_INTDEFAULT, 3: 1, 4: -1 },
  MouseClickDrag: { 5: -1 },
  MouseDown: { 0: "LEFT" },
  MouseMove: { 2: -1 },
  MouseUp: { 0: "LEFT" },
  PixelChecksum: { 1: 1 },
  PixelSearch: { 2: 0, 3: 1 },
  ProcessWait: { 1: 0 },
  ProcessWaitClose: { 1: 0 },
  Run: { 1: "", 2: SW_SHOWNORMAL },
  RunWait: { 1: "", 2: SW_SHOWNORMAL },
  RunAs: { 5: "", 6: SW_SHOWNORMAL },
  RunAsWait: { 5: "", 6: SW_SHOWNORMAL },
  Send: { 1: 0 },
  StatusbarGetText: { 1: "", 2: 1, 4: 256 },
  StatusbarGetTextByHandle: { 1: 1, 3: 256 },
  ToolTip: { 1: AU3_INTDEFAULT, 2: AU3_INTDEFAULT },
  WinActivate: { 1: "" },
  WinClose: { 1: "" },
  WinExists: { 1: "" },
  WinGetClassList: { 1: "", 3: 512 },
  WinGetClassListByHandle: { 2: 512 },
  WinGetClientSize: { 1: "" },
  WinGetHandle: { 1: "" },
  WinGetHandleAsText: { 1: "", 3: 256 },
  WinGetPos: { 1: "" },
  WinGetProcess: { 1: "" },
  WinGetState: { 1: "" },
  WinGetText: { 1: "", 3: 512 },
  WinGetTextByHandle: { 2: 512 },
  WinGetTitle: { 1: "", 3: 512 },
  WinGetTitleByHandle: { 2: 512 },
  WinKill: { 1: "" },
  WinMenuSelectItem: { 1: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" },
  WinMenuSelectItemByHandle: {
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  },
  WinMove: { 1: "", 4: -1, 5: -1 },
  WinMoveByHandle: { 3: -1, 4: -1 },
  WinSetOnTop: { 1: "" },
  WinSetState: { 1: "" },
  WinSetTitle: { 1: "" },
  WinSetTrans: { 1: "" },
  WinWait: { 1: "", 2: 0 },
  WinWaitByHandle: { 1: 0 },
  WinWaitActive: { 1: "", 2: 0 },
  WinWaitActiveByHandle: { 1: 0 },
  WinWaitClose: { 1: "", 2: 0 },
  WinWaitCloseByHandle: { 1: 0 },
  WinWaitNotActive: { 1: "", 2: 0 },
  WinWaitNotActiveByHandle: { 1: 0 },
};
const argToReturnValue = {
  ClipGet: { arg: 0, type: "wstring", ex_arg: 1 },
  ControlCommand: { arg: 5, type: "wstring", ex_arg: 6 },
  ControlCommandByHandle: { arg: 4, type: "wstring", ex_arg: 5 },
  ControlListView: { arg: 6, type: "wstring", ex_arg: 7 },
  ControlListViewByHandle: { arg: 5, type: "wstring", ex_arg: 6 },
  ControlGetFocus: { arg: 2, type: "wstring", ex_arg: 3 },
  ControlGetFocusByHandle: { arg: 1, type: "wstring", ex_arg: 2 },
  ControlGetHandleAsText: { arg: 3, type: "wstring", ex_arg: 4 },
  ControlGetPos: { arg: 3, type: "rect" },
  ControlGetPosByHandle: { arg: 2, type: "rect" },
  ControlGetText: { arg: 3, type: "wstring", ex_arg: 4 },
  ControlGetTextByHandle: { arg: 2, type: "wstring", ex_arg: 3 },
  ControlTreeView: { arg: 6, type: "wstring", ex_arg: 7 },
  ControlTreeViewByHandle: { arg: 5, type: "wstring", ex_arg: 6 },
  DriveMapAdd: { arg: 5, type: "wstring", ex_arg: 6 },
  DriveMapGet: { arg: 1, type: "wstring", ex_arg: 2 },
  MouseGetPos: { arg: 0, type: "point" },
  PixelSearch: { arg: 4, type: "point" },
  StatusbarGetText: { arg: 3, type: "wstring", ex_arg: 4 },
  StatusbarGetTextByHandle: { arg: 2, type: "wstring", ex_arg: 3 },
  WinGetCaretPos: { arg: 0, type: "point" },
  WinGetClassList: { arg: 2, type: "wstring", ex_arg: 3 },
  WinGetClassListByHandle: { arg: 1, type: "wstring", ex_arg: 2 },
  WinGetClientSize: { arg: 2, type: "rect" },
  WinGetClientSizeByHandle: { arg: 1, type: "rect" },
  WinGetHandleAsText: { arg: 2, type: "wstring", ex_arg: 3 },
  WinGetPos: { arg: 2, type: "rect" },
  WinGetPosByHandle: { arg: 1, type: "rect" },
  WinGetText: { arg: 2, type: "wstring", ex_arg: 3 },
  WinGetTextByHandle: { arg: 1, type: "wstring", ex_arg: 2 },
  WinGetTitle: { arg: 2, type: "wstring", ex_arg: 3 },
  WinGetTitleByHandle: { arg: 1, type: "wstring", ex_arg: 2 },
};

function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const saveContent = [
  `const lib: any = {};\nconst fn:any = {};\nconst wchar:any = {};`,
];

forEach(autoitFunctions, (config, fnName) => {
  const key = lowercaseFirstLetter(fnName.replace("AU3_", ""));
  const defaultArgKey = fnName.replace("AU3_", "");
  const result = JSON.stringify(config[0]);
  const arguments = JSON.stringify(
    config[1].map((v, i) => {
      if (argToReturnValue.hasOwnProperty(defaultArgKey)) {
        const toReturn = argToReturnValue[defaultArgKey];
        if (i === toReturn.arg) {
          if (toReturn.type !== "wstring") {
            v = `_Out_ ${v}*`;
          }
        }
      }
      return v;
    }),
  );
  const fn = `lib.func("${fnName}", ${result}, ${arguments})`.replace(
    /\n/g,
    "",
  );
  const argTypes = {
    string16: "string",
    int: "number",
    void: "void",
    uint: "number",
    uint32: "number",
  };
  // result
  if (!argTypes.hasOwnProperty(config[0])) {
    throw { message: `type '${config[0]}' not found` };
  }
  let resultType = argTypes[config[0]];
  let resultHandleCode = "";
  let resultHandleType = "";
  const passArgs = [];
  // generate arguments
  const gen_arguments = config[1]
    .map((argType, i) => {
      if (argToReturnValue.hasOwnProperty(defaultArgKey)) {
        const toReturn = argToReturnValue[defaultArgKey];
        if (i === toReturn.arg) {
          if (toReturn.type === "wstring") {
            resultType = "string";
            resultHandleCode = `let result = Buffer.alloc(arg${toReturn.ex_arg} * wchar.size);`;
            resultHandleType = "string";
            passArgs.push(`result`);
          } else {
            resultType = toReturn.type === "point" ? "Point" : "Rect";
            resultHandleCode = `let result: any = {}`;
            resultHandleType = "struct";
            passArgs.push(`result`);
          }
        }
      }

      if (["LPWSTR", "LPRECT", "LPPOINT"].includes(argType)) return;
      if (!argTypes.hasOwnProperty(argType)) {
        throw { message: `type '${argType}' not found` };
      }

      let defaultValue = "";

      if (defaultArgs.hasOwnProperty(defaultArgKey)) {
        if (defaultArgs[defaultArgKey].hasOwnProperty(i)) {
          let val = defaultArgs[defaultArgKey][i];
          if (typeof val === "string") {
            val = JSON.stringify(val);
          }
          defaultValue = ` = ${val}`;
        }
      }

      passArgs.push(`arg${i}`);

      return `arg${i}: ${argTypes[argType]}${defaultValue}`;
    })
    .filter((v) => !!v);

  const getResolve = () => {
    if (resultHandleCode) {
      if (resultHandleType === "string") {
        return "else resolve(getWString(result));";
      }

      return "else resolve(result);";
    }
    return "else resolve(res);";
  };

  const generated = `
export const ${key} = (${gen_arguments.join(", ")}): Promise<${resultType}> => {
  if (!fn.hasOwnProperty("${key}")) {
    fn["${key}"] = ${fn};
  }
  ${resultHandleCode}
  
  return new Promise((resolve, reject) => {
    fn["${key}"].async(${passArgs.length ? passArgs.join(", ") + ", " : ""}(err: Error, ${resultHandleCode ? "_" : "res"}: any) => {
      if (err) reject(err);
      ${getResolve()}
    });
  });
};
  `.trim();

  console.log(generated);
  console.log("");
  saveContent.push(generated);
});

fs.writeFileSync("gen.ts", saveContent.join("\n\n"));
