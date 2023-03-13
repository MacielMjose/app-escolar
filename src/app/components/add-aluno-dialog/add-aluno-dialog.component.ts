import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aluno } from 'src/app/models/Aluno';
import { AddDataEmitterComponent } from '../add-data-emitter/add-data-emitter.component';

@Component({
  selector: 'app-add-aluno-dialog',
  templateUrl: './add-aluno-dialog.component.html',
  styleUrls: ['./add-aluno-dialog.component.scss']
})
export class AddAlunoDialogComponent implements OnInit {
  isToggledNecessidade!:Boolean;
  isToggledMedicacao!:Boolean;
  isToggledAlergia!:Boolean;

  @Output() alunoAdded: EventEmitter<Aluno> = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Aluno,
    public dialogRef: MatDialogRef<AddAlunoDialogComponent>,
    private emmiterService: AddDataEmitterComponent<Aluno>
    )
  {}
 
  ngOnInit(): void {
    this.isToggledNecessidade = false;
    this.isToggledAlergia = false;
    this.isToggledMedicacao = false;
  }

  onSumbit(): void{
    console.log(this.data);
    this.emmiterService.emitirDados(this.data);
    this.dialogRef.close();
    // this.alunoAdded.emit(this.data);
    //trocar por enviar, via chamada http para o backend
  }

  onCancel(): void{
    this.data.nome = '';
    this.data.turma = '';
    this.data.sexo = '';
    this.data.necessidade = undefined;
    this.data.dataNascimento = new Date();
    this.dialogRef.close();
  }
}
