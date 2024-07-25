var currentPageIndex = 0;
var contentDivs = document.getElementsByClassName('content');
var pageNames = ['Home', 'Special Info', 'Contact Us', 'About Us' ,'Finsh'];
var pageNameElements = document.getElementsByClassName('page-name');

// Function to hide all content divs
function hideAllContentDivs() {
    for (var i = 0; i < contentDivs.length; ++i) {
        contentDivs[i].style.display = 'none';
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


//image select function
function selectImage(card) {
    // Check if the clicked card already has 'selected' class
    if (card.classList.contains('selected')) {
        // If yes, remove 'selected' class from the clicked card
        card.classList.remove('selected');
    } else {
        // Remove 'selected' class from all cards
        document.querySelectorAll('.card').forEach(function(el) {
            el.classList.remove('selected');
        });

        // Add 'selected' class to the clicked card
        card.classList.add('selected');
    }
}

function showNextPage(){
    var selectedCard= document.querySelector('.card.selected');

    if(selectedCard){
        currentPageIndex =( currentPageIndex + 1)% contentDivs.length;
        showCurrentPage();
    }else{
        alert("please select design before proceedings.");
    }

}



function showInput(buttonClassPrefix, boxClassPrefix, totalInputs) {
    for (let i = 1; i <= totalInputs; i++) {
        let buttonClass = `${buttonClassPrefix}-${i}`;
        let boxClass = `${boxClassPrefix}${i}`;

        let selectButtons = document.querySelectorAll('.' + buttonClass);
        let displayBox = document.querySelector('.' + boxClass);

        selectButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggle display for the corresponding box
                if (displayBox.style.display === 'none' || displayBox.style.display === '') {
                    // Hide all other boxes of this group
                    for (let j = 1; j <= totalInputs; j++) {
                        let otherBoxClass = `${boxClassPrefix}${j}`;
                        if (otherBoxClass !== boxClass) {
                            let otherBox = document.querySelector('.' + otherBoxClass);
                            if (otherBox) {
                                otherBox.style.display = 'none';
                            }
                        }
                    }

                    // Toggle display for the clicked box
                    displayBox.style.display = 'block';
                } else {
                    // Toggle off if already displayed
                    displayBox.style.display = 'none';
                }
            });
        });
    }
}

// Example usage:
showInput('mts', 'radio-box', 7); // Assuming you have 7 pairs of buttons and boxes (.mts-1 to .mts-7 and .radio-box1 to .radio-box7)


//about page inputs

function showInput(buttonClassPrefix, boxClassPrefix, totalInputs) {
    for (let i = 1; i <= totalInputs; i++) {
        let buttonClass = `${buttonClassPrefix}-${i}`;
        let boxClass = `${boxClassPrefix}${i}`;

        let selectButtons = document.querySelectorAll('.' + buttonClass);
        let displayBox = document.querySelector('.' + boxClass);

        selectButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggle display for the corresponding box
                if (displayBox.style.display === 'none' || displayBox.style.display === '') {
                    // Hide all other boxes of this group
                    for (let j = 1; j <= totalInputs; j++) {
                        let otherBoxClass = `${boxClassPrefix}${j}`;
                        if (otherBoxClass !== boxClass) {
                            let otherBox = document.querySelector('.' + otherBoxClass);
                            if (otherBox) {
                                otherBox.style.display = 'none';
                            }
                        }
                    }

                    // Toggle display for the clicked box
                    displayBox.style.display = 'block';
                    
                } else {
                    // Toggle off if already displayed
                    displayBox.style.display = 'none';
                }
            });
        });
    }
}

// Example usage:
showInput('mtss', 'radio-boxs', 4); // Assuming you have 7 pairs of buttons and boxes (.mts-1 to .mts-7 and .radio-box1 to .radio-box7)
showInput('finsh', 'radio-boxss', 4); 

// Show the initial home page by default
showCurrentPage();



//color change functionality

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
        updateColor(".base", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

  document
    .getElementById("colorC1")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c1", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

  document
    .getElementById("colorC2")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c2", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

    document
    .getElementById("colorC3")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c3", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
    document
    .getElementById("colorC4")
    .addEventListener("input", function (event) {
      try {
        const color = event.target.value;
        updateColor(".c4", color);
      } catch (error) {
        alert("Error: " + error.message);
      }
    });

