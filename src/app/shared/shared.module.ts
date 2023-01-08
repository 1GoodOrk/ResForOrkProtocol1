import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { WrapperComponent } from './wrapper/wrapper.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { RepresentationCardComponent } from './representation-card/representation-card.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DynamicComponent } from './dialog/dynamic/dynamic.component';
import { InformationComponent } from './dialog/information/information.component';
import { WarningComponent } from './dialog/warning/warning.component';
import { QuestionComponent } from './dialog/question/question.component';

@NgModule({
  declarations: [
    WrapperComponent,
    FormComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    DialogComponent,
    RepresentationCardComponent,
    SidenavListComponent,
    DynamicComponent,
    InformationComponent,
    WarningComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ]
})
export class SharedModule { }
