import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { DriverService } from "@/services";

export const useDriverStore = defineStore("driver",
    () => {
        const state = reactive({
            drivers: [],
            driver: reactive({
                cnh: '',
                type_cnh: '',
                cpf: 0,
                name: '',
                email: '',
                date_birth: 0,
                username: '',
                address: {
                    cep: 0,
                    street: '',
                    number: 0,
                    complement: '',
                    neighborhood: '',
                    city: '',
                    state: '',
                },
                telephone: 0,
            }),
            loading: false,
            error: null
        });
        const isLoading = computed(() => state.loading);
    
        const getDrivers = async () => {
            state.loading = true;
            try {
                state.forms = await DriverService.getDrivers();
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const createDriver = async (newDriver) => {
            state.loading = true;
            try {
                state.drivers.push(await DriverService.createDriver(newDriver));
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const updateDriver = async (driver) => {
            state.loading = true;
            try {
                const index = state.drivers.findIndex((s) => s.id === driver.id);
                state.drivers[index] = await DriverService.updateDriver(driver);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const deleteDriver = async (id) => {
            state.loading = true;
            try {
                const index = state.drivers.findIndex((s) => s.id === id);
                state.drivers.splice(index, 1);
                await DriverService.deleteDriver(id);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        return {
            state,
            isLoading,
            getDrivers,
            createDriver,
            updateDriver,
            deleteDriver,
        };
    }
)