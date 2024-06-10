import axios from 'axios';
import { Image } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';



export const fetchImages = async(searchQuery:string, page: number) :Promise<Image[]> => {

 

    const response = await axios.get('?client_id=2eiybNV2jmYvvCmeSq4k0xXVz8Fb4618IbCurb7k5wI'
        , {
        params: {
                query: searchQuery,
                per_page: 20,
                page: page,
           
           
        }
        }
    )
    return response.data;
   
}