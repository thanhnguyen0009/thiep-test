

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  
// =============================
const scriptURL = 'https://script.google.com/macros/s/AKfycbwP0l-Kh0eufhWoiB6uWbAC0qfimeYhYzGFiIdYRPwx73Y3fMrVi2AfO-4fYX3qHRfN/exec';
const form = document.forms['thiep-test'];
const thankYouModal = document.getElementById('thankYouModal');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form['TÊN'].value;

    alert('CẢM ƠN BẠN ĐÃ PHẢN HỒI! Dữ liệu gửi về sẽ mất khoảng một vài giây, nhấn "OK" và đợi trang tự tải lại nhé <3');
    
    // Gửi dữ liệu form đi
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Save the user's name in local storage
            localStorage.setItem('thankYouName', name);
            // Reload the page
            window.location.reload();
        } else {
            console.error('Error!', response);
            alert('OPPS! Đã xảy ra lỗi');
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('OPPS! Đã xảy ra lỗi: ' + error.message);
    });
});

// Function to display the modal
function showModal() {
    const name = localStorage.getItem('thankYouName');
    if (name) {
        thankYouMessage.innerHTML = 'Cảm ơn bạn, ' + name + '! Chúc bạn một ngày tuyệt vời!';
        thankYouModal.style.display = 'flex';
        // Remove the item from local storage after displaying
        localStorage.removeItem('thankYouName');
    }
}

// Function to close the modal
function closeModal() {
    thankYouModal.style.display = 'none';
}

// Show the modal if the user just submitted the form
window.onload = showModal;

//=====================
        "use strict";
        // Select all slides
        const slides = document.querySelectorAll(".slide");
        
        // loop through slides and set each slides translateX
        slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
        });
        
        // select next slide button
        const nextSlide = document.querySelector(".btn-next");
        
        // current slide counter
        let curSlide = 0;
        // maximum number of slides
        let maxSlide = slides.length - 1;
        
        // add event listener and navigation functionality
        nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        
        //   move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
        });
        
        // select next slide button
        const prevSlide = document.querySelector(".btn-prev");
        
        // add event listener and navigation functionality
        prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }
        
        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
        });