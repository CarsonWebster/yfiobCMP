<script setup lang="ts">
const myFilters = ["Engineering", "Science", "Theater","Acting","Broadway"];
//const mynewfilters =  [{ name: 'Engineering' }, { name: 'Science' },{ name: 'Acting' },{ name: 'Theater' },{ name: 'Broadway' },]

</script>


<template>
    <div class="">
        <div class="flex">
            <!-- Filter svg -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            <h1>Filters</h1>
        </div>
        <!-- Filters Form -->
        <div class="form-control">
            <label v-for="filter in myFilters" v-bind:key="filter" class="label cursor-pointer">
                <!-- <span class="label-text">{{myfilter}}</span> 
                <input type="checkbox" class="toggle toggle-primary" checked /> -->
                <button class="btn btn-primary btn-xs">{{filter}}</button>
            </label>
            <!-- <label class="label cursor-pointer">
                <span class="label-text">Engneering</span> 
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
            <label class="label cursor-pointer">
                <span class="label-text">Science</span> 
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
            <label class="label cursor-pointer">
                <span class="label-text">Theater</span> 
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
            <label class="label cursor-pointer">
                <span class="label-text">Acting</span> 
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
            <label class="label cursor-pointer">
                <span class="label-text">Broadway</span> 
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label> -->
        </div>
    </div>
</template>