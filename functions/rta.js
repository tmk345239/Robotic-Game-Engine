//RTA: Rotation To Axis

function rta(type, rotate_or_x, speed_or_y){
    switch(type){
        default:
            return "0:Rotation to Axis, 1:Axis to Rotation";
        break;
        case 0:
            var r = rotate_or_x;
            var s = speed_or_y;
            //angle to axis
            var output = {
                xMove: 0,
                yMove: 0,
            }
            r = r * Math.PI / 180;
            console.log(Math.acos(r))
            output.xMove = s * Math.acos(r);
            output.yMove = s * Math.asin(r);
            output.yMove = -output.yMove;

            return(output);
        break;
        case 1:
            var x = rotate_or_x;
            var y = -speed_or_y;
            //axis to angle
            var output = {
                angle: 0,
                speed: 0,
            }
            output.angle = Math.tan(y/x);
            output.angle = output.angle * 180 / Math.PI;
            x = x * x
            y = y * y
            output.speed = Math.sqrt(x+y);
            return(output);
        break;
    }
}