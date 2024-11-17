import { NextFunction, Request, Response } from "express";

export function notFoundPage(req: Request, res: Response, next: NextFunction) {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
}
