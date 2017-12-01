var nbr,nbrTentative, btn, randVal, max ,niveaux,niv1,niv2,niv3,nivGame ;
niv1=2;
niv2=3;
niv3=5;


niv1=document.getElementById('niv1');
niv2=document.getElementById('niv2');
niv3=document.getElementById('niv3');
/*
function randomize(param){
    return Math.floor(Math.random()*param+1);
}

btnParam=document.getElementById('btnParam');
btn.onclick=function(){

alert('ok');

if (niv1.checked) {
    nivGame=niv1;
    niv1.checked=false;
}
else if (niv2.checked) {
    nivGame=niv2;
    niv2.checked=false;
}
else if(niv3.checked){
    nivGame=niv3;
    niv3.checked=false;
}

if(document.getElementById('nbrMax').value.trim()!==''){
    max=document.getElementById('nbrMax.value')
}
randVal=randomize(max);

alert('nivGame='+nivGame+ "max="+ max+' randVal = '+randVal);
}

*/
niveaux=1;//
niveaux=2;//
niveaux=3;//

max = 30;


function randomize() {
    return Math.floor(Math.random()*max+1);
}

randVal =randomize();
alert(randVal);

nbrTentative=0;
nbr = document.getElementById('nbr');
btn = document.getElementById('btn');
resultat = document.getElementById('resultat');
resultat.innerHTML='';

btn.onclick=function(){
    if(nbr.value.trim !==''){
        //alert('ok');
        if (nbrTentative <niveaux){
            nbrTentative ++;
            var tmp=nbr.value.trim();
            var resTest=test(tmp);
            resultat.innerHTML +='Tentative n°:'+nbrTentative+' => '+ resTest+ '<br>' ;
            nbr.value='';
        }
        else{
            resultat.innerHTML='vous avez atteint votre limite'
        }
    }
    else{
        resultat.innerHTML='ten vo manombok aaaaaa';
    }

    /*var tmp = nbr.value;
    nbr.value='';
    */
    
}


function test(param){
  if (param > randVal) {
        //alert('Trop grand');
        resultatTest= 'ny isa '+ param +' dia ngeza loatra';
    }
    else if (param < randVal){
        //alert('Trop ptit');
        resultatTest ='ny isa '+ param +' dia kely loatra';
    }
    else{
        //alert('okay');
        resultatTest ='Arabaina retsy anhhh!!!!';
    }   
    return resultatTest;
};

calc_array = new Array();
var calcul=0;
var pas_ch=0;
function $id(id)
{
        return document.getElementById(id);
}
function f_calc(id,n)
{
        if(n=='ce')
        {
                initialiser_calc(id);
        }
        else if(n=='=')
        {
                if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                {
                        eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                        calc_array[id][0] = '=';
                        $id(id+'_resultat').value=calcul;
                        calc_array[id][2]=calcul;
                        calc_array[id][3]=0;
                }
        }
        else if(n=='+-')
        {
                $id(id+'_resultat').value=$id(id+'_resultat').value*(-1);
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_resultat').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_resultat').value;
                }
                pas_ch = 1;
        }
        else if(n=='nbs')
        {
                if($id(id+'_resultat').value<10 && $id(id+'_resultat').value>-10)
                {
                        $id(id+'_resultat').value=0;
                }
                else
                {
                        $id(id+'_resultat').value=$id(id+'_resultat').value.slice(0,$id(id+'_resultat').value.length-1);
                }
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_resultat').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_resultat').value;
                }
        }
        else
        {
                        if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                        {
                                eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                                $id(id+'_resultat').value=calcul;
                                calc_array[id][2]=calcul;
                                calc_array[id][3]=0;
                        }
                        calc_array[id][0] = n;
        }
        if(pas_ch==0)
        {
                calc_array[id][1] = 1;
        }
        else
        {
                pas_ch=0;
        }
        document.getElementById(id+'_resultat').focus();
        return true;
}
function add_calc(id,n)
{
        if(calc_array[id][1]==1)
        {
                $id(id+'_resultat').value=n;
        }
        else
        {
                $id(id+'_resultat').value+=n;
        }
        if(calc_array[id][0]=='=')
        {
                calc_array[id][2] = $id(id+'_resultat').value;
                calc_array[id][3] = 0;
        }
        else
        {
                calc_array[id][3] = $id(id+'_resultat').value;
        }
        calc_array[id][1] = 0;
        document.getElementById(id+'_resultat').focus();
        return true;
}
function initialiser_calc(id)
{
        $id(id+'_resultat').value=0;
        calc_array[id] = new Array('=',1,'0','0',0);
        document.getElementById(id+'_resultat').focus();
        return true;
}
function key_detect_calc(id,evt)
{
        if((evt.keyCode>95) && (evt.keyCode<106))
        {
                var nbr = evt.keyCode-96;
                add_calc(id,nbr);
        }
        else if((evt.keyCode>47) && (evt.keyCode<58))
        {
                var nbr = evt.keyCode-48;
                add_calc(id,nbr);
        }
        else if(evt.keyCode==107)
        {
                f_calc(id,'+');
        }
        else if(evt.keyCode==109)
        {
                f_calc(id,'-');
        }
        else if(evt.keyCode==106)
        {
                f_calc(id,'*');
        }
        else if(evt.keyCode==111)
        {
                f_calc(id,'');
        }
        else if(evt.keyCode==110)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==190)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==188)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==13)
        {
                f_calc(id,'=');
        }
        else if(evt.keyCode==46)
        {
                f_calc(id,'ce');
        }
        else if(evt.keyCode==8)
        {
                f_calc(id,'nbs');
        }
        else if(evt.keyCode==27)
        {
                f_calc(id,'ce');
        }
        return true;
}


