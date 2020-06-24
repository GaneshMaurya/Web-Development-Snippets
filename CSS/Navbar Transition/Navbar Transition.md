<h1>How To - Shrink Navigation Menu on Scroll</h1>

<pre>
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.height = "54px";
        document.getElementById("logo").style.fontSize = "20px";
    }
    else {
        document.getElementById("navbar").style.height = "70px";
        document.getElementById("logo").style.fontSize = "30px";
    }
}
</pre>
