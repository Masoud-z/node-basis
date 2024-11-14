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
const test_1 = __importDefault(require("./routes/test"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(path_2.default, "public")));
app.use("/admin", admin_1.default);
app.use("/test", test_1.default);
app.use(shop_1.default);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
app.listen(3000);
