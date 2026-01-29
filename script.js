// Testimonials data
const testimonials = [
    {
        image: './images/image-tanya.jpg',
        quote: "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
        name: "Tanya Sinclair",
        profession: "UX Engineer"
    },
    {
        image: './images/image-john.jpg',
        quote: "\" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\"",
        name: "John James",
        profession: "Junior Front-end Developer"
    }
];

// DOM elements
const imgElement = document.querySelector('.slider-avatar');
const quoteElement = document.querySelector('.testimonial-quote');
const nameText = document.querySelector('.author-name');
const professionText = document.querySelector('.author-role');
const prevBtn = document.querySelector('.slider-nav-prev');
const nextBtn = document.querySelector('.slider-nav-next');

// Current testimonial index
let currentIndex = 0;

// Validate that all required elements exist
const elementsExist = [imgElement, quoteElement, nameText, professionText, prevBtn, nextBtn].every(el => el !== null);

if (!elementsExist) {
    console.error('One or more required DOM elements were not found');
}

/**
 * Updates the testimonial display with the current index
 * @param {number} index - The index of the testimonial to display
 */
function updateTestimonial(index) {
    if (!elementsExist) return;

    imgElement.src = testimonials[index].image;
    imgElement.alt = `${testimonials[index].name}, ${testimonials[index].profession}`;
    quoteElement.textContent = testimonials[index].quote;
    nameText.textContent = testimonials[index].name;
    professionText.textContent = testimonials[index].profession;
}

// Initialize first testimonial
updateTestimonial(currentIndex);

/**
 * Show previous testimonial
 */
function showPrevious() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
}

/**
 * Show next testimonial
 */
function showNext() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Add click event listeners to navigation buttons
if (prevBtn) prevBtn.addEventListener('click', showPrevious);
if (nextBtn) nextBtn.addEventListener('click', showNext);

/**
 * Handle keyboard navigation with arrow keys
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        showPrevious();
    } else if (event.key === 'ArrowRight') {
        showNext();
    }
}

// Add keyboard event listener
document.addEventListener('keydown', handleKeyDown);
