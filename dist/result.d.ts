export declare enum ResultType {
    Ok = "ResultType__Ok",
    Err = "ResultType__Error"
}
type Ok<T> = {
    type: ResultType.Ok;
    value: T;
};
type Err = {
    type: ResultType.Err;
    msg: string;
};
export type Result<T> = Ok<T> | Err;
export declare function Ok<T>(value: T): Ok<T>;
export declare function Err(msg: string): Err;
export {};
