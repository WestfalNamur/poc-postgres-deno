import { handlerBooksById } from "../handlers/index.ts";

export const ROUTE_BOOKS = new URLPattern({ pathname: "/books/*" });
const ROUTE_BOOK_BY_ID = new URLPattern({ pathname: "/books/:id" });

export const routerBooks = (req: Request): Response => {
  const match = ROUTE_BOOK_BY_ID.exec(req.url);
  if (match) {
    const id = match.pathname.groups.id;
    return handlerBooksById({ req, id });
  }

  return new Response(`Try: /books/:id`);
};
