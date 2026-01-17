import path from 'node:path';
import * as os from 'node:os';
import wchar from './wchar';

export const getDll = () => {
  const libDir = path.join(__dirname, '../dlls');

  switch (os.arch()) {
    case 'ia32':
      return path.join(libDir, 'AutoItX3.dll');
    case 'x64':
      return path.join(libDir, 'AutoItX3_x64.dll');
  }

  return null;
};

export const getWString = (buf: Buffer) => {
  for (let i = 0; i < buf.length; i += wchar.size) {
    if (buf[i] === 0 && buf[i + 1] === 0) return wchar.toString(buf.slice(0, i));
  }
  return wchar.toString(buf);
};
