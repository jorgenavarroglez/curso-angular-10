import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
	
  loading: boolean;
  nuevasCanciones: any[] = [];

  error: boolean;
  mensajeError: string;

  constructor( private _spotify: SpotifyService ) { 

    this.loading = true;
    this.error = false;

  	this._spotify.getNewReleases()
        .subscribe( (response:any) => {
          console.log(response);
          this.nuevasCanciones = response;
          this.loading = false;
        }, ( err ) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = err.error.error.message;
          console.log(err.error.error.message);
        })
  }

  ngOnInit(): void {
  }

}
