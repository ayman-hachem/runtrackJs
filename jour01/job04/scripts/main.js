let annee = prompt("Entrez une année");
if((annee % 4 == 0) && (annee % 100 != 0) || (annee % 400 == 0))
{
    console.log( annee + " est Bisextile");
}
else 
{
    console.log(annee + " n'est pas bisextile");
}
