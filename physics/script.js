'use strict';
function isOverlapping(ax, ay, bx, by)
{
    return (ay > bx) && (by > ax) && (ay > ax) && (by > bx);
}
export default {
    Thing: class
    {
        constructor(elemIn, height, width, x, y, moving = true, collides = true)
        {
            window.objects = window.objects ? window.objects : [];
            this.elem = elemIn;

            this.elem.style.position = "absolute";
            this.elem.style.left = x + "%";
            this.elem.style.bottom = y + "%";

            this.location = {x: x, y: y};
            this.velocity = {x: 0, y: 0}; // measured in distance per second
            this.acceleration = {x: 0, y: 0}; // measured in speed gained per second

            this.canMove = moving;
            this.collision = collides;

            this.hitbox = {height: height, width: width};
            this.start = (thing, ...args) =>
            {
                switch(thing)
                {
                    case "gravity":
                        switch(args[1])
                        {
                            case "up":
                                this.acceleration.y = args[0];
                                break;
                            case "down":
                                this.acceleration.y = -args[0];
                                break;
                            case "right":
                                this.acceleration.x = args[0];
                                break;
                            case "left":
                                this.acceleration.y = -args[0];
                                break;
                            default:
                                console.error(`Invalid direction: ${args[1]}`);
                        }
                        break;
                    case "collision":
                        setInterval(() => 
                        {
                            for(const i in window.objects)
                            {
                                if(window.objects[i].collision = true && this.collision = true && window.objects[i] != this)
                                {
                                    // Vertical collision
                                    if(isOverlapping(window.objects[i].location.x, window.objects[i].location.x + window.objects[i].hitbox.width, this.location.x, this.location.x + this.hitbox.width))
                                    {
                                        
                                    }
                                }
                            }
                        }, 25);
                }
            };
            this.updateLocation = () =>
            {
                this.elem.style.left = this.location.x + "%";
                this.elem.style.bottom = this.location.y + "%";
            };
            setInterval(() => 
            {
                if(!this.canMove)
                {
                    this.velocity.x = 0;// in mining simulator he was in a red van
                    this.velocity.y = 0;
                    this.acceleration.x = 0;
                    this.acceleration.y = 0;
                }
                this.location.x += this.velocity.x / 40;
                this.location.y += this.velocity.y / 40;
                this.updateLocation();
                this.velocity.x += this.acceleration.x / 40;
                this.velocity.y += this.acceleration.y / 40;
            }, 25);
            
            window.objects.push(this);
        }
    
    }
};
