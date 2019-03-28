export class Matrix {
  constructor(matrixString) {
    this.rows = matrixString.split('\n').map(row => row.split(' ').map(item => Number(item)));
    const columns = this.rows.map(() => Array(this.rows.length));
    this.rows.forEach((row, rowIndex) => {
      row.forEach((rowItem, itemIndex) => {
        columns[itemIndex][rowIndex] = rowItem;
      });
    });
    this.columns = columns;
  }
}
