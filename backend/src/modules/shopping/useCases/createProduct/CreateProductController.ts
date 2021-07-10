import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, price } = req.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({
      name,
      description,
      price,
    });

    return res.status(200).json({ name, description, price }).send();
  }
}

export { CreateProductController };
