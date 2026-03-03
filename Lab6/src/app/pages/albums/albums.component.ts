import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private service: AlbumService) {}

  ngOnInit() {
    this.service.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  delete(id: number) {
    this.service.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }

  updateAlbumInList(updatedAlbum: Album) {
    const index = this.albums.findIndex(a => a.id === updatedAlbum.id);
    if (index !== -1) {
      this.albums[index] = updatedAlbum;
    }
  }
}
