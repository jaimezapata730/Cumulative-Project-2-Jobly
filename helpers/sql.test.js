const { sqlForPartialUpdate } = require("./sql");

describe ("sqlForPartialUpdate", () => {
    test("its working: 1 item", () => {
        const res = sqlForPartialUpdate({ a1: "v1" }, { a1: "a1", aA2: "a2" });
        expect(res).toEqual({ setCols: "\"a1\"=$1", values: ["v1"]});
    });

    test("its working: 2 items", () => {
        const res = sqlForPartialUpdate({ a1: "v1", jsA2: "v2" }, { jsA2: "a2" });
        expect(res).toEqual({ setCols: "\"a1\"=$1, \"a2\"=$2", values: ["v1", "v2"] });
    });
});