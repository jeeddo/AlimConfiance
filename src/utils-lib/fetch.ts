import { BACKEND_BASE_URL } from "./constants";

const fetchData = async <T extends object>(urlPath: string): Promise<T | undefined> => {
    try {
        const api = await fetch( BACKEND_BASE_URL + urlPath);
        if (!api.ok) throw new Error(api.status + '')
        const response = await api.json()  
        return response   
    } catch (error) {
        if (error instanceof Error) window.console.error(error.message)
    }
}

export default fetchData;