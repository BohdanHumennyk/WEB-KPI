$(document).ready(function() {
      calculateBTN.click(function() {
        readDataFromInputs();
        switch(operator) {
          case '+':
            result = number1 + number2;
            secondNumberInput.prop('disabled', false);
            break;
          case '-':
            result = number1 - number2;
            secondNumberInput.prop('disabled', false);
            break;
          case '*':
            result = number1 * number2;
            secondNumberInput.prop('disabled', false);
            break;
          case '/':
            result = number1 / number2;
            secondNumberInput.prop('disabled', false);
            break;
          case '√':
            result = Math.sqrt(number1);
            secondNumberInput.val('').prop('disabled', true);
            break;
          case '^':
            result = Math.pow(number1, number2);
            secondNumberInput.prop('disabled', false);
            break;
          case 'log':
            result = Math.log(number1);
            secondNumberInput.val('').prop('disabled', true);
            break;
        }
        displayResult();
      });
    });