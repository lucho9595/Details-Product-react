export const getProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const info = await response.data;
        return info;
    } catch (error) {
        console.log(error)
    }
};

export const getProductById = (id) => {
    return data.find(product => product.id == id);
};
