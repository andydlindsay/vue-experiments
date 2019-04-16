<template>
    <div class="wrapper text-center col-md-10 col-md-offset-1">
        <div class="title">
            <slot name="title"></slot>
            <span class="subtitle"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
hr {
    border: 1px solid pink;
}

.wrapper {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 20px;
    margin: 20px auto;
    border-radius: 5px;
}

.subtitle {
    color: #ccc;
}

.title {
    font-style: italic;
}
</style>
