import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color: string;
  @Input() text: string;

  @Output() buttonClicked = new EventEmitter<MouseEvent | KeyboardEvent>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
