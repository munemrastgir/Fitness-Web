//this fuction will create a unordered html list of all our exersices loaded from the json file
function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.legs.length; i++)
        {
            str=data.legs[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            li.setAttribute("id",i);
            //set the item to the ith exercise from our json database
            li.innerHTML=str;
            ul.appendChild(li); // add that item to the unordered list
        }
}

function exerciseLoader(data){
    
    $(document).ready(function(){
    $(".exercises li").click(function(){
        var listNum= $(this).attr("id");
        $("h2").text(data.legs[listNum].Exercise);
    
        var h3=document.getElementById("desc");
        h3.innerHTML=data.legs[listNum].Descriptions;
        h3.setAttribute("style","text-align: center");
        $("#desc").replaceWith(h3);
        
        if($("iframe").length==0)
            {
                var v=document.createElement("iframe"); 
                $(v).attr({"style":"text-align: center","width":760,"height":505,"src":data.legs[listNum].link,"frameborder":0,"allowfullscreen":0});
                $(v).appendTo("#gen");
            }
        else{
            var v=document.getElementsByTagName("iframe"); 
            $(v).attr({"style":"text-align: center","width":760,"height":505,"src":data.legs[listNum].link,"frameborder":0,"allowfullscreen":0});
            $("iframe").replaceWith(v);
        }
            
    });
});
    
    
}
$.getJSON("legs.json",function(data){

    exerciseList(data);
    exerciseLoader(data);
    
});