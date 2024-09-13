import { describe, it, assert } from "vitest";
import { filterList } from "./filter-list";

describe("filterList", () => {
  const list = ["Apple", "Banana", "Aardvark"];

  describe("numeric criteria", () => {
    it('returns "Apple" for index 1', () => {
      assert.equal(filterList(list, 1), "Apple");
    });

    it('returns "Banana" for index 2', () => {
      assert.equal(filterList(list, 2), "Banana");
    });

    it('returns "Aardvark" for index 3', () => {
      assert.equal(filterList(list, 3), "Aardvark");
    });

    it('returns "Aardvark" for index -1', () => {
      assert.equal(filterList(list, -1), "Aardvark");
    });

    it('returns "Banana" for index -2', () => {
      assert.equal(filterList(list, -2), "Banana");
    });

    it('returns "Apple" for index -3', () => {
      assert.equal(filterList(list, -3), "Apple");
    });

    describe("edge cases", () => {
      it("returns undefined for index 4", () => {
        assert.equal(filterList(list, 4), undefined);
      });

      it("returns undefined for index 0", () => {
        assert.equal(filterList(list, 0), undefined);
      });

      it("returns undefined for index -4", () => {
        assert.equal(filterList(list, -4), undefined);
      });
    });
  });

  describe("string criteria", () => {
    it('returns all items containing "A"', () => {
      assert.deepEqual(filterList(list, "A"), ["Apple", "Banana", "Aardvark"]);
    });

    it('returns all items containing "Ban"', () => {
      assert.deepEqual(filterList(list, "Ban"), ["Banana"]);
    });

    it('returns all items containing "ard"', () => {
      assert.deepEqual(filterList(list, "ard"), ["Aardvark"]);
    });

    it('returns an empty array for "z"', () => {
      assert.deepEqual(filterList(list, "z"), []);
    });

    it('returns all items containing "App"', () => {
      assert.deepEqual(filterList(list, "App"), ["Apple"]);
    });

    it('returns all items containing "a"', () => {
      assert.deepEqual(filterList(list, "a"), ["Apple", "Banana", "Aardvark"]);
    });

    it('returns all items containing "BAN"', () => {
      assert.deepEqual(filterList(list, "BAN"), ["Banana"]);
    });

    it('returns all items containing "ARD"', () => {
      assert.deepEqual(filterList(list, "ARD"), ["Aardvark"]);
    });
  });
});