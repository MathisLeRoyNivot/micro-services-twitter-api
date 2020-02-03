const express = require('express');
const { argv } = require("yargs");
const bodyParser = require('body-parser');

const { getTimeline, postStatus } = require('./twitterService'); 

const app = express();
app.use(bodyParser.json());
const inputPort = argv.port;
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;


app.get('/api/twitter/timeline', async (req, res) => {
    const response = await getTimeline()
    res.send(response)
})
  
app.post('/api/twitter/status', async (req, res) => {
    const { status } = req.body
    postStatus(status).then((response) => {
        res.send(response)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

function Routes(routes, method) {
    this.routes = routes;
    this.method = method;
}

var routes = {};

routes.timeline = new Routes("/api/twitter/timeline", "GET")
routes.status = new Routes("/api/twitter/status", "POST")

app.listen(port, () => {
    console.log(`Server's running on following address : http://localhost:${port}\nAvailable routes :`)
    console.table(routes)
})