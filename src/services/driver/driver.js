import { api } from '@/plugins'

class DriverService {
    async getDrivers(){
        try{
            const response = await api.get('driver');
            return response.data;
        }catch(error){
            console.error(error);
        }
    }

    async createDriver(data) {
        try {
            const response = await api.post('driver', data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async updateDriver(id, data) {
        try {
            const response = await api.put(`driver/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteDriver(id) {
        try {
            const response = await api.delete(`driver/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new DriverService();