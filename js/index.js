//aside - Courses list
const courseList = [
    {
        nombre: "Coursera",
        link: "https://coursera.io",
    },
    {
        nombre: "Codigo Facilito",
        link: "https://codigofacilito.com/",
    },
];

const courseListAside = document.querySelector('.list');
courseList.forEach(course => {
    const courseItem = `
    <ul>
           <li><a href="${course.link}">${course.nombre}</a></li>
        </ul>
    `;
    courseListAside.innerHTML += courseItem;
})

//left - language list
const langList = {
    frontL: [
        {
            nombre: "HTML, CSS, JavaScript",
            link: "https://htmlcheatsheet.com/"
        },
        {
            nombre: "React",
            link: "https://react.dev/learn"
        },
        {
            nombre: "Vue",
            link: "https://vuejs.org/tutorial/#step-1"
        }
    ],
    backL: [
        {
            nombre: "Java",
            link: "https://java-programming.mooc.fi/part-1"
        },
        {
            nombre: "Python",
            link: "https://docs.python.org/3/tutorial/index.html"
        }
    ]
}

const langListAside = document.querySelector('.langList');
const langListBack = document.querySelector('.langListB');

//<ul> - frontL
const frontUl = document.createElement('ul');
langList.frontL.forEach(front => {
    const langItemF = document.createElement('li');
    const link = document.createElement('a');
    link.href = front.link;
    link.textContent = front.nombre;
    langItemF.appendChild(link); //   Agregar <a> dentro de <li>
    frontUl.appendChild(langItemF); //  Agregar <li> al <ul>
});
langListAside.appendChild(frontUl); // Agregar el <ul> al contenedor

// <ul> - backL
const backUl = document.createElement('ul');
langList.backL.forEach(back => {
    const langItemB = document.createElement('li'); // Crear <li>
    const link = document.createElement('a');
    link.href = back.link;
    link.textContent = back.nombre;
    langItemB.appendChild(link); // Agregar <a> dentro de <li>
    backUl.appendChild(langItemB); // Agregar <li> al <ul>
});
langListBack.appendChild(backUl); // Agregar el <ul> al contenedor



//FAQ - Array
const faqArray = [
    {
        question: "¿Qué es la programación?",
        answer: "La programación informática es todo proceso que involucra el diseño, codificación, mantenimiento, y protección de cualquier fuente de programas. ",
    },
    {
        question: "¿Por qué se creó este grupo?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut consectetur corporis deleniti dignissimos eaque, eos ex harum, illum inventore libero necessitatibus perspiciatis quas repudiandae unde. At enim iste rem!",
    }
]

const faqSection = document.querySelector('.row');
faqArray.forEach(faq => {
    const faqItem = `
    <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"> ${faq.question}</h6>
            <p>${faq.answer}</p>
        </div>
        `;
    faqSection.innerHTML += faqItem;
})