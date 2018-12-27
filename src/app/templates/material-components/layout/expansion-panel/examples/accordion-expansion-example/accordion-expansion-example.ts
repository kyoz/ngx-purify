import { Component } from '@angular/core';

@Component({
  selector: 'accordion-expansion-example',
  templateUrl: './accordion-expansion-example.html',
  styleUrls: ['./accordion-expansion-example.scss']
})
export class AccordionExpansionExample {
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
