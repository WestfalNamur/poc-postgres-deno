import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import {accountsGetAll} from "./dbAccounts.ts"

const DATABASE_URL = Deno.env.get("MANDS_DB_URL");

export const dbPool = new Pool(DATABASE_URL, 20);

export const dbAccountsGetAll = async () => await accountsGetAll(dbPool);
