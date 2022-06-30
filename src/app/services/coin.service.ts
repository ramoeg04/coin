import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../core/interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  public baseUrl: string = 'https://api.coingecko.com/api/v3/coins/';
  constructor(private httpClient: HttpClient) { }

  getAllCoin():Observable<Coin>{
    return this.httpClient.get<Coin>(`${this.baseUrl}list`);
  }

  getCoinId(id:string){
    return this.httpClient.get(`${this.baseUrl}${id}`);
  }

}

