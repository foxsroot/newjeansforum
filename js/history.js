let history1 = 'NewJeans, girl grup hasil kolaborasi antara Big Hit Entertainment dan Source Music, memiliki nama dengan dua makna. Pertama, nama ini mencerminkan konsep bahwa jeans adalah pakaian abadi, menciptakan citra abadi bagi grup. Kedua, merupakan permainan kata dari "gen baru," menggambarkan peran mereka sebagai pengantar generasi baru musik pop.';
let history2 = 'Sebelum debut, beberapa anggota sudah aktif dalam industri hiburan. Proses debut dimulai dengan merilis tiga video animasi pada 1 Juli 2022, yang diikuti oleh peluncuran single debut "Attention" pada 22 Juli. Debut EP mereka mendapat sambutan positif, dengan "Hype Boy" menjadi lagu wanita K-pop dengan durasi terlama di Billboard Global 200.Album mini debut "NewJeans" dirilis pada 1 Agustus 2022, termasuk lagu-karya "Cookie" yang mendapat kritik terkait liriknya. Meskipun kontroversial, versi fisik album terjual lebih dari satu juta kopi, mencatatkan prestasi unik di Korea Selatan. Grup ini memenangkan berbagai penghargaan pendatang baru dan debut di berbagai tangga lagu. Lagu terbaru mereka, "Ditto," mencapai kesuksesan besar dan menjadi entri pertama mereka di Billboard Hot 100. Album pertama mereka, "OMG," meraih kesuksesan lebih lanjut dengan tema gaya retronya dan debut di nomor satu di Circle Album Chart.'
let history3 = 'Pada tahun 2023, NewJeans berkolaborasi dengan Coca-Cola untuk merilis beberapa single, mengadakan fanmeeting, dan merilis album mini kedua, "Get Up," yang langsung mencapai nomor dua di Circle Album Chart dan terjual 1,65 juta salinan dalam minggu pertama peluncurannya. Single "Super Shy" menjadi nomor satu ketiga mereka di Korea Selatan dan memuncak di berbagai tangga lagu internasional. Grup ini juga mencapai nomor satu pertama mereka di tangga lagu Billboard Emerging Artists. NewJeans tampil di festival-festival internasional, seperti Lollapalooza di Amerika Serikat dan Summer Sonic Festival.'

let history = ['NewJeans, girl grup hasil kolaborasi antara Big Hit Entertainment dan Source Music, memiliki nama dengan dua makna. Pertama, nama ini mencerminkan konsep bahwa jeans adalah pakaian abadi, menciptakan citra abadi bagi grup. Kedua, merupakan permainan kata dari "gen baru," menggambarkan peran mereka sebagai pengantar generasi baru musik pop.', 'Sebelum debut, beberapa anggota sudah aktif dalam industri hiburan. Proses debut dimulai dengan merilis tiga video animasi pada 1 Juli 2022, yang diikuti oleh peluncuran single debut "Attention" pada 22 Juli. Debut EP mereka mendapat sambutan positif, dengan "Hype Boy" menjadi lagu wanita K-pop dengan durasi terlama di Billboard Global 200.Album mini debut "NewJeans" dirilis pada 1 Agustus 2022, termasuk lagu-karya "Cookie" yang mendapat kritik terkait liriknya. Meskipun kontroversial, versi fisik album terjual lebih dari satu juta kopi, mencatatkan prestasi unik di Korea Selatan. Grup ini memenangkan berbagai penghargaan pendatang baru dan debut di berbagai tangga lagu. Lagu terbaru mereka, "Ditto," mencapai kesuksesan besar dan menjadi entri pertama mereka di Billboard Hot 100. Album pertama mereka, "OMG," meraih kesuksesan lebih lanjut dengan tema gaya retronya dan debut di nomor satu di Circle Album Chart.', 'Pada tahun 2023, NewJeans berkolaborasi dengan Coca-Cola untuk merilis beberapa single, mengadakan fanmeeting, dan merilis album mini kedua, "Get Up," yang langsung mencapai nomor dua di Circle Album Chart dan terjual 1,65 juta salinan dalam minggu pertama peluncurannya. Single "Super Shy" menjadi nomor satu ketiga mereka di Korea Selatan dan memuncak di berbagai tangga lagu internasional. Grup ini juga mencapai nomor satu pertama mereka di tangga lagu Billboard Emerging Artists. NewJeans tampil di festival-festival internasional, seperti Lollapalooza di Amerika Serikat dan Summer Sonic Festival.'];

let index = 0;

function changeHistory(index) {
    $("#history-text").text(history[index]);
}

$("#prev").click(function() {
    console.log(1);
    index--;
    if (index < 0) {
        index = history.length - 1;
    }

    changeHistory(index);
})

$("#next").click(function() {
    console.log(0);
    index++;
    if (index >= history.length) {
        index = 0;
    }

    changeHistory(index);
})
