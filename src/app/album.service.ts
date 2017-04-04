import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.albums = angularFire.database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumId(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
