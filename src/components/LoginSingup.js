import { useState } from "react";
import LoginSingup from "./Pages/LoginSingup";


function Authentication() {
const [data, setData] = useState({
name: "",
email: "",
pass: ""
});
const [registered, setRegistered] = useState(false);
const [newdata, setNewData] = useState([]);
const [login, setLogin] = useState({
emailid: "",
password: ""
});

const LoGin = LoginSingup (); 
const handleSave = (e) => {
const { name, value } = e.target;
setData({ ...data, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
if (data.name && data.pass && data.email) {
setNewData((prevnewData) => [...prevnewData, data]);
setData({ name: "", email: "", pass: "" });
setRegistered(true);
alert('Registration successful!');
} else {
alert("Please fill all the fields");
}
};

const handleLogin = (e) => {
const { name, value } = e.target;
setLogin({ ...login, [name]: value });
};

const Log = () => {
const loggedInUser = newdata.find(
(user) => user.email === login.emailid && user.pass === login.password
);
if (loggedInUser) {
alert('Login successful!');
navigate("/dash"); 
} 
else
{
alert('Incorrect email or password.');
setLogin({ emailid: "", password: "" });
}
};

return (
<div className="bg-dark container mt-5">
<div className="main">
{registered ? (
<div>  <h1>LOGIN FORM</h1>
<p>Email:<input value={login.emailid} type="email" name="emailid" onChange={handleLogin} required/></p>
<p>Password:<input value={login.password} type="password" name="password" onChange={handleLogin} required/></p>
<button onClick={Log}>Login</button>
</div>
) : (
<>
<form onSubmit={handleSubmit}>   <h1>REGISTRATION FORM</h1>
<p>Name:<input value={data.name} type="text" name="name" onChange={handleSave} required/></p>
<p>Email:<input value={data.email} type="email" name="email" onChange={handleSave} required/></p>
<p>Password:<input value={data.pass} type="password" name="pass" onChange={handleSave} required/></p>
<button>Register</button>
</form>
</>
)}
</div>
</div>
);
}
export default Authentication;