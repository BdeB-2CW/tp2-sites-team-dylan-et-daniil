function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const pari_form = document.getElementById("pari");
//const URL = "http://localhost:8080/ords/hr2/employees"; si la bd est locale
const URL =
  "https://if3r4ovtzyq8m1s-db202005272002.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/pari/";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let pari = data.items; //.results;
    return pari.map(function (pari) {
      if (pari.equipe_id_equipe===1) {
                                    let input = createNode("INPUT");
                                    input.setAttribute("type", "radio");
                                    input.setAttribute("name", "rnd"),
                                      span = createNode("span");
                                    input.innerHTML = `${pari.type_pari} ${pari.cote} ${pari.equipe_id_equipe} ${pari.equipe_id_equipe1}`;
                                    append(pari_form, span);
                                    append(pari_form, input);
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
