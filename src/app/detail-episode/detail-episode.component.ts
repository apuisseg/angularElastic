import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit {
  private title:string;
  private episodeData: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.title = params.title);
   }

  ngOnInit() {
    // TO DO récuperer les informations sur le document
  }

}
