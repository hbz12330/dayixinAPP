window.onload = function() {
    var date = new Date();
    var year = date.getFullYear(); //年份
    var month = date.getMonth(); //月份
    var daty = date.getDate(); //获取日期
    var id = document.querySelector("div.gtime");
    id.innerHTML = '更新时间：' + year + '年' + month + '月' + daty + '日';
    var th = document.querySelector('div.qnr');
    /*for(var i=0;i<=30;i++){
    	th.innerHTML+=`<div class="neirong"><div id="xuhao">1</div><div id="sname">软双喜</div><div id="price"><input type="number" value="110.5" /></div></div> `
    }*/
    axios({
        url: 'http://192.168.101.21:3000/sphop/upd',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        for (var i = 0; i < result.data.length; i++) {

            th.innerHTML += `<div class="neirong"><div id="xuhao">` + parseInt(i + 1) + `</div><div id="sname"><input id="` + result.data[i].id + `" oninput='nb(event)' type="text" value="` + result.data[i].sname + `"/>` + `</div><div id="price"><input id="` + result.data[i].id + `" oninput='yz(event)' min='0' type="number" value="` + result.data[i].price + `"/></div></div> `
        };
    })
}
var sr = document.getElementById('zja');
var th = document.querySelector('div.qnr');
zja.onclick = function() {
    axios({
        url: 'http://192.168.101.21:3000/sphop/add',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        if (result.data == '成功') {
            axios({
                url: 'http://192.168.101.21:3000/sphop/upd',
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then(result => {
                th.innerHTML = '';
                for (var i = 0; i < result.data.length; i++) {

                    th.innerHTML += `<div class="neirong" ><div id="xuhao">` + parseInt(i + 1) + `</div><div id="sname"><input id="` + result.data[i].id + `" oninput='nb(event)' type="text" value="` + result.data[i].sname + `"/>` + `</div><div id="price"><input id="` + result.data[i].id + `" oninput='yz(event)' min='0' type="number" value="` + result.data[i].price + `"/></div></div> `
                };
            })
        } else if (result.data == '无法添加数据') {
            setTimeout('javascript:location.href="../login.html"', 2000);
        }
    })
}

function yz(e) {
    var pid = e.target.id;
    var price = e.target.value;
    var min = 0;
    if (!price) {
        mui.toast('输入的价格参数有误');
        return;
    } else {
        var params = new URLSearchParams();
        params.append('pid', pid);
        params.append('price', price);
        axios({
            url: 'http://192.168.101.21:3000/sphop/xasy',
            method: 'post',
            params,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(result => {
            console.log(result)
        })
    }
}

function nb(e) {
    var pid = e.target.id;
    var sname = e.target.value;
    if (!sname) {
        mui.toast('请输入要修改的名称，不能为空');
        return;
    } else {
        var params = new URLSearchParams();
        params.append('pid', pid);
        params.append('sname', sname);
        axios({
            url: 'http://192.168.101.21:3000/sphop/xnc',
            method: 'post',
            params,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(result => {
            console.log(result)
        })
    }
}
var cz = document.querySelector('.cz');
cz.onclick = function() {
    var id = document.querySelectorAll('.neirong')
    for (var i = 0; i < id.length; i++) {
        id[i].children[2].children[0].value = 0;
    }
};
var ok = document.getElementById('ok');
ok.onclick = function() {
    axios({
        url: 'http://192.168.101.21:3000/time/xtime',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        if (result.data == '完成') {
            setTimeout('javascript:location.href="index1.html"', 2000);
        }
    })
}
var del = document.getElementById('del');
del.onclick = function() {
    axios({
        url: 'http://192.168.101.21:3000/sphop/del',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        if (result.data == '删除成功') {
            axios({
                url: 'http://192.168.101.21:3000/sphop/upd',
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then(result => {
                th.innerHTML = '';
                for (var i = 0; i < result.data.length; i++) {

                    th.innerHTML += `<div class="neirong" ><div id="xuhao">` + parseInt(i + 1) + `</div><div id="sname"><input id="` + result.data[i].id + `" oninput='nb(event)' type="text" value="` + result.data[i].sname + `"/>` + `</div><div id="price"><input id="` + result.data[i].id + `" oninput='yz(event)' min='0' type="number" value="` + result.data[i].price + `"/></div></div> `
                };
            })
        }
    })
}