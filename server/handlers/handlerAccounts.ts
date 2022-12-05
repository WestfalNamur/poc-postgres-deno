interface handlerAccountsByIdProps {
  req: Request;
  id: string;
}

export const handlerAccountsById = async (props: handlerAccountsByIdProps): Promise<Response> => {
  if (props.req.method === "GET") {
    return new Response(`"accounts GET" ${props.id}`, {
      status: 200,
      headers: {
        "content-type": "text/html",
      },
    });
  }

  return new Response("Methode not allowed for /accounts", {
    status: 405,
    headers: {
      "content-type": "text/html",
    },
  });
};
