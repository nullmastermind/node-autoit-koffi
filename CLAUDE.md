# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Build (clean dist/ and compile TypeScript)
yarn build

# Build and run
yarn start

# Run tests (Node.js built-in test runner)
node examples/index.test.js

# Generate TypeScript bindings from AutoIt function definitions
node tools/generate_code.js
```

**Note:** No linting scripts are configured. Prettier is installed but has no format script.

## Architecture Overview

This is a **Node.js FFI wrapper for AutoIt's Windows automation library** using Koffi. It enables Windows GUI automation (mouse, keyboard, windows) from JavaScript/TypeScript.

**Data Flow:**
```
User Code → src/index.ts (Promise-wrapped exports) → Koffi FFI → AutoItX3 DLL → Windows API
```

**Key Components:**
- **src/index.ts** - Main entry point with 100+ exported AutoIt functions (mostly generated code)
- **src/util.ts** - DLL path selection (32/64-bit) and wide-string conversion
- **src/wchar.js** - UTF-16 string handling for Windows (adapted from ref-wchar, MIT)
- **tools/generate_code.js** - Code generator that creates TypeScript bindings from function definitions
- **dlls/** - Native AutoItX3 DLLs (32-bit and 64-bit versions)

**Critical Dependencies:**
- `koffi` - FFI library for native DLL calls
- `iconv-lite` - UTF-16 ↔ UTF-8 conversion
- `ref-napi` - Buffer/pointer manipulation

## Project-Specific Patterns

### Generated Code - Do Not Edit Directly

Most of `src/index.ts` is **generated** by `tools/generate_code.js`. Look for the `// Generated code:` comment. To add or modify AutoIt function bindings:
1. Edit the `autoitFunctions` object in `tools/generate_code.js`
2. Run `node tools/generate_code.js`
3. Rebuild with `yarn build`

### Lazy Function Loading Pattern

All FFI functions use lazy loading - bindings are created on first call and cached in the `fn` object:
```typescript
if (!fn.hasOwnProperty("functionName")) {
  fn["functionName"] = lib.func("AU3_FunctionName", "returnType", ["paramTypes"]);
}
```

### Buffer Auto-Expansion for Strings

Functions returning strings (like `clipGet`) recursively double buffer size if content is truncated:
```typescript
if (content.length === nBufSize - 1) {
  resolve(clipGet(nBufSize * 2)); // Recursive doubling
}
```

### Dual API Pattern

Most functions have two versions:
- String-based: `winActivate(szTitle, szText)` - searches for window
- Handle-based: `winActivateByHandle(hWnd)` - direct, more efficient

### Magic Constants

- `AU3_INTDEFAULT = -2147483647` - indicates "use default value" for optional parameters
- Example: `mouseClick("LEFT", AU3_INTDEFAULT, AU3_INTDEFAULT)` clicks at current position

### Wide Character Handling

Windows uses UTF-16LE. All string parameters use Koffi's `"string16"` type. Buffer allocations multiply by `wchar.size` (2 bytes).

### Output Parameters

Structs like Point/Rect are passed as output parameters using Koffi's `_Out_` prefix:
```typescript
fn["mouseGetPos"] = lib.func("AU3_MouseGetPos", "void", ["_Out_ LPPOINT*"]);
```

## Critical Requirements

1. **Windows Only** - Requires AutoItX DLL, no cross-platform support
2. **Must Call `init()` First** - Always `await autoit.init()` before using any functions
3. **All Functions Are Async** - Every function returns a Promise
4. **Architecture-Aware** - Automatically selects 32-bit or 64-bit DLL based on `os.arch()`

## Types

```typescript
type Point = { x: number; y: number };
type Rect = { left: number; top: number; right: number; bottom: number };
```

## Error Handling

- Functions don't validate parameters; rely on AutoIt DLL error codes
- Errors surface as Promise rejections
- Use `error()` function to get last AutoIt error code

## External Documentation

Function behavior and parameters: [AutoIt Documentation](https://www.autoitscript.com/autoit3/docs/functions/)

Function naming: `AU3_MouseMove` → `mouseMove` (camelCase conversion)

