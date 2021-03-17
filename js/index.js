(function () {
  displaySection("home");
})();


function displaySection(section) {
  const link = document.querySelectorAll(`[data-link-selected]`);
  for(let i = 0 ; i < link.length ; i++) {
    if(link[i].dataset.linkSelected === section) {
      const element = document.querySelector(`[data-link-selected=${link[i].dataset.linkSelected}]`)
      element.style.color = "#03CC83";
    } else {
      const element = document.querySelector(`[data-link-selected=${link[i].dataset.linkSelected}]`)
      element.style.color = "#FFFFFF";
    }
  }
  const pages = document.getElementById("pages");
  for(let i=0; i< pages.children.length; i++) {
    if(pages.children[i].id === section) {
      const pageElement =  document.getElementById(pages.children[i].id);
      pageElement.style.display = "block";
      setTimeout(()=> {
        pageElement.style.right = "0";
      },10)
    }
    else {
      const pageElement =  document.getElementById(pages.children[i].id);
      pageElement.style.display = "none";
      pageElement.style.right = "-1500px";
    }
  }
}
