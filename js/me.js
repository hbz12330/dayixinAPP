window.onload = function() {
    axios({
        url: 'http://192.168.101.21:3000/me',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }).then(result => {
        var yh = document.querySelector('div.yh');
        var dengji;
        if (result.data[0].grade == 1) {
            dengji = '管理员'
        } else if (result.data[0].grade == 0) {
            dengji = '普通用户'
        } else {
            dengji = '未知用户等级'
        }
        yh.innerHTML = `<div class='yhm'><span>当前登陆用户：</span><span>` + result.data[0].uname + `</span></div>
        <div class="qf"></div><div class="tel"><span>您的联系电话：</span><span>` + result.data[0].phone + `</span></div>
        <div class="qf"></div><div class="tel"><span>用户等级：</span><span>` + dengji + `</span></div>`
    })
}