const firebaseConfig = {
  apiKey: "AIzaSyBT9wina7wSgzTKEPryFh6Vxsc1bILTCRs",
  authDomain: "complain-e707c.firebaseapp.com",
  databaseURL: "https://complain-e707c-default-rtdb.firebaseio.com",
  projectId: "complain-e707c",
  storageBucket: "complain-e707c.appspot.com",
  messagingSenderId: "372267327155",
  appId: "1:372267327155:web:af865583e0b8e01042dac6"
};

  // Initialize Firebase
  const frb = firebase.initializeApp(firebaseConfig);
  // console.log(fb.database)  
  firebase.database().ref("todos").on("child_added",(data)=>{
    let liElement= document.createElement("li");
    let liText=document.createTextNode(data.val().name);
    liElement.appendChild(liText);
    //delete button
    let delbtn=document.createElement("button");
    let delBtnText=document.createTextNode("Delete");
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.setAttribute("id",data.val().key)
    delbtn.appendChild(delBtnText);
    liElement.appendChild(delbtn);
// edit button
let editbtn=document.createElement("button");
let editBtnText=document.createTextNode("Edit");
editbtn.appendChild(editBtnText);
liElement.appendChild(editbtn);
editbtn.setAttribute("onclick","editItem(this)")
editbtn.setAttribute("id",data.val().key)
    list.appendChild(liElement);

      
  })
 
  function addtodo()
  {
    let key=firebase.database().ref("todos").push().key;    
  
    let list=document.getElementById('list');
    let input=document.getElementById('inputField');
    let obj ={
      name:input.value,
      key:key
    }
    firebase.database().ref("todos").child(key).set(obj)

  
}
function deleteItem(a)
{
  a.parentNode.remove()
  firebase.database().ref("todos").child(a.id).remove()
}
function editItem(a)
{
  let user=prompt("value ")
  let editV={
    name:user,
    key:a.id,
  }
  firebase.database().ref("todos").child(a.id).set(editV)
  a.parentNode.firstChild.nodeValue=user
}

  function deleteALL()
  {

  }