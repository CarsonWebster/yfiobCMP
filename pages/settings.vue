<script setup lang="ts">
</script>
<template>
<div >
    <title-card title="Account Settings" />
    <!-- Page Container -->
    <div class="container mx-auto">
        <!-- Two colulms -->
        <div class="flex flex-row flex-wrap py-4">
            <!-- Sidebar -->
            <!-- <p>Asside where are you?</p> -->
            <aside class="w-full sm:w-1/3 md:w-1/4 px-2 border-r-4">
                <div class="sticky top-0 p-4 w-full">
                    <!-- navigation -->
                    <ul class="flex flex-col overflow-hidden">
                        <p class="font-mono text-xl text-[#5b50dd] py-6">Edit Profile</p>
                        <p class="font-mono text-xl border-b-2">Saved Posts</p>
                        <p class="font-mono text-xl border-b-2">Privacy and Saftey</p>
                        <div class="form-control">
                            <label class="label cursor-pointer border-b-2">
                                <span class="label-text font-mono text-xl">Activity Status</span>
                                <input type="checkbox" class="toggle toggle-primary" checked />
                            </label>
                        </div>
                    </ul>
                </div>
            </aside>
            <!-- Main Content -->
            <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                <account-update />
            </main>
        </div>
    </div>
</div>
</template>