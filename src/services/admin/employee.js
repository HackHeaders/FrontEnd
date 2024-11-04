import { api } from '@/plugins'

class EmployeeService {
    async getEmployees(){
        try{
            const response = await api.get('employee');
            return response.data;
        }catch(error){
            console.error(error);
        }
    }

    async createEmployee(data) {
        try {
            const response = await api.post('employee', data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async updateEmployee(id, data) {
        try {
            const response = await api.put(`employee/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteEmployee(id) {
        try {
            const response = await api.delete(`employee/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new EmployeeService();