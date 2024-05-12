export enum ResultType {
	Ok = "ResultType__Ok",
	Err = "ResultType__Error",
}

type Ok<T> = {
	type: ResultType.Ok,
	value: T,
}

type Err = {
	type: ResultType.Err,
	msg: string,
}

export type Result<T> = Ok<T> | Err

export function Ok<T>(value: T): Ok<T> {
	return { type: ResultType.Ok, value: value }
}

export function Err(msg: string): Err {
	return { type: ResultType.Err, msg: msg }
}

