const test = require("node:test");
const {
  init,
  mouseMove,
  send,
  clipGet,
  sleep,
  mouseGetPos,
  winGetClientSize,
} = require("../dist");

test("mouseMove", async () => {
  await init();
  await mouseMove(0, 0);
});

test("send", async () => {
  await init();
  await sleep(3000);
  await send("Good job", 1);
});

test("clipGet", async () => {
  await init();
  console.log(await clipGet());
});

test("mouseGetPos", async () => {
  await init();
  console.log(await mouseGetPos());
});

test("winGetClientSize", async () => {
  await init();
  console.log(await winGetClientSize("Untitled - Notepad"));
});
