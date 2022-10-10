const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateCards(membersArray) {
    console.log(membersArray);
    for (member of membersArray) {
        switch (member.getRole()) {
            case "Manager":
                return `
            <div class="card memberIndCard" style="width: 18rem;">
                <img src="./assets/businessman.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${member.name}</h4>
                    <h5 class="card-title">${member.getRole()}</h5>
                    <p class="card-text">ID: ${member.id}</p>
                    <p class="card-text">Email: ${member.email}</p>
                    <p class="card-text">Office #: ${member.getOfficeNumber()}</p>
                </div>
            </div>`;
            case "Engineer":
                return `
            <div class="card memberIndCard" style="width: 18rem;">
                <img src="./assets/engineer.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${member.name}</h4>
                    <h5 class="card-title">${member.getRole()}</h5>
                    <p class="card-text">ID: ${member.id}</p>
                    <p class="card-text">Email: ${member.email}</p>
                    <p class="card-text">Github: <a class="card-text" href="https://www.github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>
                </div>
            </div>`;
            case "Intern":
                return `
            <div class="card memberIndCard" style="width: 18rem;">
                <img src="./assets/graduated.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${member.name}</h4>
                    <h5 class="card-title">${member.getRole()}</h5>
                    <p class="card-text">ID: ${member.id}</p>
                    <p class="card-text">Email: ${member.email}</p>
                    <p class="card-text">School: ${member.getSchool()}</p>
                </div>
            </div>`;
        }
    };
};

function generateList(membersArray) {
    for (member of membersArray) {
        return `
                        <li class="list-group-item">${member.name}</li>`
    }
};

function generateHTML(membersArray) {
    return `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Team</h1>
    </header>
    <main>
        <section id="memberList" class="mainContent">
            <div class="card memberListCard" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">Members</h3>
                    <ul class="list-group list-group-flush">${generateList(membersArray)}
                    </ul>
                </div>
            </div>
        </section>
        <section id="memberCards" class="mainContent">${generateCards(membersArray)}
        </section>
    </main>
</body>

</html>`;
};

module.exports = generateHTML;