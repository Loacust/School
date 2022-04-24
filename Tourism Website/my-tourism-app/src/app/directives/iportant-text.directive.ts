import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appdirective]'
})
export class IportantTextDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "yellow";
   }

}
