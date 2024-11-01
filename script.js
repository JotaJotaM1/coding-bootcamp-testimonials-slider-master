// Información de testimonios
const testimonials = [
    {
        image: './images/image-tanya.jpg',
        quote: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        profession: "UX Engineer"
    },
    {
        image: './images/image-john.jpg',
        quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
        name: "John James",
        profession: "Junior Front-end Developer"
    }
];

// Selecciona los elementos
const imgElement = document.querySelector('.containOne img'); // Selecciona la imagen que se va a mostrar
const quoteElement = document.querySelector('h1');
const nameText = document.querySelector('.text1');
const professionText = document.querySelector('.text2');
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');

let currentIndex = 0; // Índice del testimonio actual

// Función para actualizar la interfaz
function updateTestimonial(index) {
    imgElement.src = testimonials[index].image; // Actualiza la imagen
    quoteElement.textContent = testimonials[index].quote; // Actualiza la cita
    nameText.textContent = testimonials[index].name; // Actualiza el nombre
    professionText.textContent = testimonials[index].profession; // Actualiza la profesión
}

// Inicializa el primer testimonio
updateTestimonial(currentIndex);

// Funciones para manejar los clics
function showPrevious() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Agregar event listeners a los botones
btnOne.addEventListener('click', showPrevious);
btnTwo.addEventListener('click', showNext);
