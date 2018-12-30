import { Component } from '@angular/core';

@Component({
  selector: 'expansion-accordion-example',
  templateUrl: './expansion-accordion-example.html',
  styleUrls: ['./expansion-accordion-example.scss']
})
export class ExpansionAccordionExample {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
