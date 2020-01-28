import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector : '[antiIf]'
})

export class CustomStructuralDirective {

  // We are trying to bind the property so the property-name should exactly SAME as that of 
  // the selector of directive
  
  @Input() set antiIf(condition :boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef : TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef 
  ) {}
}