export interface Aluno {
  nome: string;
  dataNascimento: Date;
  turma: string; //talvez trocar por enum
  endereco: string;
  sexo: string;
  necessidade?: string;
  medicacao?:string;
  alergia?:string;
}
