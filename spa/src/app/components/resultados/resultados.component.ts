import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  providers: [HeroesService]
})
export class ResultadosComponent implements OnInit {

	heroes:any[] = [];
	termino:string;

  constructor(private _route: ActivatedRoute,
  			  private _heroesService: HeroesService) { }

  ngOnInit(): void {

  	this._route.params.subscribe( params => {
  		this.termino = params['nombre'];
  		this.heroes = this._heroesService.buscarHeroes(params['nombre']);

  	});

  }

}
