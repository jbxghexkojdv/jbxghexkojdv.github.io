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

            this.location.x = x;
            this.location.y = y;

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
            };
            this.updateLocation = () =>
            {
                this.elem.style.left = this.location.x + "%";
                this.elem.style.bottom = this.location.y + "%";
            };
            setInterval(() => 
            {
                this.location.x += this.velocity.x / 40;
                this.location.y += this.velocity.y / 40;
                this.updateLocation();
                this.velocity.x += this.acceleration.x / 40;
                this.velocity.y += this.acceleration.y / 40;
            }, 25);
        }
    
    }
};
