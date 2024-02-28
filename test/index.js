import SDrive from "../dist/index.js";
import assert from "assert";

describe("SDrive", function () {
  describe("#init sdrive", function () {
    it("should init sdrive", function () {
      const sdrive = new SDrive("test");
      assert(
        sdrive instanceof SDrive,
        "sdrive should be an instance of SDrive"
      );
    });
  });
});
