var pointsArray = document.getElementsByClassName('point');

var animatePoints = function (points) {
    
         var revealPoint = function(ind) {
             points[ind].style.opacity = 1;
             points[ind].style.transform = "scaleX(1) translateY(0)";
             points[ind].style.msTransform = "scaleX(1) translateY(0)";
             points[ind].style.WebkitTransform = "scaleX(1) translateY(0)";
         };

        for (var i = 0; i<points.length; i++){           
            revealPoint(i);
        }
        
 };

    window.onload = function() {
        
        //Automatically animate the  points on a tall screen where scrolling won't trigger animation
        if (window.innerHeight > 950){
            animatePoints(pointsArray);
        }
        var sellingPoints = document.getElementsByClassName('selling-points')[0];
        
         var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200       
         window.addEventListener("scroll", function(event) {
             if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                 animatePoints(pointsArray);   
             }
         });
 
};