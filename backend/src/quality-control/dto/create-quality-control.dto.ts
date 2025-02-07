export class CreateQualityControlDto {
  umidade: number;    
  densidade: number;
  tamanho_medio_grao: number;
  impurezas: number;
  defeitos: string[];
  origem_lote: string;
  metodo_processamento: string;
  pontuacao_sca: number;
}
