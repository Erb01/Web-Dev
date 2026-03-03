import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private service: AlbumService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(a => this.album = a);
  }

  save() {
    this.service.updateAlbum(this.album).subscribe(() => {
      this.service.updateAlbumLocal(this.album);
      this.router.navigate(['/albums']);
    });
  }
}
