var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
        event.currentTarget.classList.add("active-link");  
        document.getElementById(tabname).classList.add("active-tab");

    }
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right= "0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyAUzzhObBhPCMsfgoXmh2fU58XOZD_B5tvsH3_V-T7x1fpvg89_YBI95yBVqtOWecnag/exec'
  const form = document.forms['submit-to-google-sheet']
  const msgs=document.getElementById("msgs")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
    msgs.innerHTML="Message sent Successefully"
      setTimeout(function(){
        msgs.innerHTML=""
      },80000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
})
  