import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

export class ApiCallService {
    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const headersConfig: any = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new HttpHeaders(headersConfig);
    }

    protected get<T>(path: string): Promise<T> {
        const url = environment.api_star_wars + path;
        const options = {
            headers: this.getHeaders(),
        };
        return this.http.get<T>(url, options).toPromise();
    }
}