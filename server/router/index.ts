import { ROUTE_ACCOUNTS, routerAccounts } from "./routerAccounts.ts";

/* Application router
 *
 * Takes a requests, checks the requested url and calls the according ressource
 * router or 404 if no ressource route matches.
 */
export const router = async (req: Request): Promise<Response> => {
  if (ROUTE_ACCOUNTS.exec(req.url)) return await routerAccounts(req);

  return new Response("Not found", {
    status: 404,
  });
};
