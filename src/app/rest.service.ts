import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RestService {

    constructor(
        public http: HttpClient
    ) { }

    postCall(data: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post('http://hostname:port/rest/', {data}).subscribe((response: any) => {
                if(response.error) {
                    reject(response.error)
                }
                else resolve(response)
            })
        })
    }
}
