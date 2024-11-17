"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundPage = void 0;
function notFoundPage(req, res, next) {
    res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
}
exports.notFoundPage = notFoundPage;
