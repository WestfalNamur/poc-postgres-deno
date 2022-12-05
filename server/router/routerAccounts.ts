import { handlerAccountsById } from "../handlers/index.ts";
import {dbAccountsGetAll} from "../db/index.ts";

export const ROUTE_ACCOUNTS = new URLPattern({ pathname: "/accounts*" });
const ROUTE_ACCOUNTS_BY_ID = new URLPattern({ pathname: "/accounts/:id" });

export const routerAccounts = async (req: Request): Promise<Response> => {
  const match = ROUTE_ACCOUNTS_BY_ID.exec(req.url);
  if (match) {
    const id = match.pathname.groups.id;
    return handlerAccountsById({ req, id });
  }

  // TODO: Zod type check && return
  const rows = await dbAccountsGetAll()
  console.log(rows)

  return new Response("", {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
