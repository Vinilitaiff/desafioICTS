import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePurchaseUseCase } from "./UpdatePurchaseUseCase";

class UpdatePurchaseController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, total, typeOfPurchase, status, product_id } = req.body;

    const updatePurchaseUseCase = container.resolve(UpdatePurchaseUseCase);

    await updatePurchaseUseCase.execute({
      id,
      total,
      typeOfPurchase,
      status,
      product_id,
    });
    return res
      .status(201)
      .json({ id, total, typeOfPurchase, status, product_id });
  }
}

export { UpdatePurchaseController };
