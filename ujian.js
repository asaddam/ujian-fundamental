//jawaban Nomor 1
function lelang(menit){
    var zm = 10000
    for(var i = 0; i<menit; i++){
        if(i< menit && i % 4 != 0){
            zm += (zm*20/100)
        }else if(i % 4 == 0){
            zm += (zm*10/100)
        }
    }
if(zm >= 30000000){
    return 'menit ke ' + menit + ' barang sudah terjual'
}else{
    return 'menit ke ' + menit + 'hasilnya ' + Math.ceil(zm)
}
}

console.log(lelang(50))

//jawaban Nomor 3

var sen = [25, 10, 5, 1]

function cekkoin(koin){
    var output = 0
    for(var i =0; i<sen.length; i++){
        if(0 < koin - sen[i] != 0 ){
            output += 1
        }
    }
    return output
}

console.log(cekkoin(31))
