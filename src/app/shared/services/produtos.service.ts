import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

constructor(private http: HttpClient) { 
}

getAll(): Observable<any> {
return this.http.get('http://localhost:3001/products')
}

getOne(id: string): Observable<any> {
  return this.http.get(`http://localhost:3001/products?id=${id}`)
}
}
