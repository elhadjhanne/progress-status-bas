/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/






export function BarSatusProgress(parentEl, childEl,total, a) {

    var b = a ;
    var barContainer = document.getElementsByTagName(parentEl)[0];
    barContainer.innerHTML = "";
    barContainer.style.height = '30px';
    barContainer.style.width = '100%';
    barContainer.style.display = 'block';
    barContainer.style.borderRadius = '15px';
    barContainer.style.background = '#b4b4b4';
    let t = total.total || 0;
    let totEl = b.length;

    var createChild =  ()  =>{
        for( let i in b ) {
        if(b[i]){
            var c = document.createElement(childEl);  
            barContainer.appendChild(c); 
            var content = document.createElement('span'); 
            content.innerHTML =   b[i].value;
            c.style.display = 'block';
            c.style.height= '20px';
            c.style.float ='left';
            c.appendChild(content); 
            let width = (100 * content.innerHTML) / t;
            
            if(i != 0){
                b[i].width =  width + 2.15;
                c.style.marginLeft = '-2.16%';
            }else{                
                b[i].width =  width;

            }
            c.style.width =b[i].width.toString() + '%' ;
            c.style.background =b[i].background ;
            c.style.borderBottomRightRadius = '15px';
            c.style.borderTopRightRadius = '15px';
            c.style.position = 'relative';
            c.style.zIndex = 10+ totEl--;

            for(let el in c.style){
                if(c.style.hasOwnProperty(i) ){
                    if(b[i].hasOwnProperty(el) ){
                        c.style[el] = b[i][el];
                    }
                }
            }
        }
    }

    }
    var totIndex =1; 
    if(t !== 0 ){
        createChild();
    }else{
        for(let index in b){
            t +=   b[index].value;
            if(totIndex !== totEl){
                totIndex++;
            }else{
                createChild();
            }
        }

    }
}
