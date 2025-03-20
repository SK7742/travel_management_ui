import axios from 'axios';

export default class LoginService {
    static USER_LOGIN_API_BASE_URL = "http://localhost:8080/login-controller/login";

    static async login(username, password) {
        try {
            const response = await axios.post(this.USER_LOGIN_API_BASE_URL, {
                username,
                password,
            });

            if (response.status === 200) {
                // Assuming the backend sends a token or user data upon successful login
                const { token, user } = response.data;
                // Store token in localStorage or sessionStorage
                localStorage.setItem('authToken', token);
                return { success: true, user };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    }

    static logout() {
        // Clear token from storage
        localStorage.removeItem('authToken');
    }

    static isAuthenticated() {
        // Check if token exists in storage
        return !!localStorage.getItem('authToken');
    }
}