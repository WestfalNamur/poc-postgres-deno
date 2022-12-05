interface handlerBooksByIdProps {
  req: Request;
  id: string;
}

export const handlerBooksById = (props: handlerBooksByIdProps): Response => {
  if (props.req.method === "GET") {
    return new Response(`"books GET" ${props.id}`, {
      status: 200,
      headers: {
        "content-type": "text/html",
      },
    });
  }

  return new Response("Methode not allowed for /books", {
    status: 405,
    headers: {
      "content-type": "text/html",
    },
  });
};
