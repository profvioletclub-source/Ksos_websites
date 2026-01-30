// --- Chargement des membres ---
async function chargerMembers() {
  try {
    const response = await fetch("members.json");
    const members = await response.json();

    // Trier par nom
    members.sort((a, b) => a.id.localeCompare(b.id));

    const container = document.getElementById("members-container");
    if (!container) return; // sécurité : ne fait rien si la page n'a pas ce conteneur

    members.forEach(members => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3><a href=${members.lien}>${members.id}</a></h3>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des membres :", error);
  }
}

// Lancer le chargement des membres uniquement si on est sur la page concernée
document.addEventListener("DOMContentLoaded", chargerMembers);
