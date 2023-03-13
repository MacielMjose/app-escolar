export interface Aluno {
  nome: string;
  dataNascimento: Date;
  turma: string; //talvez trocar por enum
  sexo: string;
  necessidade?: string;
  medicacao?:string;
  alergia?:string;
}
