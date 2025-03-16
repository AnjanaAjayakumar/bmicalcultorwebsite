
            document.getElementById('calculateBtn').addEventListener('click', function () {
              const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
              const weight = parseFloat(document.getElementById('weight').value);
              const bmi = (weight / (height * height)).toFixed(1);
          
              document.getElementById('result').textContent = bmi;
              document.getElementById('container-result').classList.remove('hidden');
          
              const calculatorSection = document.querySelector('.calculator');
              if (bmi >= 18.5 && bmi <= 24.9) {
                calculatorSection.classList.add('blink-green');
                calculatorSection.classList.remove('blink-red');
              } else {
                calculatorSection.classList.add('blink-red');
                calculatorSection.classList.remove('blink-green');
              }
            });
