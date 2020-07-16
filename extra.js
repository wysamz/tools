window.onload = function(){
  const els = document.getElementsByClassName("MathJax_CHTML")
  console.log("math-fontize")
  for(let el of els){
    el.style.fontSize = "1.25em"
  }
}

