import { useEffect } from "react";


export const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(logoutURL(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: localStorage.getItem("refresh_token"),
          }),
          credentials: "include",
        });

        if (response.ok) {
          localStorage.clear();
          window.location.href = "/login";
        } else {
          console.log("logout not working");
        }
      } catch (e) {
        console.log("logout not working", e);
      }
    })();
  }, []);

  return <div></div>;
};

