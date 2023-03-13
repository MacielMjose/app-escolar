import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Aluno } from 'src/app/models/Aluno';
import { AddAlunoDialogComponent } from '../add-aluno-dialog/add-aluno-dialog.component';
import { AddDataEmitterComponent } from '../add-data-emitter/add-data-emitter.component';

const ELEMENT_DATA: Aluno[] = [];

@Component({
  selector: 'app-add-aluno-table',
  templateUrl: './add-aluno-table.component.html',
  styleUrls: ['./add-aluno-table.component.scss'],
})
export class AddAlunoTableComponent {
  constructor(
    public dialog: MatDialog,
    private addAlunoEmmiterService: AddDataEmitterComponent<Aluno>
  ) {}
  showHeader: boolean = false;
  displayedColumns: string[] = ['nome', 'data nascimento', 'sexo', 'turma'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<Aluno>;

  addData(aluno: Aluno) {
    this.addAlunoEmmiterService.dadosSelecionados.subscribe((dados) => {
      console.log('data received by emmitter');
      console.log(dados);
      if (!this.dataSource.includes(dados)) {
        this.dataSource.push(dados);
      }
      this.table.renderRows();
    });
  }

  openDialog(element: Aluno | null): void {
    const dialogRef = this.dialog.open(AddAlunoDialogComponent, {
      width: '400px',
      data:
        element == null
          ? {
              nome: '',
              dataNascimento: Date.now(),
              turma: '',
              sexo: '',
            }
          : {
              nome: element.nome,
              dataNascimento: element.dataNascimento,
              sexo: element.sexo,
              turma: element.turma,
              necessidade: element.necessidade,
              medicacao: element.medicacao,
              alergia: element.alergia,
            },
    });
    this.addData(element!);
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  showTableHeader(): boolean {
    return this.dataSource.length > 0;
  }
}
