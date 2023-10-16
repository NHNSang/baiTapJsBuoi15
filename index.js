// Bài tập 1
function tinhDiemUuTienKhuVuc(khuVuc) {
    var diemUuTien = 0;
    if (khuVuc === "A") {
        diemUuTien = 2;
    } else if (khuVuc === "B") {
        diemUuTien = 1;
    } else if (khuVuc === "C") {
        diemUuTien = 0.5;
    } // Nếu khuVuc không thuộc A, B, hoặc C, điểm ưu tiên sẽ là 0

    return diemUuTien;
}

function tinhDiemUuTienDoiTuong(doiTuong) {
    var diemUuTien = 0;
    if (doiTuong === 1) {
        diemUuTien = 2.5;
    } else if (doiTuong === 2) {
        diemUuTien = 1.5;
    } else if (doiTuong === 3) {
        diemUuTien = 0.5;
    } // Cộng thêm điểm ưu tiên đối tượng nếu ko chọn trả kết quả bằng 0

    return diemUuTien;
}

function kiemTraKetQua(diemChuan, diemToan, diemLy, diemHoa, khuVuc, doiTuong) {
    var diemUuTienKhuVuc = tinhDiemUuTienKhuVuc(khuVuc);
    var diemUuTienDoiTuong = tinhDiemUuTienDoiTuong(doiTuong);
    var diemTrungBinh = (diemToan + diemLy + diemHoa) / 3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    if (diemTrungBinh >= diemChuan && diemToan > 0 && diemLy > 0 && diemHoa > 0) {
        return ["Đậu", diemTrungBinh];
    } else {
        return ["Rớt", diemTrungBinh];
    }
}
document.getElementById("tinhDiem").onclick = function(){
    // Nhập thông tin
    var diemChuan = 5; // Điểm chuẩn của hội đồng
    var diemToan = document.getElementById("diemToan").value*1;   // Điểm Toán
    var diemLy = document.getElementById("diemLy").value*1;     // Điểm Lý
    var diemHoa = document.getElementById("diemHoa").value*1;     // Điểm Hóa
    var khuVuc = document.getElementById("khuVuc").value*1;    // Khu vực (A, B, C, X)
    var doiTuong = document.getElementById("doiTuong").value*1;    // Đối tượng (1, 2, 3)

    // Kiểm tra kết quả
    var ketQua = kiemTraKetQua(diemChuan, diemToan, diemLy, diemHoa, khuVuc, doiTuong);
    document.getElementById("ketQuaKiThi").innerHTML = "Kết quả: " + ketQua[0] + " Tổng điểm đạt được: " + ketQua[1]
    console.log("Kết quả: " + ketQua[0]);
    console.log("Tổng điểm đạt được: " + ketQua[1]);
}


// Bài tập 2
function tinhGiaTienDien(soKWh) {
    var giaTien = 0;

    if (soKWh <= 50) {
        giaTien = soKWh * 500;
    } else if (soKWh <= 100) {
        giaTien = 50 * 500 + (soKWh - 50) * 650;
    } else if (soKWh <= 150) {
        giaTien = 50 * 500 + 50 * 650 + (soKWh - 100) * 850;
    } else {
        giaTien = 50 * 500 + 50 * 650 + 50 * 850 + (soKWh - 150) * 1100;
    }

    return giaTien;
}

document.getElementById("tinhTienDIen").onclick = function () {
    var tenKhachHang = document.getElementById("tenKhachHang").value;
    var soKWh = Number(document.getElementById("soKWh").value);
    
    var giaTien = tinhGiaTienDien(soKWh);

    document.getElementById("ketQuaGiaTienDien").innerHTML = "Tiện điện của bạn là " + giaTien.toLocaleString() + " VND";
};

// Bài 3
function tinhThueThuNhap(tongThuNhap, soNguoiPhuThuoc) {
    var mienThue = 4; // Số tiền miễn thuế 4 triệu VND
    var mienThueNguoiPhuThuoc = 1.6; // Số tiền miễn thuế cho mỗi người phụ thuộc 1.6 triệu VND

    // Tính thuế thu nhập cá nhân
    var thuNhapChiuThue = tongThuNhap - mienThue - soNguoiPhuThuoc * mienThueNguoiPhuThuoc;
    var thueThuNhap = 0;

    if (thuNhapChiuThue <= 60) {
        thueThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thueThuNhap = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.10;
    } else if (thuNhapChiuThue <= 210) {
        thueThuNhap = 60 * 0.05 + 60 * 0.10 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thueThuNhap = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.20;
    } else if (thuNhapChiuThue <= 624) {
        thueThuNhap = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thueThuNhap = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.30;
    } else {
        thueThuNhap = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (thuNhapChiuThue - 960) * 0.35;
    }

    return thueThuNhap;
}


document.getElementById("tinhThueButton").onclick = function () {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    var thueThuNhap = tinhThueThuNhap(tongThuNhap, soNguoiPhuThuoc);

    document.getElementById("ketQuaThueThuNhap").innerHTML = thueThuNhap + " triệu VND";
};

// Bài tập 4
document.getElementById("loaiKhachHang").addEventListener("change", function() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoiInput = document.getElementById("soKetNoi");

    if (loaiKhachHang === "doanhNghiep") {
        soKetNoiInput.removeAttribute("disabled");
    } else {
        soKetNoiInput.disabled = true;
        soKetNoiInput.value = "";
    }
});
document.getElementById("tinhHoaDon").addEventListener("click", function() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseFloat(document.getElementById("soKetNoi").value) || 0;
    var soKenhCaoCap = parseFloat(document.getElementById("soKenhCaoCap").value) || 0;

    var phiXuLyHoanDon = (loaiKhachHang === "nhaDan") ? 4.5 : 15;
    var phiXuLyCoBan = (loaiKhachHang === "nhaDan") ? 20.5 : 75 + 5 * (soKetNoi - 10);
    var thueKenhCaoCap = (soKenhCaoCap * 7.5) + ((loaiKhachHang === "doanhNghiep") ? soKenhCaoCap * 50 : 0);

    var tongTien = phiXuLyHoanDon + phiXuLyCoBan + thueKenhCaoCap;
    document.querySelector(".anBaiTap").style.display = "block";
    document.getElementById("phiXuLyHoanDon").textContent = `$${phiXuLyHoanDon.toFixed(2)}`;
    document.getElementById("phiXuLyCoBan").textContent = `$${phiXuLyCoBan.toFixed(2)}`;
    document.getElementById("thueKenhCaoCap").textContent = `$${thueKenhCaoCap.toFixed(2)}`;
    document.getElementById("tongTien").textContent = `$${tongTien.toFixed(2)}`;
});
