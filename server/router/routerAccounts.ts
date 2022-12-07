import { Route } from "./index.ts";
import {
  handlerAccountById,
  handlerAccouts,
} from "../handlers/handlersAccounts.ts";

const routeAccounts: Route = {
  path: "/accounts",
  handler: handlerAccouts,
};

const routeAccountsById: Route = {
  path: "/accounts/:id",
  handler: handlerAccountById,
};

export const routersAccounts: Route[] = [routeAccounts, routeAccountsById];
