class Solution {
  public int maxTurbulenceSize(int[] A) {
      
      
    int maxTurbulence = 0;
    int currentTurbulence = 1;
    boolean goingUp = true;
      
      
    for (int currentIndex = 1;currentIndex < A.length;currentIndex++) {
        
      if (currentTurbulence == 1) {
        if (A[currentIndex] == A[currentIndex -1]) {
          // nothing
        } else {
          currentTurbulence++;
          goingUp = (A[currentIndex - 1] < A[currentIndex]);
        }
      } else {
        if (goingUp && (A[currentIndex - 1] > A[currentIndex])) {
          currentTurbulence++;
          goingUp = !goingUp;
        } else if (!goingUp && (A[currentIndex - 1] < A[currentIndex])){
          currentTurbulence++;
          goingUp = !goingUp;                   
        } else if (A[currentIndex - 1] == A[currentIndex]){
          maxTurbulence = Math.max(maxTurbulence, currentTurbulence);
          currentTurbulence = 1;
          goingUp = true;
        } else {
          maxTurbulence = Math.max(maxTurbulence, currentTurbulence);
          currentTurbulence = 2;
          goingUp = (A[currentIndex - 1] < A[currentIndex]);
        }
      }
        
        
    }
      
    maxTurbulence = Math.max(maxTurbulence, currentTurbulence);
    return maxTurbulence;
      
      
  }
}
