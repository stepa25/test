import axios from "axios"

interface IDataPizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
    count: number;
}

class pizzaService {
    private url = 'https://65ddf541dccfcd562f55f1d9.mockapi.io/items'

    async getAll() {
        try {
            return await axios.get<IDataPizza[]>(this.url)
        } catch (error) {
            console.log("ошибка", error)
        }
    }
}

export default new pizzaService()