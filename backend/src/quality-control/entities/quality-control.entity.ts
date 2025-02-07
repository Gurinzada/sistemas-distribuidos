import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QualityControl {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  umidade: number;

  @Column({ nullable: false })
  densidade: number;

  @Column({ nullable: false })
  tamanho_medio_grao: number;

  @Column({ nullable: false })  
  impurezas: number;

  @Column("text", { array: true, nullable: false })
  defeitos: string[];

  @Column({ nullable: false })
  origem_lote: string;

  @Column({ nullable: false })
  metodo_processamento: string;

  @Column({ nullable: false })
  pontuacao_sca: number;
}