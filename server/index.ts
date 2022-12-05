import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { ROUTE_BOOKS, routerBooks } from "./router/index.ts";

function handler(req: Request): Response {
  if (ROUTE_BOOKS.exec(req.url)) return routerBooks(req);

  return new Response("Not found", {
    status: 404,
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
