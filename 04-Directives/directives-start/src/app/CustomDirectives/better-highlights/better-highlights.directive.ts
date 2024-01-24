import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlights]'
})

export class BetterHighlightsDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orangered');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orangered');
    this.backgroundColor = 'orangered'
  }

  @HostListener('mouseout') mouseOut(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent'
  }
}