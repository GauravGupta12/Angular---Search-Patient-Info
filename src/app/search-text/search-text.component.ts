import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {
	@Input() mySearchText : string;

  constructor() { }

  ngOnInit() {
  }

}
