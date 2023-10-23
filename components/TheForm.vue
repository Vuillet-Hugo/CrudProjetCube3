<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import type { ITodo } from 'types'

const emit = defineEmits<{
    (e: 'addItem'): void
}>()

const itemNom = ref('')
const itemType = ref('')
const itemNiveau = ref('')
const handleAddItem = async () => {
    if (itemNom.value === '') {
        return useToast().error('Un nom est requis')
    }
    if (itemType.value === '') {
        return useToast().error('Un type est requis')
    }
    if (itemNiveau.value === '') {
        return useToast().error('Un niveau est requis')
    }
    await useFetch('/api/v1/item/add', {
        method: 'POST',
        body: { nom: itemNom.value,
                niveau: itemNiveau.value,
                type: itemType.value,
         },
        onResponse(context) {
            const { statusCode, statusMessage } = context.response._data
            if (statusCode === 200) {
                useToast().success('Nouveau pokémon ajouté')
                itemNom.value = ''
                itemType.value = ''
                itemNiveau.value = ''
            } else {
                useToast().error(statusMessage)
                throw createError({ statusCode, statusMessage, fatal: true })
            }
        }
    })
    emit('addItem')
}
</script>
<template>
    <div>
        <form
            class="flex gap-2"
            @submit.prevent="handleAddItem"
        >
            <input
                type="text"
                v-model="itemNom"
                placeholder="Nom"
                class="outline outline-1 outline-slate-300 rounded min-h-[40px] w-full text-sm pl-2 focus:outline-slate-500"
            />
            <input
                type="text"
                v-model="itemType"
                placeholder="Type"
                class="outline outline-1 outline-slate-300 rounded min-h-[40px] w-full text-sm pl-2 focus:outline-slate-500"
            />
            <input
                type="text"
                v-model="itemNiveau"
                placeholder="Niveau"
                class="outline outline-1 outline-slate-300 rounded min-h-[40px] w-full text-sm pl-2 focus:outline-slate-500"
            />
            <button
                type="submit"
                class="min-w-fit bg-blue-700 text-white px-6 py-2 rounded text-sm font-bold uppercase"
            >Ajouter le pokémon</button>
        </form>
    </div>
</template>
<style scoped lang="css"></style>