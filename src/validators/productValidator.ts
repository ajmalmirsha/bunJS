import { t } from "elysia";

export const createProductSchema = t.Object({
  name: t.String({
    error: "Name is Required !",
    title: "Product Name",
    minLength: 1,
  }),
  price: t.Number({
    error: (err) => err.errors[0].message,
    minimum: 0,
    title: "Price Title",
    description: "this is the price field",
  }),
});

export const updateProductSchema = t.Object({
    name: t.String({
      error: "Name is Required !",
      title: "Product Name",
      minLength: 1,
    }),
    price: t.Number({
      error: (err) => err.errors[0].message,
      minimum: 0,
      title: "Price Title",
      description: "this is the price field",
    }),
  })

export const productIdSchema = t.Object({
  proId: t.String(),
});
