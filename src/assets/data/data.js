export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muhammad Iman Furqon',
            panggilan: 'Iman',
            child: 'Putra kedua',
            father: 'Samsul Maarif',
            mother: 'Nur Latifah',
            image: './src/assets/images/iman.png'
        },
        P: {
            id: 2,
            name: 'Fitria Lestari',
            panggilan: 'Fitri',
            child: 'Putri pertama',
            father: 'Sumardiono',
            mother: 'Sayami',
            image: './src/assets/images/pitri.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juni',
            date: '12',
            day: 'Kamis',
            hours: {
                start: '10.30',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '12',
            day: 'Kamis',
            hours: {
                start: '15.00',
                finish: 'Selesai'
            }
        },
        address: 'Perum Citraloka B3/10A, Rangkah Kidul, Sidoarjo'
    },

    link: {
        calendar: 'https://calendar.app.google/AGLYF2sLWG29Pkct7',
        map: 'https://maps.app.goo.gl/2ym1JQXEF4DK5L7X7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Muhammad Iman Furqon',
            icon: './src/assets/images/bca.png',
            rekening: '0184252887'
        },
        // {
        //     id: 2,
        //     name: 'Ipsum Lorem',
        //     icon: './src/assets/images/bri.png',
        //     rekening: '12345678'
        // },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
