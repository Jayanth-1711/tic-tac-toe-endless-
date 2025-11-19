const cells = document.querySelectorAll(".cell");
let turn = "X";
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //columns
  [0, 4, 8],
  [2, 4, 6]
  //diagonal
];

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      alert(`${cells[a].textContent} wins!`);
      gameOver = true;
      return;
    }
  }
}
let arr= [];
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!gameOver && cell.textContent === "") {
      cell.textContent = turn;
      arr.push(cell);
      console.log(arr.length);
     
      if (arr.length === 7){
        arr[0].textContent = "";
        arr[0].classList.remove("light");
        checkWinner(); 
        let a = arr.shift();
        console.log(arr[0]);
      }
       if (arr.length === 6 || arr.length === 7){
       arr[0].classList.add("light");
       console.log("yes");
      }
      setTimeout(() => {
        checkWinner(); 
      }, 1000);

      turn = turn === "X" ? "O" : "X";
    }
  });
});
