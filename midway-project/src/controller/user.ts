Demo = (values) => {
if (values) {
    
    const {username,password}=values 
    axios({
        url:"http://localhost:3000/vips",
        params:{
            username:username,
            userpass:password
        }
    })
    .then(res=>{
        if(res.data.length==1){  
            message.success("登录成功");
            localStorage.setItem("username",username);
            sessionStorage.setItem("allPaths",JSON.stringify(res.data[0].privilege))
        }else{
            message.success("账号或密码不正确")
        }
    })
    }else{
        console.log('验证失败')
    }
}