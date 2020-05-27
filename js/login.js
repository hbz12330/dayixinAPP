var btn = document.getElementById('login');
btn.onclick = function() {
    var uname = document.getElementById('account').value;
    var upwd = document.getElementById('password').value;
    var params = new URLSearchParams();
    if (!uname) {
        mui.toast('用户名不能为空');
        return;
    } else if (!upwd) {
        mui.toast('用户密码不能为空');
        return;
    } else {
        params.append('uname', uname);
        params.append('upwd', upwd);
        axios({
            url: 'http://192.168.101.21:3000/login',
            method: 'post',
            params,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(result => {
            if (result.data == '失败') {
                mui.toast('登陆失败，请检查您的输入');
                return;
            } else if (result.data == '管理') {
                setTimeout('javascript:location.href="。。/../html/index.html"', 2000);
            } else {
                setTimeout('javascript:location.href="。。/../html/index1.html"', 2000);
            }
        })
    }
};
var zc = document.getElementById('reg');
zc.onclick = function() {
    setTimeout('javascript:location.href="reg.html"', 2000);
};
var wm = document.getElementById('forgetPassword');
wm.onclick = function() {
    mui.confirm('如果您忘记密码，请联系程序管理员微信：13434936534进行找回密码，找回后请重置！', '忘记密码', ['取消', '确定'])
}