import { SendContactResponse } from "../types";



export type Contact = {
    name: string,
    phone: {
        code: string, 
        number: string
    },
    email: string | null,
    city: string,
    state: string,
    message: string, 
    vehicle: string
}


export async function sendContact(contact: Contact): Promise<SendContactResponse> {
    const url = import.meta.env.VITE_BACKEND_URL
    return fetch(
        `${url}/api/v1/contacts`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        }
    )

        .then(response => {
            if (response.ok) { return response.json() }
            throw response
        })
        .catch(error => {
            console.log(error)
            throw error
        })
}
