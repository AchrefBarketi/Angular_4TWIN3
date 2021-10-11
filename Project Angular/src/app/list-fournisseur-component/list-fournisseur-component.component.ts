import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fournisseur } from '../model/Fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {

  list: Fournisseur[];
  
  constructor() { }

  ngOnInit(): void {
    this.list = [
      { idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
      { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
      { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
      { idFournisseur: 400, code: "40ABC452", libelle: "asus" }
    ]
  }

  getColor(fournisseur:Fournisseur){
    if(fournisseur.libelle=='hp')
    return 'lightgreen'
    else
    return 'yellow'
  }

  getFont(fournisseur:Fournisseur){
    if(fournisseur.code.startsWith('2A'))
    return 'bold'
    else
    return ''
  }

  Delete(fournisseur:Fournisseur){
    let i=this.list.indexOf(fournisseur);
    this.list.splice(i,1);

  }

}
