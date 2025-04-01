import { GET_POSTS } from "../../constants";
import axios from '../../shared/http-service';

export class SampleHttp {
    public async getPosts() {
        try {
            const url = GET_POSTS
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.log('ERROR - SampeHttp : getPosts() \n\n', error);
            throw error;
        }
    }
}