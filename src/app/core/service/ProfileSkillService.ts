import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.4.201:8080/api/profile-skill';
// const baseUrl = 'http://localhost:8080/api/profile-skill';

@Injectable({ providedIn: 'root'})
export class ProfileSkillService {

  constructor(private http: HttpClient){
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    console.log('data-serviee', data);
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(ids, data) {
    let url = "";
    ids.forEach(id => {
     url += `ids=${id}&`;
    });
    url = url.substring(0, url.length - 1);
    console.log(`${baseUrl}/update?${url}`);
    return this.http.put(`${baseUrl}/update?${url}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
