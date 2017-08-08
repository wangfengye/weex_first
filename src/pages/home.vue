<template>
    <div>
        <waterfall column-width='auto' column-count='3'>
            <cell v-for="item in items" class="item" :style='{backgroundColor:item.color}' @click="go(item.url)" :key="item.url">
                <text class="item_text">{{item.name}}</text>
            </cell>
        </waterfall>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{ name: 'help', url: '/help' },
            { name: '美图', url: '/imageList' }],
        }
    },
    created(){
        this.items.forEach(function(element) {
            element.color=this.randomColor();
        }, this);
    },
    methods: {
        go(url) {
            this.$router.push(url)
        },
  randomColor() {
            let color = '#';
            var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            for (let i = 0; i < 6; i++) {
                let id = Math.ceil(Math.random() * 15);
                color += chars[id];
            }
            console.log(color);
            return color;
        }
    }
}
</script>

<style  scoped>
.item {
    border-radius: 10px;
    height: 228px;
    margin-top: 32px;
}

.item_text {
    text-align: center;
    line-height: 228px;
    color: whitesmoke;
}
</style>