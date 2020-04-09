import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wine, WineInfo } from '../winery/winery.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class WineryService {

	constructor(private http: HttpClient) {
	}

	public fecthAll(request: any): Observable<WineInfo> {
		let params = new HttpParams({
			fromObject: {
				skip: request.skip,
				take: request.take,
				token: request.token
			}
		});

		return this.http.get(`${environment.wineryApiBase}/wines`, { params })
			.pipe(
				map((response: any) => response as WineInfo)
			);
	}

	public fetchById(wineId: any): Observable<Wine> {
		return this.http.get(`${environment.wineryApiBase}/api/wines/${wineId}`)
			.pipe(
				map((response: any) => response.results as Wine)
			);
	}
}