import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Responsavel } from 'src/app/models/Responsavel';
import { AddDataEmitterComponent } from '../add-data-emitter/add-data-emitter.component';

@Component({
  selector: 'app-add-responsavel-dialog',
  templateUrl: './add-responsavel-dialog.component.html',
  styleUrls: ['./add-responsavel-dialog.component.scss'],
})
export class AddResponsavelDialogComponent implements OnInit {
  valorTextAreaOutros?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Responsavel,
    public dialogRef: MatDialogRef<AddResponsavelDialogComponent>,
    private emmiterService: AddDataEmitterComponent<Responsavel>
  ) {}

  ngOnInit(): void {
    //ver o que precisa implementar aqui
  }

  onSumbit(): void {
    console.log(this.data);
    if(this.valorTextAreaOutros != null && this.valorTextAreaOutros != undefined){
      this.data.parentesco = this.valorTextAreaOutros;
    }
    this.emmiterService.emitirDados(this.data);
    this.dialogRef.close();
    // this.alunoAdded.emit(this.data);
    //trocar por enviar, via chamada http para o backend
  }

  onCancel(): void {
    this.data.nome = '';
    this.data.dataNascimento = new Date();
    this.data.rg = '';
    this.data.cpf = '';
    this.data.estadoCivil = '';
    this.dialogRef.close();
  }
}
