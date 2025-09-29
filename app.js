fetch("chants.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("date-messe").textContent = data.date;

    const liste = document.getElementById("liste-chants");
    data.chants.forEach(chant => {
      const div = document.createElement("div");
      div.className = "chant";

      div.innerHTML = `
        <h2>${chant.titre}</h2>
        <p>${chant.texte}</p>
      `;

      liste.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur de chargement :", error);
  });