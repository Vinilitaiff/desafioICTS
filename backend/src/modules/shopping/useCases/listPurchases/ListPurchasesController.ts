import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPurchasesUseCase } from "./ListPurchasesUseCase";

class ListPurchasesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listPurchasesUseCase = container.resolve(ListPurchasesUseCase);
    const all = await listPurchasesUseCase.execute();

    return res.json(all);
  }
}

export { ListPurchasesController };
