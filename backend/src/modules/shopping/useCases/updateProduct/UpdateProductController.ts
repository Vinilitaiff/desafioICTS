import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, description, price } = req.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({
      id,
      name,
      description,
      price,
    });
    return res.status(201).json({ id, name, description, price });
  }
}

export { UpdateProductController };
