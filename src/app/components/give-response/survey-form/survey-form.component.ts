import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISurveyForm } from 'src/app/shared/models/SurveyForm';
import { ISurveyResponse } from 'src/app/shared/models/SurveyResponse';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  @Input() formControlDataArray: ISurveyForm[];
  @Output() formDataOutput: EventEmitter<ISurveyResponse[]> = new EventEmitter<ISurveyResponse[]>();
  formData: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      this.formControlDataArray.reduce((acc: any, curr: any) => {
        const key = curr.ques;
        if (curr.responseType !== 'Select') {
          acc[key] = ['', [Validators.required]];
        }
        else if (curr.responseType === 'Select') {
          acc[key] = this.fb.array([], Validators.required);
        }
        return acc;
      }, {}));
  }

  onCheckBoxChange(e: any, target: string): void {
    const checkArray: FormArray = this.formData.get(target) as FormArray;
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitData(formD: any): void {
    // console.log(formD);
    if (!formD.valid) {
      return;
    }
    const formValues = formD.value;
    const quesNames = Object.keys(formValues);
    const outputArr: ISurveyResponse[] = quesNames.map(ques => {
      return {
        ques,
        responses: formValues[ques]
      };
    });
    // console.log(outputArr);
    this.formDataOutput.emit(outputArr);
  }

}
