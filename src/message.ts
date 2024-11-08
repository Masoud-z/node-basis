import { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

export default function MessagePage(req: IncomingMessage, res: ServerResponse) {
  const body: any[] = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = body.concat().toString();
    const message = parsedBody.split("=")[1];
    fs.writeFileSync("message.txt", message);
    console.log(message);
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  });
}
