import { Router } from "express";

import { CreatePurchaseController } from "../modules/shopping/useCases/createPurchase/CreatePurchaseController";
import { DeletePurchasesController } from "../modules/shopping/useCases/deletePurchases/DeletePurchasesController";
import { ListPurchasesController } from "../modules/shopping/useCases/listPurchases/ListPurchasesController";
import { UpdatePurchaseController } from "../modules/shopping/useCases/updatePurchase/UpdatePurchaseController";

const purchasesRoutes = Router();

const createPurchaseController = new CreatePurchaseController();
const listPurchasesController = new ListPurchasesController();
const deletePurchasesController = new DeletePurchasesController();
const updatePurchaseController = new UpdatePurchaseController();

purchasesRoutes.get("/", (req, res) => {
  return listPurchasesController.handle(req, res);
});
purchasesRoutes.post("/", createPurchaseController.handle);
purchasesRoutes.delete("/:purchase_id", deletePurchasesController.handle);
purchasesRoutes.put("/", updatePurchaseController.handle);

export { purchasesRoutes };
