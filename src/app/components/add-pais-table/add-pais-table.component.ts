import { Component, ViewChild } from '@angular/core';
import { Responsavel } from 'src/app/models/Responsavel';
import { AddDataEmitterComponent } from '../add-data-emitter/add-data-emitter.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddResponsavelDialogComponent } from '../add-responsavel-dialog/add-responsavel-dialog.component';

const ELEMENT_DATA: Responsavel[] = [];

@Component({
  selector: 'app-add-pais-table',
  templateUrl: './add-pais-table.component.html',
  styleUrls: ['./add-pais-table.component.scss'],
})
export class AddPaisTableComponent {
  constructor(
    public dialog: MatDialog,
    private addResponsavelEmmiterService: AddDataEmitterComponent<Responsavel>
  ) {}
  showHeader: boolean = false;
  displayedColumns: string[] = ['nome', 'data nascimento', 'sexo']; //creio que deveria ser chamadas conforme o json
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<Responsavel>;

  addData(aluno: Responsavel) {
    this.addResponsavelEmmiterService.dadosSelecionados.subscribe(
      (dados: Responsavel) => {
        console.log('data received by emmitter');
        console.log(dados);
        if (typeof dados === "string" && !this.dataSource.includes(dados)) {
          this.dataSource.push(dados);
        }
        this.table?.renderRows();
      }
    );
  }

  openDialog(element: Responsavel | null): void {
    const dialogRef = this.dialog.open(AddResponsavelDialogComponent, {
      width: '400px',
      data:
        element == null
          ? {
              nome: '',
              dataNascimento: Date.now(),
              sexo: '',
              rg: '',
              cpf: '',
              estadoCivil: '',
              profissao: '',
            }
          : {
              nome: element.nome,
              dataNascimento: element.dataNascimento,
              sexo: element.sexo,
              rg: element.rg,
              cpf: element.cpf,
              estadoCivil: element.estadoCivil,
              profissao: element.profissao,
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
