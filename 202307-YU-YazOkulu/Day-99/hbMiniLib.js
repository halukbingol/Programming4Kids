// hbMiniLib.js
// (c) 2023 haluk.bingol@yeditepe.edu.tr
  
  // primitives
  function setText(el, value) {
    el.innerHTML = "" + value;
  }

  function incrementText(el) {
    let value = parseInt(el.innerHTML);
    value++;
    el.innerHTML = value;
  }

  