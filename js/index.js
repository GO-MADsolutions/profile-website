(function () {
  displaySection("home");
})();


function displaySection(section) {
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
