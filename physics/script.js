'use strict';
function isOverlapping(ax, ay, bx, by)
{
    return (ay > bx) && (by > ax) && (ay > ax) && (by > bx);
}
export default {
    Thing: class
    {
        #id;
        #hitboxElem;
        
        constructor(elemIn, height, width, x, y, moving = true, showHitbox = false, bounce = 0)
        {
            window.objects = window.objects ? window.objects : [];
            this.#id = Math.random().toString();
            const id = this.#id;
            window[this.#id] = this;
            this.elem = elemIn;
            
            this.#hitboxElem = document.createElement("div");
            this.elem.parentElement.appendChild(this.#hitboxElem);
            
            this.elem.style.position = "absolute";
            this.elem.style.left = x + "%";
            this.elem.style.bottom = y + "%";
            this.#hitboxElem.style.position = "absolute";
            this.#hitboxElem.style.left = x + "%";
            this.#hitboxElem.style.bottom = y + "%";
            this.#hitboxElem.style.height = height + "%";
            this.#hitboxElem.style.width = width + "%";
            this.#hitboxElem.style.backgroundColor = "transparent";
            this.#hitboxElem.style.border = "3px solid black";
            this.#hitboxElem.style.display = showHitbox ? "block" : "none";

            this.location = {x: x, y: y, center: {x: function(){return this.x + (window[id].hitbox.width / 2)}, y: function(){this.y + (window[id].hitbox.height / 2)}}};
            this.velocity = {x: 0, y: 0}; // measured in distance per second
            this.acceleration = {x: 0, y: 0}; // measured in speed gained per second

            this.canMove = moving;
            this.collision = false;
            this.bounciness = bounce;

            this.hitbox = {
                            height: height, 
                            width: width, 
                            leftEdge: function(){return window[id].location.x;}, 
                            rightEdge: function(){return window[id].location.x + window[id].hitbox.width}, 
                            topEdge: function(){return window[id].location.y + window[id].hitbox.height}, 
                            bottomEdge: function(){return window[id].location.y}
                          };
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
                                this.acceleration.x = -args[0];
                                break;
                            default:
                                console.error(`Invalid direction: ${args[1]}`);
                        }
                        break;
                    case "collision":
                        this.collision = true;
                        setInterval(() => 
                        {
                            for(const i in window.objects)
                            {
                                if(window.objects[i].collision == true && this.collision == true && window.objects[i] != this && this.canMove)
                                {
                                    // Checks for collision
                                    if(isOverlapping(window.objects[i].hitbox.leftEdge(), window.objects[i].hitbox.rightEdge(), this.hitbox.leftEdge(), this.hitbox.rightEdge()) && isOverlapping(window.objects[i].hitbox.bottomEdge(), window.objects[i].hitbox.topEdge(), this.hitbox.bottomEdge(), this.hitbox.topEdge()))
                                    {
                                        // This object is above the other
                                        if(this.location.center.y() > window.objects[i].location.center.y())
                                        {
                                            // Move it and make it bounce
                                            this.location.y += this.hitbox.bottomEdge() - window.objects[i].hitbox.topEdge();
                                            this.velocity.y *= -(this.bounciness + window.objects[i].bounciness);
                                            this.elem.innerHTML = "Up";
                                        }
                                        // This object is below the other
                                        else
                                        {
                                            this.location.y += this.hitbox.topEdge() - window.objects[i].hitbox.bottomEdge();
                                            this.velocity.y *= -(this.bounciness + window.objects[i].bounciness);
                                            this.elem.innerHTML = "Down";
                                        }
                                        // This object is to the right of the other
                                        if(this.location.center.x() > window.objects[i].location.center.x())
                                        {
                                            this.location.x += this.hitbox.leftEdge() - window.objects[i].hitbox.rightEdge();
                                            this.velocity.x *= -(this.bounciness + window.objects[i].bounciness);
                                            this.elem.innerHTML = "Right";
                                        }
                                        // This object is to the left of the other
                                        else
                                        {
                                            this.location.x += this.hitbox.rightEdge() - window.objects[i].hitbox.leftEdge();
                                            this.velocity.x *= -(this.bounciness + window.objects[i].bounciness);
                                            this.elem.innerHTML = "Left";
                                        }
                                    }
                                }
                            }
                        }, 20);
                }
            };
            this.updateLocation = () =>
            {
                this.elem.style.left = this.location.x + "%";
                this.#hitboxElem.style.left = this.location.x + "%";
                this.elem.style.bottom = this.location.y + "%";
                this.#hitboxElem.style.bottom = this.location.y + "%";
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
