// TypeScript code to update data using the fetch API

document.addEventListener("DOMContentLoaded", () => {
    const localStorageData: string | null = localStorage.getItem("userData");
    const dataUser = JSON.parse(localStorageData || "{}");
    const { id } = dataUser;
    const successSpan = document.getElementById(
      "updateUserSuccess"
    ) as HTMLSpanElement;
    const form = document.getElementById(
      "profileForm"
    ) as HTMLFormElement;
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const username = (
        document.getElementById("usernameUpdate") as HTMLInputElement
      ).value;
  
      const formData = {
        username: username,
      };
  
      console.log(formData);
  
      try {
        const response = await fetch(`http://localhost:5001/api/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Username updated:", data);
          successSpan.textContent = "Username updated successfully!";
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          console.error("Error updating username:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating username:", error);
      }
    });
  });
  