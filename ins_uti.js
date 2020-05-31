function ins_uti() {
  let uti_rec = {
    id_utilisateur: 2,
    derniere_adresse_ip: 19216800,
    solde: 0,
    // nom: "Sirbu",
    // prenom: "Daniil",
    // pays: "Canada",
    // email: "test@yahoo.ca",
    // mot_de_passe: "password"
  };
  uti_rec.nom = document.getElementById("nom").value;
  uti_rec.prenom = document.getElementById("prenom").value;
  uti_rec.pays = document.getElementById("pays").value;
  uti_rec.email = document.getElementById("email").value;
  uti_rec.mot_de_passe = document.getElementById("mot_de_passe").value;

  const URL =
    "https://if3r4ovtzyq8m1s-db202005272002.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/utilisateur";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(uti_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
