class 
{
	constructor(x,y,w,h)
	{

        var option={
            isStatic:0.9,
            restitution:0.3,
            friction:0,
            density:1.2
            }
     this.x=x;
     this.y=y; 
     this.r=r;
     this.image=loadImage("paper.png");      
     this.body=bodies.circle(this.x,this.x,(this.r-20)/2, options)
    }

    display()
{

var paperpos=this.body.position;

Push()
translate(paperpos.x,paperpos.y);
rectmode(CENTER)

fill(255,0,255)
roate(angle);
imageMode(center);
this.image(this,image,pos.x,pos.x.y,33,33);


}
    }
    function keypressed() {
        if(keycode===up-ARROW){
        Matter. body.applyForce(paperObject.body,paperobject.body.position,{x:130,y:-145});   
        }   
       }