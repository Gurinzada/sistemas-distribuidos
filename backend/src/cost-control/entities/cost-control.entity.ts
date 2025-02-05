import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CostControl {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  cost: number;

  @Column({ nullable: false })
  productivity: number;

  @Column({ nullable: false })
  cost_per_bag: number;

  @Column({ nullable: false })
  sale_price: number;

  @Column({ nullable: false })
  fertilizer_expenses: number;

  @Column({ nullable: false })
  labor_cost: number;

  @Column({ nullable: false })
  irrigation_expenses: number;

  @Column({ nullable: false })
  transportation_cost: number;
}

