"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("./routes/admin"));
const shop_1 = __importDefault(require("./routes/shop"));
const path_1 = __importDefault(require("path"));
const path_2 = __importDefault(require("./util/path"));
const notFound_1 = require("./controllers/notFound");
const database_1 = __importDefault(require("./util/database"));
const product_1 = __importDefault(require("./models/product"));
const user_1 = __importDefault(require("./models/user"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(path_2.default, "public")));
app.use((req, res, next) => {
    user_1.default.findAll()
        .then((users) => {
        req.user = users === null || users === void 0 ? void 0 : users[0];
        next();
    })
        .catch((err) => {
        console.log(err);
    });
});
app.use("/admin", admin_1.default);
app.use(shop_1.default);
app.use(notFound_1.notFoundPage);
product_1.default.belongsTo(user_1.default, { constraints: true, onDelete: "CASCADE" });
user_1.default.hasMany(product_1.default);
database_1.default
    .sync()
    .then((result) => {
    console.log("Database connected");
    return user_1.default.findAll().then((users) => {
        return users === null || users === void 0 ? void 0 : users[0];
    });
})
    .then((user) => {
    if (!user) {
        return user_1.default.create({ name: "Masoud", email: "test@test.com" });
    }
    return user;
})
    .then((user) => {
    console.log(user);
    app.listen(3000);
})
    .catch((err) => {
    console.log("error: ", err);
});
