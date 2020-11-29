import { Component, OnInit, HostListener } from '@angular/core';
import { resizeComponent } from './resize-comonent-facotry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Dynamic-Height';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    resizeComponent('top-panel', 'bottom-panel');
  }

  ngOnInit(): void {
    resizeComponent('top-panel', 'bottom-panel');
  }

  eventNotifyPanelOpen(event) {
    resizeComponent('top-panel', 'bottom-panel');
  }

}
