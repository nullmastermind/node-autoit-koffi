const test = require("node:test");
const { init, mouseMove, send, clipGet, sleep } = require("../dist");

test("mouse move", async () => {
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
