import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[errorimg]',
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src'
  }
})
export class ImageErrorDirective {
  @Input() src: string;
  @Input() errorimg: string;

  updateUrl() {
    this.src = this.errorimg;
  }
}
