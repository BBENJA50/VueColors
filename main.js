const app = Vue.createApp({
    data() {
        return {
            kleuren: [],
            huidigeTekstKleur: "",
            huidigeAchtergrondKleur: "",
        };
    },
    methods: {
        generateRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        generateRandomColorsArray() {
            for (let i = 0; i < 50; i++) {
                this.kleuren.push(this.generateRandomColor());
            }
        },
        veranderTekst() {
            const randomIndex = Math.floor(Math.random() * this.kleuren.length);
            this.huidigeTekstKleur = this.kleuren[randomIndex];
        },
        veranderAchtergrond() {
            const randomIndex = Math.floor(Math.random() * this.kleuren.length);
            this.huidigeAchtergrondKleur = this.kleuren[randomIndex];
        },
    },
    created() {
        this.generateRandomColorsArray();
        console.log("Gegenereerde kleuren:", this.kleuren);
    },
});


