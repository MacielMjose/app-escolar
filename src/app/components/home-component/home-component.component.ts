import { Component } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddAlunoDialogComponent } from '../add-aluno-dialog/add-aluno-dialog.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  constructor(public dialog: MatDialog) {
    // this.aluno.dataNascimento = new Date(),
    // this.aluno.nomeAluno = '',
    // this.aluno.endereco = '',
    // this.aluno.turma = 'do pagode'
  }

  openDialog(element: Aluno | null): void {
    const dialogRef = this.dialog.open(AddAlunoDialogComponent, {
      width: '400px',
      data:
        element == null
          ? {
              nomeAluno: '',
              dataNascimento: Date.now(),
              turma: '',
              endereco: '',
            }
          : {
              nomeAluno: element.nomeAluno,
              dataNascimento: element.dataNascimento,
              turma: element.turma,
              endereco: element.endereco,
            },
    });
  }
}