window.onload = function() {
    axios({
        url: 'http://192.168.101.21:3000/sphop',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        var th = document.querySelector('div.qnr');
        for (var i = 0; i < result.data.length; i++) {

            th.innerHTML += `<div class="neirong"><div id="xuhao">` + parseInt(i + 1) + `</div><div id="sname">` + result.data[i].sname + `</div><div id="price">` + result.data[i].price + `</div></div> `
        };
    });
    var ok = document.getElementById('ok');
    ok.onclick = function() {
        axios({
            url: 'http://192.168.101.21:3000/me',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(result => {
            if (result.data == "未登录") {
                mui.toast('未登录，无法跳转');
                return;
            } else {
                setTimeout('javascript:location.href="me.html"', 2000);
            }
        })
    }
    axios({
        url: 'http://192.168.101.21:3000/time',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        var id = document.querySelector("div.gtime");
        id.innerHTML += `本表数据更新于:` + result.data[0].daty
    })
}