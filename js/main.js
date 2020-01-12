document.addEventListener("DOMContentLoaded", function() {
  const naul = document.getElementById("naul");
  const nhi = document.getElementById("nhi");
  const bao = document.getElementById("bao");
  const tuyen = document.getElementById("tuyen");
  const arr = [naul, nhi, bao, tuyen];
  let count = 1;
  for (let item of arr) {
    let target = "team-" + count;
    let domTarget = document.getElementById(target);
    item.addEventListener("click", () => {
      for (let index = 1; index <= 4; index++) {
        let theValue = document.getElementById("team-" + index);
        theValue.setAttribute("class", "team-single");
        arr[index - 1].setAttribute("class", "wow zoomIn");
      }
      item.setAttribute("class", "wow zoomIn active");
      domTarget.setAttribute("class", "team-single active");
    });
    count += 1;
  }
});
