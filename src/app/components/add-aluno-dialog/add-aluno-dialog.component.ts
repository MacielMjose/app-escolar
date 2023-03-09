import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, inject, INJECTOR, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-add-aluno-dialog',
  templateUrl: './add-aluno-dialog.component.html',
  styleUrls: ['./add-aluno-dialog.component.scss']
})
export class AddAlunoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Aluno,
    public dialogRef: MatDialogRef<AddAlunoDialogComponent>,
    )
  {}

  ngOnclick():void{
    this.dialogRef.close();
  }
 
  ngOnInit(): void {
  
  }

  onSumbit(): void{
    console.log(this.data);
    //trocar por enviar, via chamada http
  }

  onCancel(): void{
    this.data.endereco = '';
    this.data.nomeAluno = '';
    this.data.turma = '';
    this.data.dataNascimento = new Date();
    this.dialogRef.close();
  }
}
