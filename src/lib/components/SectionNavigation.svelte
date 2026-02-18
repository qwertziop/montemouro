<script>
    import { t } from "$lib/i18n.js";

    /** @type {{ sections?: Array<{id: string, labelKey: string}> }} */
    let { sections = [] } = $props();

    let activeSection = $state("");

    $effect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            },
            {
                rootMargin: "-20% 0px -50% 0px", // Trigger when section is in the middle of the screen
                threshold: 0,
            },
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });

    /** @param {string} id */
    function scrollTo(id) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<nav
    class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
>
    {#each sections as section}
        <button
            class="group relative flex items-center justify-end"
            onclick={() => scrollTo(section.id)}
            aria-label="Scroll to {$t(section.labelKey)}"
        >
            <!-- Label Tooltip -->
            <span
                class="absolute right-8 px-2 py-1 bg-nature-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
            >
                {$t(section.labelKey)}
            </span>

            <!-- Dot -->
            <div
                class="w-3 h-3 rounded-full border-2 border-nature-900 transition-all duration-300 {activeSection ===
                section.id
                    ? 'bg-nature-900 scale-125'
                    : 'bg-transparent hover:bg-nature-400'}"
            ></div>
        </button>
    {/each}
</nav>
