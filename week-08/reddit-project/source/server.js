'use strict'

const app = require('./routes');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Yay, running on port ${PORT} ʕ ·(エ)· ʔ `);
});
