'use strict';
export default {
    Thing: class
    {
        constructor(elemIn, height, width, x, y)
        {
            this.elem = elemIn;

            this.elem.style.position = "absolute";
            this.elem.style.left = x + "%";
            this.elem.style.bottom = y + "%";

            this.location.getX = get(){  return Number(this.elem.style.left.slice(0, -1));  };
            this.location.getY = get(){  return Number(this.elem.style.bottom.slice(0, -1));  };

            this.location.setX = set(num){  this.elem.style.left = num + "%"; return num;  };
            this.location.setY = set(num){  this.elem.style.bottom = num + "%"; return num;  };

            this.velocity.x = 0; // measured in distance per second
            this.velocity.y = 0;

            this.acceleration.x = 0; // measured in speed gained per second
            this.acceleration.y = 0;

            this.hitbox.height = height;
            this.hitbox.width = width;
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
                        // I will put code here in 1-2 days
                }
            }
            setInterval(() => 
            {
                this.location.setX = this.location.getX + (this.velocity.x / 40);
                this.location.setY = this.location.getY + (this.velocity.y / 40);
                this.velocity.x += this.acceleration.x / 40;
                this.velocity.y += this.acceleration.y / 40;
            }, 25);
        }
    
    }
};
