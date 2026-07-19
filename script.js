// =========================
// FOTOS
// =========================

const fotos = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg",
    "img/foto7.jpg"
];

// =========================
// ELEMENTOS
// =========================

const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const hud = document.getElementById("hud");
const contador = document.getElementById("contador");
const fotoMemoria = document.getElementById("fotoMemoria");

const btnComecar = document.getElementById("btnComecar");

const finalJogo = document.getElementById("finalJogo");

const btnAlbum = document.getElementById("btnAlbum");

// =========================

let memoriaAtual = 0;
let restantes = [];

// =========================

btnComecar.addEventListener("click", iniciarJogo);

// =========================

function iniciarJogo(){

    inicio.classList.add("hidden");

    jogo.classList.remove("hidden");

    hud.classList.remove("hidden");

    memoriaAtual = 0;

    contador.innerHTML = memoriaAtual;

    restantes = [...fotos];

    mostrarNovaFoto();

}

// =========================

function mostrarNovaFoto(){

    if(restantes.length === 0){

        finalizarJogo();

        return;

    }

    const indice = Math.floor(Math.random() * restantes.length);

    const foto = restantes.splice(indice,1)[0];

    fotoMemoria.src = foto;

    posicionarFoto();

}

// =========================

function posicionarFoto(){

    const largura = window.innerWidth - 170;

    const altura = window.innerHeight - 200;

    const x = Math.random() * largura;

    const y = Math.random() * altura;

    fotoMemoria.style.left = x + "px";

    fotoMemoria.style.top = y + "px";

}

// =========================

fotoMemoria.addEventListener("click", ()=>{

    memoriaAtual++;

    contador.innerHTML = memoriaAtual;

    // Vibra no celular (quando suportado)

    if(navigator.vibrate){

        navigator.vibrate(40);

    }

    fotoMemoria.animate([

        {

            transform:"scale(1)",

            opacity:1

        },

        {

            transform:"scale(1.5)",

            opacity:0

        }

    ],{

        duration:300

    });

    setTimeout(()=>{

        fotoMemoria.style.opacity = "1";

        mostrarNovaFoto();

    },300);

});

// =========================

function finalizarJogo(){

    hud.classList.add("hidden");

    jogo.classList.add("hidden");

    finalJogo.classList.remove("hidden");

}

// =========================

// A Parte 2 começa aqui

btnAlbum.addEventListener("click", ()=>{

    abrirAlbum();

});
// =========================
// ÁLBUM
// =========================

const album = document.getElementById("album");
const fotoAlbum = document.getElementById("fotoAlbum");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

const proxima = document.getElementById("proxima");

const videoSection = document.getElementById("videoSection");
const videoFinal = document.getElementById("videoFinal");

const cartaFinal = document.getElementById("cartaFinal");

// =========================

const memorias = [

    {

        foto:"img/foto1.jpg",

        titulo:"Nossa primeira memória ❤️",

        texto:"Onde tudo começou, quando vimos que somos perfeitos um para o outro."

    },

    {

        foto:"img/foto2.jpg",

        titulo:"Um dia inesquecível",

        texto:"Até mesmo em uma simples escada você consegue me fazer sorrir."

    },

    {

        foto:"img/foto3.jpg",

        titulo:"Meu sorriso favorito",

        texto:"Nunca me senti tão confortável em frente de uma câmera, mas com você tudo é maravilhoso."

    },

    {

        foto:"img/foto4.jpg",

        titulo:"Nós ❤️",

        texto:"Não importa o momento, nem a hora, eu sempre estarei ao seu lado sendo o homem mais feliz do mundo."

    },

    {

        foto:"img/foto5.jpg",

        titulo:"Esse dia foi perfeito",

        texto:"Mesmo cansado, estar ao seu lado é tudo que alegra e conforta o meu dia."

    },

    {

        foto:"img/foto6.jpg",

        titulo:"Queria reviver isso",

        texto:"Nós juntos, sem medo, sem problemas, simplesmente felizes."

    },

    {

        foto:"img/foto7.jpg",

        titulo:"Minha memória favorita",

        texto:"O amor sincero q eu vejo no seu rosto só me faz ficar mais apaixonado."

    }

];

// =========================

let indiceAlbum = 0;

// =========================

function abrirAlbum(){

    finalJogo.classList.add("hidden");

    album.classList.remove("hidden");

    indiceAlbum = 0;

    carregarMemoria();

}

// =========================

function carregarMemoria(){

    fotoAlbum.src = memorias[indiceAlbum].foto;

    titulo.innerHTML = memorias[indiceAlbum].titulo;

    texto.innerHTML = memorias[indiceAlbum].texto;

}

// =========================

proxima.addEventListener("click",()=>{

    indiceAlbum++;

    if(indiceAlbum >= memorias.length){

        iniciarVideo();

        return;

    }

    carregarMemoria();

});

// =========================

function iniciarVideo(){

    album.classList.add("hidden");

    videoSection.classList.remove("hidden");

    videoFinal.play();

}

// =========================

videoFinal.addEventListener("ended",()=>{

    videoSection.classList.add("hidden");

    cartaFinal.classList.remove("hidden");

});