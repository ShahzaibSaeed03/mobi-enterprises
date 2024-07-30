var currentPageIndex = 0;
var contentDivs = document.getElementsByClassName('content');
var pageNames = ['Home', 'COLOR', 'OPTIONS', 'PERSONALIZATION', 'FINSH'];
var pageNameElements = document.getElementsByClassName('page-name');
var cardContainers = document.getElementsByClassName('card-containers');

// Function to hide all content divs
function hideAllContentDivs() {
    for (var i = 0; i < contentDivs.length; ++i) {
        contentDivs[i].style.display = 'none';
    }
}

// Function to hide or show card-containers
function toggleCardContainers(shouldShow) {
    for (var i = 0; i < cardContainers.length; ++i) {
        cardContainers[i].style.display = shouldShow ? 'block' : 'none';
    }
}

// Function to update page names display
function updatePageNames() {
    for (var i = 0; i < pageNameElements.length; ++i) {
        if (i === currentPageIndex) {
            pageNameElements[i].classList.add('current');
        } else {
            pageNameElements[i].classList.remove('current');
        }
    }
}

// Show the current page based on currentPageIndex
function showCurrentPage() {
    hideAllContentDivs();
    contentDivs[currentPageIndex].style.display = 'block';
    updatePageNames();
    
    // Show or hide card-containers based on the current page
    if (currentPageIndex === 0) { // Assuming index 0 is the Home page
        toggleCardContainers(false);
    } else {
        toggleCardContainers(true);
    }
    
    document.getElementById('page-name').textContent = pageNames[currentPageIndex];
}

// Show the next page
function showNextPage() {
    currentPageIndex = (currentPageIndex + 1) % contentDivs.length;
    showCurrentPage();
}

// Show the previous page
function showPreviousPage() {
    currentPageIndex = (currentPageIndex - 1 + contentDivs.length) % contentDivs.length;
    showCurrentPage();
}

// Function to change page by clicking on page names
function changePage(index) {
    currentPageIndex = index;
    showCurrentPage();
}

// Image select function
function selectImage(card) {
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
    } else {
        document.querySelectorAll('.card').forEach(function(el) {
            el.classList.remove('selected');
        });
        card.classList.add('selected');
    }
}

// Show the next page if a card is selected
function showNextPageIfCardSelected() {
    var selectedCard = document.querySelector('.card.selected');
    if (selectedCard) {
        currentPageIndex = (currentPageIndex + 1) % contentDivs.length;
        showCurrentPage();
    } else {
        alert("Please select a design before proceeding.");
    }
}

// Function to handle button clicks and display corresponding boxes
// Function to handle button clicks and display corresponding boxes
function showInput(buttonClassPrefix, boxClassPrefix, totalInputs) {
    for (let i = 1; i <= totalInputs; i++) {
        let buttonClass = `${buttonClassPrefix}-${i}`;
        let boxClass = `${boxClassPrefix}${i}`;

        let selectButtons = document.querySelectorAll('.' + buttonClass);
        let displayBox = document.querySelector('.' + boxClass);

        selectButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (displayBox.style.display === 'none' || displayBox.style.display === '') {
                    for (let j = 1; j <= totalInputs; j++) {
                        let otherBoxClass = `${boxClassPrefix}${j}`;
                        if (otherBoxClass !== boxClass) {
                            let otherBox = document.querySelector('.' + otherBoxClass);
                            if (otherBox) {
                                otherBox.style.display = 'none';
                                otherBox.classList.remove('show'); // Remove animation class from other boxes
                            }
                        }
                    }
                    displayBox.style.display = 'block';
                    displayBox.classList.add('show'); // Add animation class to trigger the animation
                } else {
                    displayBox.style.display = 'none';
                    displayBox.classList.remove('show'); // Remove animation class to reset the state
                }
            });
        });
    }
}

// Example usage
// showInput('mts', 'radio-box', 7);


// Example usage
showInput('mts', 'radio-box', 7);
showInput('mtss', 'radio-boxs', 4);
showInput('finsh', 'radio-boxss', 4);


// Show the initial home page by default
showCurrentPage();

function updateColor(className, color) {
    const stylesheet = Array.from(document.styleSheets).find((sheet) =>
      Array.from(sheet.cssRules).some(
        (rule) => rule.selectorText === className
      )
    );

    if (stylesheet) {
      const rule = Array.from(stylesheet.cssRules).find(
        (rule) => rule.selectorText === className
      );
      if (rule) {
        rule.style.setProperty("fill", color, "important");
        // alert(`Color for ${className} changed to ${color}`);
      } else {
        alert(`Error: No rule found for ${className}`);
      }
    } else {
      alert(`Error: No stylesheet found containing ${className}`);
    }
  }

  document
    .getElementById("colorBase")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c1", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

  document
    .getElementById("colorC1")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c2", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

  document
    .getElementById("colorC2")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c3", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

    document
    .getElementById("colorC3")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c4", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
    document
    .getElementById("colorC4")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c5", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

// Call the setup function to attach event listeners
// setupColorInputs();
