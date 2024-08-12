// Mac dinh
document.getElementById("showcart").style.display = "none";

// on click
function showcart() {
    var x = document.getElementById("showcart");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function () {
    $('#btnThem1').click(function (e) {
        themVaoGioHang('name1', 'money1');
    });

    $('#btnThem2').click(function (e) {
        themVaoGioHang('name2', 'money2');
    });

    $('#btnThem3').click(function (e) {
        themVaoGioHang('name3', 'money3');
    });

    $('#btnThem4').click(function (e) {
        themVaoGioHang('name4', 'money4');
    });

    $('#btnThem5').click(function (e) {
        themVaoGioHang('name5', 'money5');
    });

    $('#btnThem6').click(function (e) {
        themVaoGioHang('name6', 'money6');
    });

    $('#btnThem7').click(function (e) {
        themVaoGioHang('name7', 'money7');
    });

    $('#btnThem8').click(function (e) {
        themVaoGioHang('name8', 'money8');
    });
});

function themVaoGioHang(nameId, moneyId) {
    let ten = $('#' + nameId).text();
    let gia = $('#' + moneyId).text();
    let giaInt = parseInt(gia.replace(/\./g, ''), 10); // Đảm bảo chuyển đổi đúng với cơ số 10
    let trnew = "<tr><td>" + ten + "</td><td>" + giaInt + "</td><td><button onclick='xoa(this)'>Xóa</button></td></tr>";
    $('#tbl').append(trnew);
    tongCong();
}

function xoa(x) {
    var tr = x.parentElement.parentElement;
    tr.remove();
    tongCong();
}

function tongCong() {
    var giohang = document.getElementById("tbl"); // Đúng id của bảng
    var tr = giohang.getElementsByTagName("tr");
    var tong = 0;
    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        if (td.length > 1) {
            var tien = parseInt(td[1].textContent.replace(/\./g, ''), 10);
            tong += isNaN(tien) ? 0 : tien; // Đảm bảo chỉ cộng số hợp lệ
        }
    }
    document.getElementById("thanhtien").innerHTML = tong;
}
