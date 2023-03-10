
//document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
/**
 * const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 */

function setCookie(){
    const data = document.getElementById("inputCookie").value;
    //console.log(data);
    console.log(document.cookie);
    document.cookie = "cookieName="+data;
    document.getElementById("inputCookie").value = "";
    alert("session sucessfully created")
}

function getCookie(){
    const cookieData = document.cookie.split("=");
    //console.log(cookieData)
    document.getElementById("get-cookie").innerHTML = cookieData[1];
}

function setSession(){
    const data = document.getElementById("inputSession").value;
    //console.log(data);
    sessionStorage.setItem("name", data);
    document.getElementById("inputSession").value = "";
    alert("session sucessfully created")
}

function getSession(){
    const sessionData = sessionStorage.getItem("name");
    document.getElementById("get-session").innerHTML = sessionData;
}

function setLocalStore(){
    const data = document.getElementById("inputData").value;
    localStorage.setItem("name",data);
    document.getElementById("inputData").value = "";
    alert("Data stored sucessfully created")
}

function getLocalData(){
    const data = localStorage.getItem("name");
    document.getElementById("get-data").innerHTML = data;
}