import {Subscription} from "rxjs";

export abstract class Pagination {
    private _pageSize: number = 10;
    private _offset: number = 0;
    private _total: number = 10;
    private _pageIndex: number = 1;
    private _pageSizeOptions: number[] = [10, 20, 30, 40, 50, 100];
    private _addPaginationInBody: boolean = true;
    private _searchData: string = "";
    private _suscription: Subscription = new Subscription();


    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(value: number) {
        this._pageSize = value;
    }

    get offset(): number {
        return this._offset;
    }

    set offset(value: number) {
        this._offset = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get pageIndex(): number {
        return this._pageIndex;
    }

    set pageIndex(value: number) {
        this._pageIndex = value;
    }

    public get pageSizeOptions(): number[] {
        return this._pageSizeOptions;
    }

    public set pageSizeOptions(value: number[]) {
        this._pageSizeOptions = value;
    }

    get addPaginationInBody(): boolean {
        return this._addPaginationInBody;
    }

    set addPaginationInBody(value: boolean) {
        this._addPaginationInBody = value;
    }

    get searchData(): string {
        return this._searchData;
    }

    set searchData(value: string) {
        this._searchData = value;
    }

    get suscription(): Subscription {
        return this._suscription;
    }

    set suscription(value: Subscription) {
        this._suscription = value;
    }

    public indexCalculated = () => (this.pageIndex * this.pageSize) - this.pageSize;

    /**
     * for current page in pagination change
     * @param pageIndex
     */
    public onPageIndexChange(pageIndex: number): void {
        this.pageIndex = pageIndex;
        this.onRloadData();
    }

    /**
     * for page size in pagination change
     * @param pageSize
     */
    public onPageSizeChange(pageSize: number): void {
        this.pageSize = pageSize;
        this.onRloadData();
    }

    public onSearchData(value: string | null): void {
        this._searchData = value ?? "";
        this._suscription.unsubscribe();
        // 20000 ms => 20s
    }

    /**
     *  refresh data table
     */
    public abstract onRloadData(): void;
}

