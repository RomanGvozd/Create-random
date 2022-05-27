const canvas = document.querySelector('canvas');
const button = document.querySelector('button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function drawTree(startX, startY, height, incline, branchWidth, color1, color2){
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(incline * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
        Math.random() * (15 - -10) + -10, 
        -height/2, 
        Math.random() * (15 - -10) + -10, 
        -height/2, 
        0, 
        -height,
        );
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = -3;
    ctx.shadowBlur = 10;
    ctx.stroke();

    // generator leaves

    if(height < Math.random() * (20 - 10) + 10){
        ctx.restore();
        ctx.beginPath();
        ctx.arc(Math.random() * (50 - -20) + -20, height, Math.random() * (25 - 3) + 3, Math.random() * (1 - 0) + 0 , Math.PI/2);
        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = -3;
        ctx.shadowBlur = 3;
        ctx.fill();
        return;
    }

    // generator tree

    drawTree(0, -height, height * 0.78, incline + Math.random() * (20 - 3) + 3 , branchWidth * Math.random() * (1 - 0.3) + 0.3 );
    drawTree(0, -height, height * 0.76, incline - 15 , branchWidth * Math.random() * (1) );
    ctx.restore();
}

button.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let rTree = Math.random() * (256);
    let gTree = Math.random() * (256);
    let bTree = Math.random() * (256);

    let rLeaves = Math.random() * (256);
    let gLeaves = Math.random() * (256);
    let bLeaves = Math.random() * (256);

    drawTree(
        canvas.width/2, // spawn horizontally
        canvas.height -80, // spawn vertically
        Math.random() * (160 - 60) + 60,  // height tree
        Math.random() * (5 - -5) + -5, // incline tree
        Math.random() * (40 - 5) + 5,  // thickness tree
        `rgb(${rTree}, ${gTree}, ${bTree})`,  // color tree
        `rgb(${rLeaves}, ${gLeaves}, ${bLeaves})` // color leaves
        );

        console.log(Math.random() * (1))
});

