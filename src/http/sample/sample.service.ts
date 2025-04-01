import { SampleHttp } from "./sample.http";
import { ISampleService } from "./sample.interface";

export class SampleService implements ISampleService{
    async getPosts(): Promise<any> {
        try {
            const sampleHttp = new SampleHttp();
            const response = await sampleHttp.getPosts();
            return response;
        } catch (error) {
            console.log('ERROR - SampleService : getPosts() \n\n', error);
            throw error;
        }
    }
}