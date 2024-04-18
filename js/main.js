function addMenuFunctionality() {
    const menuIcon = document.querySelectorAll('header nav .menu');
    const menuList = document.querySelectorAll('header nav ul');

    menuIcon.forEach(icon => {
        icon.addEventListener('click', () => {
            menuList.forEach(list => {
                list.classList.toggle("show");
            });
        });
    });
}

// Call the function to add menu functionality
addMenuFunctionality();

function addDropdownFunctionality() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const icon = question.querySelector('.icon'); // Icon ko select karo
        const answer = question.parentElement.nextElementSibling; // 'question' ke baad wala sibling 'answer' ko select karo

        question.addEventListener("click", () => {
            if (icon.classList.contains('active')) {
                icon.classList.remove('active'); // Active class hatao
                answer.style.maxHeight = null; // 'answer' ka height remove karo
                console.log("removed");
            } else {
                icon.classList.add('active'); // Active class add karo
                answer.style.maxHeight = answer.scrollHeight + "px"; // 'answer' ka height set karo
                console.log("added");
            }
        });
    });
}

// Call the function to add dropdown functionality
addDropdownFunctionality();


function addBookmarkFunctionality() {
    const addToSave = document.querySelectorAll('.add-bookmark svg');

    addToSave.forEach((svgElement, index) => {
        svgElement.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (svgElement.style.fill === 'blue') {
                svgElement.style.fill = '';
            } else {
                svgElement.style.fill = 'blue';
            }
        });
    });
}

// Call the function to add bookmark functionality
addBookmarkFunctionality();


function addCustomButtonFunctionality() {
    const buttons = document.querySelectorAll('.custom-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            button.classList.add('active');
        });
    });
}

// Call the function to add custom button functionality
addCustomButtonFunctionality();




function addVideoFunctionality() {
    const playVideoBtn = document.querySelector('.video__play-btn');
    const videoBox = document.querySelector('.youtube-video-mtoption');
    const videoCloseBtn = document.querySelector('.closevideobtn');
    const videoPlayer = document.querySelector('.video-player'); // Assuming this is the video player element

    playVideoBtn.addEventListener('click', () => {
        videoBox.classList.add('showvideo');
    });

    videoCloseBtn.addEventListener('click', () => {
        videoBox.classList.remove('showvideo');
        // Resetting the video to the beginning
        videoPlayer.currentTime = 0; // Set the video current time to 0 to restart it
        // Pause the video (optional)
        videoPlayer.pause(); // Assuming this is the method to pause the video
    });
}

// Call the function to add video functionality
addVideoFunctionality();







