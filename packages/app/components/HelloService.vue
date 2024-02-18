<template>
    <div>
        <input v-model="name" />
        <input v-model="open" />
        <input v-model="hi" />
        <div class="bg-blue-500 p-4 round" @click="hello">Send Hi to Hello Service</div>
    </div>
</template>

<script lang="ts" setup>

declare const EventBus: any;
const eventBus = new EventBus("http://localhost:8000/eventbus");
eventBus.enableReconnect(true)

const name = ref('Mariano')
const open = ref(false)
const hi = ref('')

eventBus.onopen = () => {
    open.value = true
    eventBus.registerHandler('ojala.service.hi', function (err: any, result: { body: any; }) {
        if (!err)
            hi.value = result && result.body
    })
}
eventBus.onclose = (e: any) => {
    open.value = false
}

function hello() {
    if (open.value)
        eventBus.send('ojala.service.hello', { 'name': name }, { 'action': 'sayHello' },
            function (err: any, result: { body: any; }) {
                if (!err)
                    name.value = result && result.body
            });
}






</script>

