// menu hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
});
// mode sombre/claire
const carte = document.getElementById("carte-cv");
const boutonMode = document.getElementById("btn-mode");
// Chargement du thème enregistré
const themeSauvegarde = localStorage.getItem("theme");

if (themeSauvegarde === "sombre") {
    carte.classList.add("mode-sombre");
    boutonMode.textContent = "Mode clair";
}
// Changement de thème
boutonMode.addEventListener("click", function () {

    carte.classList.toggle("mode-sombre");

    if (carte.classList.contains("mode-sombre")) {

        boutonMode.textContent = "Mode clair";

        localStorage.setItem("theme", "sombre");

    } else {

        boutonMode.textContent = "Mode sombre";

        localStorage.setItem("theme", "clair");
    }
});
// animation des competences
const sectionCompetences =
    document.getElementById("competences");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const barres =
                    document.querySelectorAll(".barre-remplie");

                barres.forEach(function (barre) {

                    const valeur =
                        barre.getAttribute("data-width");

                    barre.style.width = valeur + "%";
                });

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);
observer.observe(sectionCompetences);
// validation formulaire
const boutonEnvoyer =
    document.getElementById("btn-envoyer");

boutonEnvoyer.addEventListener("click", function () {

    const nom =
        document.getElementById("nom").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();
 // Effacer les anciens messages
    document.getElementById("erreur-nom").textContent = "";
    document.getElementById("erreur-email").textContent = "";
    document.getElementById("erreur-message").textContent = "";
    document.getElementById("message-succes").textContent = "";

    let valide = true;

    /* Vérification nom */

    if (nom === "") {

        document.getElementById("erreur-nom")
            .textContent = "Veuillez entrer votre nom";

        valide = false;
    }

    /* Vérification email */

    const regexEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("erreur-email")
            .textContent = "Veuillez entrer votre email";

        valide = false;

    } else if (!regexEmail.test(email)) {

        document.getElementById("erreur-email")
            .textContent = "Adresse email invalide";

        valide = false;
    }

    /* Vérification message */

    if (message === "") {

        document.getElementById("erreur-message")
            .textContent = "Veuillez entrer un message";

        valide = false;
    }

    /* Message succès */

    if (valide) {

        document.getElementById("message-succes")
            .textContent =
            "Message envoyé avec succès !";

        // Réinitialisation du formulaire

        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
});

// bouton retour en haut
const boutonHaut =
    document.getElementById("btn-haut");

// Apparition du bouton au scroll

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        boutonHaut.style.display = "block";

    } else {

        boutonHaut.style.display = "none";
    }
});

// Remontée fluide

boutonHaut.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// telecharger pdf
const boutonPDF =
    document.getElementById("btn-pdf");

boutonPDF.addEventListener("click", function () {

    window.print();
});

// fermeture meu mobile apres clic
const liensMenu =
    document.querySelectorAll(".menu a");

liensMenu.forEach(function (lien) {

    lien.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            menu.classList.remove("active");
        }
    });
});