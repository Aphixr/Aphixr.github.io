// Use strict mode
"use strict";

// Put the items
const putItems = (place, items) => {
    // Get the element
    const itemPlace = document.querySelector(`#projects #${place.toLowerCase()}`);

    // Loop through all the items
    for (const item of items) {
        // Beginning
        const itemCont = document.createElement("div");

        // Onclick
        itemCont.onclick = `location.href="${item.link}"`;

        // Name
        itemCont.innerHTML += `<h4><a href="${item.link}">${item.name}</a></h4>`;

        // Version
        if (item.ver) {
            itemCont.innerHTML += `<small>${item.ver}</small>`;
        }

        // Loop through all the main languages and frameworks used
        const itemLfsList = document.createElement("ul");
        for (let j = 0; j < item.lfs.length; ++j) {
            // Place them into a list
            itemLfsList.innerHTML += `<li>${item.lfs[j]}</li>`;
        }
        itemCont.appendChild(itemLfsList);

        // Put the description
        itemCont.innerHTML += `<p>${item.desc}</p>`;

        // Append
        itemPlace.appendChild(itemCont);
    }
};

// Do things
window.addEventListener("DOMContentLoaded", () => {

    // Websites
    putItems("websites", [
        {
            name: "Learn PHP",
            lfs: ["HTML", "CSS", "JavaScript"],
            desc: "Learn the PHP programming language, used for back-end web developement.",
            link: "https://php.aquamarine.repl.co"
        },
        {
            name: "HTML Editor",
            lfs: ["HTML", "CSS", "JavaScript"],
            desc: "An online HTML editor. Code in HTML, CSS, and JavaScript.",
            link: "https://html-editor.aquamarine.repl.co"
        },
        {
            name: "Chat",
            lfs: ["HTML", "CSS", "JavaScript", "Node.js", "Socket.io"],
            desc: "A very simple online chatting website.",
            link: "https://simple-nodejs-chat.aquamarine.repl.co"
        },
        {
            name: "Document",
            lfs: ["HTML", "CSS", "JavaScript"],
            desc: "Create a document and put text on it.",
            link: "https://document.aquamarine.repl.co"
        }
    ]);

    // Games
    putItems("games", [
        {
            name: "Meteors",
            lfs: ["JavaScript", "Processing"],
            desc: "How long can you survive before a meteors falls on your head?",
            link: "https://www.khanacademy.org/computer-programming/meteors/5574744762040320"
        },
        {
            name: "Pong",
            lfs: ["JavaScript", "Processing"],
            desc: "Play pong. Use your paddle to hit the ball. First to 9 points wins!",
            link: "https://www.khanacademy.org/computer-programming/pong/6351475829719040"
        },
        {
            name: "Fruit Dodge",
            lfs: ["JavaScript", "Processing"],
            desc: "Dodge the falling fruits. Survive for as long as you can before one hits you.",
            link: "https://www.khanacademy.org/computer-programming/fruit-dodge/4748105605005312"
        },
        {
            name: "The Missing Present",
            lfs: ["JavaScript", "Processing"],
            desc: "A present was stolen! Can you get the present back? Also the largest projects I've ever made.",
            link: "https://www.khanacademy.org/computer-programming/the-missing-present/6594755209674752"
        },
        {
            name: "Money Maker",
            ver: "v1.4.3",
            lfs: ["HTML", "CSS", "JavaScript"],
            desc: "Type in commands to do certain things, like buy, sell, and ways to make money.",
            link: "https://money-terminal.aquamarine.repl.co"
        },
        {
            name: "Pong",
            lfs: ["C++", "SFML"],
            desc: "Play pong on your computer. Available for Windows only.",
            link: "https://github.com/Aphixr/CPP_Pong"
        }
    ]);

    // Templates
    putItems("templates", [
        {
            name: "Pixelet",
            ver: "v0.1.0*",
            lfs: ["C++", "OpenGL", "GLFW"],
            desc: "This template helps you create graphics in C++. Work in progress.",
            link: "https://github.com/Aphixr/Pixelet"
        },
        {
            name: "Weblet",
            ver: "v0.1.0*",
            lfs: ["JavaScript"],
            desc: "This template helps you with web developement. Work in progress.",
            link: "https://github.com/Aphixr/Weblet"
        }
    ]);

});






