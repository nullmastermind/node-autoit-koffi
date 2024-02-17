import * as os from "os";
import path from "node:path";

export const getDll = () => {
  const libDir = path.join(__dirname, "../dlls");

  switch (os.arch()) {
    case "ia32":
      return path.join(libDir, "AutoItX3.dll");
    case "x64":
      return path.join(libDir, "AutoItX3_x64.dll");
  }

  return null;
};
