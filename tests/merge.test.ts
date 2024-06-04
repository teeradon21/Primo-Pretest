import { merge } from "../src/merge";

describe("merge" , () => {
    it("should returns sorted array by ascending, when all elements are unique", () => {
        expect(merge([1, 4, 5, 8], [12, 9, 7, 3], [2, 6, 10, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
    it("should returns sorted array by ascending, when there are equal elements", () => {
        expect(merge([1, 4, 5], [4, 3, 2], [2, 4])).toEqual([1, 2, 2, 3, 4, 4, 4, 5]);
    });
    it("should returns sorted array by ascending, when there is an empty collection", () => {
        expect(merge([1, 4, 5], [4, 3, 2], [])).toEqual([1, 2, 3, 4, 4, 5]);
    });
});

