export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
    bio: string

    constructor (id: number, email: string, firstName: string, lastName: string, bio: string) {
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        
    }
}