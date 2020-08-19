import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  loading: boolean;
  artistas: any[] = [];

  constructor(private _spotify: SpotifyService) { }

  buscar(termino:string){

    this.loading = true;

  	console.log(termino);
  	this._spotify.getArtistas(termino)
  		.subscribe( (response:any) => {
  			console.log(response);
  			this.artistas = response;
        this.loading = false;
  		})
  }

}
