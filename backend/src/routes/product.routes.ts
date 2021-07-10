import { Router } from "express";

import { CreateProductController } from "../modules/shopping/useCases/createProduct/CreateProductController";
import { DeletePurchasesController } from "../modules/shopping/useCases/deleteProduct/DeleteProductController";
import { FindProductsController } from "../modules/shopping/useCases/findByProduct/FindProductsController";
import { ListProductsController } from "../modules/shopping/useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../modules/shopping/useCases/updateProduct/UpdateProductController";

const productRoutes = Router();

const createCategoryController = new CreateProductController();
const listProductController = new ListProductsController();
const deletePurchasesController = new DeletePurchasesController();
const updateProductController = new UpdateProductController();
const findProductController = new FindProductsController();

productRoutes.post("/", createCategoryController.handle);
productRoutes.delete("/:product_id", deletePurchasesController.handle);
productRoutes.get("/product/:product_id", findProductController.handle);
productRoutes.put("/", updateProductController.handle);

productRoutes.get("/", (req, res) => {
  return listProductController.handle(req, res);
});

export { productRoutes };
