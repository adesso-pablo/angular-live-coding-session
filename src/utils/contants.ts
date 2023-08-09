export const API_URL = 'https://fakestoreapi.com'

export const API_METHODS = {
    ALL_PRODUCTS: { method: 'GET', url: `${API_URL}/products` },
    GET_PRODUCT: { method: 'GET', url: '/products/:id' },
    ADD_PRODUCT: { method: 'POST', url: '/products' }
}
