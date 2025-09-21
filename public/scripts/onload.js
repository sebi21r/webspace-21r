
function loadNav(id) {

    if (id == true) {
      sitemap = fetch('/en/sitemap.html')
              .then(respones => respones.text())
              .then(text => {return text});
    } else {
      sitemap = fetch('/de/sitemap.html')
              .then(respones => respones.text())
              .then(text => {return text});
    }
    console.log(sitemap)
  
    sitemap.then(
  
      function(value) {
        parsed_value = new DOMParser().parseFromString(value, "text/html");
        console.log(parsed_value.getElementById("sitemap-list"));
        parsed_value = parsed_value.getElementById("sitemap-list");
        for (var i = 0; i < parsed_value.getElementsByTagName("li").length; i++) {
  
          if (document.title.includes(parsed_value.getElementsByTagName("li")[i].innerText)) {
  
            parsed_value.getElementsByTagName("li")[i].classList.add("active");
  
          }
          parsed_value.getElementsByTagName("li")[i].classList.add("nav-item")
  
        }
        document.getElementById("nav-list").innerHTML = parsed_value.innerHTML;


            
          console.log(window.innerWidth);
          if(window.innerWidth < 700) {

            console.log("700<");
            
            //need to update variable names for consistency and stuff
            id=0;
            hitCount=0;
            hiddenListItems=0;
            item = document.getElementsByClassName("nav-item");

            while(id < item.length) {
              if(item[id+hitCount] != document.getElementById("nav-list").children[id+hitCount]) {  

                increased_value=0;
                while(item[id+increased_value] != document.getElementById("nav-list").children[id+1]) {
                  increased_value++;
                  hiddenListItems++;
                }
                hitCount++;
              }
              id++;  
            }

            if(id-hiddenListItems >= 5) {

              width=Math.round((id-hiddenListItems)/2);
              const root = document.querySelector(":root");
              root.style.setProperty("--nav-item-width", 100/width + "%");
          
              console.log(width);

            }
          }
      },
      function(error) {
        console.log("oh no... " + error);
      }
  
      )

  
  }

  
function countButtons() {

  buttons = document.getElementsByClassName("web-button");
  document.getElementById("button_count").innerHTML = buttons.length;


}

function imgCentralization() {
 
  i=0;
  img=document.getElementsByTagName("img");
  while (i<img.length) {
    console.log(img[i].classList[0]);
    console.log(img[i]);
    img[i].style.marginLeft = "calc(50% - " + img[i].clientWidth + "px/2)";
  
    i += 1;
  }
//w3schools is helping big time with javascript, thanks!

}