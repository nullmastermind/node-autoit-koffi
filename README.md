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
}

main().catch(console.error);
```

Make sure to refer to the [AutoIt documentation](https://www.autoitscript.com/autoit3/docs/functions/) for a list of supported functions and their usage.

## Support
If you encounter any issues or have questions, feel free to [open an issue](https://github.com/nullmastermind/node-autoit-koffi/issues) on GitHub.

---

By incorporating Node AutoIt Koffi into your Node.js projects, you can automate Windows GUI tasks efficiently and effectively. Happy coding! 🚀
