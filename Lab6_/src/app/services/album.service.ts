import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private base = 'https://jsonplaceholder.typicode.com';
  private albumsCache: Album[] = [];
  private albumsSubject = new BehaviorSubject<Album[]>([]);

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    if (this.albumsCache.length === 0) {
      this.http.get<Album[]>(`${this.base}/albums`).subscribe(data => {
        this.albumsCache = data;
        this.albumsSubject.next(this.albumsCache);
      });
    }
    return this.albumsSubject.asObservable();
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.base}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.base}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.base}/albums/${album.id}`, album);
  }

  updateAlbumLocal(album: Album) {
    const index = this.albumsCache.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.albumsCache[index] = album;
      this.albumsSubject.next([...this.albumsCache]);
    }
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/albums/${id}`);
  }
}
