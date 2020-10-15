


function gennum(n,y){return(Math.round((Math.random() * (n - 0 + 1)) +y))
}


var z=1
var w=1

function tor() {$("#demo").html(z++)
};

function tor1() {$("#demo1").html(w++)
};


var levels=0


function start()
{if(levels==1){
$("#rannum").html(gennum(8,0))}
else if (levels==2){$("#rannum").html(gennum(89,10))}
};

function start1()
{if(levels==1){
$("#rannum1").html(gennum(8,0))}
else if (levels==2){$("#rannum1").html(gennum(89,10))}
};


function vis()
{$("#res1,#res2,#res3,#posit,aside,section,#overplace").css({"visibility":"visible"});
$("#starter,#posit_lev").css({"visibility":"hidden"})
}

function vis1()
{
{$("#res1,#res2,#res3,#posit,aside,section,#overplace").css({"visibility":"hidden"});}
{$("#stats").css({"visibility":"visible"});

}}




function rev1()
{
if(
$("#rannum").html()>$("#rannum1").html())
{tor()}else {tor1()}
}

function rev2()
{
if(
$("#rannum").html()==$("#rannum1").html())
{tor()}else {tor1()}
}

function rev3()
{
if(
$("#rannum").html()<$("#rannum1").html()){tor()}else {tor1()
}}




var i=6;

function time()
{i--;
timeR=setTimeout("time()",1000);
$("#timer").html(i);
if(i<=0){i=6;tor1();start();start1()} 
};


var q=31
var a=q
function timeout()
{q--;
timeR=setTimeout("timeout()",1000);
$("#overallt").html(q);
if(q<=0){i=10;vis1();
$("#tr").html($("#demo").html());

$("#fal").html($("#demo1").html());

$("#ansum").html(
Math.abs($("#tr").html())+Math.abs($("#fal").html()));

$("#tr1").html(Math.round($("#tr").html()/$("#ansum").html()*100));

$("#fal1").html(Math.round($("#fal").html()/$("#ansum").html()*100));

$("#avg").html(Math.round(($("#ansum").html()/a)*100)/100);

}};
 





