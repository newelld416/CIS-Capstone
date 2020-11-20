import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService, SESSION_STORAGE } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';
@Injectable()
export class BrowserStorageService {
    anotherTodolist = [];
    constructor(
        @Inject(LOCAL_STORAGE) private localStorage: StorageService,
        @Inject(SESSION_STORAGE) private sessionStorage: StorageService,
    ) { }

    public getLocalStorage(key: string): any {
        return this.localStorage.get(key);
    }

    public setLocalStorage(key: string, value: any) {
        this.localStorage.set(key, value);
    }

    public removeLocalStorage(key: string) {
        this.localStorage.remove(key);
    }

    public getSessionStorage(key: string): any {
        return this.sessionStorage.get(key);
    }

    public setSessionStorage(key: string, value: any) {
        this.sessionStorage.set(key, value);
    }

    public removeSessionStorage(key: string) {
        this.sessionStorage.remove(key);
    }
}