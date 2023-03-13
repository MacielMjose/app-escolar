import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AddAlunoDialogComponent } from './components/add-aluno-dialog/add-aluno-dialog.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AddAlunoTableComponent } from './components/add-aluno-table/add-aluno-table.component';
import { AddPaisTableComponent } from './components/add-pais-table/add-pais-table.component';
import { AddResponsavelDialogComponent } from './components/add-responsavel-dialog/add-responsavel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlunoDialogComponent,
    HomeComponentComponent,
    AddAlunoTableComponent,
    AddPaisTableComponent,
    AddResponsavelDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
