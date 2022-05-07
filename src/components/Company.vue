<template>
    <div class="container my-10 mx-auto">
        <div v-for="comp in company" :key="comp.id" class="p-5 text-cyan-900 bg-white rounded-lg border border-gray-200 shadow-md">
            <div class="flex justify-between">
                <div class="text-6xl font-bold">{{ comp.name }}</div>
                <div class="px-5 h-6 content-center text-white rounded-full" :class="comp.status ? 'bg-green-400' : 'bg-gray-500'">{{ comp.status ? 'ativa' : 'inativa' }}</div> 
            </div>
            <br>
            <div class="">
                <p class="text-3xl mb-3">{{ comp.description }}</p>
                <ul v-if="comp.keywords.length > 0" class="flex">
                    <li v-for="(tag, index) in splitTags(comp.keywords)" :key="index" class="bg-gray-900 px-5 h-7 content-center text-white rounded-full mx-1">{{ tag }}</li>
                </ul>
            </div>

            <br>

            <h3 class="text-3xl font-bold mb-3">Contatos</h3>
            <div class="">
                <div class="flex space-x-3">
                    <div class="bg-blue-500 font-semibold text-white py-2 px-4 rounded" v-if="comp.contact.email">{{ comp.contact.email }}</div>
                
                    <a class="bg-gray-800 font-semibold text-white py-2 px-4 rounded" :href="comp.contact.site" target="_blank" v-if="comp.contact.site">
                        acessar site
                    </a>
                    
                    <a :href="comp.contact.facebook" target="_blank" class="bg-blue-800 font-semibold text-white py-2 px-4 rounded" v-if="comp.contact.facebook">
                        página no facebook
                    </a>
                    <br>
                    <div class="bg-cyan-800 font-semibold text-white py-2 px-4 rounded" v-for="(contact, index) in comp.contact.phones" :key="index">
                        {{ contact }}
                    </div>
                </div>
            </div>

            <br>

            <h3 class="text-3xl font-bold mb-3">Endereço</h3>
            <div class="">
                <span class="text-2xl" v-show="comp.address.street">{{ comp.address.street }}</span>
                <br>
                <span class="text-2xl" v-show="comp.address.zip">CEP: {{ comp.address.zip }}</span>
                <br>
                <span class="text-2xl" v-show="comp.address.city">{{ comp.address.city }} / {{ comp.address.state }}</span>
            </div>
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

        const splitTags = (tags) => {
            return tags.split(",");
        }

        return {
            company,
            splitTags
        }
    }
}
</script>