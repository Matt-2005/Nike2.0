// Récupère l'élément de recherche
const searchInput = document.getElementById("search-input");

// Écoute l'événement de touche pressée dans l'input
searchInput.addEventListener("keyup", function(event) {
    // Vérifie si la touche pressée est "Entrée" (code 13)
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut (l'envoi du formulaire)
        const warningPopup = document.createElement("div");
        warningPopup.textContent = "Désolé, la fonction de recherche n'est pas disponible avec mes connaissances actuelles.";
        warningPopup.style.backgroundColor = "red";
        warningPopup.style.color = "white";
        warningPopup.style.padding = "10px";
        warningPopup.style.position = "fixed";
        warningPopup.style.top = "10px";
        warningPopup.style.left = "10px";
        warningPopup.style.zIndex = "1000";
        warningPopup.style.borderRadius = "20px";
        document.body.appendChild(warningPopup);

        // Supprime le message d'avertissement après quelques secondes
        setTimeout(function() {
            document.body.removeChild(warningPopup);
        }, 3000); // Disparaitra après 3 secondes
    }
});

