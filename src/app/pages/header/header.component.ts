import {Component} from '@angular/core';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass


  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // @ts-ignore
  link= [
    {nom: 'Acceuil', url: 'google.fr', role: 'all'} ,
    {nom: 'Profil', url: 'google.fr', role: 'all'} ,
    {nom: 'Recette', url: 'google.fr', role: 'all'} ,
    {nom: 'A propos', url: 'google.fr', role: 'all'} ,
    {nom: 'Admin', url: 'google.fr', role: 'admin'} ,


  ]
  isAdmin: boolean = false;

}
