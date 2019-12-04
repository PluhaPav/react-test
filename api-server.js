const ifaces = require("os").networkInterfaces();
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const chokidar = require("chokidar");
const path = require("path");
const logger = require("eazy-logger").Logger();

const port = 9999;
const FOLDER = "api";

// const { random } = require(`./${FOLDER}/utils/random`);

const addresses = [];
Object.keys(ifaces).forEach(ifname => {
    ifaces[ifname].forEach(iface => {
        if (iface.family !== "IPv4" || iface.internal !== false) return;
        addresses.push(`http://${iface.address}:${port}`);
    });
});

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json({ type: "application/json" }));
server.use(cookieParser());
server.use((req, res, next) => {
    const router = express.Router();
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(require(path.resolve(__dirname, FOLDER, "router.js"))(router, port)(req, res, next));
        }, 400);
    });
});
server.listen(port, () => {
    const local = `http://localhost:${port}`;
    const length = [local, ...addresses].reduce((acc, current) => (current.length > acc ? current.length : acc), 0);
    const underline = new Array(11 + length).join("-");
    logger.info("Runned api server:");
    logger.info("{grey:%s}", underline);
    logger.info("%s: {blue:%s}", `${new Array(4).join(" ")}Local`, local);
    addresses.forEach(address => logger.info("%s: {blue:%s}", "External", address));
    logger.info("{grey:%s}", underline);
});

chokidar.watch(path.resolve(__dirname, FOLDER)).on("change", path => {
    if (require.cache[path]) delete require.cache[path];
});
