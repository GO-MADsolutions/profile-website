(function () {
  displaySection("home");
})();

function displaySection(section) {
  var pagePosition = [
    {
      page: "home",
      position: "top"
    },
    {
      page: "about",
      position: "right"
    },
    {
      page: "skills",
      position: "left"
    },
    {
      page: "history",
      position: "bottom"
    },
    {
      page: "projects",
      position: "top"
    },
    {
      page: "contact",
      position: "right"
    },
  ]
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
    const selectedPagePosition = pagePosition.filter((pageItr)=>{
      return pageItr.page === pages.children[i].id;
    });
    if(pages.children[i].id === section) {
      const pageElement =  document.getElementById(pages.children[i].id);
      pageElement.style[selectedPagePosition[0].position] = "-1500px";
      pageElement.style.display = "block";
      setTimeout(()=> {
        pageElement.style[selectedPagePosition[0].position] = "0";
      },1)
    }
    else {
      const pageElement =  document.getElementById(pages.children[i].id);
      pageElement.style[selectedPagePosition[0].position] = "-1500px";
      pageElement.style.display = "none";
    }
  }
}
