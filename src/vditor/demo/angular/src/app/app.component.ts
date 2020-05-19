import {Component, OnInit} from '@angular/core';
import Vditor from 'vditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit{
  vditor: Vditor;

  ngOnInit(): void {
    this.vditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      minHeight: 500,
      after: () => {
        this.vditor.setValue(`
\`\`\`typescript
import {Component} from '@angular/core';
import Vditor from 'vditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  vditor: Vditor;

  ngOnInit(): void {
    this.vditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      minHeight: 500,
      after: () => {
        this.vditor.setValue('Hello, React + Vditor!')
      }
    })
  }
}
\`\`\`
`);
      }
    });
  }
}