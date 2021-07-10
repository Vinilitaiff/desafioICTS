import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Product } from "./Product";

@Entity("purchase")
class Purchase {
  @PrimaryColumn()
  id?: string;

  @Column()
  total: number;

  @Column()
  typeOfPurchase: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;
  @Column()
  product_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Purchase };
