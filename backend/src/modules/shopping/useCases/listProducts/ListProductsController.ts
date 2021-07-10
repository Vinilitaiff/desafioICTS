import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listProductUseCase = container.resolve(ListProductsUseCase);
    const all = await listProductUseCase.execute();

    return res.json(all);
  }
}

export { ListProductsController };
