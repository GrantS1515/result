export var ResultType;
(function (ResultType) {
    ResultType["Ok"] = "ResultType__Ok";
    ResultType["Err"] = "ResultType__Error";
})(ResultType || (ResultType = {}));
export function Ok(value) {
    return { type: ResultType.Ok, value: value };
}
export function Err(msg) {
    return { type: ResultType.Err, msg: msg };
}
