import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let edu1 = {
      fecha: "2014-2017",
      titulo: "Ingeniero en Software",
      escuela: "Universidad Veracruzana",
    };

    let edu2 = {
      fecha: "2011-2014",
      titulo: "Egresado de preparatoria",
      escuela: "Colegio de Bachilleres del Estado de Veracruz 06",
    };

    let edu3 = {
      fecha: "2007-2011",
      titulo: "Egresado de secundaria",
      escuela: "Escuela Secundaria General Ignacio Manuel Altamirano",
    };

  this.education.push(edu1);
  this.education.push(edu2);
  this.education.push(edu3);
  }

}
