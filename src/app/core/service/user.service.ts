import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.4.201:8080/api/profile';

@Injectable({ providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient){
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
