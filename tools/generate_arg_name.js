const fs = require("fs");
const path = require("node:path");
const { forEach } = require("lodash");

const headerContent = fs.readFileSync(
  path.join(__dirname, "../dlls/AutoItX3_DLL.h"),
  "utf-8",
);

const argumentNames = {};

headerContent
  .split("\n")
  .map((v) => v.trim())
  .filter((v) => v.startsWith("AU3_API"))
  .map((v) => {
    return v.replace(/\/\*(.*?)\*\//g, "");
  })
  .map((v) => {
    const arguments = v
      .split("(")
      .pop()
      .split(")")[0]
      .split(",")
      .map((v) => v.trim())
      .map((v, i) => {
        const temp = v.split(" ");
        return {
          type: temp[0],
          name: temp[1],
          index: i,
        };
      })
      .filter((v) => !!v.name);
    const fnName = v.split("WINAPI ").pop().split("(")[0];
    return { name: fnName, arguments };
  })
  .filter((v) => v.arguments.length > 0)
  .forEach((v) => {
    argumentNames[v.name] = {};
    forEach(v.arguments, (arg) => {
      argumentNames[v.name][`arg${arg.index}`] = arg.name;
    });
  });

fs.writeFileSync("argumentNames.json", JSON.stringify(argumentNames, null, 2));
