import Elysia, { t } from "elysia";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/product";
import {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} from "../validators/productValidator";

const productRouter = new Elysia({ prefix: "product" });

productRouter.post("/", createProduct, {
  body: createProductSchema,
});

productRouter.get("/", getProducts);

productRouter.put("/:proId", updateProduct, {
  params: productIdSchema,
  body: updateProductSchema,
});

productRouter.delete("/:proId", deleteProduct, {
  params: productIdSchema,
});

export default productRouter;
