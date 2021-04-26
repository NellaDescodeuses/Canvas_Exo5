let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//head
ctx.beginPath();
ctx.fillStyle = 'rgb(177, 90, 9)';
ctx.arc(200,100,63,0, 2 * Math.PI);
ctx.fill();

//eyes
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(175,85,10,0,2 * Math.PI,);
ctx.arc(226,85,10,0,2 * Math.PI,);
ctx.fill();

//eyebrows
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.arc(175,70,10,0,Math.PI, true);
ctx.moveTo(218,70);
ctx.quadraticCurveTo(230,60,238,70);
ctx.stroke();


//arms
ctx.beginPath();
ctx.strokeStyle = 'rgb(177, 90, 9)';
ctx.lineCap = "round";
ctx.lineWidth = 40 ;
ctx.moveTo(50,160);
ctx.lineTo(350,160);
ctx.stroke();

//mouth
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 3 ;
ctx.moveTo(180,120);
ctx.quadraticCurveTo(200,155,225,120);
ctx.moveTo(180,120);
ctx.quadraticCurveTo(200,135,225,120);
ctx.stroke();

//body
ctx.beginPath();
ctx.lineCap = "square";
ctx.lineWidth = 115 ;
ctx.strokeStyle = 'rgb(177, 90, 9)';
ctx.moveTo(200,230);
ctx.lineTo(200,250);
ctx.stroke();

//buttons
ctx.beginPath();
ctx.fillStyle = 'rgb(196, 53, 254)';
ctx.arc(200,190,15,0,2 * Math.PI,);
ctx.arc(200,240,15,0,2 * Math.PI,);
ctx.fill();

//between legs
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(200,310,20,0,Math.PI, true);
ctx.fill();


//left leg
ctx.beginPath();
ctx.strokeStyle = 'rgb(177, 90, 9)';
ctx.lineCap = "round";
ctx.lineWidth = 40 ;
ctx.moveTo(162,300);
ctx.lineTo(162,375);
ctx.stroke();

//right leg
ctx.beginPath();
ctx.strokeStyle = 'rgb(177, 90, 9)';
ctx.lineCap = "round";
ctx.lineWidth = 40 ;
ctx.moveTo(238,300);
ctx.lineTo(238,375);
ctx.stroke();
