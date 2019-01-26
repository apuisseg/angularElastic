import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes$: Object[];
  numPage: number = 1;
  query: string = "";
  errorMessage: string = "";
  isSimpleQuery: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getDocuments();
  }

  /** Q2 : récupérer tous les documents  */
  getDocuments(){
    /*
    this.data.getAllDocuments(/TOFILL/).then(response => {
      //TODO
    }, error => {
      console.error(error);
    });*/
  }


  /** Q4: requêtes via la barre de recherche */
  search(){
  /** TODO 
   * exemple de requête dans la barre -> seasonNum:1 and episodeNum:3
   */
  }

   
/** méthodes à l'arrache pour gérer l'affichage en fonction du type de requête */
up(){
  if(this.numPage < 8){
    this.numPage++;
  } else {
    this.numPage = 8;
  }

}

down(){
  if(this.numPage > 1) {
    this.numPage --;
  } else {
    this.numPage = 1;
  }
}

changePage(){
  if(this.isSimpleQuery){
    this.search();
  } else {
    this.getDocuments();
  }
}
/****************************************************************************/

}
