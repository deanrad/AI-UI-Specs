export function filterListByIndex<T>(list: T[], index: number): T | undefined {
    const zeroBasedIndex = index - 1;
    if (zeroBasedIndex >= 0 && zeroBasedIndex < list.length) {
        return list[zeroBasedIndex];
    }
    return undefined;
}

// Example usage
// const list = ["Apple", "Banana", "Aardvark"];

// console.log(filterListByIndex(list, 1)); // "Apple"
// console.log(filterListByIndex(list, 2)); // "Banana"
// console.log(filterListByIndex(list, 3)); // "Aardvark"
// console.log(filterListByIndex(list, 4)); // undefined
// console.log(filterListByIndex(list, 0)); // undefined
// console.log(filterListByIndex(list, -1)); // undefined