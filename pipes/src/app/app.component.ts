import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	nombre:string='Jorge Navarro';

	array = [1,2,3,4,5,6,7,8,9,10];

	PI:number = Math.PI;

	porcentaje: number = 0.234;

	salario: number = 1234.5;

	persona = {
		nombre:'Jorge Navarro',
		clave:'Jorge',
		edad:23,
		direccion: {
			calle:'sin nombre',
			casa: 24
		}
	}

	valorPromesa = new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve('llegaron los datos');
		},4500);
	});

	fecha: Date = new Date();

	idioma: string = 'es';

	cambiarIdioma(idioma:string){
		this.idioma = idioma;
	}

	nombre2:string = 'joRGe NaVarRO gONZaLez';

	video:string = "https://www.youtube.com/embed/E8a4aZnCcPE"

	activar: boolean = true;

}
