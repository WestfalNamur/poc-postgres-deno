import { routersAccounts } from "./routerAccounts.ts";

export interface Handler {
  req: Request;
  match: URLPatternResult;
}

export interface Route {
  path: string;
  handler: (props: Handler) => Promise<Response>;
}

const routes: Route[] = [...routersAccounts];

export async function router(req: Request): Promise<Response> {
  // Using for loop as forEach can not 'break', meaning return and stop
  for (const route of routes) {
    const ROUTE = new URLPattern({ pathname: route.path });
    const match = ROUTE.exec(req.url);
    if (match) {
      console.log("request on route:", route.path);
      return await route.handler({ req, match });
    }
  }

  // If o route matches we will fall back to 404
  return new Response("Not found", {
    status: 404,
  });
}
