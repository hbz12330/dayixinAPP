var btn = document.getElementById('login');
btn.onclick = function() {
    var uname = document.getElementById('account').value;
    var upwd = document.getElementById('password').value;
    var phone = document.getElementById('number').value;
    var cpwd = document.getElementById('cpassword').value;
    if (!uname) {
        mui.toast('注册用户不能为空');
        return;
    } else if (!upwd) {
        mui.toast('密码不能为空');
        return;
    } else if (upwd !== cpwd) {
        mui.toast('两次密码不一致，请先检查您的输入');
        return;
    } else if (!phone) {
        mui.toast('请输入您的联系电话');
        return;
    } else {
        var params = new URLSearchParams();
        params.append('uname', uname);
        params.append('upwd', upwd);
        params.append('phone', phone);
        axios({
            url: 'http://192.168.101.21:3000/reg',
            method: 'post',
            params,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(result => {
            /*if(result.data='注册成功'){
             mui.toast('恭喜您注册成功，请记住用户名：'+uname)	
            }else if(result.data='为空'){
              mui.toast('注册失败，请检查')	;
              return;
            }*/
            console.log(result.data);
            if (result.data == '用户已经存在' || result.data == '为空') {
                mui.toast('注册失败，请检查');
                return;
            } else {
                mui.toast('恭喜您注册账号成功，您的账号：' + uname)
            }
        })
    }
};
var login = document.getElementById('logina');
login.onclick = function() {
    setTimeout('javascript:location.href="login.html"', 2000);
};
var wm = document.getElementById('forgetPassword');
wm.onclick = function() {
    mui.confirm('如果您忘记密码，请联系程序管理员微信：13434936534进行找回密码，找回后请重置！', '忘记密码', ['取消', '确定'])
}