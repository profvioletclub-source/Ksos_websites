// --- Chargement des membres ---
async function chargerMembres() {
  try {
    const response = await fetch("membres.json");
    const membres = await response.json();

    // Trier par nom
    membres.sort((a, b) => a.id.localeCompare(b.id));

    const container = document.getElementById("membres-container");
    if (!container) return; // sécurité : ne fait rien si la page n'a pas ce conteneur

    membres.forEach(membre => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3><a href=${membre.lien}>${membre.id}</a></h3>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des membres :", error);
  }
}

// Lancer le chargement des membres uniquement si on est sur la page concernée
document.addEventListener("DOMContentLoaded", chargerMembres);
