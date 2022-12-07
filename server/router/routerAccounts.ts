import { handlerAccountById } from "../handlers/handlersAccounts.ts";
import { accountsGetAll } from "../db/dbAccounts.ts";

export const ROUTE_ACCOUNTS = new URLPattern({ pathname: "/accounts*" });
const ROUTE_ACCOUNTS_BY_ID = new URLPattern({ pathname: "/accounts/:id" });

// TODO: Docs
export async function routerAccounts(req: Request): Promise<Response> {
  // accounts/:id
  const matchAccById = ROUTE_ACCOUNTS_BY_ID.exec(req.url);
  if (matchAccById) {
    const id = matchAccById.pathname.groups.id;
    return handlerAccountById({ req, id });
  }

  // Default /accounts
  const accs = await accountsGetAll();
  return new Response(JSON.stringify(accs), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
