/**
 * Filters a list based on the provided criteria.
 * 
 * If the criteria is a number:
 * - A positive number selects the item at the 1-based index.
 * - A negative number selects the item from the end of the list in a 1-based fashion.
 * 
 * If the criteria is a string:
 * - Returns all items in the list that contain the criteria as a substring (case-insensitive).
 * 
 * @param list - The list of items to filter.
 * @param criteria - The criteria to filter the list by. Can be a number or a string.
 * @returns The filtered list or a single item based on the criteria.
 */
export function filterList<T>(
  list: T[],
  criteria: number | string
): T[] | T | undefined {
  if (typeof criteria === "number") {
    const zeroBasedIndex = criteria < 0 ? list.length + criteria : criteria - 1;
    return zeroBasedIndex >= 0 && zeroBasedIndex < list.length
      ? list[zeroBasedIndex]
      : undefined;
  }

  if (typeof criteria === "string") {
    const lowerCaseCriteria = criteria.toLowerCase();
    return list.filter((item) =>
      item.toString().toLowerCase().includes(lowerCaseCriteria)
    );
  }

  return undefined;
}