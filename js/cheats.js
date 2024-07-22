
//Cheats
const dataUsage = [
    {
        nombre: "Colour Contrast Checker",
        p: "Compruebe el contraste entre las distintas combinaciones de colores según las normas WCAG.",
        link: "https://colourcontrast.cc/"
    },
    {
        nombre: "Dev Challenges",
        p: "Los proyectos de programación son una gran forma de practicar codeando, afila tus conocimientos y mejora tu portfolio.",
        link: "https://devchallenges.io/"
    },
    {
        nombre: "Coding Inverview University",
        p: "Pasa entrevistas con este repositorio",
        link: "https://github.com/jwasham/coding-interview-university"
    },
    {
        nombre: "How web works",
        p: "Te explica qué pasa tecnológicamente cuando entras a una URL en internet",
        link: "https://github.com/vasanthk/how-web-works"
    },
    {
        nombre: "Project Based Learning",
        p: "Aprender a programar creando proyectos reales",
        link: "https://github.com/practical-tutorials/project-based-learning"
    },
    {
        nombre: "Every Programmer Should Know",
        p: "Todos los conceptos, recursos y algoritmos que deberías saber como programador",
        link: "https://github.com/mtdvio/every-programmer-should-know"
    },
    {
        nombre: "Real World",
        p: "Un clon de Medium fullstack para ver un ejemplo de buenas prácticas",
        link: "https://github.com/gothinkster/realworld"
    },
    {
        nombre: "Colormind",
        p:"Colormind es un generador de escalas de color que utiliza el aprendizaje profundo. Puede aprender estilos de color a partir de fotografías, películas y arte popular.",
        link: "http://colormind.io/"
    },
    {
        nombre: "BootStrap buttons",
        p: "",
        link: "https://preview.colorlib.com/theme/bb/bootstrap-buttons-01/"
    }
]

const dataUsageArr = document.querySelector('.dataList');
dataUsage.forEach(datos => {
    const dataItem = `
        <a href="${datos.link}" target="_blank" style="text-decoration: none; color: inherit;"><h3 style="font-family: Major Mono Display, monospace; ">${datos.nombre}</h3></a>
        <p>${datos.p}</p><br>
    `;
    dataUsageArr.innerHTML += dataItem;
})