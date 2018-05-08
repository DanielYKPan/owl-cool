/**
 * trivia.service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of ,  throwError as _throw } from 'rxjs';
import { Quiz } from '../store/quiz';
import { catchError, map, switchMap } from 'rxjs/operators';

export enum ResponseCode {
    Success,
    No_Results,
    Invalid_Parameter,
    Token_Not_Found,
    Token_Empty,
}

export interface SearchResult {
    response_code: ResponseCode;
    results: Quiz[];
}

interface Token {
    response_code: ResponseCode;
    response_message: string;
    token: string;
}

@Injectable()
export class TriviaService {

    private _session_token: string;
    set session_token( val: string ) {
        if (this._session_token !== val) {
            this._session_token = val;
            localStorage.setItem('trivia_session_token', val);
        }
    }

    constructor( private http: HttpClient ) {
        this._session_token = localStorage.getItem('trivia_session_token');
    }

    /**
     * Get quiz from Trivia DB (https://opentdb.com/api_config.php)
     * */
    public getQuizByCategory( category_id: number, amount: number = 10 ): Observable<SearchResult> {
        return this.http.get<SearchResult>(
            `https://opentdb.com/api.php?amount=${amount}&category=${category_id}&token=${this._session_token}`
        )
            .pipe(
                switchMap(( result: SearchResult ) => {
                    if (result.response_code === ResponseCode.Success) {
                        return of(result);
                    } else if (result.response_code === ResponseCode.Token_Not_Found) {
                        return this.getSessionToken().pipe(
                            switchMap(( r: Token ) => this.http.get<SearchResult>(
                                `https://opentdb.com/api.php?amount=${amount}&category=${category_id}&token=${r.token}`
                            ))
                        );
                    } else if (result.response_code === ResponseCode.Token_Empty) {
                        return this.updateSessionToken().pipe(
                            switchMap(( r: Token ) => this.http.get<SearchResult>(
                                `https://opentdb.com/api.php?amount=${amount}&category=${category_id}&token=${r.token}`
                            ))
                        );
                    } else if (result.response_code === ResponseCode.No_Results) {
                        return of(result);
                    } else {
                        _throw(result);
                    }
                }),
                catchError(( err: any ) => {
                    console.log('Trivia API Error!');
                    return of(err);
                })
            );
    }

    private getSessionToken(): Observable<Token> {
        return this.http.get<Token>('https://opentdb.com/api_token.php?command=request')
            .pipe(
                map(( result: Token ) => {
                    if (result.response_code === ResponseCode.Success) {
                        this.session_token = result.token;
                        return result;
                    } else {
                        _throw(result);
                    }
                }),
                catchError(( err: any ) => {
                    console.log('Trivia Session Token Error!');
                    return of(err);
                })
            );
    }

    private updateSessionToken(): Observable<Token> {
        return this.http.get<Token>(`https://opentdb.com/api_token.php?command=reset&token=${this._session_token}`)
            .pipe(
                map(( result: Token ) => {
                    if (result.response_code === ResponseCode.Success) {
                        this.session_token = result.token;
                        return result;
                    } else {
                        _throw(result);
                    }
                }),
                catchError(( err: any ) => {
                    console.log('Trivia Session Token Error!');
                    return of(err);
                })
            );
    }
}
