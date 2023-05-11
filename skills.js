"use strict";

const skills = [
    {
        image: "./images/html.webp",
        tech: "Frontend",
        name: "HTML",
        rating: "★★★★★",
    },
    {
        image: "./images/css.webp",
        tech: "Frontend",
        name: "CSS",
        rating: "★★",
    },
    {
        image: "./images/javascript.webp",
        tech: "Frontend",
        name: "JavaScript",
        rating: "★★★★★",
    },
    {
        image: "./images/typescript.webp",
        tech: "Frontend",
        name: "TypeScript",
        rating: "★★",
    },
    {
        image: "./images/nodejs.webp",
        tech: "Backend",
        name: "Node.js",
        rating: "★★★★★",
    },
    {
        image: "./images/python.webp",
        tech: "Backend",
        name: "Python",
        rating: "★★",
    },
    {
        image: "./images/php.webp",
        tech: "Backend",
        name: "PHP",
        rating: "★★",
    },
    {
        image: "./images/mysql.webp",
        tech: "Database",
        name: "MySQL",
        rating: "★★★",
    },
    {
        image: "./images/postgres.webp",
        tech: "Database",
        name: "PostgreSQL",
        rating: "★★★",
    },
    {
        image: "./images/mongodb.webp",
        tech: "Database",
        name: "MongoDB",
        rating: "★★★",
    },
    {
        image: "./images/vba.webp",
        tech: "Automation",
        name: "VBA",
        rating: "★★★",
    },
    {
        image: "./images/git.webp",
        tech: "Version Control",
        name: "Git",
        rating: "★★",
    },
];

/**
 * The function creates and returns a table element with headers and rows populated with data from an
 * array of skills.
 * @returns The function `renderTable` is returning a dynamically created HTML table element with
 * headers for "Image", "Tech", "Name", and "Rating", and rows of data for each skill in the `skills`
 * array.
 */
function renderTable(skillsArray = skills) {
    if (document.getElementById("skills-table")) {
        document.getElementById("skills-table").remove();
    }
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    table.classList.add("table", "text-light", "text-center");
    table.id = "skills-table";

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    ["Image", "Tech", "Name", "Rating"].forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    skillsArray.forEach((skill) => {
        const tr = document.createElement("tr");
        ["image", "tech", "name", "rating"].forEach((prop) => {
            const td = document.createElement("td");
            if (prop === "image") {
                const img = document.createElement("img");
                img.src = skill[prop];
                img.alt = skill.name;
                td.appendChild(img);
            } else {
                td.textContent = skill[prop];
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

/**
 * The function filters a list of skills based on a search value and renders the filtered results in a
 * table.
 * @param event - The event parameter is an object that represents an event that occurred in the
 * browser, such as a user input or a mouse click. It is passed as an argument to the searchSkill
 * function.
 */
function searchSkill(event) {
    const searchValue = event.target.value.toLowerCase();
    const searchSkill = skills.filter((skill) => {
        if (
            skill.name.toLowerCase().trim().includes(searchValue) ||
            skill.tech.toLowerCase().trim().includes(searchValue)
        ) {
            return true;
        }
        return false;
    });

    searchSkill.length === 0 ? renderTable() : renderTable(searchSkill);
}

function clearSearch() {
    document.getElementById("search-skill").value = "";
    renderTable();
}

document.getElementById("search-skill").addEventListener("keyup", searchSkill);
document.getElementById("clear").addEventListener("click", clearSearch);
renderTable();
