/* main.js */
$(document).ready(function () {
    // Reveal the profile picture caption after 10 seconds.
    setTimeout(function () {
      $("#pictureName").fadeIn(1500);
    }, 10000);
  
    // If a calculator container exists, initialize the sum calculator.
    if ($("#calculator-container").length) {
      // Reusable function to create an element with styles.
      function createElementWithStyles(tag, styles = {}, attributes = {}) {
        const element = document.createElement(tag);
        Object.assign(element.style, styles);
        Object.assign(element, attributes);
        return element;
      }
      
      const container = createElementWithStyles(
        "div",
        {
          textAlign: "center",
          backgroundColor: "#333",
          color: "#FFF",
          padding: "20px",
          borderRadius: "10px",
          width: "50%",
          margin: "20px auto",
        }
      );
      container.id = "calculator-container";
      
      const input1 = createElementWithStyles("input", {
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #CCC",
        width: "30%",
        fontSize: "1em",
        color: "#333",
        backgroundColor: "#F9F9F9",
        outline: "none",
      });
      const input2 = createElementWithStyles("input", {
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #CCC",
        width: "30%",
        fontSize: "1em",
        color: "#333",
        backgroundColor: "#F9F9F9",
        outline: "none",
      });
      const button = createElementWithStyles("button", {
        display: "inline-block",
        margin: "10px",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#AA0061",
        color: "#FFF",
        cursor: "pointer",
      });
      button.textContent = "Calculate Sum";
      const resultDiv = createElementWithStyles("div", {
        marginTop: "20px",
        fontSize: "1.5em",
        color: "#28a745",
        fontWeight: "bold",
      });
      
      container.append(input1, input2, button, resultDiv);
      $("main").append(container);
      
      button.addEventListener("click", () => {
        const values = [input1.value.trim(), input2.value.trim()];
        const valid = values.map((value, i) => {
          const input = i === 0 ? input1 : input2;
          if (isNaN(value) || value === "") {
            input.style.borderColor = "#D40404";
            return false;
          }
          input.style.borderColor = "#28a745";
          return parseFloat(value);
        });
        
        resultDiv.textContent = valid.includes(false)
          ? "Please enter valid numbers."
          : `Sum: ${valid.reduce((a, b) => a + b, 0)}`;
        
        $(resultDiv).fadeOut(1500, function () {
          $(this).fadeIn(1500);
        });
      });
    }
  });
  