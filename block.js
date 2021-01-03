class Block{
    constructor(x,y){
        var options={
            restitution:0.5
        }
        this.box=Bodies.rectangle(x,y,30,41,options)
        this.width=30
        this.height=41
        World.add(world,this.box)
    }
    displaygrey(){
        if (this.box.speed<3){
        rectMode(CENTER)
        fill(128,128,128)
        rect(this.box.position.x,this.box.position.y,30,40)
        }else {
            World.remove(world, this.box);
     push();
     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
        }
    }
    displaypink(){
        if (this.box.speed<3){
        rectMode(CENTER)
        fill(225,192,203)
        rect(this.box.position.x,this.box.position.y,30,40)
        }else {
            World.remove(world, this.box);
     push();
     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
        }
    }
    displaydark(){
        if (this.box.speed<3){
        rectMode(CENTER)
        fill(135,206,234)
        rect(this.box.position.x,this.box.position.y,30,40)
        }else {
            World.remove(world, this.box);
     push();
     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
        }
    }
    displayblue(){
        if (this.box.speed<3){
        rectMode(CENTER)
        fill(63,224,208)
        rect(this.box.position.x,this.box.position.y,30,40)
        }else {
            World.remove(world, this.box);
     push();
     this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
        }
    }
}