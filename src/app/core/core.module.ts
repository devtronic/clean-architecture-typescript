import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddToDoUseCase, DeleteToDoUseCase, EditToDoUseCase, ShowToDoListUseCase} from './use-case';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AddToDoUseCase,
    DeleteToDoUseCase,
    EditToDoUseCase,
    ShowToDoListUseCase,
  ]
})
export class CoreModule {
}
