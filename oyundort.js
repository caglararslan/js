var count=1, total=0, correct=0, wrong=0, lim=0;
var ans = "", question ="", input="", width= 220, t = '', n1, n2, n3, r1, r2;
var opr = [];
$(document).ready(function() {
    $("#quizbody").hide();
});
function level(lvl) {
    if (lvl<5) {
        opr = ["+", "-", "*"];        
        if (lvl==1)
            lim = 5;
        else if (lvl==2)
            lim = 10;
        else if (lvl==3)
            lim = 15;
        else if (lvl==4)
            lim = 30;            
    }
    else if (lvl==5) {
        lim = 50;
        opr = ["+", "-", "*", "*"];
    }
    $("#diff").hide();
    $("#quizbody").show();
    quiz();
}

function quiz() {
    var len = opr.length;    
    n1 = Math.floor(Math.random() * lim);
    n2 = Math.floor(Math.random() * lim);
    n3 = Math.floor(Math.random() * lim);    
    r1 = opr[Math.floor(Math.random()*len)];
    r2 = opr[Math.floor(Math.random()*len)];    
    question = n1+r1+n2+r2+n3;
    ans = eval(question);
    $("#question").html(question+" = ?");
    t = setInterval(timeCheck, 100);
}

function check() {
    var input = $("#answer").val();
    if(input == ans) {
        Swal.fire({
          icon: 'success',
          title: 'Doğru',
          text: ans + ' Doğru.',
          showConfirmButton: false,
          timer: 1500
        });
        correct++;
        $("#correct").html(correct);
    }
    else {
        Swal.fire({
          icon: 'Hata',
          title: 'Yanlış',
          text: 'Doğru Cevap : '+ans,
          showConfirmButton: false,
          timer: 1500
        });
        wrong++;
        $("#wrong").html(wrong);
    } 
    $("#answer").val('');
    count++;
    total++;
    $("#no").html(count);
    $("#total").html(total);
    clearInterval(t);
    width = 220;
    bar.style.width = '200px';
    quiz();
}
function reset() {
    $("#diff").show();
    $("#quizbody").hide();
    count=1, total=0, correct=0, wrong=0, lim=0;
    $("#correct").html(correct);
    $("#wrong").html(wrong);
    $("#total").html(total);
    input.value = "";
}

function ins(num) {
    if ($("#answer").val() != '' && num == '-')
    {
      //do nothing  
    }
    else {
      $("#answer").val($("#answer").val()+num);
    }
}

function deletetxt() {
    var txt = $("#answer").val();
    txt = txt.slice(0, -1);
    $("#answer").val(txt);
}

function timeCheck() {
    var bar = document.getElementById("bar");
    if(width == 0) {
        clearInterval(t);
        Swal.fire({
          icon: 'Uyarı',
          title: 'Süre Bitti',
          text: 'Doğru Cevap '+ans,
          showConfirmButton: false,
          timer: 1500
        });
        wrong++;
        $("#wrong").html(wrong);
    quiz();
    width = 220;
    bar.style.width = '200px';
    }
    else {
        width--;
        bar.style.width = width+'px';
    }
}