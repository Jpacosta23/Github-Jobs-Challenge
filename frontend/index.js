const Link ="http://localhost:3001/api/jobs";
const section=document.querySelector('.section-list')
const formulario=document.querySelector('.form');


const displayJob=(user)=>{
    const company=user.company;
    const type=user.type;
    const company_logo=user.company_logo;
    const title=user.title;

    const div=document.createElement('div');
    const div2=document.createElement("div");
    const h1=document.createElement('h1');
    const p=document.createElement('p');
    const p2=document.createElement('p');
    const img=document.createElement('img');
    
    div.style.boxShadow="2px 2px 5px #d3d3d3";
    div.style.display="flex";
    div.style.margin="20px 0px";
    div.setAttribute("class","Job_Container");
    h1.style.font="bold";
    p.style.fontSize="normal";
    p2.style.fontSize="20px";
    img.src=company_logo;
    img.width="150";
    img.height="150";
    p2.setAttribute("class","position");

    h1.appendChild(document.createTextNode(`${company}`));
    p.appendChild(document.createTextNode(`${type}`));
    p2.appendChild(document.createTextNode(`${title}`));

    div2.append(h1,p2,p);
    div.append(img,div2);
    section.appendChild(div);
}

const getJobs= async()=>{
    try{
      const RES =await fetch(Link);
      const data=await RES.json();
      data.forEach(user=>{
        displayJob(user);
      })
    }
    catch(error){
      console.log(error)
    }
  }
  getJobs();

const getTitleFiltered=async()=>{
  try{
    const RES =await fetch(Link);
    const data=await RES.json();
    const key=document.getElementById("keyword").value.toLowerCase();
    const filtered=data.forEach(job=>{
      if(job.title.toLowerCase().indexOf(key)!=-1||job.company.toLowerCase().indexOf(key)!=-1||job.location.toLowerCase().indexOf(key)!=-1||job.stack.indexOf(key)!=-1){
        console.log(job,job.stack);
        displayJob(job);
      }
    });
  }
  catch(error){
    console.log(error)
  }
}

const getKeyWord=(evt)=>{
    const div=document.querySelectorAll(".Job_Container");
    console.log(div);
    div.forEach(item=>item.remove());
    getTitleFiltered();
    evt.preventDefault();
}
formulario.addEventListener('submit',getKeyWord)