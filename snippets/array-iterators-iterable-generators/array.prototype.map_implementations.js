if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    if (this == null) {
      throw new TypeError("Array.prototype.flat called on null or undefined");
    }

    if (depth < 0) {
      return this.slice(); // Returns a copy of the original array if the depth is negative
    }

    const flattenArray = (arr, currentDepth) => {
      if (currentDepth === depth) {
        return arr.slice();
      }
      return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
          acc.push(...flattenArray(item, currentDepth + 1));
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    };
    return flattenArray(this, 0);
  };
}

const nestedNumbers = [1, [2, 3], [4, [5, 6]]];
const resultFlat = nestedNumbers.flat();

console.log(resultFlat);
