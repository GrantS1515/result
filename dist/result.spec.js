import { expect } from "chai";
import { Ok, Err, ResultType } from "./result.js";
describe("testing the result type", () => {
    it("when successful can create a result value", () => {
        function successFn() {
            return 5;
        }
        function toResult() {
            try {
                return Ok(successFn());
            }
            catch {
                return Err("successFn failed...");
            }
        }
        const resultVal = toResult();
        switch (resultVal.type) {
            case ResultType.Ok:
                expect(resultVal.value).to.equal(5);
                break;
            case ResultType.Err:
                expect.fail(resultVal.msg);
                break;
        }
    });
    it("when failure will show an error msg", () => {
        function failFn() {
            throw new Error("some error...");
        }
        function toResult() {
            try {
                return Ok(failFn());
            }
            catch {
                return Err("failFn failed");
            }
        }
        const resultVal = toResult();
        switch (resultVal.type) {
            case ResultType.Ok:
                expect.fail("failFn has not failed");
                break;
            case ResultType.Err:
                expect(resultVal.msg).to.equal("failFn failed");
                break;
        }
    });
});
