export const apiCall = ({ url, method, data }: { url: string, method: string, data?: any }) => fetch(url, method === 'POST' ? {
    method,
    body: JSON.stringify(data)
} : {})
    .then(res => res.json())