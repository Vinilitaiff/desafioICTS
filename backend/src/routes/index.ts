import { Router } from "express";

import { productRoutes } from "./product.routes";
import { purchasesRoutes } from "./purchases.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/purchases", purchasesRoutes);

export { router };
