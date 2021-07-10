import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductsUseCase } from "./DeleteProductUseCase";

class DeletePurchasesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { product_id } = req.params;

    const deleteProduct = container.resolve(DeleteProductsUseCase);

    await deleteProduct.execute(product_id);

    return res.status(204).json({ message: "Product deleted" });
  }
}

export { DeletePurchasesController };
