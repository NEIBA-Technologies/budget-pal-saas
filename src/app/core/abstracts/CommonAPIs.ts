import {HttpClient} from "@angular/common/http";

export abstract class CommonAPIs<T> {

    constructor(
        private _http: HttpClient,
        private _uri: string
    ) {
    }

    abstract findAll(page: number, limit: number, filters?: any | undefined): T

    abstract findAllTrash(page: number, limit: number, filters?: any): T

    abstract findById(id: number): T

    abstract persisteData(data: any): T

    abstract toggleStatus(id: string, status: number): T

    abstract findMetric(): T


}
