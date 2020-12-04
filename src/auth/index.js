class Auth {
    constructor() {
        this.authenticated = true
    }

    login(callback) {
        this.authenticated = true
        return callback()
    }

    logout(callback) {
        this.authenticated = false
        return callback()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()