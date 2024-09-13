import { describe, it, assert } from 'vitest';
import { filterListByIndex } from './filter-list';

describe('filterListByIndex', () => {
    const list = ["Apple", "Banana", "Aardvark"];

    describe('numeric criteria', () => {
        it('returns "Apple" for index 1', () => {
            assert.equal(filterListByIndex(list, 1), "Apple");
        });

        it('returns "Banana" for index 2', () => {
            assert.equal(filterListByIndex(list, 2), "Banana");
        });

        it('returns "Aardvark" for index 3', () => {
            assert.equal(filterListByIndex(list, 3), "Aardvark");
        });

        describe('edge cases', () => {
            it('returns undefined for index 4', () => {
                assert.equal(filterListByIndex(list, 4), undefined);
            });

            it('returns undefined for index 0', () => {
                assert.equal(filterListByIndex(list, 0), undefined);
            });

            it('returns undefined for negative index', () => {
                assert.equal(filterListByIndex(list, -1), undefined);
            });
        });
    });
});