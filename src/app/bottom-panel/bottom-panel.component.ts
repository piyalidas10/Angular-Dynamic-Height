import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss']
})
export class BottomPanelComponent implements OnInit {
  isBottomPanelOpen: boolean = false;
  boxes = [];
  btnArrow: any;
  bottomPanel: any;
  latestPostElem: any;
  @Output() notifyPanelOpen: EventEmitter<boolean> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.btnArrow = this.elementRef.nativeElement.querySelector('i.fas');
    this.bottomPanel = this.elementRef.nativeElement.querySelector('.bottom-panel');
    this.boxes = this.elementRef.nativeElement.querySelectorAll('.box');
    this.latestPostElem = this.elementRef.nativeElement.querySelector('.latest-posts');
    if (!this.isBottomPanelOpen && this.elementRef && this.btnArrow && this.bottomPanel && this.boxes.length > 0) {
      this.btnArrow.classList.add('fa-caret-up');
      this.setBoxHeight(0, this.boxes);
      this.latestPostElem.style.display = 'none';
    }
  }

  toogleClick() {
    this.isBottomPanelOpen = !this.isBottomPanelOpen;
    if (this.btnArrow) {
      if (this.isBottomPanelOpen) {
        this.bottomPanel.classList.add('open');
        this.btnArrow.classList.remove('fa-caret-up');
        this.btnArrow.classList.add('fa-caret-down');
        this.latestPostElem.style.display = 'flex';
        this.setBoxHeight(this.bottomPanel.offsetHeight, this.boxes);
      } else {
        this.bottomPanel.classList.remove('open');
        this.btnArrow.classList.remove('fa-caret-down');
        this.btnArrow.classList.add('fa-caret-up');
        this.latestPostElem.style.display = 'none';
        this.setBoxHeight(0, this.boxes);
      }
    }
    this.notifyPanelOpen.emit(this.isBottomPanelOpen);
  }

  setBoxHeight(bottomPanelHeight, boxes) {
    console.log('bottomPanelHeight => ', bottomPanelHeight);
    if (this.elementRef) {
      boxes.forEach(box => {
        if (bottomPanelHeight === 0) {
          box.style.padding = '0px 0px 0px 0px';
        } else {
          const adjust = bottomPanelHeight - 80;
          box.style.padding = '0px 0px ' + adjust + 'px' + ' 0px';
        }
      });
    }
  }

}
