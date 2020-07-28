import { Component } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html'
})

export class BodyComponent{
	public cambio:boolean = false;
	public frase:any= {
		mensaje: 'Un gran poder conlleva una gran responsabilidad.',
		autor: 'Ben Parker'
	};

	mostrarOcultar(){
		this.cambio = !this.cambio;
	}

	personajes: string[] = ['Spiderman', 'Venom', 'Duende Verde'];
}