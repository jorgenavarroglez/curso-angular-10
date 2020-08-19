import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCiKHIyHRS3AnhBaFsaQdD36VR582eiXAwP8NnSCxgXjJzwWks47AEYDpu4i24n71SLZ5gflGiRUWr2flk'
      })

    return this._http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( (response:any) => response.albums.items));

  }

  getArtistas( termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( (response:any) => response.artists.items));

  }

  getArtista( id:string){

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map( (response:any) => response.tracks));
  }
}
