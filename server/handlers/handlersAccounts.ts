import { accountsGetAll, accountsGetById } from "../db/dbAccounts.ts";
import { Handler } from "../router/index.ts";

export async function handlerAccouts(): Promise<Response> {
  const accs = await accountsGetAll();
  return new Response(JSON.stringify(accs), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function handlerAccountById(props: Handler): Promise<Response> {
  const accId = props.match.pathname.groups.id;

  // GET
  if (props.req.method === "GET") {
    const acc = await accountsGetById(accId);
    // No account with id
    if (!acc) {
      return new Response(`No account with id: ${accId}`, {
        status: 204,
        headers: {
          "content-type": "text/html",
        },
      });
    }
    // Account found
    return new Response(JSON.stringify(acc), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  // Other methodes
  return new Response("Methode not allowed for /accounts", {
    status: 405,
    headers: {
      "content-type": "text/html",
    },
  });
}
