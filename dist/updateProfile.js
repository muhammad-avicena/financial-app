"use strict";
// TypeScript code to update data using the fetch API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const localStorageData = localStorage.getItem("userData");
    const dataUser = JSON.parse(localStorageData || "{}");
    const { id } = dataUser;
    const successSpan = document.getElementById("updateUserSuccess");
    const form = document.getElementById("profileForm");
    const endpoint = `http://localhost:5001/api/user/${id}`;
    function fetchUserData(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(endpoint);
                const data = yield response.json();
                return data.user.username;
            }
            catch (error) {
                console.error("Error fetching user data:", error);
                throw error;
            }
        });
    }
    function updateUsernamePlaceholder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = yield fetchUserData(endpoint);
                const usernameInput = document.getElementById("usernameUpdate");
                usernameInput.placeholder = userData;
            }
            catch (error) {
                console.error("Error updating username placeholder:", error);
            }
        });
    }
    updateUsernamePlaceholder();
    form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const username = document.getElementById("usernameUpdate").value;
        const formData = {
            username: username,
        };
        console.log(formData);
        try {
            const response = yield fetch(`http://localhost:5001/api/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = yield response.json();
                console.log("Username updated:", data);
                successSpan.textContent = "Username updated successfully!";
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
            else {
                console.error("Error updating username:", response.statusText);
            }
        }
        catch (error) {
            console.error("Error updating username:", error);
        }
    }));
});
