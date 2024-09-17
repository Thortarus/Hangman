// Enleve la selection de texte
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// Déclaration des variables
const words = [
  "réaffectations",
  "toupillassions",
  "esbroufassions",
  "réinscrivisses",
  "manigançassiez",
  "désarrimassiez",
  "enrubannassent",
  "préhistorienne",
  "cannelleraient",
  "localisatrices",
  "désaimantasses",
  "radioscoperiez",
  "rapetissassent",
  "impatroniseras",
  "déparaffinions",
  "boulonneraient",
  "déparasiterons",
  "consolidations",
  "recachetterais",
  "orchestrerions",
  "prédestinerais",
  "décapitalisant",
  "superfinissait",
  "redémarrassiez",
  "thésauriserais",
  "contrebandiers",
  "dénébulisèrent",
  "désensibiliser",
  "déraisonnerais",
  "différencierai",
  "dégrouillasses",
  "présentassions",
  "libéralisaient",
  "équilibrassiez",
  "radoucissaient",
  "carnavalesques",
  "radiotélescope",
  "morigénassions",
  "rebroussements",
  "occidentaliser",
  "emmargeassions",
  "exorcisassions",
  "dévisserassiez",
  "régionalisâtes",
  "domiciliassent",
  "paramilitaires",
  "savoureusement",
  "technologiques",
  "découplassions",
  "systématiserez",
  "désynchronisez",
  "décentralisent",
  "paraphrasèrent",
  "streptobacille",
  "déconcerterons",
  "entraccuserons",
  "paillonnassiez",
  "défraîchissiez",
  "parcimonieuses",
  "empoissonneras",
  "désynchronisés",
  "cocaïnisations",
  "boursicotèrent",
  "décentralisons",
  "informationnel",
  "surexcitassent",
  "cicatrisassent",
  "refouillements",
  "caramélisèrent",
  "inventorierons",
  "débrouillardes",
  "sonnaillassent",
  "complexifiâtes",
  "tragi - comiques",
  "pourchassasses",
  "boustrophédons",
  "gazouillassent",
  "coulisseraient",
  "défroissassiez",
  "tremblotassent",
  "italianisasses",
  "interrompaient",
  "empoussiérerez",
  "subventionniez",
  "défruiteraient",
  "mystificateurs",
  "dramatiquement",
  "balkanisations",
  "désenvenimions",
  "dépeignassions",
  "désaccouplâmes",
  "contredisaient",
  "incontrôlables",
  "déchevillasses",
  "thoracocentèse",
  "standardiserez",
  "déballonnèrent",
  "retrousserions",
  "glycérinerions",
  "antéposeraient",
  "ultrasensibles",
  "enluminassions",
  "intersyndicaux",
  "containerisera",
  "décalaminaient",
  "potentialisais",
  "goguenarderiez",
  "contraceptives",
  "enguirlandâmes",
  "interlignèrent",
  "amplifieraient",
  "déshypothéquez",
  "indulgencierez",
  "indénombrables",
  "tressaillirons",
  "cochonnassions",
  "sacraliserions",
  "essouchassions",
  "rembuchassions",
  "impréparations",
  "dégouttassions",
  "délimitassions",
  "insuffleraient",
  "palissonnèrent",
  "capitalisation",
  "solidarisèrent",
  "décolonisèrent",
  "préachetassent",
  "vérificatrices",
  "enchevauchâtes",
  "sintérisassent",
  "fréquenterions",
  "décomprimerons",
  "cloisonnerions",
  "démobilisèrent",
  "carapateraient",
  "empourprassiez",
  "désassortirons",
  "blablateraient",
  "réinventassiez",
  "enharnacherons",
  "inférioriserai",
  "échelonnassiez",
  "court - circuite",
  "vallonnassions",
  "défaufilerions",
  "corpusculaires",
  "appalachiennes",
  "enflécheraient",
  "arraisonnasses",
];

// Variables globales
let vies = 9; // Nombre de vies
motCache = []; // mot actuel à deviner
motAffiche = []; // nom affiché avec des underscore "_"
lettreStock = []; // stock les lettres déjà validées

// Constantes
const validateBtn = document.querySelector("#validateBtn");
const motDevine = document.querySelector("#motDevine");
const selectedLetter = document.querySelector("#selectedLetter");
const resetBtn = document.querySelector("#resetBtn");
const healthNumber = document.querySelector("#healthNumber");

// Nombre de coeur affichés à l'écran
const maxCoeur = 9;
const coeurContainer = document.querySelector("#lives");

// Limiter le nombre de lettres pouvant être entrée à 1
selectedLetter.addEventListener("input", lettreChoisie);
function lettreChoisie() {
  selectedLetter.value = selectedLetter.value.slice(-1);
}

// Initialise/Réinitialise le jeu au chargement de la page
gameLoad();
function gameLoad() {
  // Choisi un mot aléatoire dans le tavleau [words]
  motCache = words[Math.floor(Math.random() * words.length)].toUpperCase();

  // Rempli la longueur de motCache par des underscore
  let motAffiche = Array(motCache.length).fill("_"); // .join pour enlever les "," -> convertir le tableau en chaine de caractere

  motDevine.innerHTML = `${motAffiche.join(" ")} <br> ${motCache}`;

  // valide la lettre après le click sur le bouton "valider"
  validateBtn.addEventListener("click", gameNext);

  // Fonction vérifiant si la lettre validée est dans le mot à deviner
  function gameNext() {
    const lettre = selectedLetter.value.toUpperCase();
    // Si la lettre choisie est dans le mot alors révéler l'emplacement de la lettre
    // Dans le mot
    if (motCache.includes(lettre)) {
      // Parcourir le tableau 1 par 1 pour trouver la lettre
      // dans le tableau motCache
      for (let i = 0; i < motCache.length; i++) {
        if (motCache[i] === lettre) {
          motAffiche[i] = lettre;
          console.log("la lettre", lettre, "est bien dans ", motCache);
          motDevine.innerHTML = `${motAffiche.join(" ")} <br> ${motCache}`;
          // Envoie la lettre selectionnée dans un tableau
          lettreStock.push(lettre);
          console.log(lettreStock);
        }
      }
    } else {
      console.log("la lettre", lettre, "n'existe pas dans le mot", motCache);
      vies--;
      healthNumber.innerHTML = `PV : ${vies} / 9`;
      coeurDisplay();
      if (vies === 0) {
        Swal.fire({
          imageUrl: "./ressource/img/noheart.png",
          title: "Vous avez perdu.. =(",
          background: "#212529",
          color: "#fff",
          confirmButtonColor: "#36d28f",
          confirmButtonText: "Recommencer",
          text: `le mot était ${motCache}`,
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      }
    }
    // Reinitialise la lettre apres avoir valider
    selectedLetter.value = "";
  }
}

// Affiche le nombre de coeur et coeur perdu
coeurDisplay();
function coeurDisplay() {
  coeurContainer.innerHTML = ""; // Réinitialiser l'affichage des coeurs
  for (let i = 0; i < maxCoeur; i++) {
    const img = document.createElement("img");
    // Afficher un coeur plein si i est inférieur au nombre de vies restantes
    img.src =
      i < vies ? "./ressource/img/heart.png" : "./ressource/img/noheart.png"; // ici "?" et ":" sert à compacter if et else
    //  condition ? valeur_si_vrai : valeur_si_faux;
    img.alt = "coeur";
    img.className = "img-fluid";
    coeurContainer.appendChild(img); // Ajouter l'image du cœur au conteneur
  }
}
// Alerte pour réinitialiser le jeu avec le bouton reset
resetBtn.addEventListener("click", askForReset);
function askForReset() {
  Swal.fire({
    color: "#fff",
    title: "Souhaitez-vous recommencer ?",
    background: "#212529",
    showCancelButton: true,
    confirmButtonColor: "#36d28f",
    cancelButtonColor: "#d33",
    cancelButtonText: "Non",
    confirmButtonText: "Oui",
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
}
