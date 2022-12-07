import {z} from "https://deno.land/x/zod/mod.ts";
import {QueryObjectResult} from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

/* Takes a zObj as input and returns a validator. This validator takes result as input
 * and validates the result elements. In case of failure it will log and error msg and
 * return and [].
 */
export const queryValidatorFactory = <T extends z.ZodTypeAny> (schema: T) =>
    (result: QueryObjectResult<unknown> | undefined): z.infer<T>[] => {
      if (!result) return [];
      try {
        return result.rows.map((row) => schema.parse(row));
      } catch (e) {
        console.log("Err while parsing query results: ", e);
        return [];
      }
    };
