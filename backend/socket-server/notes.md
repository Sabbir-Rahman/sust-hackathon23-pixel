npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier --dev

for eslint and prettier

### Long debugging session and lesson

- Carefull about access at the time of github self hosted runner
- Use npm i before using pm2
- Check build command is there or not
- check outdir of ts.config file
- Check build output file
- Check npm start command is there or not and adjust as build output
- Check cross-env npm package installed or not
- if new encoder is not define in node_modules/whatwg-url/lib/encoding.js use const { TextEncoder, TextDecoder } = require("util") at the top
