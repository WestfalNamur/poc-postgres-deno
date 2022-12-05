import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import { ROUTE_BOOKS, routerBooks } from "./router/index.ts";
import {ROUTE_ACCOUNTS, routerAccounts} from "./router/routerAccounts.ts";


const handler = async (req: Request): Promise<Response> => {
  if (ROUTE_BOOKS.exec(req.url)) return routerBooks(req);
  if (ROUTE_ACCOUNTS.exec(req.url)) return await routerAccounts(req);

  return new Response("Not found", {
    status: 404,
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
