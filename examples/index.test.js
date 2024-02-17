const test = require("node:test");
const { init, mouseMove, send, clipGet } = require("../dist");

test("mouse move", async () => {
  await init();
  await mouseMove(0, 0);
});

test("send", async () => {
  await init();
  await new Promise((rel) => setTimeout(rel, 3000));
  await send("Good job", 1);
});

test("clipGet", async () => {
  await init();
  console.log(await clipGet());
});
