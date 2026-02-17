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
    <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 to-nature-900/90 z-10"
    ></div>
    <!-- Placeholder for hero background image -->
    <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40"
    ></div>

    <div class="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
        {#if visible}
            <h1
                in:fly={{ y: 50, duration: 1000 }}
                class="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
            >
                {$t("hero_title")}
                <span
                    class="block text-nature-400 text-3xl md:text-5xl mt-2 font-light italic"
                    >{$t("hero_subtitle")}</span
                >
            </h1>
            <p
                in:fly={{ y: 50, duration: 1000, delay: 300 }}
                class="text-xl md:text-2xl text-nature-200 font-light tracking-wide"
            >
                {$t("hero_author")}
            </p>
            <div in:fly={{ y: 50, duration: 1000, delay: 600 }} class="pt-8">
                <a
                    href="#intro"
                    class="inline-block bg-nature-500 hover:bg-nature-400 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nature-500/50"
                >
                    {$t("hero_cta")}
                </a>
            </div>
        {/if}
    </div>
</section>

<!-- Introduction -->
<section id="intro" class="py-24 bg-nature-50 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="grid md:grid-cols-12 gap-12 items-start">
            <div class="md:col-span-4">
                <h2
                    class="text-4xl md:text-5xl font-display font-bold text-nature-900 mb-6 sticky top-24"
                >
                    {$t("intro_title")}
                </h2>
            </div>
            <div
                class="md:col-span-8 space-y-6 text-lg text-nature-800 leading-relaxed font-light"
            >
                <p
                    class="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-nature-600 first-letter:mr-2 float-left"
                >
                    {$t("intro_p1")}
                </p>
                <p>{$t("intro_p2")}</p>
                <p>{$t("intro_p3")}</p>
                <div
                    class="bg-white p-8 rounded-2xl shadow-sm border border-nature-100 my-8"
                >
                    <p class="font-medium text-nature-900 italic">
                        "{$t("intro_p4")}"
                    </p>
                </div>
                <p>{$t("intro_p5")}</p>
                <p>{$t("intro_p6")}</p>
                <p>{$t("intro_p7")}</p>
                <p class="font-semibold text-nature-700">{$t("intro_p8")}</p>
            </div>
        </div>
    </div>
</section>

<!-- Objectives -->
<section class="py-24 bg-earth-100 text-earth-900">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
                {$t("obj_title")}
            </h2>
            <div class="w-24 h-1 bg-earth-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {#each ["obj_list_1", "obj_list_2", "obj_list_3", "obj_list_4", "obj_list_5", "obj_list_6", "obj_list_7", "obj_list_8"] as objKey}
                <div
                    class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300"
                >
                    <div
                        class="mt-1 w-6 h-6 rounded-full bg-earth-400 flex-shrink-0 flex items-center justify-center text-white text-xs"
                    >
                        ✓
                    </div>
                    <p class="text-lg">{$t(objKey)}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Activities -->
<section id="activities" class="py-24 bg-nature-950 text-nature-50">
    <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-20">
            <h2 class="text-4xl md:text-6xl font-display font-bold mb-6">
                {$t("activities_title")}
            </h2>
            <p class="max-w-2xl mx-auto text-nature-300 text-lg">
                Experiências únicas que conectam o visitante com a natureza de
                forma ativa e educativa.
            </p>
        </div>

        <!-- Specical Highlight: Forest Plan -->
        <div
            class="mb-24 bg-nature-900 rounded-3xl p-8 md:p-12 border border-nature-800 relative overflow-hidden"
        >
            <div class="relative z-10 md:w-2/3">
                <h3
                    class="text-3xl font-display font-bold mb-4 text-nature-200"
                >
                    {$t("act_forest_title")}
                </h3>
                <p class="text-lg text-nature-300 leading-relaxed">
                    {$t("act_forest_desc")}
                </p>
            </div>
            <div
                class="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-nature-800/50 to-transparent hidden md:block"
            ></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each activities as activity}
                <div
                    class="group bg-nature-900 rounded-2xl p-8 border border-nature-800 hover:border-nature-600 transition-all duration-300 hover:shadow-2xl hover:shadow-nature-900/50 hover:-translate-y-1"
                >
                    <div
                        class="w-12 h-12 rounded-xl bg-nature-800 text-nature-300 flex items-center justify-center mb-6 group-hover:bg-nature-600 group-hover:text-white transition-colors"
                    >
                        <!-- Icon placeholder -->
                        <div
                            class="w-6 h-6 bg-current rounded-sm opacity-50"
                        ></div>
                    </div>
                    <h3
                        class="text-2xl font-display font-bold mb-3 text-nature-100"
                    >
                        {$t(activity.titleKey)}
                    </h3>
                    <p class="text-nature-400 leading-relaxed">
                        {$t(activity.descKey)}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Services -->
<section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
        <h2
            class="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-nature-900"
        >
            {$t("services_title")}
        </h2>

        <div class="grid md:grid-cols-3 gap-12 text-center">
            <div class="space-y-4">
                <div
                    class="h-48 w-full bg-earth-100 rounded-2xl mb-6 flex items-center justify-center"
                >
                    <span class="text-earth-400 text-4xl">🍽️</span>
                </div>
                <h3 class="text-2xl font-bold text-nature-800">
                    {$t("serv_restaurant_title")}
                </h3>
                <p class="text-nature-600">{$t("serv_restaurant_desc")}</p>
            </div>
            <div class="space-y-4">
                <div
                    class="h-48 w-full bg-earth-100 rounded-2xl mb-6 flex items-center justify-center"
                >
                    <span class="text-earth-400 text-4xl">🧺</span>
                </div>
                <h3 class="text-2xl font-bold text-nature-800">
                    {$t("serv_picnic_title")}
                </h3>
                <p class="text-nature-600">{$t("serv_picnic_desc")}</p>
            </div>
            <div class="space-y-4">
                <div
                    class="h-48 w-full bg-earth-100 rounded-2xl mb-6 flex items-center justify-center"
                >
                    <span class="text-earth-400 text-4xl">🔭</span>
                </div>
                <h3 class="text-2xl font-bold text-nature-800">
                    {$t("serv_viewpoints_title")}
                </h3>
                <p class="text-nature-600">{$t("serv_viewpoints_desc")}</p>
            </div>
        </div>
    </div>
</section>

<!-- Terrain / Contact -->
<section id="contact" class="py-24 bg-nature-100">
    <div class="container mx-auto px-4 max-w-5xl text-center md:text-left">
        <div class="bg-white rounded-3xl p-8 md:p-16 shadow-xl">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2
                        class="text-3xl font-display font-bold mb-6 text-nature-900"
                    >
                        {$t("terrain_title")}
                    </h2>
                    <p class="text-nature-700 leading-relaxed mb-6">
                        {$t("terrain_desc")}
                    </p>
                    <div class="space-y-2 text-nature-600">
                        <p>
                            <strong>{$t("footer_contact")}:</strong> Uwe Reichelt
                        </p>
                        <p>{$t("footer_address")}</p>
                    </div>
                </div>
                <div
                    class="bg-nature-200 rounded-2xl h-64 md:h-auto min-h-[300px] flex items-center justify-center text-nature-500"
                >
                    <!-- Map Placeholder -->
                    <span>Map Area</span>
                </div>
            </div>
        </div>
    </div>
</section>
