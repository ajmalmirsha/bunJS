import { turso } from "../db/config";

export const createProduct = async ({
  body,
}: {
  body: { name: number; price: number };
}) => {
  const { name, price } = body;

  try {
    await turso.execute({
      sql: `INSERT INTO products (name, price) VALUES (?,?)`,
      args: [name, price],
    });
    return "Successfully added new product";
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async ({
  body,
  params,
}: {
  body: { name: number; price: number };
  params: { proId: number };
}) => {
  const { name, price } = body;
  const { proId } = params;
  try {
    await turso.execute({
      sql: `UPDATE products SET name = ?, price = ? WHERE ID = ?`,
      args: [name, price, proId],
    });
    return "Successfully updated product";
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async ({
  params,
}: {
  params: { proId: number };
}) => {
  const { proId } = params;
  try {
    await turso.execute({
      sql: `DELETE FROM products WHERE ID = ?`,
      args: [proId],
    });
    return "Successfully deleted product";
  } catch (error) {
    throw error;
  }
};

export const getProducts = async () => {
  try {
   const result = await turso.execute({
      sql: `SELECT * FROM products`,
      args: [],
    });

    const products = result.rows.map((row: any) => {
      return {
        ID: row[0],
        name: row[1],
        price: row[2]
      };
    });
    return products
  } catch (error) {
    throw error;
  }
};
