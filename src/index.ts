// const submit = document.getElementById("signinButton");

//               submit.on("click", (e) => {
//                 e.preventDefault();
//                 const username = document.getElementById("username").value;
//                 const password = document.getElementById("password").value;

//                 const loginData = {
//                   username: username,
//                   password: password,
//                 };

//                 fetch("https://financial-app.avicena.dev/api/auth/login", {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(loginData),
//                 })
//                   .then((response) => response.json())
//                   .then((data) => {
//                     // Handle the response from the API
//                     console.log(data); // You can process the data here
//                     Swal.fire({
//                       title: "Success Logged in",
//                       text: "You have successfully logged in.",
//                       icon: "success",
//                       confirmButtonText: "OK",
//                     });
//                   })
//                   .catch((error) => {
//                     console.error("Error:", error);
//                     Swal.fire({
//                       title: "Wrong Credentials!",
//                       text: "Email/passwords are incorrect, please try again.",
//                       icon: "failed",
//                       confirmButtonText: "OK",
//                     });
//                   });
//               });
