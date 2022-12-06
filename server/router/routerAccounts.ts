import { handlerAccountsById } from "../handlers/index.ts";
import { accountsGetAll } from "../db/dbAccounts.ts";

export const ROUTE_ACCOUNTS = new URLPattern({ pathname: "/accounts*" });
const ROUTE_ACCOUNTS_BY_ID = new URLPattern({ pathname: "/accounts/:id" });

// TODO: Docs
export const routerAccounts = async (req: Request): Promise<Response> => {
  const match = ROUTE_ACCOUNTS_BY_ID.exec(req.url);
  if (match) {
    const id = match.pathname.groups.id;
    return handlerAccountsById({ req, id });
  }

  const accs = await accountsGetAll();

  return new Response(JSON.stringify(accs), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
