function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const emp_ul = document.getElementById("utilisateur");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://if3r4ovtzyq8m1s-db202005272002.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/utilisateur";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let utilisateur = data.items; //.results;
    return utilisateur.map(function (utilisateur) {
      if (utilisateur.utilisateur_id===2) {
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${utilisateur.nom} ${utilisateur.prenom}`;
                                    append(li, span);
                                    append(emp_ul, li);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
