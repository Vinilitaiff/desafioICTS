import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindProductsUseCase } from "./FindProductsUseCase";

class FindProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;

    const findProductsUseCase = container.resolve(FindProductsUseCase);

    const product = await findProductsUseCase.execute(product_id);
    console.log(product);
    return res.json(product);
  }
}

export { FindProductsController };
