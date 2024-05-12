import { expect } from "chai"
import { Result, Ok, Err, ResultType } from "./result.js"

describe("testing the result type", () => {
	it("when successful can create a result value", () => {
		function successFn(): number {
			return 5
		}

		function toResult(): Result<number> {
			try {
				return Ok(successFn())
			} catch {
				return Err("successFn failed...")
			}
		}

		const resultVal: Result<number> = toResult();

		switch(resultVal.type) {
			case ResultType.Ok:
				expect(resultVal.value).to.equal(5)
				break;
			case ResultType.Err:
				expect.fail(resultVal.msg)
				break;

		}
	})

	it("when failure will show an error msg", () => {
		function failFn(): number {
			throw new Error("some error...")
		}

		function toResult(): Result<number> {
			try {
				return Ok(failFn())
			} catch {
				return Err("failFn failed")
			}
		}

		const resultVal: Result<number> = toResult();

		switch(resultVal.type) {
			case ResultType.Ok:
				expect.fail("failFn has not failed")
				break;
			case ResultType.Err:
				expect(resultVal.msg).to.equal("failFn failed")
				break;

		}
	})
})