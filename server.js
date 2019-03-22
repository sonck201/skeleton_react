require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT_EXTERNAL || 3000;

app.listen(port, () => console.log(`SkeletonReact app listening on port ${port}!`));
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
