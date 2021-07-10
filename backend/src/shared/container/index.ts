import { container } from "tsyringe";

import { ProductsRepository } from "../../modules/shopping/repositories/implementations/ProductsRepository";
import { PurchasesRepository } from "../../modules/shopping/repositories/implementations/PurchasesRepository";
import { IProductsRepository } from "../../modules/shopping/repositories/IProductsRepository";
import { IPurchasesRepository } from "../../modules/shopping/repositories/IPurchasesRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IPurchasesRepository>(
  "PurchasesRepository",
  PurchasesRepository
);
