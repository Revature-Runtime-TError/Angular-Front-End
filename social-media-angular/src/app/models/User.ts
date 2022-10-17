export default class User {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    bio: string

    constructor (id: number, email: string, password: string, firstName: string, lastName: string, bio: string) {
        this.id = id
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        
    }
}