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
        #gravity;
        
        /**
         * Creates a Thing to do some cool physics on
         * @param {HTMLElement} elemIn element to use
         * @param {number} height height of the hitbox
         * @param {number} width width of the hitbox
         * @param {number} x location of left edge, in % of the screen from the screen's left edge
         * @param {number} y location of bottom, in % of the screen from the screen's bottom edge
         * @param {boolean} moving Does the thing move?
         * @param {boolean} showHitbox We showing hitboxes here?
         * @param {number} bounce number between 0 and 1 (ideally) specifying how much to bounce on collision
         * @param {number} framerate framerate for animation in FPS
         */
        constructor(elemIn, height, width, x, y, moving = true,
                    showHitbox = false, bounce = 0, framerate = 40)
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

            this.location = {
                                x: x, 
                                y: y, 
                                center: {
                                    x: function()
                                    {
                                        return this.x + (window[id].hitbox.width / 2);
                                    }, 
                                    y: function()
                                    {
                                        this.y + (window[id].hitbox.height / 2);
                                    }
                                }
                            };
            this.velocity = {x: 0, y: 0}; // measured in distance per second
            this.acceleration = {x: 0, y: 0}; // measured in speed gained per second

            this.canMove = moving;
            this.collision = false;
            this.bounciness = bounce;

            this.hitbox = {
                            height: height, 
                            width: width, 
                            leftEdge: function()
                                      {
                                          return window[id].location.x;
                                      }, 
                            rightEdge: function()
                                      {
                                          return window[id].location.x + window[id].hitbox.width;
                                      }, 
                            topEdge: function()
                                      {
                                          return window[id].location.y + window[id].hitbox.height;
                                      }, 
                            bottomEdge: function()
                                      {
                                          return window[id].location.y;
                                      }
                          };
            /**
             * Starts the actual physics
             * @param {"gravity" | "collision"} thing thing to start
             * @param  {[number, string] | void} args if gravity, acceleration in % of screen/sec/sec, and direction of gravity
             * @returns {void}
             */
            this.start = (thing, ...args) =>
            {
                switch(thing)
                {
                    case "gravity":
                        switch(args[1])
                        {
                           case "up":
                                this.acceleration.y = args[0];
                                this.#gravity = 1;
                                break;
                            case "down":
                                this.acceleration.y = -args[0];
                                this.#gravity = 2;
                                break;
                            case "right":
                                this.acceleration.x = args[0];
                                this.#gravity = 3;
                                break;
                            case "left":
                                this.acceleration.x = -args[0];
                                this.#gravity = 4;
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
                                    if(isOverlapping(window.objects[i].hitbox.leftEdge(), window.objects[i].hitbox.rightEdge(), 
                                                     this.hitbox.leftEdge(), this.hitbox.rightEdge()) && 
                                       isOverlapping(window.objects[i].hitbox.bottomEdge(), window.objects[i].hitbox.topEdge(), 
                                                     this.hitbox.bottomEdge(), this.hitbox.topEdge()))
                                    {
                                        const direction = 
                                        Math.abs(this.velocity.x) < 
                                        Math.abs(this.velocity.y) ? // True if vertical
                                        (this.velocity.y < 0 ? "up" : "down") :
                                        (this.velocity.x < 0 ? "left" : "right");
                                        console.log(direction);
                                        switch(direction)
                                        {
                                            case "up":
                                                this.location.y += (this.velocity.y) * ((window.objects[i].hitbox.topEdge()-this.hitbox.bottomEdge())/(this.velocity.y));
                                                this.location.x += (this.velocity.x) * ((window.objects[i].hitbox.topEdge()-this.hitbox.bottomEdge())/(this.velocity.y));
                                                break;
                                            case "down":
                                                this.location.y += (this.velocity.y) * ((window.objects[i].hitbox.bottomEdge()-this.hitbox.topEdge())/(this.velocity.y));
                                                this.location.x += (this.velocity.x) * ((window.objects[i].hitbox.bottomEdge()-this.hitbox.topEdge())/(this.velocity.y));
                                                break;
                                            case "right":
                                                this.location.y += (this.velocity.y) * ((window.objects[i].hitbox.leftEdge()-this.hitbox.rightEdge())/(this.velocity.x));
                                                this.location.x += (this.velocity.x) * ((window.objects[i].hitbox.leftEdge()-this.hitbox.rightEdge())/(this.velocity.x));
                                                break;
                                            case "left":
                                                this.location.y += (this.velocity.y) * ((window.objects[i].hitbox.rightEdge()-this.hitbox.leftEdge())/(this.velocity.x));
                                                this.location.x += (this.velocity.x) * ((window.objects[i].hitbox.rightEdge()-this.hitbox.leftEdge())/(this.velocity.x));
                                                break;
                                            default:
                                                console.log("wtf");
                                        }
                                        this.velocity.x *= -(this.bounciness + window.objects[i].bounciness);
                                        this.velocity.y *= -(this.bounciness + window.objects[i].bounciness);
                                    }
                                }
                            }
                        }, 1000/framerate);
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
                this.location.x += this.velocity.x / framerate;
                this.location.y += this.velocity.y / framerate;
                this.updateLocation();
                this.velocity.x += this.acceleration.x / framerate;
                this.velocity.y += this.acceleration.y / framerate;
            }, 1000/framerate);

            window.objects.push(this);
        }
    }
};
