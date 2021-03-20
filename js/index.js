(function () {
  displaySection("home");
})();

function displaySection(section) {
  var pagePosition = [
    {
      page: "home",
      position: "top",
    },
    {
      page: "about",
      position: "right",
    },
    {
      page: "skills",
      position: "left",
    },
    {
      page: "history",
      position: "bottom",
    },
    {
      page: "projects",
      position: "top",
    },
    {
      page: "contact",
      position: "right",
    },
  ];
  const link = document.querySelectorAll(`[data-link-selected]`);
  for (let i = 0; i < link.length; i++) {
    if (link[i].dataset.linkSelected === section) {
      const element = document.querySelector(
        `[data-link-selected=${link[i].dataset.linkSelected}]`
      );
      element.style.color = "#03CC83";
    } else {
      const element = document.querySelector(
        `[data-link-selected=${link[i].dataset.linkSelected}]`
      );
      element.style.color = "#FFFFFF";
    }
  }
  const pages = document.getElementById("pages");
  for (let i = 0; i < pages.children.length; i++) {
    const selectedPagePosition = pagePosition.filter((pageItr) => {
      return pageItr.page === pages.children[i].id;
    });
    if (pages.children[i].id === section) {
      const pageElement = document.getElementById(pages.children[i].id);
      pageElement.style[selectedPagePosition[0].position] = "-1200px";
      pageElement.style.display = "block";
      setTimeout(() => {
        pageElement.style[selectedPagePosition[0].position] = "0";
        if (section === "skills") {
          addStars();
        }
      }, 1);
    } else {
      const pageElement = document.getElementById(pages.children[i].id);
      pageElement.style[selectedPagePosition[0].position] = "-1200px";
      pageElement.style.display = "none";
    }
  }
}

const skills = [
  {
    name: "HTMl&CSS",
    stars: 5,
  },
  {
    name: "JavaScript",
    stars: 5,
  },
  {
    name: "JAVA",
    stars: 4,
  },
  {
    name: "React&Redux",
    stars: 4,
  },
  {
    name: "Angular JS",
    stars: 4,
  },
  {
    name: "Node JS",
    stars: 4,
  },
  {
    name: "Spring Boot",
    stars: 3,
  },
  {
    name: "SQL",
    stars: 3,
  },
  {
    name: "MongoDB",
    stars: 2,
  },
  {
    name: "Docker",
    stars: 2,
  },
  {
    name: "Figma",
    stars: 1,
  },
  {
    name: "AWS EC3 & S3",
    stars: 1,
  },
];

var ele = document.getElementById("skills");
function addStars() {
  const leftSkillElement = document.querySelector(".left-skills");
  const rightSkillElement = document.querySelector(".right-skills");
  for (let i = 0; i < skills.length / 2; i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("rating");
    const languageElement = document.createElement("p");
    languageElement.innerText = skills[i].name;
    divElement.appendChild(languageElement);
    for (let j = 0; j < 5; j++) {
      const spanElement = document.createElement("span");
      const icon = document.createElement("i");
      const start = document.createTextNode("★");
      icon.id = String(j) + String(i);
      icon.appendChild(start);
      spanElement.appendChild(icon);

      divElement.appendChild(spanElement);
    }

    leftSkillElement.appendChild(divElement);
  }
  for (let i = Math.ceil(skills.length / 2); i < skills.length; i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("rating");
    const languageElement = document.createElement("p");
    languageElement.innerText = skills[i].name;
    divElement.appendChild(languageElement);

    for (let j = 0; j < 5; j++) {
      const spanElement = document.createElement("span");
      const icon = document.createElement("i");
      const start = document.createTextNode("★");
      icon.id = String(j) + String(i);
      icon.appendChild(start);
      spanElement.appendChild(icon);
      divElement.appendChild(spanElement);
    }

    rightSkillElement.appendChild(divElement);
  }

  const ratingSection = document.querySelectorAll(".rating");
  for (let i = 0; i < skills.length; i++) {
    addStarColor(skills[i].stars, ratingSection[i]);
  }
}

function addStarColor(rating, element) {
  const span = element.children;
  for (let i = 0; i <= rating; i++) {
    setTimeout(() => {
      const star = span[i].children;
      const ele = document.getElementById(star[0].id);
      ele.classList.add("highLight");
    }, 250 * i);
  }
}

// carousel
/*
let span = document.getElementsByTagName("span");
let div = document.getElementsByTagName("div");

let l = 0;
span[1].onclick = () => {
  l++;
  for (let i of div) {
    if (l == 0) {
      i.style.left = "200px";
    }
    if (l == 1) {
      i.style.left = "-1000px";
    }
    if (l == 2) {
      i.style.left = "-2000px";
    }
    if (l == 3) {
      i.style.left = "-3000px";
    }
    if (l == 4) {
      i.style.left = "=4000px";
    }
    if (l > 4) {
      l = 4;
    }
  }
};
span[0].onclick = () => {
  l--;
  for (let i of div) {
    if (l == 0) {
      i.style.left = "200px";
    }
    if (l == 1) {
      i.style.left = "-1000px";
    }
    if (l == 2) {
      i.style.left = "-2000px";
    }
    if (l == 3) {
      i.style.left = "-3000px";
    }
    if (l == 4) {
      i.style.left = "-4000px";
    }
    if (l < 4) {
      l = 0;
    }
  }
};
*/
