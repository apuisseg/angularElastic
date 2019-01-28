import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private queryalldocs = {
    'query': {
      'match_all': {}
    }
  };
 
  private client: Client;

  constructor(private http: HttpClient) { 
    if(!this.client){
      this._connect();
    }
  }
  _connect(){
    this.client = new elasticsearch.Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }

  /* tester la connexion */
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'connected'
    });
  }

  /* Q1: requête: récupérer les documents 10 par 10 (pagination) */
  getAllDocuments(_index, _type, num: number): any {
    /*return this.client.search({
      
    });*/
  }

  /* Q2: requête: détails d'un épisode titre, numéros, description, lieux */
  getDocument(_index, _type, title: string): any{
    /*return this.client.search({
      index: 
      type: 
      size: 
      body: {
       
      },
      filterPath: ['hits.hits._source'],
      _source: []
    })*/
  }
  
  /* Q3 : requête via la barre de recherche*/
  simpleQuery(_index, _type, query: string, num): any {
    /*return this.client.search({
      index: ,
      type: ,
      q: ,
       filterPath: ['hits.hits'],
       from: ,
       size: 
    }); */
  }
}
