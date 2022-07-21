export default {
    class Thing
    {
        constructor(elemIn, height, width, x, y)
        {
            this.elem = elemIn;
            this.elem.style.position = "absolute";
            this.elem.style.left = x + "%";
            this.elem.style.bottom = y + "%";
            this.velocity.x = 0;
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
                        // I will put code here tomorrow
                        break;
                    case "collision":
                        // I will put code here in 1-2 days
                }
            }
        }
    
    }
};
