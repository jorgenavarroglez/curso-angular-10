import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  providers: [HeroesService]
})
export class HeroeComponent implements OnInit {

	heroe:any={};

  constructor(private _route: ActivatedRoute,
  			  private _heroesService: HeroesService) { 
  	this._route.params.subscribe(
  		params => {
  			this.heroe = this._heroesService.getHeroe(params['id']);
  			console.log(this.heroe);
  		}
  	)
  }

  ngOnInit(){
  }

}
