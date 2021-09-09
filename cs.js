class Cs {
  
  
  constructor (x,y,dens,locX,locY,speedX,speedY,endPhasePoint,rv,gv,bv,sWeight) {
    
    this.pos = createVector();
    this.loc = createVector(locX,locY);
    
    this.accel = createVector();
    this.mv = createVector(speedX,speedY);
    this.t = createVector(0,0);
    this.angle = 0;
    this.sw = sWeight;
    
    this.toneR = rv;
    this.toneG = gv;
    this.toneB = bv;
    this.op = 200;
    
    this.r = createVector(x,y);
    this.d = dens;
    
    this.minPhase = 0;
    this.maxPhase = endPhasePoint;   
    
  }
  
  
  display () {
    
    push();
    translate(this.t.x,this.t.y);
    beginShape();
    for(this.angle = this.minPhase; this.angle < this.maxPhase; this.angle += this.d) {
      
      this.pos.x = this.loc.x + this.r.x * sin(this.angle);
      this.pos.y = this.loc.y + this.r.y * cos(this.angle);
      noFill();
      stroke(this.toneR,this.toneG,this.toneB,this.op);
      strokeWeight(this.sw);
      vertex(this.pos.x,this.pos.y);
      
    }
    endShape();
    pop();
  }
  
  
  phaseShift (phaseTarget,addV, phRatio) {
   
    if(this.maxPhase < phaseTarget) {
      if(frameCount % (fR * phRatio) == 0) {
      this.maxPhase += addV;
      }
    }
    
  }
  
  redShift (toneTarget,addT, tRatio) {
   
    if(this.toneR != toneTarget) {
      if(frameCount % (fR * tRatio) == 0) {
        if(this.toneR < toneTarget) {
             this.toneR += addT;
        }
        if(this.toneR > toneTarget) {
             this.toneR -= addT;
        }
      }
    }   
  }
  
  greenShift (toneTarget,addT, tRatio) {
   
    if(this.toneG != toneTarget) {
      if(frameCount % (fR * tRatio) == 0) {
        if(this.toneG < toneTarget) {
             this.toneG += addT;
        }
        if(this.toneG > toneTarget) {
             this.toneG -= addT;
        }
      }
    }   
  }
  
  blueShift (toneTarget,addT, tRatio) {
   
    if(this.toneB != toneTarget) {
      if(frameCount % (fR * tRatio) == 0) {
        if(this.toneB < toneTarget) {
             this.toneB += addT;
        }
        if(this.toneB > toneTarget) {
             this.toneB -= addT;
        }
      }
    }   
  }
  
  wShift (wTarget,addW, wRatio) {
   
    if(this.sw != wTarget) {
      if(frameCount % (fR * wRatio) == 0) {
        if(this.sw < wTarget) {
             this.sw += addW;
        }
        if(this.sw > wTarget) {
             this.sw -= addW;
        }
      }
    }
  }
  
  radShiftX (rxTarget, rxAdd, radRatio) {
    
    if(this.r.x != rxTarget) {
      if(frameCount % (fR * radRatio) == 0) {
        if(this.r.x < rxTarget) {
             this.r.x += rxAdd;
        }
        if(this.r.x > rxTarget) {
             this.r.x -= rxAdd;
        }
      }
    }  
  }
  
   radShiftY (ryTarget, ryAdd, radRatio) {
    
    if(this.r.y != ryTarget) {
      if(frameCount % (fR * radRatio) == 0) {
        if(this.r.y < ryTarget) {
             this.r.y += ryAdd;
        }
        if(this.r.y > ryTarget) {
             this.r.y -= ryAdd;
        }
      }
    }  
  }
  
  movement (accRatio) {
    
    this.accel.setMag(accRatio)
    this.accel = p5.Vector.random2D();
    
    this.mv.add(this.accel);
    this.mv.limit(10);
    this.loc.add(this.mv); 
    
  }
  
  edges () {
    
    if(this.loc.x > w) {
      this.mv.x *= -1;
    }
    
    if(this.loc.y > h) {
      this.mv.y *= -1;
    }
    
    if(this.loc.x < 0) {
      this.mv.x *= -1;
    }
    
    if(this.loc.y < -7) {
      this.mv.y *= -1;
    }
  }
  
  edges2 () {
    
    if(this.loc.x > w) {
      this.mv.x *= -1;
    }
    
    if(this.loc.y > h) {
      this.mv.y *= -1;
    }
    
    if(this.loc.x < 0) {
      this.mv.x *= -1;
    }
    
    if(this.loc.y < 150) {
      this.mv.y *= -1;
    }
  }
  
  
}