<script>
    import { t } from "$lib/i18n.js";
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let visible = false;
    onMount(() => (visible = true));

    const activities = [
        {
            id: "zipline",
            titleKey: "act_zipline_title",
            descKey: "act_zipline_desc",
            icon: "feat-1",
        },
        {
            id: "rally",
            titleKey: "act_rally_title",
            descKey: "act_rally_desc",
            icon: "feat-2",
        },
        {
            id: "arborism",
            titleKey: "act_arborism_title",
            descKey: "act_arborism_desc",
            icon: "feat-3",
        },
        {
            id: "hiking",
            titleKey: "act_hiking_title",
            descKey: "act_hiking_desc",
            icon: "feat-4",
        },
        {
            id: "botanic",
            titleKey: "act_botanic_title",
            descKey: "act_botanic_desc",
            icon: "feat-5",
        },
        {
            id: "fire",
            titleKey: "act_fire_title",
            descKey: "act_fire_desc",
            icon: "feat-6",
        },
        {
            id: "marbles",
            titleKey: "act_marbles_title",
            descKey: "act_marbles_desc",
            icon: "feat-7",
        },
        {
            id: "maze",
            titleKey: "act_maze_title",
            descKey: "act_maze_desc",
            icon: "feat-8",
        },
        {
            id: "slides",
            titleKey: "act_slides_title",
            descKey: "act_slides_desc",
            icon: "feat-9",
        },
        {
            id: "kids",
            titleKey: "act_kids_title",
            descKey: "act_kids_desc",
            icon: "feat-10",
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
        <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div class="md:col-span-4 md:sticky md:top-32">
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
                        class="font-display text-6xl md:text-7xl float-left mr-3 md:mr-4 leading-[0.8] text-nature-900 mt-1"
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

<!-- Objectives -->
<section class="py-32 bg-nature-100 text-nature-900 relative">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="text-center mb-24 max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
                {$t("obj_title")}
            </h2>
            <div
                class="w-24 h-1 bg-nature-400 mx-auto rounded-full -mt-4"
            ></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
<section class="py-32 bg-earth-50">
    <div class="container mx-auto px-6 max-w-7xl">
        <h2
            class="text-4xl md:text-5xl font-display font-bold text-center mb-24 text-nature-900"
        >
            {$t("services_title")}
        </h2>

        <div class="grid md:grid-cols-3 gap-12 text-center">
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
                    <!-- Map Placeholder with interaction hint -->
                    <span
                        class="relative z-10 group-hover:scale-110 transition-transform duration-300"
                        >Map Area (Google Maps Embed)</span
                    >
                    <div
                        class="absolute inset-0 bg-nature-300/20 group-hover:bg-transparent transition-colors duration-500"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</section>
