import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

class CreatePurchaseController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { total, typeOfPurchase, status, product_id } = req.body;

    const createPurchaseUseCase = container.resolve(CreatePurchaseUseCase);

    await createPurchaseUseCase.execute({
      total,
      typeOfPurchase,
      status,
      product_id,
    });
    return res.status(201).json({ total, typeOfPurchase, status, product_id });
  }
}

export { CreatePurchaseController };
