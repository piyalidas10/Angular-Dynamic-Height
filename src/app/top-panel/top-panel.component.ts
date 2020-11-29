import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

}
