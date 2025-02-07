import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CostControl {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  custo_producao: number;

  @Column({ nullable: false })
  produtividade: number;

  @Column({ nullable: false })
  custo_por_saca: number;

  @Column({ nullable: false })
  preco_venda: number;

  @Column({ nullable: false })
  gastos_fertilizantes: number;

  @Column({ nullable: false })
  mao_de_obra: number;

  @Column({ nullable: false })
  despesas_irrigacao: number;

  @Column({ nullable: false })
  custo_transporte: number;
}
