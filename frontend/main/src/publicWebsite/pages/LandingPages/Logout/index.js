import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { extractPath } from "utils/extractPath";
import { b_logoutURL, frontendURL } from "urls";


export const Logout = () => {
	const navigate = useNavigate();
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

				if (response.ok) {}
				else {
					console.log("logout not working");
				}
			} catch (e) {
				console.log("logout not working", e);
			}
		})();
		localStorage.clear();
		navigate(extractPath(frontendURL));
	}, []);
	return <div></div>;
};

export default Logout;
