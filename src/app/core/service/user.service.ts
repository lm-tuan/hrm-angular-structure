import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://192.168.4.201:8080/api/profile';
const baseUrl = 'http://localhost:8080/api/profile';

export enum ESearchUser {
  FULLNAME = 'fullname',
  SKILLID = 'skillId',
  DEPARTMENTID = 'departmentId'
}

@Injectable({ providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient){
  }

  getAll() {
    return this.http.get(baseUrl);
  }
  getSearch(searchUser) {
    const url = `fullname=${searchUser.fullname ? searchUser.fullname : '' }&skillId=${searchUser.skillId ? searchUser.skillId : ''}&departmentId=${searchUser.departmentId ? searchUser.departmentId : '' }`;
    return this.http.get(`${baseUrl}/filter?${url}`);
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
  deleteAll(ids) {
    let url = '';
    ids.forEach(id => {
      url += `ids=${id}?`;
    });
    url = url.substring(url.length - 1, url.length);
    console.log('url', url);
    return this.http.get(`${baseUrl}/delete-all?${url}`);
  }
}
