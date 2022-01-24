var pointx = [1,1];
var pointy = [4,1];
function nycdist(pointx,pointy){
	var xdistance = pointx[0] - pointy[0];
	var ydistance = pointx[1] - pointy[1];
	console.log(Math.abs(xdistance) + Math.abs(ydistance));
}
nycdist(pointx,pointy)
