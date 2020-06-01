function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const pari_div = document.getElementById("pari");
const pari_div2 = document.getElementById("pari2");
const URL =
  "https://if3r4ovtzyq8m1s-db202005272002.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/pari/";
let id_equipe1=1;
let id_equipe2=2;

fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let pari = data.items; //.results;
    return pari.map(function (pari) {
      if (pari.equipe_id_equipe===id_equipe1) {
                                    let input = createNode("INPUT");
                                    input.setAttribute("type", "radio");
                                    input.setAttribute("name", "paris"),
                                    // input.setAttribute("value", innerHTML = `${pari.type_pari} ${pari.cote} ${pari.equipe_id_equipe} ${pari.equipe_id_equipe1}`),
                                    input.setAttribute("value", innerHTML = `${pari.cote}`),
                                      span = createNode("span");
                                      let affichage;
                                      if(pari.type_pari==='gagnant') {
                                        affichage="Gagnant"
                                      }
                                      if(pari.type_pari==='buts') {
                                        affichage="Buts"
                                      }
                                      if(pari.type_pari==='cartonjaune') {
                                        affichage="Carton Jaune"
                                      }
                                      if(pari.type_pari==='cartonrouge') {
                                        affichage="Carton Rouge"
                                      }
                                    span.innerHTML = affichage;
                                    br = createNode("br");
                                    append(pari_div, input);
                                    append(pari_div, span);
                                    append(pari_div, br);
                                    
                                    
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let pari = data.items; //.results;
    return pari.map(function (pari) {
      if (pari.equipe_id_equipe===id_equipe2) {
                                    let input = createNode("INPUT");
                                    input.setAttribute("type", "radio");
                                    input.setAttribute("name", "paris"),
                                    input.setAttribute("value", innerHTML = `${pari.cote}`),
                                      span = createNode("span");
                                      let affichage;
                                      if(pari.type_pari==='gagnant') {
                                        affichage="Gagnant"
                                      }
                                      if(pari.type_pari==='buts') {
                                        affichage="Buts"
                                      }
                                      if(pari.type_pari==='cartonjaune') {
                                        affichage="Carton Jaune"
                                      }
                                      if(pari.type_pari==='cartonrouge') {
                                        affichage="Carton Rouge"
                                      }
                                    span.innerHTML = affichage;
                                    br = createNode("br");
                                    append(pari_div2, input);
                                    append(pari_div2, span);
                                    append(pari_div2, br);
                                    
                                    
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

  function cote() {
   var ele = document.getElementsByName('paris');
   for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
     document.getElementById("cote").innerHTML = ele[i].value;
   }
  }