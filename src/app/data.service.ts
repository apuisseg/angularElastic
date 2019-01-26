import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlTrain:string = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&rows=0&sort=date&facet=gc_obo_gare_origine_r_name";
  private urlObject:string = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&rows=0&sort=date&facet=gc_obo_type_c";
  private urlLost:string = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&rows=0&facet=gc_obo_type_c&refine.gc_obo_gare_origine_r_name=";
  private urlFound:string = "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&rows=0&facet=gc_obo_type_c&refine.gc_obo_gare_origine_r_name=";
  
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
