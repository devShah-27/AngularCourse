import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.view.createEmbeddedView(this.template);
    }else{
      this.view.clear();
    }
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) { 

  }

}
