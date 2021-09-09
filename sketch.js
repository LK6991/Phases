const canvasRatio = 1.77777777777777777778;
const w = 750;
const h = w * (1/canvasRatio);
const fR = 20;

let cs = [];
let cp = [];
let basicOp = 150;

function setup() {
  
  createCanvas(w, h);
  frameRate(fR);
  rectMode(CENTER);
  background(0,5);
  cs[0] = new Cs(250,50,1/20,w/2,h/4,0,0,0,50,50,50,7.5);
  
  
  for(let i = 1; i< 15; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI/6,50,50,50,2);
    
  }
  for(let i = 15; i< 30; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,((PI/6) * 2),50,50,50,2);
    
  }
  for(let i = 30; i< 45; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,((PI/6) * 3),50,50,50,2);
    
  }
  for(let i = 45; i< 60; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,((PI/6) * 4),50,50,50,2);
    
  }
  for(let i = 60; i< 75; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,((PI/6) * 5),50,50,50,2);
    
  }
  for(let i = 75; i< 90; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI,50,50,50,2);
    
  }
  for(let i = 90; i< 105; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI + PI/6,50,50,50,2);
    
  }
  for(let i = 105; i< 120; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI + (PI/6 * 2),50,50,50,2);
    
  }
  for(let i = 120; i< 135; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI + (PI/6 * 3),50,50,50,2);
    
  }
  for(let i = 135; i< 150; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI + (PI/6 * 4),50,50,50,2);
    
  }
  for(let i = 150; i< 165; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,PI + (PI/6 * 5),50,50,50,2);
    
  }
  for(let i = 165; i< 180; i++) {
    
    cs[i] = new Cs(25,20,1/20, random(w),random(190,h),0,0,TAU * 1.1,50,50,50,2);
    
  }

}



function draw() {
  
  background(0,basicOp);
  
  mainRing();
  firstPhase();
  secondPhase();
  thirdPhase();
  fourthPhase();
  fifthPhase();
  sixthPhase();
  seventhPhase();
  eighthPhase();
  ninthPhase();
  tenthPhase();
  eleventhPhase();
  twelfthPhase();
  
  mainUpd();
  firstClr();
  secondClr();
  thirdClr();
  fourthClr();
  fifthClr();
  sixthClr();
  seventhClr();
  eigthClr();
  ninthClr();
  tenthClr();
  eleventhClr();
  twelfthClr();
  
  mixTone();
  finalTone();
  
  cs[0].display();

  console.log(frameCount/fR);
  
}


function mainRing () {
  
  cs[0].display();
  cs[0].phaseShift(TAU * 1.1, (TAU * 1.1)/13, 3);
  if(frameCount < fR * 37) {
  cs[0].redShift(200,1,1);
  cs[0].greenShift(200,1,1);
  cs[0].blueShift(200,1,1);
  }
}

function firstPhase () {
  
  if(frameCount > fR * 3) {
  for(let i = 1;i<9;i ++) {
    
    cs[i].display();
    
   }
  }
  
}

function secondPhase () {
  
  if(frameCount > fR * 6) {
  for(let i = 15; i<30;i++) {
    
    cs[i].display();
    
  }
  }
  
}

function thirdPhase () {
  
  if(frameCount > fR * 9) {
  for(let i = 30; i<45; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function fourthPhase () {
  
  if(frameCount > fR * 12) {
  for(let i = 45; i<60; i++) {
    
    cs[i].display();
    
  }
  }
  
}


function fifthPhase () {
  
  if(frameCount > fR * 15) {
  for(let i = 60; i<75; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function sixthPhase () {
  
  if(frameCount > fR * 18) {
  for(let i = 75; i<90; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function seventhPhase () {
  
  if(frameCount > fR * 21) {
  for(let i = 90; i<105; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function eighthPhase () {
  
  if(frameCount > fR * 24) {
  for(let i = 105; i< 120; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function ninthPhase () {
  
  if(frameCount > fR * 27) {
  for(let i = 120; i< 135; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function tenthPhase () {
  
  if(frameCount > fR * 30) {
  for(let i = 135; i< 150; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function eleventhPhase () {
  
  if(frameCount > fR * 33) {
  for(let i = 150; i< 165; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function twelfthPhase () {
  
  if(frameCount > fR * 36) {
  for(let i = 165; i< 180; i++) {
    
    cs[i].display();
    
  }
  }
  
}

function mainUpd () {
  
  if(frameCount > fR * 37) {
    cs[0].wShift(20, 1/2, 1);
  }
  
  if(frameCount > fR * 37 && frameCount < fR * 57) {
    
    cs[0].redShift(0, 5, 1/2);
    cs[0].greenShift(125, 1, 1);
    cs[0].blueShift(150, 2.5, 1/2);
  }
  if(frameCount > fR * 57 && frameCount < fR * 77) {
  
    cs[0].redShift(140, 7, 1/2);
    cs[0].greenShift(0, 6, 1/2);
    cs[0].blueShift(100, 2.5, 1/2);
  }
  if(frameCount > fR * 77 && frameCount < fR * 97) {
  
    cs[0].redShift(160, 2, 1);
    cs[0].greenShift(30, 3, 1);
    cs[0].blueShift(0, 2.5, 1/4);
  }
  if(frameCount > fR * 97 && frameCount < fR * 117) {
  
    cs[0].redShift(0, 4, 1/4);
    cs[0].greenShift(200, 4.25, 1/4);
    cs[0].blueShift(50, 2.5, 1/2);
  }
   if(frameCount > fR * 117 && frameCount < fR * 140) {
  
     cs[0].blueShift(90, 2, 1/2);
    //cs[0].redShift(0, 4, 1/4);
    cs[0].greenShift(20, 4.5, 1/4);
  }
   if(frameCount > fR * 140 && frameCount < fR * 160) {
  
     cs[0].blueShift(130, 2, 1/2);
     cs[0].redShift(230, 5.75, 1/4);
     cs[0].greenShift(130, 2.75, 1/4);
    
  }
  
  if(frameCount > fR * 160 && frameCount < fR * 180) {
  
       cs[0].blueShift(0, 6.5, 1/2);
       cs[0].redShift(100, 6.5, 1/2);
       cs[0].greenShift(100, 3, 1);
    
  }
  if(frameCount > fR * 180 && frameCount < fR * 200) {
  
       //cs[0].blueShift(0, 6.5, 1/2);
       cs[0].redShift(240, 7, 1);
       cs[0].greenShift(0, 5, 1);
    
  }
  
  if(frameCount > fR * 200 && frameCount < fR * 220) {
  
       cs[0].blueShift(0, 5, 1/2);
       cs[0].redShift(10, 5, 1/4);
       cs[0].greenShift(90, 4.5, 1/2);
    
  }
  
   if(frameCount > fR * 220 && frameCount < fR * 240) {
        
       cs[0].blueShift(130, 3.25, 1/4);
       cs[0].redShift(80, 1, 1/2);
       cs[0].greenShift(120, 1, 1/2);
      
  }
  
  if(frameCount > fR * 240 && frameCount < fR * 260) {
        
       cs[0].blueShift(0, 6.5, 1/2);
       cs[0].redShift(210, 6.5, 1/2);
       cs[0].greenShift(200, 4, 1/2);
      
  }
  
  if(frameCount > fR * 260 && frameCount < fR * 280) {
        
       cs[0].blueShift(100, 5, 1/2);
       cs[0].redShift(180, 1, 1);
       cs[0].greenShift(70, 5.5, 1/2);
      
  }
  
   if(frameCount > fR * 280) {
        
       cs[0].blueShift(250, 3, 1/4);
       cs[0].redShift(250, 3, 1/2);
       cs[0].greenShift(250, 4, 1/4);
      
  }
  
  
}

function firstClr () {
  
  if(frameCount > fR * 37 && frameCount < fR * 57) {
    
    for(let i = 15; i< 180; i++) {
      
      cs[i].wShift(0, 0.5 ,1);
    }
  }
  
  if(frameCount > fR * 37) {
    for(let i = 1;i<15;i++) {
       cs[i].blueShift(random(135,155), 7.5, 1/2);
       cs[i].redShift(0, 2, 1/2);
       cs[i].greenShift(random(125,140), 6.5, 1/2);
    }
  }
  
  if(frameCount > fR * 40) {
    for(let i = 1;i<15;i++) {
       cs[i].wShift(3, 1/3, 1);
    }
  }
  
  if(frameCount > fR * 47) {
    if(basicOp > 3) {
      basicOp -= 7;
    }
    for(let i = 1;i<15;i++) {
       cs[i].edges();
       cs[i].movement(0.75);
    }
  }
  
  if(frameCount > fR * 57) {
    for(let i = 1;i<15;i++) {
       if(cs[i].op > 5) {
       cs[i].op -= 1;
       }
    }
  }
  
  
}

function secondClr () {
  
  if(frameCount > fR * 57  && frameCount < fR * 77) {
    
    for(let i = 15; i< 30; i++) {
    cs[i].wShift(3, 1/3, 1);
    }
    
  }
  
  if(frameCount > fR * 57) {
    
    for(let i = 15;i<30;i++) {
      
       cs[i].blueShift(100, 2, 1/2);
       cs[i].redShift(140, 1.75, 1/4);
       cs[i].greenShift(0, 3, 1/4);
    
      
    }
    
  }
  
  if(frameCount > fR * 67) {
    
    for(let i = 15;i<30;i++) {
      
       cs[i].edges();
       cs[i].movement(1);
      
    }
  }
  
  if(frameCount > fR * 77) {
    for(let i = 15;i<30;i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
  
}

function thirdClr () {
  
  if(frameCount > fR * 77 && frameCount < fR * 97) {
    
    for(let i = 30; i<45 ;i++) {
     cs[i].wShift(3, 1/3, 1);
    }
  }
  
  if(frameCount> fR * 77) {
    for(let i = 30;i<45;i++) {
      
       cs[i].blueShift(0, 2.5, 1/4);
       cs[i].redShift(160, 2.5, 1/4);
       cs[i].greenShift(30, 0.5, 1/4);
      
    }   
  }
  
  
  if(frameCount> fR * 87) {
    for(let i = 30;i<45;i++) {
      
       cs[i].movement(0.65);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 97) {
    for(let i = 30;i<45;i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
 
}

function fourthClr () {
  
  if(frameCount > fR * 97 && frameCount < fR * 120) {
    
    for(let i = 45; i<60; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
  if(frameCount > fR * 97) {
    for(let i = 45; i<60 ;i++) {
      
       cs[i].blueShift(50, 1.25, 1/4);
       cs[i].redShift(0, 2, 1/8);
       cs[i].greenShift(200, 4.25, 1/4);
      
    }   
  }
  
  if(frameCount> fR * 107) {
    for(let i = 45; i<60; i++) {
      
       cs[i].movement(0.65);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 117) {
    for(let i = 45; i<60; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
    
}

function fifthClr () {
  
  if(frameCount > fR * 120 && frameCount < fR * 140) {
    
    for(let i = 60; i<75; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 117) {
    for(let i = 60; i<75 ;i++) {
      
       cs[i].blueShift(90, 1.5, 1/4);
       cs[i].redShift(0, 4, 1/4);
       cs[i].greenShift(20, 4.5, 1/4);
      
    }   
  }
  
  if(frameCount> fR * 127) {
    for(let i = 60; i<75; i++) {
      
       cs[i].movement(1.45);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 140) {
    for(let i = 60; i<75; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
}

function sixthClr () {
  
   if(frameCount > fR * 140 && frameCount < fR * 160) {
    
    for(let i = 75; i<90; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 140) {
    for(let i = 75; i<90 ;i++) {
      
       cs[i].blueShift(130, 2, 1/2);
       cs[i].redShift(230, 5.75, 1/4);
       cs[i].greenShift(130, 2.25, 1/4);
      
    }   
  }
  
  if(frameCount> fR * 150) {
    for(let i = 75; i<90; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 160) {
    for(let i = 75; i<90; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
}

function seventhClr () {
  
   if(frameCount > fR * 160 && frameCount < fR * 180) {
    
    for(let i = 90; i<105; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 160) {
    for(let i = 90; i<105 ;i++) {
      
       cs[i].blueShift(0, 6.5, 1/2);
       cs[i].redShift(100, 6.5, 1/2);
       cs[i].greenShift(100, 3, 1);
      
    }   
  }
  
  if(frameCount> fR * 170) {
    for(let i = 90; i<105; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 180) {
    for(let i = 90; i<105; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
}

function eigthClr () {
  
   if(frameCount > fR * 180 && frameCount < fR * 200) {
    
    for(let i = 105; i<120; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 180) {
    for(let i = 105; i<120 ;i++) {
      
       cs[i].blueShift(0, 5, 1);
       cs[i].redShift(240, 4.75, 1/4);
       cs[i].greenShift(0, 5, 1);
      
    }   
  }
  
  if(frameCount> fR * 190) {
    for(let i = 105; i<120; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 200) {
    for(let i = 105; i<120; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
}

function ninthClr () {
  
   if(frameCount > fR * 200 && frameCount < fR * 220) {
    
    for(let i = 120; i<135; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 200) {
    for(let i = 120; i<135 ;i++) {
      
       cs[i].blueShift(0, 2.5, 1/2);
       cs[i].redShift(10, 2, 1/2);
       cs[i].greenShift(80, 1.5, 1/2);
      
    }   
  }
  
  if(frameCount> fR * 210) {
    for(let i = 120; i<135; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 220) {
    for(let i = 120; i<135; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
} 

function tenthClr () {
  
   if(frameCount > fR * 220 && frameCount < fR * 240) {
    
    for(let i = 135; i<150; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 220) {
    for(let i = 135; i<150 ;i++) {
      
       cs[i].blueShift(130, 2, 1/4);
       cs[i].redShift(80, 1.5, 1/2);
       cs[i].greenShift(120, 3.5, 1/2);
      
    }   
  }
  
  if(frameCount> fR * 230) {
    for(let i = 135; i<150; i++) {
      
       cs[i].movement(0.68);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 240) {
    for(let i = 135; i<150; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
} 

function eleventhClr () {
  
   if(frameCount > fR * 240 && frameCount < fR * 260) {
    
    for(let i = 150; i<165; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 240) {
    for(let i = 150; i<165 ;i++) {
      
       cs[i].blueShift(0, 2.5, 1/2);
       cs[i].redShift(210, 4, 1/4);
       cs[i].greenShift(200, 3.75, 1/4);
      
    }   
  }
  
  if(frameCount> fR * 250) {
    for(let i = 150; i<165; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 260) {
    for(let i = 150; i<165; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
} 

function twelfthClr () {
  
   if(frameCount > fR * 260 && frameCount < fR * 280) {
    
    for(let i = 165; i<180; i++) {
      
       cs[i].wShift(3, 1/3, 1);
      
    } 
  }
  
   if(frameCount > fR * 260) {
    for(let i = 165; i<180 ;i++) {
      
       cs[i].blueShift(100, 5, 1/2);
       cs[i].redShift(180, 7, 1/2);
       cs[i].greenShift(70, 7, 1/2);
      
    }   
  }
  
  if(frameCount> fR * 270) {
    for(let i = 165; i<180; i++) {
      
       cs[i].movement(0.8);
       cs[i].edges();
      
    }   
  }
  
  if(frameCount > fR * 280) {
    for(let i = 165; i<180; i++) {
       if(cs[i].op > 5) {
          cs[i].op -= 1;
       }
    }
  }
  
} 

function mixTone () {
  
  if(frameCount > fR * 290 && frameCount < fR * 335)
  for(let i = 1; i< 180; i++) {
    if(cs[i].op < 90) {
    cs[i].op += 1.5;
    }
  }
  
}

function finalTone () {
  
  if(frameCount > fR * 325) {
    
  basicOp = 1;
  for(let i = 1; i< 180; i++) {
       cs[i].blueShift(255, 5, 1/4);
       cs[i].redShift(255, 5, 1/4)
       cs[i].greenShift(255, 5, 1/4);
       
    }
  }
  
  if(frameCount > fR * 330) {
    
    basicOp = 0;
  }
}


  