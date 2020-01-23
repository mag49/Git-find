import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  returnRepo(searchTerm: string) {
    // throw new Error("Method not implemented.");
  }
  private clientid = "af59a886926a3c41b772";
  private clientsecret = "a345424c81e1eee3ffc3b2509fc644a0736f5e8c";


  constructor(private http: HttpClient) { 
    
}

  returnrepo(searchTerm:string):Observable<any>{
    return this.http.get("https://api.github.com/users/" + searchTerm + "/repos?" + this.clientid + this.clientsecret)
  }
}
