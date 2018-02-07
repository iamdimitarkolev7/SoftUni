function solve(w, h, W, H) {
   let area1 = w * h;
   let area2 = W * H;
   let commonArea = Math.min(w, W) * Math.min(h, H);

   let result = area1 + area2 - commonArea;

   console.log(result);
}

solve(13, 2, 5, 8);