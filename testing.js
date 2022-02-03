var width = 900;
var height = 500;
var gForce = 1;
var airResist = 1;
function update(){
    window.requestAnimationFrame(update);
    ctx.clearRect(0, 0, width, height);
    uniUpdate(gForce, airResist);
}
window.requestAnimationFrame(update);