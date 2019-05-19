import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from 'src/services/api.service';

export interface PlanetsResponse {
    count: number;
    next: string;
    previous: string;
    results: Planet[];
}

export interface Planet {
    name: string;
    diameter: number;
    climate: string;
    population: number;
    rotation_period: number;
    orbital_period: number;
    gravity: string;
    terrain: string;
    surface_water: number;
}

@Injectable({
    providedIn: 'root'
})
export class PlanetsService extends ApiCallService {
    constructor(http: HttpClient) {
        super(http);
    }

    async getPlanets(): Promise<PlanetsResponse> {
        return await this.get<PlanetsResponse>('planets');
    }
}