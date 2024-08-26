# Node AutoIt Koffi

This Node.js module provides support for all AutoIt functions, allowing users to automate Windows GUI tasks seamlessly. 

## Example
Check out an example of how to use this module in action: [Example Code](https://github.com/nullmastermind/node-autoit-koffi/blob/master/examples/index.test.js)

## Installation
To install Node AutoIt Koffi, simply run the following command:

```bash
npm install node-autoit-koffi
```

## Usage
Here's a quick example of how you can use Node AutoIt Koffi in your Node.js application:

```javascript
const autoit = require("node-autoit-koffi");

async function main() {
  await autoit.init();
  // Your code here
  await autoit.mouseMove(0, 0);
}

void main();
```

Make sure to refer to the [AutoIt documentation](https://www.autoitscript.com/autoit3/docs/functions/) for a list of supported functions and their usage.

```typescript
type Point = {
    x: number;
    y: number;
};
type Rect = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};

const init: () => Promise<void>;
const error: () => Promise<number>;
const autoItSetOption: (szOption: string, nValue: number) => Promise<number>;
const clipGet: (nBufSize?: number) => Promise<string>;
const clipPut: (szClip: string) => Promise<void>;
const controlClick: (szTitle: string, szText: string | undefined, szControl: string, szButton?: string, nNumClicks?: number, nX?: number, nY?: number) => Promise<number>;
const controlClickByHandle: (hWnd: number, hCtrl: number, szButton?: string, nNumClicks?: number, nX?: number, nY?: number) => Promise<number>;
const controlCommand: (szTitle: string, szText: string | undefined, szControl: string, szCommand: string, szExtra?: string, nBufSize?: number) => Promise<string>;
const controlCommandByHandle: (hWnd: number, hCtrl: number, szCommand: string, szExtra?: string, nBufSize?: number) => Promise<string>;
const controlListView: (szTitle: string, szText: string | undefined, szControl: string, szCommand: string, szExtra1?: string, szExtra2?: string, nBufSize?: number) => Promise<string>;
const controlListViewByHandle: (hWnd: number, hCtrl: number, szCommand: string, szExtra1?: string, szExtra2?: string, nBufSize?: number) => Promise<string>;
const controlDisable: (szTitle: string, szText: string | undefined, szControl: string) => Promise<number>;
const controlDisableByHandle: (hWnd: number, hCtrl: number) => Promise<number>;
const controlEnable: (szTitle: string, szText: string | undefined, szControl: string) => Promise<number>;
const controlEnableByHandle: (hWnd: number, hCtrl: number) => Promise<number>;
const controlFocus: (szTitle: string, szText: string | undefined, szControl: string) => Promise<number>;
const controlFocusByHandle: (hWnd: number, hCtrl: number) => Promise<number>;
const controlGetFocus: (szTitle: string, szText?: string, nBufSize?: number) => Promise<string>;
const controlGetFocusByHandle: (hWnd: number, nBufSize?: number) => Promise<string>;
const controlGetHandle: (hWnd: number, szControl: string) => Promise<number>;
const controlGetHandleAsText: (szTitle: string, szText: string | undefined, szControl: string, nBufSize?: number) => Promise<string>;
const controlGetPos: (szTitle: string, szText: string | undefined, szControl: string) => Promise<Rect>;
const controlGetPosByHandle: (hWnd: number, hCtrl: number) => Promise<Rect>;
const controlGetText: (szTitle: string, szText: string | undefined, szControl: string, nBufSize?: number) => Promise<string>;
const controlGetTextByHandle: (hWnd: number, hCtrl: number, nBufSize?: number) => Promise<string>;
const controlHide: (szTitle: string, szText: string | undefined, szControl: string) => Promise<number>;
const controlHideByHandle: (hWnd: number, hCtrl: number) => Promise<number>;
const controlMove: (szTitle: string, szText: string | undefined, szControl: string, nX: number, nY: number, nWidth?: number, nHeight?: number) => Promise<number>;
const controlMoveByHandle: (hWnd: number, hCtrl: number, nX: number, nY: number, nWidth?: number, nHeight?: number) => Promise<number>;
const controlSend: (szTitle: string, szText: string | undefined, szControl: string, szSendText: string, nMode?: number) => Promise<number>;
const controlSendByHandle: (hWnd: number, hCtrl: number, szSendText: string, nMode?: number) => Promise<number>;
const controlSetText: (szTitle: string, szText: string | undefined, szControl: string, szControlText: string) => Promise<number>;
const controlSetTextByHandle: (hWnd: number, hCtrl: number, szControlText: string) => Promise<number>;
const controlShow: (szTitle: string, szText: string | undefined, szControl: string) => Promise<number>;
const controlShowByHandle: (hWnd: number, hCtrl: number) => Promise<number>;
const controlTreeView: (szTitle: string, szText: string | undefined, szControl: string, szCommand: string, szExtra1?: string, szExtra2?: string, nBufSize?: number) => Promise<string>;
const controlTreeViewByHandle: (hWnd: number, hCtrl: number, szCommand: string, szExtra1?: string, szExtra2?: string, nBufSize?: number) => Promise<string>;
const driveMapAdd: (szDevice: string, szShare: string, nFlags: number, szUser?: string, szPwd?: string, nBufSize?: number) => Promise<string>;
const driveMapDel: (szDevice: string) => Promise<number>;
const driveMapGet: (szDevice: string, nBufSize?: number) => Promise<string>;
const isAdmin: () => Promise<number>;
const mouseClick: (szButton?: string, nX?: number, nY?: number, nClicks?: number, nSpeed?: number) => Promise<number>;
const mouseClickDrag: (szButton: string, nX1: number, nY1: number, nX2: number, nY2: number, nSpeed?: number) => Promise<number>;
const mouseDown: (szButton?: string) => Promise<void>;
const mouseGetCursor: () => Promise<number>;
const mouseGetPos: () => Promise<Point>;
const mouseMove: (nX: number, nY: number, nSpeed?: number) => Promise<number>;
const mouseUp: (szButton?: string) => Promise<void>;
const mouseWheel: (szDirection: string, nClicks: number) => Promise<void>;
const opt: (szOption: string, nValue: number) => Promise<number>;
const pixelChecksum: (lpRect: Rect, nStep?: number) => Promise<number>;
const pixelGetColor: (nX: number, nY: number) => Promise<number>;
const pixelSearch: (lpRect: Rect, nCol: number, nVar?: number, nStep?: number) => Promise<Point>;
const processClose: (szProcess: string) => Promise<number>;
const processExists: (szProcess: string) => Promise<number>;
const processSetPriority: (szProcess: string, nPriority: number) => Promise<number>;
const processWait: (szProcess: string, nTimeout?: number) => Promise<number>;
const processWaitClose: (szProcess: string, nTimeout?: number) => Promise<number>;
const run: (szProgram: string, szDir?: string, nShowFlag?: number) => Promise<number>;
const runWait: (szProgram: string, szDir?: string, nShowFlag?: number) => Promise<number>;
const runAs: (szUser: string, szDomain: string, szPassword: string, nLogonFlag: number, szProgram: string, szDir?: string, nShowFlag?: number) => Promise<number>;
const runAsWait: (szUser: string, szDomain: string, szPassword: string, nLogonFlag: number, szProgram: string, szDir?: string, nShowFlag?: number) => Promise<number>;
const send: (szSendText: string, nMode?: number) => Promise<void>;
const shutdown: (nFlags: number) => Promise<number>;
const sleep: (nMilliseconds: number) => Promise<void>;
const statusbarGetText: (szTitle: string, szText?: string, nPart?: number, nBufSize?: number) => Promise<string>;
const statusbarGetTextByHandle: (hWnd: number, nPart?: number, nBufSize?: number) => Promise<string>;
const toolTip: (szTip: string, nX?: number, nY?: number) => Promise<void>;
const winActivate: (szTitle: string, szText?: string) => Promise<number>;
const winActivateByHandle: (hWnd: number) => Promise<number>;
const winActive: (szTitle: string, szText: string) => Promise<number>;
const winActiveByHandle: (hWnd: number) => Promise<number>;
const winClose: (szTitle: string, szText?: string) => Promise<number>;
const winCloseByHandle: (hWnd: number) => Promise<number>;
const winExists: (szTitle: string, szText?: string) => Promise<number>;
const winExistsByHandle: (hWnd: number) => Promise<number>;
const winGetCaretPos: () => Promise<Point>;
const winGetClassList: (szTitle: string, szText?: string, nBufSize?: number) => Promise<string>;
const winGetClassListByHandle: (hWnd: number, nBufSize?: number) => Promise<string>;
const winGetClientSize: (szTitle: string, szText?: string) => Promise<Rect>;
const winGetClientSizeByHandle: (hWnd: number) => Promise<Rect>;
const winGetHandle: (szTitle: string, szText?: string) => Promise<number>;
const winGetHandleAsText: (szTitle: string, szText?: string, nBufSize?: number) => Promise<string>;
const winGetPos: (szTitle: string, szText?: string) => Promise<Rect>;
const winGetPosByHandle: (hWnd: number) => Promise<Rect>;
const winGetProcess: (szTitle: string, szText?: string) => Promise<number>;
const winGetProcessByHandle: (hWnd: number) => Promise<number>;
const winGetState: (szTitle: string, szText?: string) => Promise<number>;
const winGetStateByHandle: (hWnd: number) => Promise<number>;
const winGetText: (szTitle: string, szText?: string, nBufSize?: number) => Promise<string>;
const winGetTextByHandle: (hWnd: number, nBufSize?: number) => Promise<string>;
const winGetTitle: (szTitle: string, szText?: string, nBufSize?: number) => Promise<string>;
const winGetTitleByHandle: (hWnd: number, nBufSize?: number) => Promise<string>;
const winKill: (szTitle: string, szText?: string) => Promise<number>;
const winKillByHandle: (hWnd: number) => Promise<number>;
const winMenuSelectItem: (szTitle: string, szText: string | undefined, szItem1: string, szItem2?: string, szItem3?: string, szItem4?: string, szItem5?: string, szItem6?: string, szItem7?: string, szItem8?: string) => Promise<number>;
const winMenuSelectItemByHandle: (hWnd: number, szItem1: string, szItem2?: string, szItem3?: string, szItem4?: string, szItem5?: string, szItem6?: string, szItem7?: string, szItem8?: string) => Promise<number>;
const winMinimizeAll: () => Promise<void>;
const winMinimizeAllUndo: () => Promise<void>;
const winMove: (szTitle: string, szText: string | undefined, nX: number, nY: number, nWidth?: number, nHeight?: number) => Promise<number>;
const winMoveByHandle: (hWnd: number, nX: number, nY: number, nWidth?: number, nHeight?: number) => Promise<number>;
const winSetOnTop: (szTitle: string, szText: string | undefined, nFlag: number) => Promise<number>;
const winSetOnTopByHandle: (hWnd: number, nFlag: number) => Promise<number>;
const winSetState: (szTitle: string, szText: string | undefined, nFlags: number) => Promise<number>;
const winSetStateByHandle: (hWnd: number, nFlags: number) => Promise<number>;
const winSetTitle: (szTitle: string, szText: string | undefined, szNewTitle: string) => Promise<number>;
const winSetTitleByHandle: (hWnd: number, szNewTitle: string) => Promise<number>;
const winSetTrans: (szTitle: string, szText: string | undefined, nTrans: number) => Promise<number>;
const winSetTransByHandle: (hWnd: number, nTrans: number) => Promise<number>;
const winWait: (szTitle: string, szText?: string, nTimeout?: number) => Promise<number>;
const winWaitByHandle: (hWnd: number, nTimeout?: number) => Promise<number>;
const winWaitActive: (szTitle: string, szText?: string, nTimeout?: number) => Promise<number>;
const winWaitActiveByHandle: (hWnd: number, nTimeout?: number) => Promise<number>;
const winWaitClose: (szTitle: string, szText?: string, nTimeout?: number) => Promise<number>;
const winWaitCloseByHandle: (hWnd: number, nTimeout?: number) => Promise<number>;
const winWaitNotActive: (szTitle: string, szText?: string, nTimeout?: number) => Promise<number>;
const winWaitNotActiveByHandle: (hWnd: number, nTimeout?: number) => Promise<number>;
```

## Support
If you encounter any issues or have questions, feel free to [open an issue](https://github.com/nullmastermind/node-autoit-koffi/issues) on GitHub.

---

By incorporating Node AutoIt Koffi into your Node.js projects, you can automate Windows GUI tasks efficiently and effectively. Happy coding! 🚀
