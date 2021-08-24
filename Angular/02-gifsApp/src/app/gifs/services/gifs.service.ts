import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey     : string = "2Zzllh8buyv9eajmGwMpKTocGAF2B8zB"
  private servicioUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial : string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return[...this._historial];
  }
  //importación sefvicio http
  constructor(private http: HttpClient){

    if( localStorage.getItem('historial') ){
      this._historial = JSON.parse( localStorage.getItem("historial")! )
    
    }
    this.resultados = JSON.parse( localStorage.getItem("resultados")! ) || []
  }

  buscarGifs(query:string) {
    
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){ 
      this._historial.unshift(query); 
      this._historial = this._historial.splice(0,10)

      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    const params =new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '30')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`  ${ this.servicioUrl}/search`, {params})
    .subscribe( ( resp )=>{
      this.resultados= resp.data; 
      localStorage.setItem('resultados', JSON.stringify(this.resultados)  )
    })
  }

}