//VARIÁVEIS DOS LINKS DOS FILMES
var listaFilmes = []
listaFilmes[0] = "https://www.planocritico.com/wp-content/uploads/2019/06/Edward_Maos_de_Tesoura.jpg";
listaFilmes[1] = "https://s2-techtudo.glbimg.com/3rgAF5jspMVeZTIexryFzSE2moc=/0x0:1800x1012/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/T/z/3J8NzUS5AA7m47TFpI8g/s7dcallzevsrvivmuvaumwaxfmn.jpg";
listaFilmes[2] = "https://sm.ign.com/ign_br/screenshot/default/blob_v2xz.jpg";
listaFilmes[3] = "https://mutantexis.files.wordpress.com/2022/05/blog-trilogia.jpg";
listaFilmes[4] = "https://br.web.img3.acsta.net/pictures/210/542/21054207_20131030221640204.jpg";
listaFilmes[5] = "https://cinepop.com.br/wp-content/uploads/2023/05/fast-cinepop.jpg.webp";
/*listaFilmes[6] = "https://png.pngtree.com/png-clipart/20210805/ourmid/pngtree-place-the-black-film-roll-horizontally-png-image_3748493.png";*/


//ARIÁVEIS DOS NOMES DOS FILMES
var nomeFilmes = []
nomeFilmes[0] = "Edward - Mãos de Tesoura";
nomeFilmes[1] = "Todo Mundo em Panico";
nomeFilmes[2] = "As Branquelas";
nomeFilmes[3] = "Bourne";
nomeFilmes[4] = "Debi & Lóide";
nomeFilmes[5] = "Velozes e Furiosos";


//estrutura for, inicia com a criação da variável i recebendo 0, enquanto i for menor que 3, i recebe i + 1
/*for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}*/


//Parte do desafio, transformar for em while
/*var i = 0;
while (i < listaFilmes.length) {
    document.write ("<img src=" + listaFilmes[i] + ">");
    i++
}*/


//condição que informa quando uma imagem não for .jpg
/*var i = 0;
while (i < listaFilmes.length) {
    if (!listaFilmes [i].endsWith (".jpg")) {
        alert ("O link da imagem " + listaFilmes[i] + " não termina com .jpg");
    }
    document.write ("<img src=" + listaFilmes[i] + ">");
    i++
}*/

//Código contendo lista de nomes
for (var i = 0; i < listaFilmes.length; i++) {
    nomeFilmes.push(listaFilmes[i].split("/")[4]);
}

var i = 0;

while (i < listaFilmes.length) {
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p>" + nomeFilmes[i] + "</p>");
    i++;
}