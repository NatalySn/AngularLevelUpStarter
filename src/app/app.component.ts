import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
   public form:FormGroup = new FormGroup({
    name : new FormControl(''),
    price : new FormControl(null),
    cathegories : new FormControl([]),
    id : new FormControl('')
   })
 
  random = '';
  
  cathegoriesMassive = [{'name':'Одежда'},{'name':'Обувь'},{'name':'Лекарства'},{'name':'Еда'},{'name':'Электроника'}];
  selectedCathegory = this.cathegoriesMassive[1];
  /**
   * OnClick method
   */
  public onClick() {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (this.random.length < 11) {
      this.random += possible[Math.floor(Math.random() * possible.length)];
      if (this.random.length == 11) {
        
        this.form.get('id')?.setValue(this.random) 
        this.random = '';
        break;
      }
    }
  }
  
  /**
   * OnChange
   */
  public onChange() {
    this.form.get('cathegories')?.setValue(this.selectedCathegory)
    
    //  return this.form.value.cathegories = new FormControl(this.cathegoriesMassive[])
  }
  /**
   * name
   */
   public onClickSubmit():void {
    if (this.form.invalid) {
      alert('Форма не валиднаs');
      return;
    }
    console.log(this.form.value);
    
 
   }
}
