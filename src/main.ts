import { IncomingMessage, ServerResponse } from "http";

export default function HomePage(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write(
    "<body><h1>test</h1><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
  );
  res.write("</html>");
  res.end();
}
