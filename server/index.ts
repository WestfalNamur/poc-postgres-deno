import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { router } from "./router/index.ts";

// server a native HTTP server
console.log("Listening on http://localhost:8000");
await serve(router);
