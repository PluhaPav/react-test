const URL = require("url");
const path = require("path");
// const {random} = require("./utils/random");
// const {randomBoolean} = require("./utils/random");

module.exports = (router, port) => {
    require("./mocks.js").forEach(({ method, url, status, folder, func, file, error }) => {
        router[method](url, (req, res) => {
            const index = 0;
            const statusCode = Array.isArray(status) ? status[index] : status;
            const run = Array.isArray(status) ? func[index] : func;
            let output;
            switch (statusCode) {
                case 200:
                case 400:
                case 409:
                    output =
                        folder && run
                            ? require(`./${folder}/${run}.js`)({
                                port,
                                // random,
                                // randomBoolean,
                                id: req.params.id,
                                body: req.body,
                                query: URL.parse(req.url, true).query
                            })
                            : "";
                    break;
                case 204:
                    output = "";
                    break;
                default:
                    output = { error };
            }
            if (file) return res.sendFile(path.resolve(__dirname, "assets", output));
            res.status(statusCode).jsonp(output);
        });
    });
    return router;
};
