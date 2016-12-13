var animatePoints = function () {
 
        var points = document.getElementsByClassName('point');
 
         var revealPoint = function(ind) {
             points[ind].style.opacity = 1;
             points[ind].style.transform = "scaleX(1) translateY(0)";
             points[ind].style.msTransform = "scaleX(1) translateY(0)";
             points[ind].style.WebkitTransform = "scaleX(1) translateY(0)";
         };

         var revealThirdPoint = function() {
             points[2].style.opacity = 1;
             points[2].style.transform = "scaleX(1) translateY(0)";
             points[2].style.msTransform = "scaleX(1) translateY(0)";
             points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
         };

        for (var i = 0; i<points.length; i++){
            revealPoint(i);
        }
        

 };

animatePoints();