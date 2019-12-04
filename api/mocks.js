module.exports = [
    { method: "get", url: "/api/list", status: 200, folder: "list", func: "getList", error: "Авторизуйтесь" },
    { method: "get", url: "/assets/:id", status: 200, folder: "assets", func: "get", file: true }
];
