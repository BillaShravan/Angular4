import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // tslint:disable-next-line:max-line-length
    weatherURL1 = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    weatherURL2 = '%2C%20';
    weatherURL3 = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    findMovieURL1 = 'http://www.omdbapi.com/?t=';
    findMovieURL2 = '&y=&plot=short&r=json';
    currencyURL = 'http://api.fixer.io/latest?symbols=';
    totReqsMade = 0;

  constructor(private _http: Http) { }

  findWeather(city, state) {
    this.totReqsMade = this.totReqsMade + 1;

     return this._http.get(this.weatherURL1 + city + this.weatherURL2 + state + this.weatherURL3).pipe(map((response: Response) => {
      return response.json();
    }));
  }

  findMovie(movie) {
    // this.totReqsMade = this.totReqsMade + 1; 
    // return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
    //     .map(response => {
    //         return response.json();
    //     })
    //     .catch(error => Observable.throw(error.json().error));

    return null;
  }

  getCurrencyExchRate(currency) {
      // this.totReqsMade = this.totReqsMade + 1;
      // return this._http.get(this.currencyURL + currency)
      //     .map(response => {
      //          return response.json();
      //     })
      //     .catch(error => Observable.throw(error.json()));
      return null;
  }
}
