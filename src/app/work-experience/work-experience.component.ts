import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2017-2022",
      ubicacion: "Boston, Texas",
      puesto: "Desarrollo de inteligencia artificial",
      empresa: "Id Software",
      logros: [
        {descripcion: "Organización dinámica de entidades en tiempo real"},
        {descripcion: "Comportamiento natural de entidades"}
      ]
    };

    let work2 = {
      fecha: "2013-2017",
      ubicacion: "Bellevue, Washington",
      puesto: "Programador Junior",
      empresa: "VALVe",
      logros: [
        {descripcion: "Implementación de mejores funciones en una tienda digital"}
      ]
    };

    let work3 = {
      fecha: "2012-2013",
      ubicacion: "Macuspana, Tabasco",
      puesto: "Desarrollo web",
      empresa: "Chairo Productions",
      logros: [
        {descripcion: "Acarrear a 60 personas para un meeting del peje"}
      ]
    };

  this.workExperience.push(work1);
  this.workExperience.push(work2);
  this.workExperience.push(work3);
  }

}
