import { IncomingMessage, ServerResponse } from "http";
import HomePage from "./main";
import MessagePage from "./message";

export default function requestHandler(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.url === "/") {
    HomePage(req, res);
  } else if (req.url === "/message" && req.method === "POST") {
    MessagePage(req, res);
  }
}
