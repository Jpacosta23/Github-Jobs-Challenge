const Link = "http://localhost:3001/api/jobs";
const section = document.querySelector(".section-list");
const formulario = document.querySelector(".form");
const checkbox = document.querySelector("#contract");
const formLocation = document.querySelector(".form2");

const displayJob = (user) => {
  const company = user.company;
  const type = user.type;
  const company_logo = user.company_logo;
  const title = user.title;

  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const img = document.createElement("img");

  div.style.boxShadow = "2px 2px 5px #d3d3d3";
  div.style.display = "flex";
  div.style.margin = "20px 0px";
  div.setAttribute("class", "Job_Container");
  h1.style.font = "bold";
  p.style.fontSize = "normal";
  p2.style.fontSize = "20px";
  img.src = company_logo;
  img.width = "150";
  img.height = "150";
  p2.setAttribute("class", "position");

  h1.appendChild(document.createTextNode(`${company}`));
  p.appendChild(document.createTextNode(`${type}`));
  p2.appendChild(document.createTextNode(`${title}`));

  div2.append(h1, p2, p);
  div.append(img, div2);
  section.appendChild(div);
};

const getJobs = async () => {
  try {
    const RES = await fetch(Link);
    const data = await RES.json();
    data.forEach((user) => {
      displayJob(user);
    });
  } catch (error) {
    console.log(error);
  }
};
getJobs();

const getTitleFiltered = async () => {
  try {
    const key = document.getElementById("keyword").value.toLowerCase();
    if (key.length === 0) {
      getJobs();
    } else {
      const RES = await fetch(`${Link}/keyword/${key}`);
      const data = await RES.json();
      data.forEach((user) => {
        displayJob(user);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getFullTimeJob = async () => {
  try {
    const radioButton = document.querySelector(
      "input[type='checkbox']:checked"
    );
    let val = "";
    if (radioButton === null) {
      val = "time";
    } else {
      val = radioButton.value;
    }
    const RES = await fetch(`${Link}/type/${val}`);
    const data = await RES.json();
    data.forEach((user) => {
      displayJob(user);
    });
  } catch (error) {
    console.log(error);
  }
};

const getLocation = async () => {
  try {
    const radio = document.querySelector('input[name="city"]:checked');
    const txtBox = document.getElementById("location").value.toLowerCase();
    if (radio === null && txtBox === "") {
      getJobs();
    } else if (radio === null && txtBox.length > 0) {
      const val = txtBox;
      const RES = await fetch(`${Link}/location/${val}`);
      const data = await RES.json();
      data.forEach((user) => {
        displayJob(user);
      });
    } else {
      const val = radio.value;
      const RES = await fetch(`${Link}/location/${val}`);
      const data = await RES.json();
      data.forEach((user) => {
        displayJob(user);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteScreen = () => {
  const div = document.querySelectorAll(".Job_Container");
  div.forEach((item) => item.remove());
};

const getKeyWord = (evt) => {
  deleteScreen();
  getTitleFiltered();
  evt.preventDefault();
};

const fullTime = (evt) => {
  deleteScreen();
  getFullTimeJob();
  evt.preventDefault();
};

const city = (evt) => {
  deleteScreen();
  getLocation();
  evt.preventDefault();
};

formulario.addEventListener("submit", getKeyWord);
checkbox.addEventListener("change", fullTime);
formLocation.addEventListener("change", city);
