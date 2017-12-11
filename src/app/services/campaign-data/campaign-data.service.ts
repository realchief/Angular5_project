import { Injectable } from '@angular/core';
import { Campaign } from '../../models/campaign/campaign';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class CampaignDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addTodo(campaign: Campaign): Observable<Campaign> {
    return this.api.createTodo(campaign);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(campaignId: number): Observable<Campaign> {
    return this.api.deleteTodoById(campaignId);
  }

  // Simulate PUT /todos/:id
  updateTodo(campaign: Campaign): Observable<Campaign> {
    return this.api.updateTodo(campaign);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Campaign[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(campaignId: number): Observable<Campaign> {
    return this.api.getTodoById(campaignId);
  }

}