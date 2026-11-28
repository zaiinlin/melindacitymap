const wisata = [
{ id:"Coban Rondo", kategori:"Alam", harga:"Rp35.000-Rp40.000/orang", jam:"08.00-17.00", rating:"4.7",
  lat:-7.8848, lng:112.4778,
  foto:"https://i.ibb.co.com/sdn4VR3z/6af40d576b11987d4bfbc51b9e3b14f6.jpg",
  priceImage:"https://i.ibb.co.com/DD17PSJ9/Screenshot-2026-0922-072859.png",
  youtube:"https://youtu.be/TzX1tFMzRqk?si=yjisly0y7DtTwd92",
  tiktok:["https://vt.tiktok.com/ZSqGjk7t2/","https://vt.tiktok.com/ZSqGjxCfA/","https://vt.tiktok.com/ZSqGjgW34/"],
  i18n: {
    id:{ nama:"Coban Rondo", alamat:"Jl. Coban Rondo No.30, Krajan, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391", desc:"Air terjun legendaris dengan suasana hutan pinus yang sejuk — tempat sempurna untuk melepas penat dan menyatu dengan alam." },
    en:{ nama:"Coban Rondo Waterfall", alamat:"Jl. Coban Rondo No.30, Krajan, Pandesari, Pujon District, Malang Regency, East Java 65391, Indonesia", desc:"A legendary waterfall with cool pine forest atmosphere — a perfect place to unwind and reconnect with nature." },
    jv:{ nama:"Grojogan Coban Rondo", alamat:"Jl. Coban Rondo No.30, Krajan, Pandesari, Kec. Pujon, Kab. Malang, Jawa Timur 65391", desc:"Grojogan legendaris kanthi swasana alas pinus sing adem — papan sing pas kanggo ngilangake kesel lan nyawiji karo alam." }
  }
},
{ id:"Coban Tumpak Sewu", kategori:"Alam", harga:"Rp20.000-Rp30.000/orang", jam:"07.00-17.00", rating:"4.7",
  lat:-8.230, lng:112.916,
  foto:"https://i.ibb.co.com/tMBrT9gf/067e87769ff4197e78a4692cc4aed2d6.jpg",
  priceImage:"https://i.ibb.co.com/JjtqYrZH/Screenshot-2026-0922-073130.png",
  youtube:"https://youtu.be/zJxr8p5QkNA?si=QXaSQfty5dGoBQLD",
  tiktok:["https://vt.tiktok.com/ZSqGMJEmF/","https://vt.tiktok.com/ZSqGMU4oq/","https://vt.tiktok.com/ZSqGMbwLd/"],
  i18n: {
    id:{ nama:"Coban Tumpak Sewu", alamat:"Jl. Raya Dampit-Lumajang, Besukcukit, Sidomulyo, Pronojiwo, Lumajang", desc:"Dijuluki 'Seribu Air Terjun' — panorama tebing megah dengan tirai air bertingkat yang memukau, seperti lukisan alam yang hidup." },
    en:{ nama:"Tumpak Sewu Waterfall", alamat:"Jl. Raya Dampit-Lumajang, Besukcukit, Sidomulyo, Pronojiwo, Lumajang, East Java, Indonesia", desc:"Nicknamed 'A Thousand Waterfalls' — a majestic cliff panorama with stunning tiered water curtains, like a living painting of nature." },
    jv:{ nama:"Grojogan Tumpak Sewu", alamat:"Jl. Raya Dampit-Lumajang, Besukcukit, Sidomulyo, Pronojiwo, Lumajang", desc:"Dijuluki 'Sewu Grojogan' — panorama tebing megah karo tirai banyu bertingkat sing nggumunake, kaya lukisan alam sing urip." }
  }
},
{ id:"Gunung Butak", kategori:"Alam", harga:"Rp10.000-Rp20.000/orang", jam:"03.00-21.00", rating:"4.5",
  lat:-7.900, lng:112.500,
  foto:"https://i.ibb.co.com/4wQTS7pJ/Screenshot-2026-0922-190947.png",
  priceImage:"https://i.ibb.co.com/rffyFV3y/Screenshot-2026-0922-073459.png",
  youtube:"https://youtu.be/dle_IPOjMQU?si=nAMAuRl6F6tNkmCl",
  tiktok:["https://vt.tiktok.com/ZSqGkqRsu/","https://vt.tiktok.com/ZSqGB6NWL/","https://vt.tiktok.com/ZSqGkwT8W/"],
  i18n: {
    id:{ nama:"Gunung Butak", alamat:"Desa Pandesari, Kecamatan Pujon, Kabupaten Malang", desc:"Menanti pendaki sejati dengan puncak yang menantang — disuguhi panorama pegunungan yang memanjakan mata dan jiwa petualang." },
    en:{ nama:"Mount Butak", alamat:"Pandesari Village, Pujon District, Malang Regency, East Java, Indonesia", desc:"Awaiting true climbers with a challenging peak — rewarded with mountain panoramas that pamper the eyes and adventurer's soul." },
    jv:{ nama:"Gunung Butak", alamat:"Desa Pandesari, Kec. Pujon, Kab. Malang", desc:"Ngenteni pendaki sejati karo puncak sing nantang — disuguhi panorama pegunungan sing nyenengake mripat lan jiwa petualang." }
  }
},
{ id:"Museum Ganesya", kategori:"Budaya", harga:"Rp25.000-Rp30.000/orang", jam:"08.00-15.00 (Senin-Jumat)", rating:"4.5",
  lat:-7.984, lng:112.630,
  foto:"https://i.ibb.co.com/2YWjW4XD/1789389463864.png",
  priceImage:"https://i.ibb.co.com/hFDffqRT/Screenshot-2026-0922-073743.png",
  youtube:"https://youtu.be/ra9A3euY0Q4?si=lof5HHkKDzzfvTbj",
  tiktok:["https://vt.tiktok.com/ZSqGUoxSF/","https://vt.tiktok.com/ZSqGybQko/","https://vt.tiktok.com/ZSqGyXV2S/"],
  i18n: {
    id:{ nama:"Museum Ganesya", alamat:"Jl. Graha Kencana Raya Jl. Raya Karanglo, Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur 65126", desc:"Menyingkap jejak kebudayaan Nusantara melalui koleksi bersejarah yang tersimpan rapi dan penuh cerita." },
    en:{ nama:"Ganesya Museum", alamat:"Jl. Graha Kencana Raya, Jl. Raya Karanglo, Karanglo, Banjararum, Singosari District, Malang Regency, East Java 65126, Indonesia", desc:"Revealing the traces of Nusantara culture through well-preserved historical collections full of stories." },
    jv:{ nama:"Museum Ganesya", alamat:"Jl. Graha Kencana Raya Jl. Raya Karanglo, Karanglo, Banjararum, Kec. Singosari, Kab. Malang, Jawa Timur 65126", desc:"Mbukak tilas kabudayan Nusantara lumantar koleksi bersejarah sing disimpen rapi lan kebak crita." }
  }
},
{ id:"Candi Badut", kategori:"Budaya", harga:"Rp10.000/orang", jam:"08.00-16.00", rating:"4.5",
  lat:-8.005, lng:112.606,
  foto:"https://i.ibb.co.com/0jF2MrJr/9c87e449522681e949f2189577030557.jpg",
  priceImage:"https://i.ibb.co.com/tPWL437J/Screenshot-2026-0922-073914.png",
  youtube:"https://youtu.be/x9rRI_KW48A?si=IGb7nQqMfP1k8fiM",
  tiktok:["https://vt.tiktok.com/ZSqGHn7AA/","https://vt.tiktok.com/ZSqG9yTLu/","https://vt.tiktok.com/ZSqG9cmxj/"],
  i18n: {
    id:{ nama:"Candi Badut", alamat:"Jl. Candi 5D, Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur 65146", desc:"Saksi bisu kejayaan masa lampau — candi tertua di Malang yang menyimpan misteri sejarah kerajaan kuno." },
    en:{ nama:"Badut Temple", alamat:"Jl. Candi 5D, Karangbesuki, Sukun District, Malang City, East Java 65146, Indonesia", desc:"A silent witness to past glory — the oldest temple in Malang, holding the mystery of an ancient kingdom." },
    jv:{ nama:"Candhi Badut", alamat:"Jl. Candi 5D, Karangbesuki, Kec. Sukun, Kutha Malang, Jawa Timur 65146", desc:"Saksi bisu kaluhuran jaman biyen — candhi paling tuwa ing Malang sing nyimpen misteri sejarah kerajaan kuna." }
  }
},
{ id:"Museum Mpu Purwa", kategori:"Budaya", harga:"Free", jam:"08.00-15.00 (Senin-Jumat)", rating:"4.6",
  lat:-7.946, lng:112.616,
  foto:"https://i.ibb.co.com/dwrqBH6Y/Screenshot-2026-0922-191628.png",
  priceImage:"https://i.ibb.co.com/8nRcZzJT/Screenshot-2026-0922-074038.png",
  youtube:"https://youtu.be/qh6xQJ1bAn8?si=Ww1uKc5R8HniaUjE",
  tiktok:["https://vt.tiktok.com/ZSqGbUo5s/","https://vt.tiktok.com/ZSqGbg6nN/","https://vt.tiktok.com/ZSqGbDQgE/"],
  i18n: {
    id:{ nama:"Museum Mpu Purwa", alamat:"Perumahan Griya Santa, Jl. Soekarno-Hatta No.210, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141", desc:"Gudang pusaka peninggalan kerajaan masa lalu — tempat terbaik untuk menyelami sejarah Malang dari balik artefak kuno." },
    en:{ nama:"Mpu Purwa Museum", alamat:"Griya Santa Housing, Jl. Soekarno-Hatta No.210, Mojolangu, Lowokwaru District, Malang City, East Java 65141, Indonesia", desc:"A treasure trove of ancient kingdom relics — the best place to dive into Malang's history through ancient artifacts." },
    jv:{ nama:"Museum Mpu Purwa", alamat:"Perumahan Griya Santa, Jl. Soekarno-Hatta No.210, Mojolangu, Kec. Lowokwaru, Kutha Malang, Jawa Timur 65141", desc:"Gudhang pusaka tinggalan kerajaan jaman biyen — papan paling apik kanggo nyilem sejarah Malang saka artefak kuna." }
  }
},
{ id:"Candi Singosari", kategori:"Sejarah", harga:"Free", jam:"07.00-17.00", rating:"4.6",
  lat:-7.8897, lng:112.665,
  foto:"https://i.ibb.co.com/92X4RF3/Screenshot-2026-0914-195026.png",
  priceImage:"https://i.ibb.co.com/jvK5qk7G/Screenshot-2026-0922-074150.png",
  youtube:"https://youtu.be/P8lR5R14uM0?si=MqKy0hW8zNh8I6gK",
  tiktok:["https://vt.tiktok.com/ZSqGgbMXS/","https://vt.tiktok.com/ZSqGgQ35U/","https://vt.tiktok.com/ZSqGph9qf/"],
  i18n: {
    id:{ nama:"Candi Singosari", alamat:"Jl. Kertanegara, Candirenggo, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153", desc:"Monumen megah peninggalan Kerajaan Singhasari — menyimpan kisah kejayaan yang masih bergema hingga kini." },
    en:{ nama:"Singosari Temple", alamat:"Jl. Kertanegara, Candirenggo, Singosari District, Malang Regency, East Java 65153, Indonesia", desc:"A magnificent monument from the Singhasari Kingdom — preserving the story of glory that still echoes today." },
    jv:{ nama:"Candhi Singosari", alamat:"Jl. Kertanegara, Candirenggo, Kec. Singosari, Kab. Malang, Jawa Timur 65153", desc:"Monumen megah tinggalan Kerajaan Singhasari — nyimpen crita kaluhuran sing isih keprungu nganti saiki." }
  }
},
{ id:"Candi Jago", kategori:"Sejarah", harga:"Rp10.000-Rp15.000/orang", jam:"07.00-17.00", rating:"4.5",
  lat:-8.005, lng:112.755,
  foto:"https://i.ibb.co.com/B98gkw6/candi-jago-malang.jpg",
  priceImage:"https://i.ibb.co.com/bM4S4ggf/Screenshot-2026-0922-074330.png",
  youtube:"https://youtu.be/s_OWcZIEWhw?si=N0Z0pbSQth_u5xXJ",
  tiktok:["https://vt.tiktok.com/ZSqGpUWvJ/","https://vt.tiktok.com/ZSqGsJ5Sy/","https://vt.tiktok.com/ZSqGsmN2T/"],
  i18n: {
    id:{ nama:"Candi Jago", alamat:"Jl. Wisnuwardhana, Ronggowuni, Kec. Tumpang, Kabupaten Malang, Jawa Timur 65156", desc:"Warisan megah dari masa Majapahit — relief dan arsitekturnya menyimpan makna filosofis yang mendalam." },
    en:{ nama:"Jago Temple", alamat:"Jl. Wisnuwardhana, Ronggowuni, Tumpang District, Malang Regency, East Java 65156, Indonesia", desc:"A magnificent legacy from the Majapahit era — its reliefs and architecture hold deep philosophical meanings." },
    jv:{ nama:"Candhi Jago", alamat:"Jl. Wisnuwardhana, Ronggowuni, Kec. Tumpang, Kab. Malang, Jawa Timur 65156", desc:"Warisan megah saka jaman Majapahit — relief lan arsitekture nyimpen makna filosofis sing jero." }
  }
},
{ id:"Candi Sumberawan", kategori:"Sejarah", harga:"Rp5.000/orang", jam:"07.00-17.00", rating:"4.5",
  lat:-7.896, lng:112.674,
  foto:"https://i.ibb.co.com/FL9M5364/1789434758828.jpg",
  priceImage:"https://i.ibb.co.com/nsrJ8fXy/Screenshot-2026-0922-074450.png",
  youtube:"https://youtu.be/bdVTBw47ceM?si=ad3ePq3gE5cilFIU",
  tiktok:["https://vt.tiktok.com/ZSqGGMpc5/","https://vt.tiktok.com/ZSqGG9tAL/","https://vt.tiktok.com/ZSqGGC25m/"],
  i18n: {
    id:{ nama:"Candi Sumberawan", alamat:"Sumberawan, Toyomarto, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153", desc:"Stupa kecil di tengah rimbun pepohonan — tempat sakral yang menghadirkan kedamaian di setiap kunjungan." },
    en:{ nama:"Sumberawan Temple", alamat:"Sumberawan, Toyomarto, Singosari District, Malang Regency, East Java 65153, Indonesia", desc:"A small stupa amidst lush trees — a sacred place that brings peace with every visit." },
    jv:{ nama:"Candhi Sumberawan", alamat:"Sumberawan, Toyomarto, Kec. Singosari, Kab. Malang, Jawa Timur 65153", desc:"Stupa cilik ing tengah alas sing rimbun — papan sakral sing nggawa tentrem saben dolan." }
  }
},
{ id:"Masjid Jami' Malang", kategori:"Religi", harga:"Free", jam:"24 jam", rating:"4.8",
  lat:-7.9826, lng:112.6308,
  foto:"https://i.ibb.co.com/ns53CLLd/Screenshot-2026-0914-195959.png",
  priceImage:"https://i.ibb.co.com/R4SfPG5s/Screenshot-2026-0922-074613.png",
  youtube:"https://youtu.be/MLWsF521pCM?si=MCfC-CbVKFCxND6S",
  tiktok:["https://vt.tiktok.com/ZSqGtyy6x/","https://vt.tiktok.com/ZSqGteHCv/","https://vt.tiktok.com/ZSqGtbJpw/"],
  i18n: {
    id:{ nama:"Masjid Jami' Malang", alamat:"Jl. Merdeka Barat No.3, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119", desc:"Masjid bersejarah di jantung Kota Malang — saksi perjalanan spiritual dan budaya umat selama lebih dari satu abad." },
    en:{ nama:"Jami' Mosque of Malang", alamat:"Jl. Merdeka Barat No.3, Kauman, Klojen District, Malang City, East Java 65119, Indonesia", desc:"A historic mosque in the heart of Malang — witness to the spiritual and cultural journey of the people for over a century." },
    jv:{ nama:"Masjid Jami' Malang", alamat:"Jl. Merdeka Barat No.3, Kauman, Kec. Klojen, Kutha Malang, Jawa Timur 65119", desc:"Masjid bersejarah ing jantung Kutha Malang — saksi lakune spiritual lan budaya umat luwih saka siji abad." }
  }
},
{ id:"Klenteng Eng An Kiong", kategori:"Religi", harga:"Rp5.000/orang", jam:"08.00-21.00", rating:"4.6",
  lat:-8.005, lng:112.636,
  foto:"https://i.ibb.co.com/v6RpxNFk/IMG-20260915-WA0008.jpg",
  priceImage:"https://i.ibb.co.com/nMrW1GV4/Screenshot-2026-0922-074733.png",
  youtube:"https://youtu.be/aQ6EBMXhwMo?si=wuqeY0OXiimosjOr",
  tiktok:["https://vt.tiktok.com/ZSqGnJ7e1/","https://vt.tiktok.com/ZSqGnkp7V/","https://vt.tiktok.com/ZSqGnFUox/"],
  i18n: {
    id:{ nama:"Klenteng Eng An Kiong", alamat:"Jl. R.E. Martadinata No.1, Kotalama, Kec. Kedungkandang, Kota Malang, Jawa Timur 65118", desc:"Rumah ibadah penuh warna dan lampion — simbol keharmonisan budaya Tionghoa yang telah lama bersemi di Malang." },
    en:{ nama:"Eng An Kiong Temple", alamat:"Jl. R.E. Martadinata No.1, Kotalama, Kedungkandang District, Malang City, East Java 65118, Indonesia", desc:"A colorful house of worship filled with lanterns — a symbol of Chinese cultural harmony that has long blossomed in Malang." },
    jv:{ nama:"Klenteng Eng An Kiong", alamat:"Jl. R.E. Martadinata No.1, Kotalama, Kec. Kedungkandang, Kutha Malang, Jawa Timur 65118", desc:"Omah ibadah sing kebak warna lan lampion — simbol kerukunan budaya Tionghoa sing wis suwe thukul ing Malang." }
  }
},
{ id:"Masjid Tiban Turen", kategori:"Religi", harga:"Free", jam:"24 jam", rating:"4.5",
  lat:-8.172, lng:112.691,
  foto:"https://i.ibb.co.com/BWQYTFy/Screenshot-2026-0915-083302.png",
  priceImage:"https://i.ibb.co.com/LDnfDjC9/Screenshot-2026-0922-074956.png",
  youtube:"https://youtu.be/JjpzSz4jUok?si=7GKs9bCu13v_ePnr",
  tiktok:["https://vt.tiktok.com/ZSqtRUA3f/","https://vt.tiktok.com/ZSqtRUFL7/","https://vt.tiktok.com/ZSqtRwKnq/"],
  i18n: {
    id:{ nama:"Masjid Tiban Turen", alamat:"Jl. K.H. Wahid Hasyim No.10, Sananrejo, Kec. Turen, Kabupaten Malang, Jawa Timur 65175", desc:"Dikenal karena arsitektur unik dan kisah misteri pembangunannya — magnet spiritual yang memikat banyak peziarah." },
    en:{ nama:"Tiban Turen Mosque", alamat:"Jl. K.H. Wahid Hasyim No.10, Sananrejo, Turen District, Malang Regency, East Java 65175, Indonesia", desc:"Known for its unique architecture and mysterious construction story — a spiritual magnet that attracts many pilgrims." },
    jv:{ nama:"Masjid Tiban Turen", alamat:"Jl. K.H. Wahid Hasyim No.10, Sananrejo, Kec. Turen, Kab. Malang, Jawa Timur 65175", desc:"Kondhang amarga arsitektur unik lan crita misteri pambangunane — magnet spiritual sing narik akeh peziarah." }
  }
},
{ id:"Soto Lombok Malang Sejak 1955", kategori:"Kuliner", harga:"Free", jam:"07.00-17.00", rating:"4.6",
  lat:-7.976, lng:112.633,
  foto:"https://i.ibb.co.com/BVcN90Xg/Screenshot-2026-0914-201440.png",
  priceImage:"https://i.ibb.co.com/PzfN7h62/Screenshot-2026-0922-081956.png",
  youtube:"https://youtu.be/B9H8N77DP3Q?si=eUxUxtoQolAZdOno",
  tiktok:["https://vt.tiktok.com/ZSqtLJf85/","https://vt.tiktok.com/ZSqtLBBQ7/","https://vt.tiktok.com/ZSqtL2Ydx/"],
  i18n: {
    id:{ nama:"Soto Lombok Malang Sejak 1955", alamat:"Jl. Sulawesi No.1, Kasin, Kec. Klojen, Kota Malang, Jawa Timur 65117", desc:"Cita rasa otentik sejak 1955 — semangkuk kehangatan dengan kuah gurih yang resepnya diwariskan lintas generasi." },
    en:{ nama:"Soto Lombok Malang Since 1955", alamat:"Jl. Sulawesi No.1, Kasin, Klojen District, Malang City, East Java 65117, Indonesia", desc:"Authentic taste since 1955 — a bowl of warmth with savory broth whose recipe has been passed down through generations." },
    jv:{ nama:"Soto Lombok Malang Wiwit 1955", alamat:"Jl. Sulawesi No.1, Kasin, Kec. Klojen, Kutha Malang, Jawa Timur 65117", desc:"Rasa otentik wiwit 1955 — semangkuk anget karo kuah gurih sing resepe diwarisake saka generasi menyang generasi." }
  }
},
{ id:"Cwie Mie Isor Uwit", kategori:"Kuliner", harga:"Free", jam:"10.00-21.00", rating:"4.5",
  lat:-7.982, lng:112.626,
  foto:"https://i.ibb.co.com/ch6yvy41/Screenshot-2026-0922-193403.png",
  priceImage:"https://i.ibb.co.com/ks3Kpgs1/Screenshot-2026-0922-082430.png",
  youtube:"https://youtu.be/bXKsfbwXz60?si=zjIJqB-BK5vdcFUj",
  tiktok:["https://vt.tiktok.com/ZSqtNPYWF/","https://vt.tiktok.com/ZSqtFYahK/","https://vt.tiktok.com/ZSqtFeCw9/"],
  i18n: {
    id:{ nama:"Cwie Mie Isor Uwit", alamat:"Jl. Guntur No.21, Klojen, Kota Malang, Jawa Timur", desc:"Mie kenyal dengan topping lezat khas Malang — hidangan sederhana yang bikin rindu dan selalu ingin kembali." },
    en:{ nama:"Cwie Mie Isor Uwit", alamat:"Jl. Guntur No.21, Klojen, Malang City, East Java, Indonesia", desc:"Chewy noodles with delicious Malang-style toppings — a simple dish that makes you miss it and always want to return." },
    jv:{ nama:"Cwie Mie Isor Uwit", alamat:"Jl. Guntur No.21, Klojen, Kutha Malang, Jawa Timur", desc:"Mie kenyal karo topping enak khas Malang — panganan prasaja sing nggawe kangen lan tansah pengin bali." }
  }
},
{ id:"Orem-Orem Arema", kategori:"Kuliner", harga:"Free", jam:"09.30-16.00", rating:"4.5",
  lat:-7.978, lng:112.623,
  foto:"https://i.ibb.co.com/B2HmgXfy/orem-orem-kuliner-khas-malang-benbernavitacom-google-f-ZZzl.webp",
  priceImage:"https://i.ibb.co.com/0yBC2Gcx/Screenshot-2026-0922-082913.png",
  youtube:"https://youtu.be/8nc0cuz_ja4?si=0sEKgTyyZ6TsTmjd",
  tiktok:["https://vt.tiktok.com/ZSqtBxktY/","https://vt.tiktok.com/ZSqtSdEVR/","https://vt.tiktok.com/ZSqtSkKtd/"],
  i18n: {
    id:{ nama:"Orem-Orem Arema", alamat:"Jl. Blitar No.14, Kota Malang, Jawa Timur", desc:"Kuliner rakyat dengan kuah gurih dan tempe lembut — cita rasa khas Arema yang menggugah selera sejak suapan pertama." },
    en:{ nama:"Orem-Orem Arema", alamat:"Jl. Blitar No.14, Malang City, East Java, Indonesia", desc:"A people's dish with savory broth and tender tempeh — an authentic Arema flavor that awakens the appetite from the first bite." },
    jv:{ nama:"Orem-Orem Arema", alamat:"Jl. Blitar No.14, Kutha Malang, Jawa Timur", desc:"Panganan rakyat karo kuah gurih lan tempe lembut — rasa khas Arema sing nggugah selera wiwit cepokan kapisan." }
  }
},
{ id:"Malang Town Square", kategori:"Belanja", harga:"Free", jam:"10.00-22.00", rating:"4.5",
  lat:-7.941, lng:112.620,
  foto:"https://i.ibb.co.com/3yLgrZYq/Screenshot-2026-0914-202210.png",
  priceImage:"",
  youtube:"https://youtu.be/EyVJP3HjS9M?si=fCPSsbPFeqwBB_Ty",
  tiktok:["https://vt.tiktok.com/ZSqnKjKne/","https://vt.tiktok.com/ZSqnEkXLr/","https://vt.tiktok.com/ZSqnEf4W2/"],
  i18n: {
    id:{ nama:"Malang Town Square", alamat:"Jl. Veteran No.2, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65111", desc:"Pusat gaya hidup modern di Kota Malang — tempat nongkrong, belanja, dan kuliner dalam satu atap yang nyaman." },
    en:{ nama:"Malang Town Square", alamat:"Jl. Veteran No.2, Penanggungan, Klojen District, Malang City, East Java 65111, Indonesia", desc:"A modern lifestyle center in Malang — a comfortable place for hanging out, shopping, and dining under one roof." },
    jv:{ nama:"Malang Town Square", alamat:"Jl. Veteran No.2, Penanggungan, Kec. Klojen, Kutha Malang, Jawa Timur 65111", desc:"Pusat gaya urip modern ing Kutha Malang — papan nongkrong, blanja, lan kuliner ing sak payon sing nyaman." }
  }
},
{ id:"Pasar Apung", kategori:"Belanja", harga:"Free", jam:"12.00-20.00", rating:"4.4",
  lat:-7.877, lng:112.521,
  foto:"https://i.ibb.co.com/6Rk7QP5f/IMG-20260915-WA0011.jpg",
  priceImage:"",
  youtube:"https://youtu.be/nTurRzmcaaI?si=g0ofQG_KhvP3iHE_",
  tiktok:["https://vt.tiktok.com/ZSqnoMxA2/","https://vt.tiktok.com/ZSqnoS8aX/","https://vt.tiktok.com/ZSqnoYVkn/"],
  i18n: {
    id:{ nama:"Pasar Apung", alamat:"Jl. Terusan Sultan Agung No.2, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur 65311", desc:"Suasana belanja unik di atas air — sensasi berburu jajanan dan suvenir dengan pemandangan yang berbeda." },
    en:{ nama:"Floating Market", alamat:"Jl. Terusan Sultan Agung No.2, Ngaglik, Batu District, Batu City, East Java 65311, Indonesia", desc:"A unique shopping atmosphere on the water — the sensation of hunting for snacks and souvenirs with a different view." },
    jv:{ nama:"Pasar Apung", alamat:"Jl. Terusan Sultan Agung No.2, Ngaglik, Kec. Batu, Kutha Batu, Jawa Timur 65311", desc:"Swasana blanja unik ing ndhuwur banyu — sensasi golek jajanan lan suvenir karo pemandangan sing beda." }
  }
},
{ id:"Mall Olympic Garden", kategori:"Belanja", harga:"Free", jam:"10.00-22.00", rating:"4.5",
  lat:-7.986, lng:112.625,
  foto:"https://i.ibb.co.com/BKgKYm46/IMG-20260915-WA0013.jpg",
  priceImage:"",
  youtube:"https://youtu.be/xZepYwNPP60?si=eBSVqMaCa66UdwGu",
  tiktok:["https://vt.tiktok.com/ZSqW1MrQm/","https://vt.tiktok.com/ZSqnoK1WH/","https://vt.tiktok.com/ZSqW1bWDM/"],
  i18n: {
    id:{ nama:"Mall Olympic Garden", alamat:"Jl. Kawi No.24, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65116", desc:"Destinasi belanja favorit di pusat kota — koleksi lengkap, suasana nyaman, dan aneka kuliner menggoda." },
    en:{ nama:"Olympic Garden Mall", alamat:"Jl. Kawi No.24, Kauman, Klojen District, Malang City, East Java 65116, Indonesia", desc:"A favorite shopping destination in the city center — complete collections, comfortable atmosphere, and tempting culinary varieties." },
    jv:{ nama:"Mall Olympic Garden", alamat:"Jl. Kawi No.24, Kauman, Kec. Klojen, Kutha Malang, Jawa Timur 65116", desc:"Destinasi blanja favorit ing tengah kutha — koleksi komplit, swasana nyaman, lan aneka kuliner sing nggodha." }
  }
},
{ id:"Kebun Teh Wonosari", kategori:"Pertanian", harga:"Rp15.000-Rp25.000/orang", jam:"08.00-17.00", rating:"4.5",
  lat:-8.006, lng:112.767,
  foto:"https://i.ibb.co.com/Kz2b3wC6/Screenshot-2026-0914-203557.png",
  priceImage:"https://i.ibb.co.com/fzmVV4yF/Screenshot-2026-0922-075224.png",
  youtube:"https://youtu.be/YiBK03GlQmk?si=u2nYCzh-tBdepiHQ",
  tiktok:["https://vt.tiktok.com/ZSqWJRXLk/","https://vt.tiktok.com/ZSqWJMuFj/","https://vt.tiktok.com/ZSqWJN4jH/"],
  i18n: {
    id:{ nama:"Kebun Teh Wonosari", alamat:"Jl. Desa Toyo Marto No.2, Bodean Putuk, Toyomarto, Kec. Singosari, Kabupaten Malang, Jawa Timur 65153", desc:"Hamparan hijau perkebunan teh yang menyejukkan mata — hirup udara segar dan rasakan ketenangan alam pegunungan." },
    en:{ nama:"Wonosari Tea Plantation", alamat:"Jl. Desa Toyo Marto No.2, Bodean Putuk, Toyomarto, Singosari District, Malang Regency, East Java 65153, Indonesia", desc:"Rolling green tea plantations that refresh the eyes — breathe fresh air and feel the calm of the mountain nature." },
    jv:{ nama:"Kebon Teh Wonosari", alamat:"Jl. Desa Toyo Marto No.2, Bodean Putuk, Toyomarto, Kec. Singosari, Kab. Malang, Jawa Timur 65153", desc:"Hamparan ijo kebon teh sing nyegerake mripat — ambekan hawa seger lan rasakna tentreme alam pegunungan." }
  }
},
{ id:"Duta Pengangguran", kategori:"Pertanian", harga:"Rp10.000/orang", jam:"08.00-16.00", rating:"4.4",
  lat:-8.006, lng:112.614,
  foto:"https://i.ibb.co.com/7J1tjxHJ/Screenshot-2026-0915-084858.png",
  priceImage:"https://i.ibb.co.com/7tvzKBhx/Screenshot-2026-0922-075416.png",
  youtube:"https://youtu.be/MUWeZKzNs3o?si=xyTNGlDA0DgiQA-x",
  tiktok:["https://vt.tiktok.com/ZSqWe19yY/","https://vt.tiktok.com/ZSqWeUCk2/","https://vt.tiktok.com/ZSqWerw1h/"],
  i18n: {
    id:{ nama:"Duta Pengangguran", alamat:"Kawasan Polbangtan Malang, Jl. Ir. Rais, Kec. Klojen, Kota Malang, Jawa Timur", desc:"Wisata edukasi pertanian yang menyenangkan — cocok untuk keluarga yang ingin belajar sambil bermain di alam terbuka." },
    en:{ nama:"Duta Pengangguran", alamat:"Polbangtan Malang Area, Jl. Ir. Rais, Klojen District, Malang City, East Java, Indonesia", desc:"A fun agricultural educational tour — perfect for families who want to learn while playing in the open air." },
    jv:{ nama:"Duta Pengangguran", alamat:"Kawasan Polbangtan Malang, Jl. Ir. Rais, Kec. Klojen, Kutha Malang, Jawa Timur", desc:"Wisata edukasi pertanian sing nyenengake — cocok kanggo kulawarga sing pengin sinau karo dolanan ing alam terbuka." }
  }
},
{ id:"Petik Jeruk Batu", kategori:"Pertanian", harga:"Rp20.000-Rp25.000/orang", jam:"08.00-16.00", rating:"4.5",
  lat:-7.930, lng:112.548,
  foto:"https://i.ibb.co.com/ycZL8Rpx/IMG-20260915-WA0016.webp",
  priceImage:"https://i.ibb.co.com/Z1hDyBYt/Screenshot-2026-0922-075613.png",
  youtube:"https://youtu.be/f2AosFAHKE8?si=tDcwxbc0r-nzCcZn",
  tiktok:["https://vt.tiktok.com/ZSqWe7SfW/","https://vt.tiktok.com/ZSqWewxr3/","https://vt.tiktok.com/ZSqWdLBot/"],
  i18n: {
    id:{ nama:"Petik Jeruk Batu", alamat:"Desa Selorejo, Kec. Dau, Kabupaten Malang, Jawa Timur", desc:"Pengalaman memetik jeruk langsung dari pohonnya — segar, menyenangkan, dan jadi kenangan manis bersama keluarga." },
    en:{ nama:"Batu Orange Picking", alamat:"Selorejo Village, Dau District, Malang Regency, East Java, Indonesia", desc:"The experience of picking oranges straight from the tree — fresh, fun, and a sweet memory with family." },
    jv:{ nama:"Petik Jeruk Batu", alamat:"Desa Selorejo, Kec. Dau, Kab. Malang, Jawa Timur", desc:"Pengalaman methik jeruk langsung saka wite — seger, nyenengake, lan dadi kenangan manis karo kulawarga." }
  }
},
{ id:"Kaliwatu", kategori:"Petualangan", harga:"Rp180.000-Rp215.000/orang", jam:"08.00-17.00", rating:"4.6",
  lat:-7.847, lng:112.680,
  foto:"https://i.ibb.co.com/yBpWqKP7/1789393273045.jpg",
  priceImage:"https://i.ibb.co.com/PfHrsYh/Screenshot-2026-0922-075719.png",
  youtube:"https://youtu.be/TOohSQ4V5l4?si=dAbSBvLIJU6ulBL9",
  tiktok:["https://vt.tiktok.com/ZSqWJW6gQ/","https://vt.tiktok.com/ZSqWJvT4K/","https://vt.tiktok.com/ZSqWeLojR/"],
  i18n: {
    id:{ nama:"Kaliwatu", alamat:"Jl. Bung Tomo No.19, Bumiaji, Kec. Bumiaji, Kota Batu, Jawa Timur 65332", desc:"Uji adrenalinmu di sini — arung jeram, outbound, dan aneka petualangan seru menanti para pencinta tantangan." },
    en:{ nama:"Kaliwatu", alamat:"Jl. Bung Tomo No.19, Bumiaji, Bumiaji District, Batu City, East Java 65332, Indonesia", desc:"Test your adrenaline here — rafting, outbound, and various exciting adventures await thrill-seekers." },
    jv:{ nama:"Kaliwatu", alamat:"Jl. Bung Tomo No.19, Bumiaji, Kec. Bumiaji, Kutha Batu, Jawa Timur 65332", desc:"Njajal adrenalinmu ing kene — arung jeram, outbound, lan aneka petualangan seru ngenteni para pencinta tantangan." }
  }
},
{ id:"Paralayang", kategori:"Petualangan", harga:"Rp10.000-Rp30.000", jam:"24 jam", rating:"4.6",
  lat:-7.871, lng:112.496,
  foto:"https://i.ibb.co.com/fdzWMW2Y/IMG-20260915-WA0017.jpg",
  priceImage:"https://i.ibb.co.com/yn8WrMBS/Screenshot-2026-0922-075824.png",
  youtube:"https://youtu.be/kgu3tcAeLFQ?si=gc9xTn0RkZMoSGbJ",
  tiktok:["https://vt.tiktok.com/ZSqWe2PGS/","https://vt.tiktok.com/ZSqWJAAgU/","https://vt.tiktok.com/ZSqWJnNU4/"],
  i18n: {
    id:{ nama:"Paralayang", alamat:"Jl. Gunung Banyak, Songgokerto, Kota Batu, Jawa Timur 65315", desc:"Terbang tinggi menikmati panorama Kota Batu dari angkasa — sensasi luar biasa bagi jiwa yang haus petualangan." },
    en:{ nama:"Paragliding", alamat:"Jl. Gunung Banyak, Songgokerto, Batu City, East Java 65315, Indonesia", desc:"Fly high and enjoy the panorama of Batu City from the sky — an extraordinary sensation for adventure-hungry souls." },
    jv:{ nama:"Paralayang", alamat:"Jl. Gunung Banyak, Songgokerto, Kutha Batu, Jawa Timur 65315", desc:"Mabur dhuwur ngrasakake panorama Kutha Batu saka awang-awang — sensasi luar biasa kanggo jiwa sing ngelak petualangan." }
  }
},
{ id:"Tracking Budug Asu", kategori:"Petualangan", harga:"Rp10.000-Rp15.000/orang", jam:"24 jam", rating:"4.5",
  lat:-7.871, lng:112.665,
  foto:"https://i.ibb.co.com/rfGrmdMQ/IMG-20260915-WA0018.jpg",
  priceImage:"https://i.ibb.co.com/7xx8KRxt/Screenshot-2026-0922-075920.png",
  youtube:"https://youtu.be/MqOb90ha8KI?si=Yc1fuvM7LVEJUjjz",
  tiktok:["https://vt.tiktok.com/ZSqWJbbct/","https://vt.tiktok.com/ZSqWJfN7C/","https://vt.tiktok.com/ZSqWJyTSj/"],
  i18n: {
    id:{ nama:"Tracking Budug Asu", alamat:"Kreweh, Gunungrejo, Kec. Singosari, Kabupaten Malang, Jawa Timur", desc:"Jalur trekking menantang dengan panorama eksotis — cocok untuk yang ingin menjajal adrenalin sekaligus menikmati alam." },
    en:{ nama:"Budug Asu Trekking", alamat:"Kreweh, Gunungrejo, Singosari District, Malang Regency, East Java, Indonesia", desc:"A challenging trekking trail with exotic panoramas — perfect for those who want to test their adrenaline while enjoying nature." },
    jv:{ nama:"Trekking Budug Asu", alamat:"Kreweh, Gunungrejo, Kec. Singosari, Kab. Malang, Jawa Timur", desc:"Jalur trekking sing nantang karo panorama eksotis — cocok kanggo sing pengin njajal adrenalin lan ngrasakake alam." }
  }
},
{ id:"Mikutopia", kategori:"Buatan", harga:"Rp40.000-Rp95.000", jam:"09.00-18.00", rating:"4.5",
  lat:-7.918, lng:112.609,
  foto:"https://i.ibb.co.com/8DYn2hsd/Screenshot-2026-0914-204948.png",
  priceImage:"https://i.ibb.co.com/DFwc5DR/Screenshot-2026-0922-080027.png",
  youtube:"https://youtu.be/Ljv8lgewtEE?si=XxanMJvgZmls18PV",
  tiktok:["https://vt.tiktok.com/ZSqWJkfp3/","https://vt.tiktok.com/ZSqWJ6Yfa/","https://vt.tiktok.com/ZSqW13msS/"],
  i18n: {
    id:{ nama:"Mikutopia", alamat:"Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur 65336", desc:"Dunia fantasi yang menggemaskan — cocok untuk healing, foto-foto, dan menghabiskan waktu bersama orang tersayang." },
    en:{ nama:"Mikutopia", alamat:"Tulungrejo, Bumiaji District, Batu City, East Java 65336, Indonesia", desc:"An adorable fantasy world — perfect for healing, photos, and spending time with loved ones." },
    jv:{ nama:"Mikutopia", alamat:"Tulungrejo, Kec. Bumiaji, Kutha Batu, Jawa Timur 65336", desc:"Donya fantasi sing nggemaské — cocok kanggo healing, foto-foto, lan nglalekake wektu karo wong sing ditresnani." }
  }
},
{ id:"Hawai Waterpark", kategori:"Buatan", harga:"Rp85.000-Rp120.000", jam:"09.00-17.00", rating:"4.5",
  lat:-7.919, lng:112.653,
  foto:"https://i.ibb.co.com/Zp19RDVz/quality-restoration-20260915085918594.jpg",
  priceImage:"https://i.ibb.co.com/675XDkXN/Screenshot-2026-0922-080150.png",
  youtube:"https://youtu.be/6YWPczrJ0aY?si=DbtR7iQAhw3AMukt",
  tiktok:["https://vt.tiktok.com/ZSqW1aroD/","https://vt.tiktok.com/ZSqW1Hh9W/","https://vt.tiktok.com/ZSqWJL3a7/"],
  i18n: {
    id:{ nama:"Hawai Waterpark", alamat:"Perumahan Graha Kencana Raya, Jl. Raya Karanglo, Banjararum, Kec. Singosari, Kabupaten Malang, Jawa Timur 65126", desc:"Bersantai seharian di kolam dengan aneka wahana seru — destinasi sempurna untuk liburan keluarga yang menyenangkan." },
    en:{ nama:"Hawai Waterpark", alamat:"Graha Kencana Raya Housing, Jl. Raya Karanglo, Banjararum, Singosari District, Malang Regency, East Java 65126, Indonesia", desc:"Relax all day in pools with various exciting rides — the perfect destination for a fun family vacation." },
    jv:{ nama:"Hawai Waterpark", alamat:"Perumahan Graha Kencana Raya, Jl. Raya Karanglo, Banjararum, Kec. Singosari, Kab. Malang, Jawa Timur 65126", desc:"Nginep sedina muput ing kolam karo aneka wahana seru — destinasi sing pas kanggo liburan kulawarga sing nyenengake." }
  }
},
{ id:"Malang Night Paradise", kategori:"Buatan", harga:"Rp75.000-Rp180.000", jam:"17.00-22.00", rating:"4.5",
  lat:-7.934, lng:112.667,
  foto:"https://i.ibb.co.com/qLbvQshS/IMG-20260915-WA0019.webp",
  priceImage:"https://i.ibb.co.com/qMd4tmWv/Screenshot-2026-0922-080323.png",
  youtube:"https://youtu.be/1Xc8Mq8TQyY?si=eU5ktMrYhI29LP7D",
  tiktok:["https://vt.tiktok.com/ZSqW1daqQ/","https://vt.tiktok.com/ZSqW1PRC1/","https://vt.tiktok.com/ZSqW1y65k/"],
  i18n: {
    id:{ nama:"Malang Night Paradise", alamat:"Jl. Graha Kencana Raya No.66, Karanglo, Balearjosari, Kec. Blimbing, Kota Malang, Jawa Timur 65126", desc:"Bersinar terang di malam hari — taman lampion dengan ribuan cahaya warna-warni yang memukau hati dan kamera." },
    en:{ nama:"Malang Night Paradise", alamat:"Jl. Graha Kencana Raya No.66, Karanglo, Balearjosari, Blimbing District, Malang City, East Java 65126, Indonesia", desc:"Shining bright at night — a lantern park with thousands of colorful lights that amaze both heart and camera." },
    jv:{ nama:"Malang Night Paradise", alamat:"Jl. Graha Kencana Raya No.66, Karanglo, Balearjosari, Kec. Blimbing, Kutha Malang, Jawa Timur 65126", desc:"Sumunar padhang ing wayah bengi — taman lampion karo ewonan cahya warna-warni sing nggumunake ati lan kamera." }
  }
}
];
const ORIGIN={name:'Edohouse',addr:'Jl. Tanimbar No. 22, Kasin, Kec. Klojen, Kota Malang, Jawa Timur 65117',lat:-7.990185,lng:112.627345};
const $=s=>document.querySelector(s);
const esc=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=(n,c)=>`<svg class="i ${c||''}" viewBox="0 0 24 24"><use href="#${n}"/></svg>`;
function hav(a,b,c,d){const R=6371,r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)**2;return R*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}
const D=wisata.map((w,i)=>{const t=w.i18n.id;return{i,nama:t.nama,alamat:t.alamat,desc:t.desc,kat:w.kategori,harga:w.harga,jam:w.jam,rating:w.rating,lat:w.lat,lng:w.lng,foto:w.foto,price:w.priceImage,yt:w.youtube,tt:w.tiktok||[],km:Math.round(hav(ORIGIN.lat,ORIGIN.lng,w.lat,w.lng)*1.3*10)/10,exact:false}});
const KM=n=>'± '+n.toLocaleString('id-ID',{minimumFractionDigits:1,maximumFractionDigits:1})+' km';
const parkNote=d=>/^free$/i.test(String(d.harga).trim())?'Tidak ada tiket, hanya biaya parkir':'Belum termasuk biaya parkir';
const RP=n=>'Rp'+(Math.round(n/1000)*1000).toLocaleString('id-ID');
const fare=k=>[['Motor',Math.max(8000,k*2500)],['Mobil',Math.max(15000,k*4500)],['Mobil XL',Math.max(25000,k*7000)]];
function ft(u,ms){const c=new AbortController(),t=setTimeout(()=>c.abort(),ms||7000);return fetch(u,{signal:c.signal}).finally(()=>clearTimeout(t))}
let favs=[];try{favs=JSON.parse(localStorage.getItem('Edohouse-fav')||'[]')}catch(e){}
const saveFav=()=>{try{localStorage.setItem('Edohouse-fav',JSON.stringify(favs))}catch(e){}};
let onlyOpen=false,cat='Semua',query='',cur='home',map=null,pins=[],route=null,sat=false,tiles={},sel=null;
const cats=['Semua',...new Set(D.map(d=>d.kat))];

function openNow(jam,now){
  now=now||new Date();
  if(/24\s*jam/i.test(jam))return{s:'open',t:'Buka 24 jam'};
  const m=String(jam).match(/(\d{1,2})[.:](\d{2})\s*[-–]\s*(\d{1,2})[.:](\d{2})/);
  if(!m)return{s:'unk',t:'Cek jam buka dulu'};
  const nm={Senin:1,Selasa:2,Rabu:3,Kamis:4,Jumat:5,Sabtu:6,Minggu:0},dy=now.getDay();
  const dm=String(jam).match(/(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu)\s*[-–]\s*(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu)/);
  if(dm){const a=nm[dm[1]],b=nm[dm[2]];if(!(a<=b?(dy>=a&&dy<=b):(dy>=a||dy<=b)))return{s:'closed',t:'Tutup hari ini'}}
  const o=+m[1]*60+ +m[2],c=+m[3]*60+ +m[4],n=now.getHours()*60+now.getMinutes();
  const op=o<c?(n>=o&&n<c):(n>=o||n<c),f=x=>String(Math.floor(x/60)%24).padStart(2,'0')+'.'+String(x%60).padStart(2,'0');
  return op?{s:'open',t:'Buka, tutup '+f(c)}:{s:'closed',t:'Tutup, buka '+f(o)};
}
const stHtml=d=>{const o=openNow(d.jam);return`<span class="st ${o.s}"><i></i>${esc(o.t)}</span>`};
const gm=d=>`https://www.google.com/maps/search/?api=1&query=${d.lat},${d.lng}`;
const shareText=d=>`${d.nama} (${d.kat})\n${d.alamat}\nJarak dari Edohouse ${KM(d.km)}\nPeta: ${gm(d)}`;
const waShare=t=>window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener');
/* Rencana hari */
function curPlan(){
  const left=D.filter(d=>favs.includes(d.i)),O=[];let p=ORIGIN;
  while(left.length){let bi=0,bd=1e9;left.forEach((d,k)=>{const x=hav(p.lat,p.lng,d.lat,d.lng);if(x<bd){bd=x;bi=k}});const d=left.splice(bi,1)[0];O.push(d);p=d}
  const legs=[];p=ORIGIN;O.forEach((d,k)=>{legs.push(k?Math.round(hav(p.lat,p.lng,d.lat,d.lng)*13)/10:d.km);p=d});
  if(O.length)legs.push(O[O.length-1].km);
  const tot=Math.round(legs.reduce((a,b)=>a+b,0)*10)/10,fr=legs.reduce((a,l)=>a+Math.max(8000,l*2500),0);
  return{O,legs,tot,fr};
}
const planGm=O=>`https://www.google.com/maps/dir/?api=1&origin=${ORIGIN.lat},${ORIGIN.lng}&destination=${ORIGIN.lat},${ORIGIN.lng}&waypoints=${O.map(d=>d.lat+','+d.lng).join('%7C')}&travelmode=driving`;
function planText(){const{O,legs,tot,fr}=curPlan();return`Rencana hari dari Edohouse\n${O.map((d,k)=>`${k+1}. ${d.nama} (${KM(legs[k])})`).join('\n')}\nKembali ke Edohouse (${KM(legs[legs.length-1])})\nTotal ${KM(tot)}, ongkos ojol motor ${RP(fr)}\nPeta: ${planGm(O)}`}
async function showPlan(){
  const{O}=curPlan();if(!O.length)return;go('map');if(!ensureMap())return;clearRoute();peek(null);rbDest=null;$('#rbGo').hidden=true;
  const tk=++routeTk;
  $('#rbN').textContent='Rencana hari';$('#rbI').textContent='Mencari rute…';$('#rbar').classList.add('on');
  const co=[ORIGIN,...O,ORIGIN].map(q=>q.lng+','+q.lat).join(';');
  try{
    const r=await ft(`https://router.project-osrm.org/route/v1/driving/${co}?overview=full&geometries=geojson`,9000);const j=await r.json();const rt=j.routes[0];
    if(tk!==routeTk)return;
    const pts=rt.geometry.coordinates.map(c=>[c[1],c[0]]);
    $('#rbI').textContent=`${O.length} tempat, ${KM(Math.round(rt.distance/100)/10)}, sekitar ${Math.round(rt.duration/60)} menit di jalan`;
    playRoute(pts);return;
  }catch(e){
    if(tk!==routeTk)return;
    route=L.polyline([[ORIGIN.lat,ORIGIN.lng],...O.map(d=>[d.lat,d.lng]),[ORIGIN.lat,ORIGIN.lng]],{color:'#6e1a2b',weight:4,dashArray:'8 8'}).addTo(map);
    $('#rbI').textContent=`${O.length} tempat. Rute jalan belum bisa dimuat, ini garis lurus.`;
  }
  map.fitBounds(route.getBounds(),{padding:[70,50],maxZoom:15});
}
const pic=d=>`<div class="ph" data-n="${esc(d.nama.trim()[0])}"><img src="${esc(d.foto)}" alt="" loading="lazy" onerror="this.remove()"></div>`;
function chips(){return `<button class="cat" data-o="1" aria-pressed="${onlyOpen}">${ic('clock')}Buka sekarang</button>`+cats.map(c=>`<button class="cat" data-c="${esc(c)}" aria-pressed="${c===cat}">${ic(c==='Semua'?'all':c)}${esc(c)}</button>`).join('')}
function pickCat(e){const b=e.target.closest('.cat');if(!b)return;if(b.dataset.o){onlyOpen=!onlyOpen;render();return}cat=b.dataset.c;render()}
$('#cats').onclick=pickCat;$('#mcats').onclick=pickCat;
$('#q').oninput=e=>{query=e.target.value.trim().toLowerCase();render()};
const list=()=>D.filter(d=>(cat==='Semua'||d.kat===cat)&&(!onlyOpen||openNow(d.jam).s==='open')&&(!query||(d.nama+' '+d.alamat+' '+d.kat).toLowerCase().includes(query))).sort((a,b)=>a.km-b.km);
const heart=(d,c)=>`<button class="${c}" data-h="${d.i}" aria-pressed="${favs.includes(d.i)}" aria-label="${favs.includes(d.i)?'Hapus dari tersimpan':'Simpan'} ${esc(d.nama)}">${ic('heart')}</button>`;
function card(d){return`<div style="position:relative"><button class="card" data-i="${d.i}"><div class="pic">${pic(d)}<span class="rate">${ic('star','f')}${esc(d.rating)}</span></div><h3>${esc(d.nama)}</h3><p>${esc(d.kat)}, ${KM(d.km)}</p>${stHtml(d)}</button>${heart(d,'hbtn')}</div>`}
function render(){
  const L=list(),filtering=cat!=='Semua'||query||onlyOpen;
  $('#cats').innerHTML=chips();$('#mcats').innerHTML=chips();
  $('#nearWrap').hidden=!!filtering;
  $('#rail').innerHTML=[...D].sort((a,b)=>a.km-b.km).slice(0,6).map(d=>`<button class="big" data-i="${d.i}">${pic(d)}<div class="shade"></div><div class="tx"><span class="tag">${esc(d.kat)}</span><h3>${esc(d.nama)}</h3><div class="mi"><span>${ic('pin')}${KM(d.km)}</span><span>${ic('star','f')}${esc(d.rating)}</span></div></div></button>`).join('');
  $('#allT').firstChild.textContent=filtering?'Hasil pencarian ':'Semua tempat ';
  $('#cnt').textContent=L.length+' tempat';
  $('#grid').innerHTML=L.length?L.map(card).join(''):`<div class="none">Belum ada tempat yang cocok.<br><button id="reset">Tampilkan semua</button></div>`;
  renderFav();if(map)drawPins(L);
}
function renderFav(){const F=D.filter(d=>favs.includes(d.i)).sort((a,b)=>a.km-b.km);
  $('#favSub').textContent=F.length?`${F.length} tempat yang kamu simpan.`:'Belum ada yang disimpan. Ketuk ikon hati di tempat mana pun untuk menyimpannya di sini.';
  if(F.length){const{O,legs,tot,fr}=curPlan();
    $('#plan').innerHTML=`<div class="plan"><h2 class="sec" style="margin-top:0">Rencana hari <small>terdekat dulu</small></h2><ol class="stops"><li><span class="n e">E</span><div><b>Edohouse</b><small>Berangkat dari sini</small></div></li>${O.map((d,k)=>`<li><span class="n">${k+1}</span><div><b>${esc(d.nama)}</b><small>${KM(legs[k])} dari ${k?esc(O[k-1].nama):'Edohouse'}</small><small>${stHtml(d)}</small></div></li>`).join('')}<li><span class="n e">E</span><div><b>Kembali ke Edohouse</b><small>${KM(legs[legs.length-1])}</small></div></li></ol><div class="tot"><div><small>Total jarak</small><b>${KM(tot)}</b></div><div><small>Ongkos ojol motor</small><b>${RP(fr)}</b></div></div><p class="note">Perkiraan. Ongkos dihitung per perjalanan, dan urutannya sederhana (selalu ke tempat terdekat berikutnya).</p><div class="pacts"><button class="btn p" id="plMap">${ic('route')}Lihat di peta</button><a class="btn s" target="_blank" rel="noopener" href="${planGm(O)}">Google Maps</a><button class="btn s" id="plWa">${ic('share')}WhatsApp</button></div></div>`}
  else $('#plan').innerHTML='';
  $('#favGrid').innerHTML=F.map(card).join('')}
function toggleFav(i){const k=favs.indexOf(i);k<0?favs.push(i):favs.splice(k,1);saveFav();render();if($('#page').classList.contains('on')&&+$('#page').dataset.i===i){$('#pf').setAttribute('aria-pressed',favs.includes(i))}}
function onTap(e){
  if(e.target.closest('#plMap')){showPlan();return}
  if(e.target.closest('#plWa')){waShare(planText());return}
  const h=e.target.closest('[data-h]');if(h){toggleFav(+h.dataset.h);return}
  const c=e.target.closest('[data-i]');if(c)openPage(+c.dataset.i);
  if(e.target.id==='reset'){cat='Semua';query='';onlyOpen=false;$('#q').value='';render()}
}
$('#home').onclick=onTap;$('#fav').onclick=onTap;
/* Pindah layar */
function go(v){cur=v;
  $('#home').hidden=v!=='home';$('#fav').hidden=v!=='fav';$('#mapView').hidden=v!=='map';
  document.querySelectorAll('#tabs button').forEach(b=>b.toggleAttribute('aria-current',b.dataset.v===v)||0);
  document.querySelectorAll('#tabs button').forEach(b=>{if(b.dataset.v===v)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  window.scrollTo(0,0);
  if(v==='map'&&ensureMap())setTimeout(()=>map.invalidateSize(),60);
}
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.v)};
/* Detail */
function openPage(i,fromPop){
  const d=D[i];
  $('#page').innerHTML=`<div class="hero">${pic(d)}<button class="round l" id="pb" aria-label="Kembali">${ic('back')}</button><button class="round r2" id="ps" aria-label="Bagikan ke WhatsApp">${ic('share')}</button><button class="round r" id="pf" aria-pressed="${favs.includes(i)}" aria-label="Simpan ${esc(d.nama)}">${ic('heart')}</button></div>
  <div class="body"><div class="pills"><span class="pill k">${esc(d.kat)}</span><span class="pill">${ic('star','f')}${esc(d.rating)}</span></div>
  <h2>${esc(d.nama)}</h2><p class="desc">${esc(d.desc)}</p>
  <div class="facts"><div class="fact"><small>${ic('pin')}Dari Edohouse</small><b id="pk">${KM(d.km)} <em>${d.exact?'lewat jalan':'perkiraan'}</em></b></div><div class="fact"><small>${ic('clock')}Jam buka</small><b>${esc(d.jam)}</b><div style="margin-top:4px">${stHtml(d)}</div></div><div class="fact w"><small>${ic('ticket')}Tiket masuk</small><b>${esc(d.harga)}</b><p class="note" style="margin-top:4px">${esc(parkNote(d))}</p></div></div>
  <div class="addr">${ic('pin')}<span>${esc(d.alamat)}</span></div>
  <h3>Ongkos ojol</h3><div class="fares" id="pfare">${fare(d.km).map(([n,v])=>`<div><small>${n}</small><b>${RP(v)}</b></div>`).join('')}</div><p class="note">Perkiraan dari jarak. Harga asli ada di aplikasinya.</p>
  <div class="apps"><button data-a="Grab">Grab</button><button data-a="Gojek">Gojek</button><button data-a="Maxim">Maxim</button></div><p class="note">Ketuk untuk menyalin alamat tujuan, lalu tempel di aplikasinya.</p>
  <h3>Lihat dulu</h3><div class="links"><a target="_blank" rel="noopener" href="${esc(d.yt)}">${ic('out')}YouTube</a>${d.tt.map((u,k)=>`<a target="_blank" rel="noopener" href="${esc(u)}">${ic('out')}TikTok ${k+1}</a>`).join('')}${d.price?`<a target="_blank" rel="noopener" href="${esc(d.price)}">${ic('out')}Daftar harga</a>`:''}</div></div>
  <div class="cta"><button class="btn p" id="pr">${ic('route')}Lihat rute</button><a class="btn s" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&origin=${ORIGIN.lat},${ORIGIN.lng}&destination=${d.lat},${d.lng}&travelmode=driving">Google Maps</a></div>`;
  const p=$('#page');p.dataset.i=i;p.scrollTop=0;$('#scrim').classList.add('on');p.classList.add('on');document.body.style.overflow='hidden';$('#pb').focus({preventScroll:true});
  if(!fromPop){try{history.pushState({d:i},'')}catch(e){}}
  if(!d.exact)refine(d);
}
function closePage(){const p=$('#page');p.classList.remove('on');$('#scrim').classList.remove('on');document.body.style.overflow=''}
function backPage(){try{if(history.state&&history.state.d!=null){history.back();return}}catch(e){}closePage()}
addEventListener('popstate',()=>closePage());
$('#scrim').onclick=backPage;
addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#page').classList.contains('on'))backPage()});
$('#page').onclick=e=>{
  if(e.target.closest('#pb'))backPage();
  if(e.target.closest('#ps'))waShare(shareText(D[+$('#page').dataset.i]));
  if(e.target.closest('#pf'))toggleFav(+$('#page').dataset.i);
  if(e.target.closest('#pr')){const i=+$('#page').dataset.i;closePage();showRoute(i)}
  const a=e.target.closest('[data-a]');if(a)copyAddr(a.dataset.a,D[+$('#page').dataset.i]);
};
async function refine(d){
  try{const r=await ft(`https://router.project-osrm.org/route/v1/driving/${ORIGIN.lng},${ORIGIN.lat};${d.lng},${d.lat}?overview=false`);const j=await r.json();
    if(!j.routes||!j.routes[0])return;d.km=Math.round(j.routes[0].distance/100)/10;d.exact=true;render();
    if($('#page').classList.contains('on')&&+$('#page').dataset.i===d.i){$('#pk').innerHTML=`${KM(d.km)} <em>lewat jalan</em>`;$('#pfare').innerHTML=fare(d.km).map(([n,v])=>`<div><small>${n}</small><b>${RP(v)}</b></div>`).join('')}
  }catch(e){}
}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),3600)}
function copyAddr(app,d){
  const t=`Tujuan: ${d.nama}\nAlamat: ${d.alamat}\nDari: ${ORIGIN.name} (${ORIGIN.addr})\nKoordinat: ${d.lat}, ${d.lng}`;
  const ok=()=>toast(`Alamat ${d.nama} tersalin. Tempel di aplikasi ${app}.`);
  const fb=()=>{const x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;left:-9999px';document.body.appendChild(x);x.select();try{document.execCommand('copy');ok()}catch(e){toast('Gagal menyalin. Salin alamatnya secara manual.')}x.remove()};
  navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(ok,fb):fb();
}
/* Peta */
function ensureMap(){
  if(map)return true;
  if(!window.L){if(!$('#map .mapmsg'))$('#map').innerHTML='<p class="mapmsg">Peta belum termuat. Periksa koneksi internet, lalu buka tab Peta lagi.</p>';return false}
  $('#map').innerHTML='';
  map=L.map('map',{zoomControl:false,center:[ORIGIN.lat,ORIGIN.lng],zoom:11});
  L.control.zoom({position:'topright'}).addTo(map);
  tiles.osm=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(map);
  tiles.sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Esri'});
  L.marker([ORIGIN.lat,ORIGIN.lng],{icon:L.divIcon({className:'',html:'<div class="opin">E</div>',iconSize:[38,38],iconAnchor:[19,19]}),zIndexOffset:900,title:'Edohouse'}).addTo(map);
  map.on('click',()=>peek(null));
  map.on('dragstart',()=>{if(nav.on){nav.follow=false;$('#rbC').hidden=false}});
  drawPins(list(),true);return true;
}
function pinIcon(on){const s=on?38:30;return L.divIcon({className:'',html:`<div class="pin${on?' on':''}"></div>`,iconSize:[s,s],iconAnchor:[s/2,s]})}
function drawPins(L_,fit){
  pins.forEach(p=>p.remove());
  pins=L_.map(d=>{const m=L.marker([d.lat,d.lng],{icon:pinIcon(sel===d.i),title:d.nama}).addTo(map);m.on('click',ev=>{L.DomEvent.stopPropagation(ev);peek(d.i)});m._i=d.i;return m});
  if(fit&&L_.length)map.fitBounds(L.latLngBounds([[ORIGIN.lat,ORIGIN.lng],...L_.map(d=>[d.lat,d.lng])]),{padding:[50,50],maxZoom:13});
}
function peek(i){sel=i;pins.forEach(p=>p.setIcon(pinIcon(p._i===i)));const e=$('#peek');
  if(i==null){e.classList.remove('on');return}
  const d=D[i];e.innerHTML=`${pic(d)}<div class="t"><h3>${esc(d.nama)}</h3><p>${esc(d.kat)}, ${KM(d.km)}</p><div class="go"><button class="p" data-d="${i}">Detail</button><button data-r="${i}">Rute</button></div></div><button class="x" aria-label="Tutup" data-x>${ic('close')}</button>`;
  e.classList.add('on')}
$('#peek').onclick=e=>{const b=e.target.closest('button');if(!b)return;if('d' in b.dataset)openPage(+b.dataset.d);if('r' in b.dataset)showRoute(+b.dataset.r);if('x' in b.dataset)peek(null)};
$('#bSat').onclick=()=>{if(!map)return;sat=!sat;map.removeLayer(sat?tiles.osm:tiles.sat);(sat?tiles.sat:tiles.osm).addTo(map);$('#bSat').textContent=sat?'Peta':'Satelit'};
async function showRoute(i){
  go('map');if(!ensureMap())return;const d=D[i];clearRoute();peek(i);rbDest=i;$('#rbGo').hidden=false;
  const tk=++routeTk;
  $('#rbN').textContent=d.nama;$('#rbI').textContent='Mencari rute…';$('#rbar').classList.add('on');
  try{
    const r=await ft(`https://router.project-osrm.org/route/v1/driving/${ORIGIN.lng},${ORIGIN.lat};${d.lng},${d.lat}?overview=full&geometries=geojson`);const j=await r.json();const rt=j.routes[0];
    if(tk!==routeTk)return;
    const pts=rt.geometry.coordinates.map(c=>[c[1],c[0]]);
    d.km=Math.round(rt.distance/100)/10;d.exact=true;render();
    $('#rbI').textContent=`${KM(d.km)}, sekitar ${Math.round(rt.duration/60)} menit berkendara`;
    playRoute(pts);return;
  }catch(e){
    if(tk!==routeTk)return;
    route=L.polyline([[ORIGIN.lat,ORIGIN.lng],[d.lat,d.lng]],{color:'#6e1a2b',weight:4,dashArray:'8 8'}).addTo(map);
    $('#rbI').textContent=`Rute jalan belum bisa dimuat. Garis lurus ${KM(hav(ORIGIN.lat,ORIGIN.lng,d.lat,d.lng))}`;
  }
  map.fitBounds(route.getBounds(),{padding:[70,50],maxZoom:15});
}

/* Animasi motor jalan di rute (khusus peta web, bukan Google Maps) */
const MOTOR=`<svg viewBox="0 -7 64 51" aria-hidden="true"><ellipse cx="32" cy="41" rx="24" ry="2.2" fill="rgba(0,0,0,.22)"/><path d="M4 28C4 20 10 17 17 17H30V29H8Z" fill="#6e1a2b"/><rect x="28" y="28" width="16" height="4" rx="2" fill="#4a1020"/><path d="M41 30 43 16H48L49 30Z" fill="#6e1a2b"/><path d="M10 17C10 14 13 13.5 17 13.5H28C30.5 13.5 30.5 17 28 17Z" fill="#2a1a1e"/><path d="M7 24H28" stroke="#d4a63c" stroke-width="1.8" stroke-linecap="round"/><path d="M51 33 46 14" stroke="#1d1416" stroke-width="2.8" stroke-linecap="round"/><path d="M42 12H48" stroke="#1d1416" stroke-width="3" stroke-linecap="round"/><path d="M44 26Q51 21 58 27" stroke="#6e1a2b" stroke-width="2.6" fill="none" stroke-linecap="round"/><g class="wh"><circle cx="13" cy="33" r="7" fill="#1d1416"/><circle cx="13" cy="33" r="4.2" fill="#e0b552"/><path d="M13 29V37M9 33H17" stroke="#1d1416" stroke-width="1.2"/></g><g class="wh"><circle cx="51" cy="33" r="7" fill="#1d1416"/><circle cx="51" cy="33" r="4.2" fill="#e0b552"/><path d="M51 29V37M47 33H55" stroke="#1d1416" stroke-width="1.2"/></g><path d="M21 13 33 20 36 29" stroke="#2a1a1e" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 13 27 4" stroke="#e0b552" stroke-width="6" stroke-linecap="round"/><path d="M27 5 43 12" stroke="#e0b552" stroke-width="3.6" stroke-linecap="round"/><circle cx="28" cy="-1" r="5.2" fill="#6e1a2b"/><path d="M29.5 -2.5Q34 -2.5 33.5 .5L29.5 .5Z" fill="#ffe9a8"/><circle cx="50" cy="15" r="2.3" fill="#ffe9a8" stroke="#d4a63c" stroke-width=".6"/><rect x="3" y="21" width="2.4" height="3" rx="1" fill="#ff5a5a"/></svg>`;
let ride=null,routeTk=0;
function stopRide(){if(ride){cancelAnimationFrame(ride.raf);clearTimeout(ride.t);if(ride.m)ride.m.remove();ride=null}}
function playRoute(pts){
  clearRouteLine();
  map.fitBounds(L.latLngBounds(pts),{padding:[70,50],maxZoom:15,animate:false});
  animRoute(pts);
}
function animRoute(pts){
  const gold={color:'#d4a63c',weight:11,opacity:.95},mar={color:'#6e1a2b',weight:5};
  const calm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const{cum,total}=navPrep(pts);
  if(calm||pts.length<2||total<=0){route=L.featureGroup([L.polyline(pts,gold),L.polyline(pts,mar)]).addTo(map);return}
  const ghost=L.polyline(pts,{color:'#6e1a2b',weight:4,opacity:.3,dashArray:'2 9'}),a=L.polyline([pts[0]],gold),b=L.polyline([pts[0]],mar);
  route=L.featureGroup([ghost,a,b]).addTo(map);
  const m=L.marker(pts[0],{icon:L.divIcon({className:'',html:`<div class="motor">${MOTOR}</div>`,iconSize:[64,51],iconAnchor:[32,46]}),zIndexOffset:1200,interactive:false,keyboard:false}).addTo(map);
  const el=m.getElement().firstChild;
  const at=s=>{let lo=0,hi=cum.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(cum[mid]<=s)lo=mid;else hi=mid}
    const g=cum[hi]-cum[lo]||1e-9,f=Math.min(1,Math.max(0,(s-cum[lo])/g));
    return{k:lo,p:[pts[lo][0]+(pts[hi][0]-pts[lo][0])*f,pts[lo][1]+(pts[hi][1]-pts[lo][1])*f]}};
  const dur=Math.min(8000,Math.max(4000,3000+total*150));
  let face=1,tilt=0;const t0=performance.now();
  ride={raf:0,t:0,m};const me=ride;
  const step=now=>{
    if(ride!==me)return;
    const p=Math.min(1,(now-t0)/dur),s=p*total,c=at(s);
    m.setLatLng(c.p);
    const trail=pts.slice(0,c.k+1);trail.push(c.p);a.setLatLngs(trail);b.setLatLngs(trail);
    const A=map.latLngToLayerPoint(at(Math.max(0,s-.15)).p),B=map.latLngToLayerPoint(at(Math.min(total,s+.15)).p),dx=B.x-A.x,dy=B.y-A.y;
    if(Math.abs(dx)>2)face=dx>0?1:-1;
    const tg=Math.max(-.5,Math.min(.5,Math.atan2(dy*face,Math.abs(dx)||1)));
    tilt+=(tg-tilt)*.18;
    el.style.transform=`rotate(${tilt}rad) scaleX(${face})`;
    if(p<1){me.raf=requestAnimationFrame(step);return}
    me.t=setTimeout(()=>{el.classList.add('done');me.t=setTimeout(()=>{if(ride===me)stopRide()},550)},700);
  };
  me.raf=requestAnimationFrame(step);
}

/* Navigasi langsung: jarak berkurang saat kamu bergerak */
function navPrep(pts){const cum=[0];for(let k=1;k<pts.length;k++)cum[k]=cum[k-1]+hav(pts[k-1][0],pts[k-1][1],pts[k][0],pts[k][1]);return{cum,total:cum[cum.length-1]||0}}
function navRem(pts,cum,total,la,lo,from){let bi=from||0,bd=1e9;for(let k=from||0;k<pts.length;k++){const x=hav(la,lo,pts[k][0],pts[k][1]);if(x<bd){bd=x;bi=k}}return{rem:Math.max(0,total-cum[bi])+bd,off:bd,bi}}
const fmtD=x=>x<1?'± '+Math.max(10,Math.round(x*100)*10)+' m':KM(Math.round(x*10)/10);
let rbDest=null;
const nav={on:false,watch:null,dest:null,pts:[],cum:[],total:0,dur:0,follow:true,last:0,fix:false,me:null,acc:null,wl:null,pos:null,straight:false,idx:0};
const setRb=(n,i)=>{$('#rbN').textContent=n;$('#rbI').textContent=i};
function startNav(i){
  if(!navigator.geolocation){toast('Perangkat ini tidak mendukung pelacakan lokasi.');return}
  if(!ensureMap())return;
  stopNav();const d=D[i];
  Object.assign(nav,{on:true,dest:d,pts:[],cum:[],total:0,dur:0,follow:true,last:0,fix:false,straight:false});
  peek(null);clearRouteLine();
  $('#rbar').classList.add('on','live');$('#rbC').hidden=true;$('#rbX').textContent='Berhenti';setRb(d.nama,'Mencari lokasimu…');
  nav.watch=navigator.geolocation.watchPosition(onPos,onErr,{enableHighAccuracy:true,maximumAge:2000,timeout:20000});
  try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(w=>{nav.wl=w}).catch(()=>{})}catch(e){}
}
function stopNav(){
  if(nav.watch!=null){try{navigator.geolocation.clearWatch(nav.watch)}catch(e){}nav.watch=null}
  if(nav.wl){try{nav.wl.release()}catch(e){}nav.wl=null}
  if(nav.me){nav.me.remove();nav.me=null}if(nav.acc){nav.acc.remove();nav.acc=null}
  nav.on=false;$('#rbar').classList.remove('live');$('#rbX').textContent='Hapus rute';$('#rbC').hidden=true;
}
function onPos(p){
  if(!nav.on)return;
  const la=p.coords.latitude,lo=p.coords.longitude,ac=p.coords.accuracy||30;nav.pos=[la,lo];
  if(!nav.me){nav.me=L.marker([la,lo],{icon:L.divIcon({className:'',html:'<div class="me"></div>',iconSize:[22,22],iconAnchor:[11,11]}),zIndexOffset:1000,interactive:false}).addTo(map);
    nav.acc=L.circle([la,lo],{radius:ac,color:'#d4a63c',weight:1,fillColor:'#d4a63c',fillOpacity:.15,interactive:false}).addTo(map)}
  else{nav.me.setLatLng([la,lo]);nav.acc.setLatLng([la,lo]);nav.acc.setRadius(ac)}
  if(!nav.fix){nav.fix=true;nav.last=Date.now();map.setView([la,lo],16);buildNav(la,lo);return}
  navUpdate(la,lo);
}
function onErr(e){
  if(e.code===1){stopNav();setRb('Izin lokasi ditolak','Aktifkan izin lokasi untuk halaman ini, lalu tekan Mulai lagi.');return}
  setRb(nav.dest?nav.dest.nama:'',e.code===2?'Lokasi belum terdeteksi. Coba di tempat terbuka.':'Sinyal GPS lemah, masih mencoba…');
}
async function buildNav(la,lo){
  const d=nav.dest;
  try{
    const r=await ft(`https://router.project-osrm.org/route/v1/driving/${lo},${la};${d.lng},${d.lat}?overview=full&geometries=geojson`,9000);const j=await r.json();const rt=j.routes[0];
    nav.pts=rt.geometry.coordinates.map(c=>[c[1],c[0]]);nav.dur=rt.duration;nav.straight=false;
  }catch(e){nav.pts=[[la,lo],[d.lat,d.lng]];nav.dur=hav(la,lo,d.lat,d.lng)/30*3600;nav.straight=true}
  if(!nav.on)return;
  const m=navPrep(nav.pts);nav.cum=m.cum;nav.total=m.total;nav.idx=0;
  clearRouteLine();
  route=nav.straight?L.polyline(nav.pts,{color:'#6e1a2b',weight:4,dashArray:'8 8'}).addTo(map):L.featureGroup([L.polyline(nav.pts,{color:'#d4a63c',weight:11,opacity:.95}),L.polyline(nav.pts,{color:'#6e1a2b',weight:5})]).addTo(map);
  navUpdate(la,lo);
}
function navUpdate(la,lo){
  if(!nav.pts.length)return;
  const d=nav.dest,direct=hav(la,lo,d.lat,d.lng);
  if(direct<0.05){arrive();return}
  const{rem,off,bi}=navRem(nav.pts,nav.cum,nav.total,la,lo,Math.max(0,nav.idx-8));nav.idx=bi;
  const left=nav.straight?direct:rem,mnt=Math.max(1,Math.round(nav.dur*(left/Math.max(nav.total,.05))/60));
  setRb('Sisa '+fmtD(left),`Menuju ${d.nama}, sekitar ${mnt} menit`+(nav.straight?' (perkiraan kasar, garis lurus)':''));
  if(nav.follow)map.panTo([la,lo],{animate:true,duration:.8});
  const gap=Date.now()-nav.last;
  if((off>0.08&&gap>15000)||(nav.straight&&gap>30000)){nav.last=Date.now();buildNav(la,lo)}
}
function arrive(){const d=nav.dest;stopNav();$('#rbGo').hidden=true;setRb('Sudah sampai',d.nama);toast('Kamu sudah sampai di '+d.nama)}
function clearRouteLine(){stopRide();if(route){route.remove();route=null}}
$('#rbGo').onclick=()=>{if(rbDest!=null)startNav(rbDest)};
$('#rbC').onclick=()=>{nav.follow=true;$('#rbC').hidden=true;if(nav.pos)map.setView(nav.pos,Math.max(map.getZoom(),16))};
function clearRoute(){routeTk++;stopNav();clearRouteLine();$('#rbar').classList.remove('on')}
$('#rbX').onclick=clearRoute;
render();
