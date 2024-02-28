import SDrive from "../dist/index.js";
import assert from "assert";
import dotenv from "dotenv";
dotenv.config();

describe("SDrive", function () {
  describe("#init sdrive", function () {
    it("should init sdrive", function () {
      const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
      assert(
        sdrive instanceof SDrive,
        "sdrive should be an instance of SDrive",
      );
    });
  });
  describe("#objects", async function () {
    it("should list objects", async function () {
      const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
      let rows = await sdrive.listObjects();
      assert.ok(rows.objects.length >= 2, "Expected at least 2 objects");
    });
  });
});
