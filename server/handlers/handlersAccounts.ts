interface HandlerAccountById {
  req: Request;
  id: string;
}

export const handlerAccountById = (props: HandlerAccountById): Response => {
  // TODO: Implemet
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
