import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink


  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // @ts-ignore
  link= [
    'Home',
    'Todo',
    'Generation',
    'Pokemon'
  ]
  isAdmin: boolean = false;

}
