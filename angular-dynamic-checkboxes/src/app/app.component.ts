import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Constructor } from '@angular/material/core/typings/common-behaviors/constructor';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class AppComponent {
 // title = 'TableViewFormat';
 profileForm: FormGroup;
 days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays = [];
 constructor(private fb: FormBuilder) {
  this.profileForm = this.fb.group({
    checkMe: '',
    daysofweek: this.addDaysControls() 
  });
 }

 addDaysControls(){
   const arr = this.days.map(element => {
     return this.fb.control(false);
   });

   return this.fb.array(arr);
 }

 get daysArray() {
   return <FormArray>this.profileForm.get('daysofweek');
 }

 getSelectedDaysValues(){
   this.selectedDays = [];
   this.daysArray.controls.forEach((control, i) => {
      if(control.value){
        this.selectedDays.push(this.days[i]);
      }
   });
   console.log(this.selectedDays);
 }
}
