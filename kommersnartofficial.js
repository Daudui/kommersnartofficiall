document.addEventListener('DOMContentLoaded', () => {
    const filmer = [
        
    ];

    const filmerListe = document.getElementById('filmer');

    filmer.forEach(film => {
        const li = document.createElement('li');
        li.textContent = `${film.navn} - Kommer ut ${film.dato}`;
        filmerListe.appendChild(li);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8b125010d405bc63482c80733c9f8e91';  // Erstatt med din faktiske API-nøkkel
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=no-NO&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filmer = data.results;
            const filmerListe = document.getElementById('filmer');

            filmer.forEach(film => {
                const li = document.createElement('li');
                li.textContent = `${film.title} - Kommer ut ${film.release_date}`;
                filmerListe.appendChild(li);
            });
        })
        .catch(error => console.error('Feil ved henting av data:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8b125010d405bc63482c80733c9f8e91'; 
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=no-NO&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filmer = data.results;
            const filmerListe = document.getElementById('filmer');

            filmer.forEach(film => {
                // Lag et nytt listeelement for hver film
                const li = document.createElement('li');
                li.classList.add('film-item');

                // Lag et bildeelement og sett det til filmens plakat
                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`; // Henter filmens plakat
                img.alt = film.title;

                // Legg til bilde i listen
                li.appendChild(img);

                // Legg til tekst med filmens tittel og dato
                const tekst = document.createElement('p');
                tekst.textContent = `${film.title} - Kommer ut ${film.release_date}`;
                li.appendChild(tekst);

                // Legg hele listen til filmen i DOM-en
                filmerListe.appendChild(li);
            });
        })
        .catch(error => console.error('Feil ved henting av data:', error));
});



















// Enkel "database" for lagring (kun for testing, ikke sikkert for ekte bruk)
let users = [];

// Funksjon for innlogging
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert("Innlogging vellykket! Velkommen " + username);
        window.location.href = "index.html"; // Sender brukeren til forsiden
    } else {
        document.getElementById("login-error").innerText = "Feil brukernavn eller passord!";
    }
}

// Funksjon for registrering
function register() {
    let newUsername = document.getElementById("new-username").value;
    let newEmail = document.getElementById("new-email").value;
    let newPassword = document.getElementById("new-password").value;

    if (!newUsername || !newEmail || !newPassword) {
        document.getElementById("register-error").innerText = "Vennligst fyll ut alle feltene!";
        return;
    }

    let newUser = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    };

    users.push(newUser);
    alert("Registrering vellykket! Du blir nå sendt tilbake til forsiden.");
    window.location.href = "kommersnartofficial.html"; // Sender brukeren til login-siden
}






function login() {
   

    let brukernavn = document.getElementById("brukernavn").value;
    let passord = document.getElementById("passord").value;

    if (brukernavn === "test" && passord === "1234") { 
        alert("Innlogging vellykket! Du blir nå sendt tilbake til forsiden.");
        window.location.href = "kommersnartofficial.html"; // Sørg for at filnavnet er riktig
    } else {
        alert("Feil brukernavn eller passord. Prøv igjen.");
    }
}











function åpneNyhetsbrev() {
    document.getElementById("nyhetsbrev-popup").style.display = "flex";
}

function lukkNyhetsbrev() {
    document.getElementById("nyhetsbrev-popup").style.display = "none";
}

function sendNyhetsbrev() {
    let email = document.getElementById("nyhetsbrev-email").value;
    if (email.includes("@") && email.includes(".")) {
        alert("Takk for at du meldte deg på nyhetsbrevet!");
        lukkNyhetsbrev();
    } else {
        alert("Vennligst skriv inn en gyldig e-postadresse.");
    }
}



















document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
       
        document.getElementById("userBtn").style.display = "block"; // Viser bruker-knappen
        window.location.href = "kommersnartofficialuser.html";
    }
});


