import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private _router: ActivatedRoute, private _spotify: SpotifyService) {
  	
    this.loading = true;

    this._router.params.subscribe( params => {
  		this.getArtista(params['id']);
      this.getTopTracks(params['id']);
  	})
  }

  ngOnInit(): void {
  }

  getArtista( id:string ) {

    this.loading = true;

    this._spotify.getArtista(id)
        .subscribe(response => {
          console.log(response);
          this.artista = response;
          this.loading = false;
        })
  }

  getTopTracks(id:string){
    this._spotify.getTopTracks( id)
        .subscribe(response => {
          console.log(response);
          this.topTracks = response;
        })
  }

}
