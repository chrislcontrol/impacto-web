import { SendContactResponse } from "../types";
import { toast } from 'react-toastify';



export type Contact = {
    name: string,
    phone: {
        code: string, 
        number: string
    },
    email: string,
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
            if (response.ok) {
                toast.success('Contato enviado com sucesso.')
                return response.json()
            }
            throw response
        })
        .catch(error => {
            toast.error('Não foi possível enviar seu contato. Tente enviar uma mensagem pelo WhatsApp.')
            throw error
        })
}
