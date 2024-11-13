import { AnyElysia, Elysia, t } from "elysia";
import productRouter from "./routes/productRoute";

const app = new Elysia();

app.use(productRouter);

app.listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
