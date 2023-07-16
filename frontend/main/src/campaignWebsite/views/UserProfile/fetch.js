// function fetchData(){
// 		fetch(b_userProfileURL(), {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json",
// 				"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
// 			},
// 			body: JSON.stringify({
// 				access_token: localStorage.getItem("access_token"),
// 			}),
// 		}).then(response => {
// 			if (response.status === 401) {
// 				window.location.href = f_loginURL();
				
// 			} else {
// 				return response.json();
// 			}
// 		})
// 		  .then((state) => {
// 			  setLogin(state.username);
// 			  setFirstName(state.first_name);
// 			  setLastName(state.last_name);
// 			  setEmail(state.email);
// 			  setPhoneNumber(state.phone_number);
// 			  setAddress(state.address);
// 			  setCity(state.city);
// 			  setCountry(state.country);
// 			  setPostalCode(state.postal_code);
// 			  setProfileDescription(state.profile_description);
// 		  })
// 		  .catch(error => {
// 			  // Obsługa innych błędów
// 			  console.error(error);
// 		  });

// }

// export {
// 	fetchData,
// }
