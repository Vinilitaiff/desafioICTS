import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePurchasesUseCase } from "./DeletePurchasesUseCase";

class DeletePurchasesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { purchase_id } = req.params;

    const deletePurchase = container.resolve(DeletePurchasesUseCase);

    await deletePurchase.execute(purchase_id);

    return res.status(204).json({ message: "Purchase deleted" });
  }
}

export { DeletePurchasesController };
