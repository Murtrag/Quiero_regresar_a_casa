import { useEffect } from "react";
import { b_logoutURL, frontendURL } from "urls";


export const Logout = () => {
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(b_logoutURL(), {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
					},
					body: JSON.stringify({
						refresh_token: localStorage.getItem("refresh_token"),
					}),
				});

				if (response.ok) {
					localStorage.clear();
					window.location.href = frontendURL;
				} else {
					console.log("logout not working");
				}
			} catch (e) {
				console.log("logout not working", e);
			}
		})();
		localStorage.clear();
		window.location.href = frontendURL;
	}, []);

	return <div></div>;
};

export default Logout;
