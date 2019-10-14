let num = Math.floor(Math.random() * 100) + 1;
let NbEssais = 10;
console.log(num);
function Devine() {
let choisi = document.form1.devine1.value;
NbEssais--;
status = "Nombre d'essais : " + 10-NbEssais;
if (choisi < num) 
    document.form1.indice.value = "Non, le nombre est plus grand.";
if (choisi > num)
    document.form1.indice.value = "Non, le nombre est plus petit.";
if (choisi == num) {
    
    window.alert("Vous avez gagné! la réponse était "+num+" ! Vous avez trouvé en " + (10 -NbEssais) + " essais.");
    location.reload();
    }
if (NbEssais == 0) {
    window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
    location.reload();
    }
}
