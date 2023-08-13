document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var score = urlParams.get("score");
  
    if (score) {
      // Display result
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "Your score: " + score + " out of 2";
  
      // Clear score from URL parameter
      history.replaceState({}, document.title, window.location.pathname);
    }
  
    document.getElementById("quizForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get selected answers
      var q1 = document.querySelector('input[name="q1"]:checked');
      var q2 = document.querySelector('input[name="q2"]:checked');
  
      // Check if both questions are answered
      if (q1 && q2) {
        // Calculate score
        var quizScore = 0;
        if (q1.value === "a") {
          quizScore++;
        }
        if (q2.value === "a") {
          quizScore++;
        }
  
        // Redirect to result page with score parameter
        window.location.href = "result.html?score=" + quizScore;
      } else {
        alert("Please answer all questions before submitting.");
      }
    });
  });
  