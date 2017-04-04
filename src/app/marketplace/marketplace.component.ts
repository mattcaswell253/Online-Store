import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent {

  constructor(private router: Router, private albumService: AlbumService){}

  albums: Album[];

goToDetailPage(clickedAlbum: Album) {
  this.router.navigate(['albums', clickedAlbum.id]);
};

}
