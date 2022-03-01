function populateHeader(unlinked) {
    let links = ["index.html","page2.html","page3.html"]
  
    let names = ["Main","Page2","Page3"]
  
    let header = $("<header></header>");
    header.addClass("header");
    header.append($("<h1></h1>").html("Header"))
    let ul = $("<ul></ul>")
    header.append(ul);
    for(let i in links){
      let a = $("<a></a>")
      ul.append($("<li></li>").addClass("nav").append(a.addClass("nav")));
      if(unlinked == links[i]){
        a.addClass("current");
      }else{
        a.attr("href",links[i])
      }
      a.html("<h1>"+names[i]+"</h1>");
    }
    $("body").prepend(header);
  }
  
  