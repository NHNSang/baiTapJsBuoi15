// Bài tâp 1
document.getElementById("tinhTien").onclick = function () {

    const soLuong1Ngay = 100000;

    var soNgayLam = document.getElementById("soNgayLam").value;
    console.log(soNgayLam)

    var tongTienBài1 = soLuong1Ngay * soNgayLam;
    console.log(tongTienBài1)


    document.getElementById("soTienNhan").innerHTML = tongTienBài1.toLocaleString();

}

// Bài tập 2
document.getElementById("tinhTrungBinh").onclick = function () {

    const soChia = 5;

    // Số thực 1
    var soThuc1 = document.getElementById("soThuc1").value

    var ketQuaSoThuc1 = soThuc1 / soChia;
    console.log(ketQuaSoThuc1)

    // Số thực 2
    var soThuc2 = document.getElementById("soThuc2").value

    var ketQuaSoThuc2 = soThuc2 / soChia;
    console.log(ketQuaSoThuc2)

    // Số thực 3
    var soThuc3 = document.getElementById("soThuc3").value

    var ketQuaSoThuc3 = soThuc3 / soChia;
    console.log(ketQuaSoThuc3)

    // Số thực 4
    var soThuc4 = document.getElementById("soThuc4").value

    var ketQuaSoThuc4= soThuc4 / soChia;
    console.log(ketQuaSoThuc4)
    
    // Số thực 5
    var soThuc5 = document.getElementById("soThuc5").value

    var ketQuaSoThuc5= soThuc5 / soChia;
    console.log(ketQuaSoThuc5)

    var ketQuaTrungBinh = ketQuaSoThuc1 + ketQuaSoThuc2 + ketQuaSoThuc3 + ketQuaSoThuc4 + ketQuaSoThuc5;

    document.getElementById("ketQuaTrungBinh").innerHTML = ketQuaTrungBinh;

}

// Bài tập 3
document.getElementById("quyDoi").onclick = function () {

    const giaUsd = 23500;

    var nhapSoTien = document.getElementById("nhapSoTien").value;

    var tongTienBai2 = giaUsd * nhapSoTien;
    console.log(tongTienBai2)

    document.getElementById("tongTienQuyDoi").innerHTML = tongTienBai2.toLocaleString();
}

// Bài tập 4
document.getElementById("tinhDienTich").onclick = function () {

    var chieuDai = document.getElementById("chieuDai").value;

    var chieuRong = document.getElementById("chieuRong").value;

    var congThucDienTich = chieuDai * chieuRong

    document.getElementById("ketQuaDienTich").innerHTML = congThucDienTich;

    document.getElementById("goiYdienTich").innerHTML = "(Công thức: dài * rộng)";
}
document.getElementById("tinhChuVi").onclick = function () {

    var chieuDai = document.getElementById("chieuDai").value;

    var chieuRong = document.getElementById("chieuRong").value;

    var congThucChuVi = (chieuDai + chieuRong) * 2

    document.getElementById("ketQuaChuVi").innerHTML = congThucChuVi;

    document.getElementById("goiYchuVi").innerHTML = "(Công thức: (dài + rộng) * 2)";
}

// Bài tập 5
document.getElementById("tinhTong2KiSo").onclick = function () {
    

    var nhapSo = document.getElementById("nhapSo").value;

    var soHangChuc = Math.floor(nhapSo / 10);
    console.log(soHangChuc)

    var soHangDonVi = Math.floor(nhapSo % 10);
    console.log(soHangDonVi);

    var tongHaiKiSo = soHangChuc + soHangDonVi;

    document.getElementById("tongHaiKiSo").innerHTML = tongHaiKiSo;

}