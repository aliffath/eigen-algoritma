function reverse(str) {
  const letters = str
    .match(/[A-Za-z]/g)
    .reverse()
    .join("");
  const numbers = str.match(/[0-9]/g).join("");
  return letters + numbers;
}

console.log(reverse("NEGIE1"));

const longest = (sentence) => {
  const word = sentence.split(" ").reduce((a, b) => (a.length >= b.length ? a : b));
  return `${word}: ${word.length} character`;
};

console.log(longest("Saya sangat senang mengerjakan soal algoritma"));

const countQuery = (input, query) => query.map((q) => input.filter((i) => i === q).length);

console.log(countQuery(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));

const diagonalDifference = (matrix) => Math.abs(matrix.reduce((sum, row, i) => sum + row[i], 0) - matrix.reduce((sum, row, i) => sum + row[row.length - 1 - i], 0));

console.log(
  diagonalDifference([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
