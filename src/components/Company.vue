<template>
    <div class="container">
        <div v-for="comp in company" :key="comp.id">
            <h2>{{ comp.name }}</h2>
            <span>{{ comp.status ? 'Ativa' : 'Inativa' }}</span>
            <br>
            <span>{{ comp.contact.email }}</span>
            <p>{{ comp.description }}</p>
            <ul>
                <li>{{ comp.keywords }}</li>
            </ul>

            <h3>Contatos:</h3>
            <ul>
                <li v-for="(contact, index) in comp.contact.phones" :key="index">
                    {{ contact }}
                </li>
                <li>{{ comp.contact.site }}</li>
                <li>{{ comp.contact.facebook }}</li>
            </ul>

            <h3>Endereço</h3>
            <p>{{ comp.address.street }} | CEP: {{ comp.address.zip }}</p>
            <p>{{ comp.address.city }} / {{ comp.address.state }}</p>
        </div>
    </div>
</template>

<script>
import { onBeforeMount, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import api from '@/services/Api';

export default {
    name: 'Company',
    setup() {
        const company = ref();
        const route = useRoute();
        const id = route.params.id;


        onBeforeMount(() => {
            api.get('/companies.json')
            .then((res) => getCompany(res.data));
        });

        const getCompany = (data) => {
            company.value = data.filter((comp) => comp.id == id);
        }

        return {
            company
        }
    }
}
</script>