import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sideBarForMe: EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  uploadSongs(){
    this.sideBarForMe.emit();
  }
}
