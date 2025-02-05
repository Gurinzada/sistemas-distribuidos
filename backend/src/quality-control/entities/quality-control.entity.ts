import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QualityControl {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  humidity: number;

  @Column({ nullable: false })
  density: number;

  @Column({ nullable: false })
  average_grain_size: number;

  @Column({ nullable: false })  
  impurities: number;

  @Column({ nullable: false })
  defects: number;

  @Column({ nullable: false })
  batch_origin: string;

  @Column({ nullable: false })
  processing_method: string;

  @Column({ nullable: false })
  sca_score: number;
}
