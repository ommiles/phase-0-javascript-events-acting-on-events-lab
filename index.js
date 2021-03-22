const dodger = document.getElementById("dodger"); 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
        if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
} 

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    
        if (left < 361) {
        dodger.style.left = `${left + 1}px`;
    }
} 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else {
        moveDodgerRight();
    }
}); 