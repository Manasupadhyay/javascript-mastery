import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js'
const form1 = document.querySelector(".signup-form");
const form2 = document.querySelector(".signin-form");
const modals = document.querySelectorAll(".modal");
console.log(modals);
const signOutElement = document.querySelector(".signOut");
// // console.log(form);
const auth = getAuth();

form1.addEventListener("submit", (e)=>{
e.preventDefault();
signup();
})

form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    login();
    })
    
signOutElement.addEventListener("click", (e)=>{
    signOutUser();
})

async function signup(){
    let signupEmail = document.querySelector("#signUpEmail");
    let signupPassword = document.querySelector("#signUpPassword");
    // console.log(signupEmail.value,signupPassword.value);
    
    try{
        // const auth = getAuth();
        console.log(auth)
        const result = await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value);
        M.toast({html: `welcome ${result.user.email}`, classes:"green"});
        console.log(result);
    }
    catch(error){ 
        
        M.toast({html: error.message, classes:"red"});
    }
    signupEmail.value = "";
    signupPassword.value = "";

    let instance = M.Modal.getInstance(modals[0]);
    instance.close();
};


async function login() {
    let loginEmail = document.querySelector("#loginEmail");
    let loginPassword = document.querySelector("#loginPassword");
    console.log(loginEmail.value, loginPassword.value);
    try{
        // const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth,loginEmail.value, loginPassword.value);
        console.log(result);
        M.toast({html: `welcome ${result.user.email}`, classes:"green"});
    }
    catch(err){
        console.log(err);
        M.toast({html: err.message, classes:"red"});
    }

    loginEmail.value = "";
    loginPassword.value = "";
    let instance = M.Modal.getInstance(modals[1]);
    instance.close();
}

async function signOutUser(){
  
        // const auth = getAuth();
        const result = await signOut(auth);
    }


onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          console.log(user);
        //   M.toast({html: "state changed", classes:"green"});
          // ...
        }
        
         else {
          // User is signed out
          console.log(user)
          M.toast({html: "user signout", classes:"red"});
          // ...
        }
});