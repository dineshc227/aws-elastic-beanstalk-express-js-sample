const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!  This is Dinesh Chowdary and I worked as Site Reliabilty Engineer in DXC Complany at Bengalore Location'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
