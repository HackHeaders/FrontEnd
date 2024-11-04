import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { EmployeeService } from "@/services";

export const useEmployeeStore = defineStore("employee",
    () => {
        const state = reactive({
            employees: [],
            employee: reactive({
                "cpf": 0,
                "name": "",
                "email": "",
                "date_birth": null,
                "username": "",
                 "address": {
                    "cep": 0,
                    "street": "",
                    "number": 0,
                    "complement": "",
                    "neighborhood": "",
                    "city": "",
                    "state": "",
                    },
                "telephone": "",
                "office": 1,
                "date_admission": null,
                "date_resignation": null
            }),
            loading: false,
            error: null
        });
        const isLoading = computed(() => state.loading);
    
        const getEmployees = async () => {
            state.loading = true;
            try {
                state.forms = await EmployeeService.getEmployees();
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const createEmployee = async (newEmployee) => {
            state.loading = true;
            try {
                state.employees.push(await EmployeeService.createEmployee(newEmployee));
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const updateEmployee = async (employee) => {
            state.loading = true;
            try {
                const index = state.employees.findIndex((s) => s.id === employee.id);
                state.employees[index] = await EmployeeService.updateEmployee(employee);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const deleteEmployee = async (id) => {
            state.loading = true;
            try {
                const index = state.employees.findIndex((s) => s.id === id);
                state.employees.splice(index, 1);
                await EmployeeService.deleteEmployee(id);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        return {
            state,
            isLoading,
            getEmployees,
            createEmployee,
            updateEmployee,
            deleteEmployee,
        };
    }
)