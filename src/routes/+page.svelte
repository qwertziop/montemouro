<script>
    import { t } from "$lib/i18n.js";
    import { fade, fly, slide } from "svelte/transition";
    import { reveal } from "$lib/actions/reveal.js";
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";

    let visible = $state(false);
    let showTechDetails = $state(false);

    $effect(() => {
        visible = true;
    });

    const activities = [
        {
            id: "zipline",
            titleKey: "act_zipline_title",
            descKey: "act_zipline_desc",
            icon: "feat-1",
            tags: ["tag_edu", "tag_rec"],
        },
        {
            id: "rally",
            titleKey: "act_rally_title",
            descKey: "act_rally_desc",
            icon: "feat-2",
            tags: ["tag_edu", "tag_rec"],
        },
        {
            id: "arborism",
            titleKey: "act_arborism_title",
            descKey: "act_arborism_desc",
            icon: "feat-3",
            tags: ["tag_rec", "tag_edu"],
        },
        {
            id: "hiking",
            titleKey: "act_hiking_title",
            descKey: "act_hiking_desc",
            icon: "feat-4",
            tags: ["tag_rec", "tag_edu"],
        },
        {
            id: "botanic",
            titleKey: "act_botanic_title",
            descKey: "act_botanic_desc",
            icon: "feat-5",
            tags: ["tag_edu"],
        },
        {
            id: "fire",
            titleKey: "act_fire_title",
            descKey: "act_fire_desc",
            icon: "feat-6",
            tags: ["tag_edu", "tag_pro"],
        },
        {
            id: "marbles",
            titleKey: "act_marbles_title",
            descKey: "act_marbles_desc",
            icon: "feat-7",
            tags: ["tag_rec"],
        },
        {
            id: "maze",
            titleKey: "act_maze_title",
            descKey: "act_maze_desc",
            icon: "feat-8",
            tags: ["tag_rec"],
        },
        {
            id: "slides",
            titleKey: "act_slides_title",
            descKey: "act_slides_desc",
            icon: "feat-9",
            tags: ["tag_rec"],
        },
        {
            id: "kids",
            titleKey: "act_kids_title",
            descKey: "act_kids_desc",
            icon: "feat-10",
            tags: ["tag_rec"],
        },
    ];
</script>

<svelte:head>
    <title>{$t("meta_title")}</title>
    <meta name="description" content={$t("meta_description")} />
</svelte:head>

<!-- Hero Section -->
<section
    class="relative h-screen flex items-center justify-center overflow-hidden bg-nature-900 text-nature-50"
>
    <!-- Darker, richer overlay -->
    <div
        class="absolute inset-0 bg-gradient-to-b from-nature-950/40 via-nature-900/10 to-nature-900 z-10"
    ></div>

    <!-- Background Image -->
    <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50 scale-105 animate-pulse-slow"
    ></div>

    <div class="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
        {#if visible}
            <div in:fly={{ y: 30, duration: 1200, delay: 0 }}>
                <h1
                    class="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none text-white drop-shadow-lg"
                >
                    {$t("hero_title")}
                </h1>
                <p
                    class="font-display italic text-2xl md:text-4xl text-nature-200 mt-4 font-light tracking-wide lg:mt-6"
                >
                    {$t("hero_subtitle")}
                </p>
            </div>

            <div in:fly={{ y: 30, duration: 1200, delay: 500 }} class="pt-10">
                <a
                    href="#intro"
                    class="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm tracking-widest uppercase py-4 px-12 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    {$t("hero_cta")}
                </a>
            </div>
        {/if}
    </div>
</section>

<!-- Introduction -->
<section id="intro" class="py-32 bg-earth-50 relative overflow-hidden">
    <div class="container mx-auto px-6 max-w-5xl">
        <div class="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
            <div
                class="md:col-span-4 md:sticky md:top-32"
                use:reveal={{ delay: 200 }}
            >
                <h2
                    class="text-4xl md:text-6xl font-display font-medium text-nature-900 mb-8 leading-tight"
                >
                    {$t("intro_title")}
                </h2>
                <div class="w-24 h-1 bg-nature-400 -mt-6"></div>
            </div>
            <div
                class="md:col-span-8 space-y-8 text-lg md:text-xl text-nature-800/80 leading-relaxed font-light"
            >
                <p
                    class="text-lg md:text-xl text-nature-800/80 leading-relaxed font-light"
                >
                    <span
                        class="font-display text-6xl md:text-7xl float-left mr-3 md:mr-4 leading-[0.8] text-nature-900 mt-0"
                    >
                        {$t("intro_p1").slice(0, 1)}
                    </span>
                    {$t("intro_p1").slice(1)}
                </p>
                <p>{$t("intro_p2")}</p>
                <p>{$t("intro_p3")}</p>

                <div
                    class="bg-white p-10 rounded-r-3xl border-l-4 border-nature-400 shadow-xl shadow-nature-100 my-12"
                >
                    <p
                        class="font-display text-2xl text-nature-800 italic leading-relaxed"
                    >
                        "{$t("intro_p4")}"
                    </p>
                </div>

                <p>{$t("intro_p5")}</p>
                <p>{$t("intro_p6")}</p>
                <p>{$t("intro_p7")}</p>
                <p
                    class="font-medium text-nature-900 text-xl border-t border-nature-200 pt-8"
                >
                    {$t("intro_p8")}
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Target Audience -->
<section id="audience" class="py-24 bg-white border-y border-nature-200/50">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="text-center mb-16">
            <h2
                class="text-3xl md:text-4xl font-display font-medium text-nature-900 mb-4"
            >
                {$t("audience_title")}
            </h2>
            <div class="w-16 h-1 bg-nature-300 mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Families -->
            <div
                class="bg-nature-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-nature-100"
            >
                <div
                    class="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mb-6 text-2xl"
                >
                    👨‍👩‍👧‍👦
                </div>
                <h3 class="font-display font-bold text-xl text-nature-900 mb-3">
                    {$t("audience_families_title")}
                </h3>
                <p class="text-nature-600 leading-relaxed text-sm">
                    {$t("audience_families_desc")}
                </p>
            </div>

            <!-- Schools -->
            <div
                class="bg-nature-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-nature-100"
            >
                <div
                    class="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mb-6 text-2xl"
                >
                    🎓
                </div>
                <h3 class="font-display font-bold text-xl text-nature-900 mb-3">
                    {$t("audience_schools_title")}
                </h3>
                <p class="text-nature-600 leading-relaxed text-sm">
                    {$t("audience_schools_desc")}
                </p>
            </div>

            <!-- Tourists -->
            <div
                class="bg-nature-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-nature-100"
            >
                <div
                    class="w-12 h-12 bg-nature-200 rounded-full flex items-center justify-center mb-6 text-2xl"
                >
                    🌍
                </div>
                <h3 class="font-display font-bold text-xl text-nature-900 mb-3">
                    {$t("audience_tourists_title")}
                </h3>
                <p class="text-nature-600 leading-relaxed text-sm">
                    {$t("audience_tourists_desc")}
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Objectives -->
<section id="objectives" class="py-32 bg-nature-100 text-nature-900 relative">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="text-center mb-24 max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
                {$t("obj_title")}
            </h2>
            <div
                class="w-24 h-1 bg-nature-400 mx-auto rounded-full -mt-4"
            ></div>
        </div>

        <div
            class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            use:reveal={{ delay: 200, threshold: 0.1 }}
        >
            {#each ["obj_list_1", "obj_list_2", "obj_list_3", "obj_list_4", "obj_list_5", "obj_list_6", "obj_list_7", "obj_list_8"] as objKey, i}
                <div
                    class="group p-8 bg-white/60 hover:bg-white transition-all duration-500 rounded-3xl hover:shadow-xl hover:-translate-y-2 border border-nature-200/50"
                >
                    <span
                        class="inline-block text-nature-300 font-display text-4xl mb-4 group-hover:text-nature-600 transition-colors"
                        >0{i + 1}</span
                    >
                    <p class="text-lg font-medium leading-relaxed">
                        {$t(objKey)}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Activities -->
<section id="activities" class="py-32 bg-nature-950 text-nature-50">
    <div class="container mx-auto px-6 max-w-7xl">
        <div
            class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
            <div>
                <h2 class="text-5xl md:text-7xl font-display font-medium mb-6">
                    {$t("activities_title")}
                </h2>
                <div class="h-1 w-32 bg-nature-500 rounded-full -mt-4"></div>
            </div>
            <p
                class="md:max-w-md text-nature-300 text-lg leading-relaxed text-right"
            >
                {$t("activities_subtitle")}
            </p>
        </div>

        <!-- Specical Highlight: Forest Plan -->
        <div
            class="mb-12 bg-gradient-to-br from-nature-900 to-nature-950 rounded-[3rem] p-10 md:p-16 border border-nature-800 relative overflow-hidden group"
        >
            <div class="relative z-10 md:w-3/4">
                <span
                    class="text-nature-400 text-sm font-bold tracking-widest uppercase mb-4 block"
                    >{$t("act_highlight")}</span
                >
                <h3
                    class="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
                >
                    {$t("act_forest_title")}
                </h3>
                <p class="text-xl text-nature-300 leading-relaxed max-w-3xl">
                    {$t("act_forest_desc")}
                </p>
            </div>
            <div
                class="absolute -right-20 -bottom-20 w-96 h-96 bg-nature-500/10 rounded-full blur-3xl group-hover:bg-nature-500/20 transition-all duration-1000"
            ></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each activities as activity}
                <div
                    class="group bg-nature-900/50 rounded-3xl p-10 border border-nature-800 hover:border-nature-600 transition-all duration-500 hover:bg-nature-900 hover:shadow-2xl hover:shadow-nature-900/50"
                >
                    <div
                        class="w-16 h-16 rounded-2xl bg-nature-800 text-nature-300 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-nature-700 group-hover:text-white transition-all duration-500"
                    >
                        <!-- Icon placeholder -->
                        <div
                            class="w-8 h-8 rounded-full border-2 border-current opacity-60"
                        ></div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each activity.tags as tag}
                            <span
                                class="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-nature-800 rounded text-nature-300 border border-nature-700"
                            >
                                {$t(tag)}
                            </span>
                        {/each}
                    </div>
                    <h3
                        class="text-2xl font-display font-bold mb-4 text-nature-100 group-hover:text-white transition-colors"
                    >
                        {$t(activity.titleKey)}
                    </h3>
                    <p class="text-nature-400 leading-relaxed font-light">
                        {$t(activity.descKey)}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Services -->
<section id="services" class="py-32 bg-earth-50">
    <div class="container mx-auto px-6 max-w-7xl">
        <h2
            class="text-4xl md:text-5xl font-display font-bold text-center mb-24 text-nature-900"
        >
            {$t("services_title")}
        </h2>

        <div
            class="grid md:grid-cols-3 gap-12 text-center"
            use:reveal={{ delay: 200, threshold: 0.1 }}
        >
            <div class="space-y-6 group cursor-default">
                <div
                    class="h-64 w-full bg-white rounded-t-[10rem] rounded-b-3xl mb-8 flex items-center justify-center shadow-lg shadow-earth-200/50 group-hover:-translate-y-4 transition-transform duration-500"
                >
                    <span
                        class="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        >🍽️</span
                    >
                </div>
                <h3 class="text-2xl font-display font-bold text-nature-900">
                    {$t("serv_restaurant_title")}
                </h3>
                <p class="text-nature-600 px-8">{$t("serv_restaurant_desc")}</p>
            </div>
            <div class="space-y-6 group cursor-default">
                <div
                    class="h-64 w-full bg-white rounded-t-[10rem] rounded-b-3xl mb-8 flex items-center justify-center shadow-lg shadow-earth-200/50 group-hover:-translate-y-4 transition-transform duration-500"
                >
                    <span
                        class="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        >🧺</span
                    >
                </div>
                <h3 class="text-2xl font-display font-bold text-nature-900">
                    {$t("serv_picnic_title")}
                </h3>
                <p class="text-nature-600 px-8">{$t("serv_picnic_desc")}</p>
            </div>
            <div class="space-y-6 group cursor-default">
                <div
                    class="h-64 w-full bg-white rounded-t-[10rem] rounded-b-3xl mb-8 flex items-center justify-center shadow-lg shadow-earth-200/50 group-hover:-translate-y-4 transition-transform duration-500"
                >
                    <span
                        class="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        >🔭</span
                    >
                </div>
                <h3 class="text-2xl font-display font-bold text-nature-900">
                    {$t("serv_viewpoints_title")}
                </h3>
                <p class="text-nature-600 px-8">{$t("serv_viewpoints_desc")}</p>
            </div>
        </div>
    </div>
</section>

<!-- Sustainability & Infrastructure -->
<section
    id="infrastructure"
    class="py-32 bg-nature-950 text-nature-50 relative overflow-hidden"
>
    <!-- Decorative background elements -->
    <div
        class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nature-800/20 to-transparent"
    ></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
        <h2
            class="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-white drop-shadow-lg"
        >
            {$t("infra_title")}
        </h2>

        <div class="grid lg:grid-cols-3 gap-8">
            <!-- Water -->
            <!-- Water -->
            <div
                class="bg-nature-900 border border-nature-600 rounded-[2rem] p-10 hover:border-blue-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-900/20 text-left h-full flex flex-col"
                use:reveal={{ delay: 100 }}
            >
                <div class="flex items-start justify-between mb-8">
                    <div
                        class="p-4 bg-nature-800 rounded-2xl group-hover:bg-blue-900/30 group-hover:text-blue-200 transition-colors text-white"
                    >
                        <!-- Water Drop Icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                                d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
                            /></svg
                        >
                    </div>
                </div>
                <h3 class="text-2xl font-display font-bold mb-3 text-white">
                    {$t("infra_water_title")}
                </h3>
                <p class="text-nature-400 font-light leading-relaxed mb-6">
                    {$t("infra_water_desc")}
                </p>

                <div
                    class="pt-6 mt-auto border-t border-nature-800 text-base text-nature-300 leading-relaxed font-light"
                >
                    {$t("infra_water_detail")}
                </div>
            </div>

            <!-- Energy -->
            <div
                class="bg-nature-900 border border-nature-600 rounded-[2rem] p-10 hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-900/20 text-left h-full flex flex-col"
                use:reveal={{ delay: 300 }}
            >
                <div class="flex items-start justify-between mb-8">
                    <div
                        class="p-4 bg-nature-800 rounded-2xl group-hover:bg-yellow-900/30 group-hover:text-yellow-200 transition-colors text-white"
                    >
                        <!-- Sun Icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><circle cx="12" cy="12" r="4" /><path
                                d="M12 2v2"
                            /><path d="M12 20v2" /><path
                                d="m4.93 4.93 1.41 1.41"
                            /><path d="m17.66 17.66 1.41 1.41" /><path
                                d="M2 12h2"
                            /><path d="M20 12h2" /><path
                                d="m6.34 17.66-1.41 1.41"
                            /><path d="m19.07 4.93-1.41 1.41" /></svg
                        >
                    </div>
                </div>
                <h3 class="text-2xl font-display font-bold mb-3 text-white">
                    {$t("infra_energy_title")}
                </h3>
                <p class="text-nature-400 font-light leading-relaxed mb-6">
                    {$t("infra_energy_desc")}
                </p>

                <div
                    class="pt-6 mt-auto border-t border-nature-700 text-base text-nature-100 leading-relaxed font-light"
                >
                    {$t("infra_energy_detail")}
                </div>
            </div>

            <!-- Waste -->
            <div
                class="bg-nature-900 border border-nature-600 rounded-[2rem] p-10 hover:border-green-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-green-900/20 text-left h-full flex flex-col"
                use:reveal={{ delay: 500 }}
            >
                <div class="flex items-start justify-between mb-8">
                    <div
                        class="p-4 bg-nature-800 rounded-2xl group-hover:bg-green-900/30 group-hover:text-green-200 transition-colors text-white"
                    >
                        <!-- Recycle Icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                                d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
                            /><path
                                d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
                            /><path d="m14 16-3 3 3 3" /><path
                                d="M8.293 13.596 7.196 9.5 3.1 9.5a1.83 1.83 0 0 1-1.582-.885 1.784 1.784 0 0 1-.004-1.779l2.296-4.053c.473-.842 1.548-1.127 2.388-.628l2.1 .915"
                            /><path d="m14.7 10.4 1.3-2.3" /><path
                                d="m11.11 3.5-3.327.93a1.767 1.767 0 0 0-1.22 1.48L6 8.5"
                            /></svg
                        >
                    </div>
                </div>
                <h3 class="text-2xl font-display font-bold mb-3 text-white">
                    {$t("infra_waste_title")}
                </h3>
                <p class="text-nature-400 font-light leading-relaxed mb-6">
                    {$t("infra_waste_desc")}
                </p>

                <div
                    class="pt-6 mt-auto border-t border-nature-700 text-base text-nature-100 leading-relaxed font-light"
                >
                    {$t("infra_waste_detail")}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Terrain / Contact -->
<section id="contact" class="py-32 bg-nature-900 relative">
    <div
        class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-earth-50 to-transparent opacity-10"
    ></div>

    <div class="container mx-auto px-6 max-w-6xl relative z-10">
        <div
            class="bg-nature-50 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden"
        >
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span
                        class="text-nature-500 font-bold tracking-widest uppercase text-sm mb-4 block"
                        >{$t("contact_location")}</span
                    >
                    <h2
                        class="text-4xl md:text-5xl font-display font-bold mb-8 text-nature-900"
                    >
                        {$t("terrain_title")}
                    </h2>
                    <p
                        class="text-nature-700 text-lg leading-relaxed mb-10 font-light"
                    >
                        {$t("terrain_desc")}
                    </p>

                    <div class="mt-8">
                        <button
                            class="flex items-center gap-2 text-nature-600 hover:text-nature-900 font-bold uppercase tracking-widest text-xs transition-colors"
                            onclick={() => (showTechDetails = !showTechDetails)}
                        >
                            <span>{showTechDetails ? "-" : "+"}</span>
                            {$t("terrain_tech_title")}
                        </button>

                        {#if showTechDetails}
                            <div
                                transition:slide
                                class="mt-6 bg-white/50 rounded-2xl p-6 text-sm border border-nature-200"
                            >
                                <dl
                                    class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
                                >
                                    <div class="col-span-2 sm:col-span-1">
                                        <dt
                                            class="text-xs font-bold text-nature-500 uppercase"
                                        >
                                            {$t("terrain_loc_label")}
                                        </dt>
                                        <dd class="mt-1 text-nature-800">
                                            {$t("terrain_loc_val")}
                                        </dd>
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <dt
                                            class="text-xs font-bold text-nature-500 uppercase"
                                        >
                                            {$t("terrain_class_label")}
                                        </dt>
                                        <dd class="mt-1 text-nature-800">
                                            {$t("terrain_class_val")}
                                        </dd>
                                    </div>
                                    <div
                                        class="col-span-2 border-t border-nature-200 pt-4"
                                    >
                                        <dt
                                            class="text-xs font-bold text-nature-500 uppercase"
                                        >
                                            {$t("terrain_veg_label")}
                                        </dt>
                                        <dd class="mt-1 text-nature-800">
                                            {$t("terrain_veg_val")}
                                        </dd>
                                    </div>

                                    <!-- Areas Table -->
                                    <div
                                        class="col-span-2 border-t border-nature-200 pt-4"
                                    >
                                        <table class="w-full text-left">
                                            <tbody
                                                class="divide-y divide-nature-200/50"
                                            >
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_prot",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >115.500 m²</td
                                                    >
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_arb",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >4.500 m²</td
                                                    >
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_picnic",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >3.000 m²</td
                                                    >
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_park",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >1.200 m²</td
                                                    >
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_multi",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >1.000 m²</td
                                                    >
                                                </tr>
                                                <tr>
                                                    <td
                                                        class="py-2 text-nature-600"
                                                        >{$t(
                                                            "terrain_area_rest",
                                                        )}</td
                                                    >
                                                    <td
                                                        class="py-2 text-right font-mono text-nature-900"
                                                        >680 m²</td
                                                    >
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </dl>
                            </div>
                        {/if}
                    </div>

                    <div class="space-y-4 pt-8 border-t border-nature-200">
                        <div class="flex items-start gap-4">
                            <div
                                class="w-6 h-6 rounded-full bg-nature-200 mt-1"
                            ></div>
                            <div>
                                <p
                                    class="font-bold text-nature-900 uppercase tracking-wide text-xs mb-1"
                                >
                                    {$t("footer_contact")}
                                </p>
                                <p class="text-nature-600">Uwe Reichelt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-nature-200 rounded-[2rem] h-96 w-full flex items-center justify-center text-nature-500 shadow-inner overflow-hidden relative group"
                >
                    <iframe
                        title="Google Maps Location"
                        src="https://maps.google.com/maps?q=37.174012,-8.753882&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</section>

<SectionNavigation
    sections={[
        { id: "intro", labelKey: "nav_intro" },
        { id: "audience", labelKey: "nav_audience" },
        { id: "objectives", labelKey: "nav_objectives" },
        { id: "activities", labelKey: "nav_activities" },
        { id: "services", labelKey: "nav_services" },
        { id: "infrastructure", labelKey: "nav_infrastructure" },
        { id: "contact", labelKey: "nav_contact" },
    ]}
/>
