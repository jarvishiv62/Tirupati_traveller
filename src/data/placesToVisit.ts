// src/data/placesToVisit.ts
// ★ Places to Visit data — used by PlacesToVisitTemplate
// All 6 cities fully populated
// dataKey pattern: placesToVisit.<city>

import type { PlacesToVisitData } from '@/types/templates';

// ─── VARANASI ─────────────────────────────────────────────────────────────────

export const varanasi: PlacesToVisitData = {
  city: 'Varanasi',
  places: [
    {
      name: 'Kashi Vishwanath Temple',
      description:
        'One of the twelve Jyotirlingas, the Kashi Vishwanath Temple is the holiest shrine of Lord Shiva. The golden spire gleaming over the Ganges draws millions of devotees every year.',
      image: '/Images/places/kashi-vishwanath.webp',
      distance: '0 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Dashashwamedh Ghat',
      description:
        'The main ghat of Varanasi and site of the spectacular Ganga Aarti every evening. Watching the lamps float on the Ganges here is an unforgettable experience.',
      image: '/Images/places/dashashwamedh.webp',
      distance: '0.5 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Sarnath',
      description:
        'The sacred site where Buddha delivered his first sermon. Home to the Dhamek Stupa, Ashoka Pillar, and the Sarnath Museum with priceless Buddhist artefacts.',
      image: '/Images/places/sarnath.webp',
      distance: '12 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Manikarnika Ghat',
      description:
        'The most sacred cremation ghat in Hinduism, believed to be the spot where Lord Shiva dropped Sati\'s earring. Fires here have burned continuously for centuries.',
      image: '/Images/places/manikarnika.webp',
      distance: '1 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Ramnagar Fort',
      description:
        'A 17th-century fort on the eastern bank of the Ganges, built by the Maharaja of Varanasi. Houses a remarkable museum with vintage cars, arms, and palanquins.',
      image: '/Images/places/ramnagar.webp',
      distance: '14 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Assi Ghat',
      description:
        'The southernmost major ghat of Varanasi, famous for its early morning Subah-e-Banaras programme — yoga, chanting, and sunrise over the Ganges.',
      image: '/Images/places/assi-ghat.webp',
      distance: '3 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Tulsi Manas Temple',
      description:
        'Built in 1964 at the site where Goswami Tulsidas wrote the Ramcharitmanas. The walls are engraved with verses from this sacred text.',
      image: '/Images/places/tulsi-manas.webp',
      distance: '2 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Banaras Hindu University',
      description:
        'One of Asia\'s largest residential universities, founded by Pandit Madan Mohan Malaviya. The sprawling campus houses the magnificent Vishwanath Temple and the Bharat Kala Bhavan museum.',
      image: '/Images/places/bhu.webp',
      distance: '4 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Durga Temple (Durga Kund)',
      description:
        'An 18th-century temple dedicated to Goddess Durga, built in the Nagara style of architecture. The adjacent tank (kund) is considered sacred.',
      image: '/Images/places/durga-temple.webp',
      distance: '3.5 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Sankat Mochan Hanuman Temple',
      description:
        'Founded by Goswami Tulsidas, this beloved Hanuman temple is one of the most visited in Varanasi. Tuesdays and Saturdays see thousands of devotees.',
      image: '/Images/places/sankat-mochan.webp',
      distance: '3 km from city centre',
      category: 'Temple',
    },
  ],
  nearbyRoutes: [
    { destination: 'Ayodhya',   slug: 'varanasi/varanasi-to-ayodhya-taxi',   fare: 3200 },
    { destination: 'Gaya',      slug: 'varanasi/varanasi-to-gaya-taxi',      fare: 2800 },
    { destination: 'Allahabad', slug: 'varanasi/varanasi-to-allahabad-taxi', fare: 1800 },
    { destination: 'Lucknow',   slug: 'varanasi/varanasi-to-lucknow-taxi',   fare: 3500 },
    { destination: 'Agra',      slug: 'varanasi/varanasi-to-agra-taxi',      fare: 5500 },
    { destination: 'Delhi',     slug: 'varanasi/varanasi-to-delhi-taxi',     fare: 9000 },
  ],
  faqs: [
    {
      q: 'What are the must-visit places in Varanasi?',
      a: 'Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath, Manikarnika Ghat, and Assi Ghat are the top five. Watching the Ganga Aarti at Dashashwamedh every evening is a spiritual experience no visitor should miss.',
    },
    {
      q: 'How do I get around Varanasi to visit all the ghats and temples?',
      a: 'The best way is to hire a local sightseeing cab from Tirupati Travel. We provide a full-day cab with an experienced driver who knows every ghat, temple, and shortcut in Varanasi. Call 8726124680 to book.',
    },
    {
      q: 'Is Sarnath worth a day trip from Varanasi?',
      a: 'Absolutely. Sarnath is just 12 km from Varanasi and can be covered in 3–4 hours. The Dhamek Stupa, Ashoka Pillar, and the Sarnath Museum are unmissable for history and Buddhism enthusiasts.',
    },
    {
      q: 'What is the best time to visit Varanasi?',
      a: 'October to March is the best time — pleasant weather, clear skies, and vibrant festivals like Dev Deepawali (November) when the ghats are lit with thousands of lamps.',
    },
    {
      q: 'Can I hire a cab for a Varanasi temple tour?',
      a: 'Yes. Tirupati Travel offers dedicated temple darshan tours covering Kashi Vishwanath, Sankat Mochan, Durga Temple, Tulsi Manas, and more. Book at 8726124680.',
    },
  ],
  seo: {
    title: 'Places to Visit in Varanasi | Top Tourist Spots Kashi Banaras | Tirupati Travel',
    description: 'Explore the top places to visit in Varanasi — Kashi Vishwanath Temple, Dashashwamedh Ghat, Sarnath, Manikarnika Ghat & more. Book a sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/varanasi/places-to-visit-in-varanasi',
  },
};

// ─── AYODHYA ──────────────────────────────────────────────────────────────────

export const ayodhya: PlacesToVisitData = {
  city: 'Ayodhya',
  places: [
    {
      name: 'Ram Mandir',
      description:
        'The newly built Ram Mandir is the most significant religious structure in Ayodhya, built at the birthplace of Lord Ram. The grand Nagara-style temple is a marvel of modern craftsmanship.',
      image: '/Images/places/ram-mandir.webp',
      distance: '0 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Hanuman Garhi',
      description:
        'A 10th-century fort-temple dedicated to Lord Hanuman, perched on a 76-step hillock. Devotees believe Lord Hanuman guards Ayodhya from this vantage point.',
      image: '/Images/places/hanuman-garhi.webp',
      distance: '0.5 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Kanak Bhawan',
      description:
        'A beautiful temple gifted by Queen Kaikeyi to Sita and Ram after their wedding. The idols here are adorned with gold crowns — hence the name "Kanak" (gold).',
      image: '/Images/places/kanak-bhawan.webp',
      distance: '1 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Saryu Ghat',
      description:
        'The sacred Saryu River flows through Ayodhya and its ghats are key pilgrimage points. The evening aarti here is deeply moving, reflecting the city\'s connection to Ram Rajya.',
      image: '/Images/places/saryu-ghat.webp',
      distance: '1.5 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Nageshwarnath Temple',
      description:
        'One of the oldest temples in Ayodhya, dedicated to Lord Shiva. According to legend, it was built by Kush, the son of Lord Ram, for a Naga princess who loved Shiva.',
      image: '/Images/places/nageshwarnath.webp',
      distance: '2 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Dashrath Mahal',
      description:
        'The palace of King Dashrath, father of Lord Ram. The present structure is a temple-palace complex and a key stop on any Ayodhya darshan circuit.',
      image: '/Images/places/dashrath-mahal.webp',
      distance: '2.5 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Moti Mahal',
      description:
        'A historic palace from the Nawabi era, now preserved as a heritage structure. The architecture blends Mughal and Awadhi styles.',
      image: '/Images/places/moti-mahal.webp',
      distance: '3 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Gulab Bari',
      description:
        'The mausoleum of Nawab Shuja-ud-Daula, famous for its rose gardens. The Persian garden design makes it one of Ayodhya\'s most serene spots.',
      image: '/Images/places/gulab-bari.webp',
      distance: '5 km from city centre',
      category: 'Heritage',
    },
  ],
  nearbyRoutes: [
    { destination: 'Varanasi',  slug: 'ayodhya/ayodhya-to-varanasi-taxi',  fare: 3200 },
    { destination: 'Lucknow',   slug: 'ayodhya/ayodhya-to-lucknow-taxi',   fare: 1600 },
    { destination: 'Allahabad', slug: 'ayodhya/ayodhya-to-allahabad-taxi', fare: 2800 },
    { destination: 'Delhi',     slug: 'ayodhya/ayodhya-to-delhi-taxi',     fare: 8500 },
    { destination: 'Gorakhpur', slug: 'ayodhya/ayodhya-to-gorakhpur-taxi', fare: 2200 },
  ],
  faqs: [
    {
      q: 'What are the top places to visit in Ayodhya?',
      a: 'Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat, and Dashrath Mahal are the must-visits. The new Ram Mandir is especially awe-inspiring.',
    },
    {
      q: 'How long does a full Ayodhya darshan take?',
      a: 'A complete Ayodhya darshan covering all major temples and ghats takes 6–8 hours. Tirupati Travel offers a full-day darshan cab package. Call 8726124680.',
    },
    {
      q: 'Can I visit Ayodhya as a day trip from Varanasi?',
      a: 'Yes. Ayodhya is about 200 km (4 hours) from Varanasi. We offer a Varanasi to Ayodhya one-way cab starting at ₹3,200 for a sedan.',
    },
    {
      q: 'What is the best time to visit Ayodhya?',
      a: 'Ram Navami (March/April) and Diwali are the grandest times to visit, but October to March generally offers the most pleasant weather for sightseeing.',
    },
  ],
  seo: {
    title: 'Places to Visit in Ayodhya | Ram Mandir Tour | Tirupati Travel',
    description: 'Top places to visit in Ayodhya — Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat & more. Book an Ayodhya sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/ayodhya/places-to-visit-in-ayodhya',
  },
};

// ─── ALLAHABAD / PRAYAGRAJ ─────────────────────────────────────────────────────

export const allahabad: PlacesToVisitData = {
  city: 'Allahabad',
  places: [
    {
      name: 'Triveni Sangam',
      description:
        'The confluence of the Ganga, Yamuna, and the mythical Saraswati rivers. Taking a holy dip at Sangam is considered one of the most sacred acts in Hinduism, especially during Kumbh Mela.',
      image: '/Images/places/triveni-sangam.webp',
      distance: '0 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Allahabad Fort',
      description:
        'Built by Emperor Akbar in 1583, this massive fort stands at the Sangam. It houses the Ashoka Pillar, an underground temple (Patalpuri), and the Akshayavat (immortal banyan tree).',
      image: '/Images/places/allahabad-fort.webp',
      distance: '2 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Anand Bhawan',
      description:
        'The ancestral home of the Nehru-Gandhi family, now a national museum. The Nehru Planetarium is located in the complex and offers daily shows.',
      image: '/Images/places/anand-bhawan.webp',
      distance: '3 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Hanuman Mandir (Bade Hanuman Ji)',
      description:
        'A unique temple where the idol of Lord Hanuman lies in a reclining position — the only such idol in India. Partially submerged during Ganga floods each year.',
      image: '/Images/places/hanuman-mandir-prayag.webp',
      distance: '1.5 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Khusro Bagh',
      description:
        'A grand Mughal garden-enclosure housing the tombs of Khusro (son of Emperor Jahangir), his mother, and sister. The sandstone gateways are magnificent.',
      image: '/Images/places/khusro-bagh.webp',
      distance: '4 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'All Saints Cathedral',
      description:
        'A stunning Gothic-style church built by British architect William Emerson in 1887. Also called the Patthar Girja (Stone Church), it is one of the finest colonial structures in UP.',
      image: '/Images/places/all-saints-cathedral.webp',
      distance: '3.5 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Minto Park',
      description:
        'The park where the transfer of power from the East India Company to the British Crown was proclaimed in 1858. A historic obelisk marks the spot.',
      image: '/Images/places/minto-park.webp',
      distance: '2 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Bharadwaj Ashram',
      description:
        'The legendary ashram of Sage Bharadwaj, visited by Lord Ram during his exile. Now a modern temple complex, it remains a revered pilgrimage site.',
      image: '/Images/places/bharadwaj-ashram.webp',
      distance: '5 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Alopi Devi Temple',
      description:
        'One of the 51 Shakti Peeths, marking the spot where Sati\'s hands fell. Unique in that the deity is worshipped as an empty palanquin rather than an idol.',
      image: '/Images/places/alopi-devi.webp',
      distance: '4 km from city centre',
      category: 'Temple',
    },
  ],
  nearbyRoutes: [
    { destination: 'Varanasi',   slug: 'allahabad/allahabad-to-varanasi-taxi',   fare: 1800 },
    { destination: 'Lucknow',    slug: 'allahabad/allahabad-to-lucknow-taxi',    fare: 2200 },
    { destination: 'Ayodhya',    slug: 'allahabad/allahabad-to-ayodhya-taxi',    fare: 2800 },
    { destination: 'Gaya',       slug: 'allahabad/allahabad-to-gaya-taxi',       fare: 3200 },
    { destination: 'Chitrakoot', slug: 'allahabad/allahabad-to-chitrakoot-taxi', fare: 2000 },
  ],
  faqs: [
    {
      q: 'What is special about Triveni Sangam in Allahabad?',
      a: 'Triveni Sangam is the confluence of three rivers — Ganga, Yamuna, and the invisible Saraswati. It is one of the holiest sites in Hinduism, and hosts the world\'s largest human gathering, the Kumbh Mela, every 12 years.',
    },
    {
      q: 'How far is Allahabad Fort from the Sangam?',
      a: 'Allahabad Fort is approximately 2 km from Triveni Sangam and can be visited on the same day. Our sightseeing cabs cover both in a comfortable half-day tour.',
    },
    {
      q: 'Can I visit Chitrakoot as a day trip from Allahabad?',
      a: 'Yes, Chitrakoot is about 120 km (2.5 hours) from Allahabad. We offer a one-way cab starting at ₹2,000 and a round-trip day excursion package.',
    },
    {
      q: 'What is the best time to visit Allahabad?',
      a: 'October to March for pleasant weather. During Kumbh or Magh Mela (January–February), the city comes alive with millions of pilgrims — the Sangam experience is unmatched.',
    },
  ],
  seo: {
    title: 'Places to Visit in Allahabad Prayagraj | Tourist Spots Sangam City | Tirupati Travel',
    description: 'Top places to visit in Allahabad (Prayagraj) — Triveni Sangam, Allahabad Fort, Anand Bhawan, Khusro Bagh & more. Book a sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/allahabad/places-to-visit-in-allahabad',
  },
};

// ─── LUCKNOW ──────────────────────────────────────────────────────────────────

export const lucknow: PlacesToVisitData = {
  city: 'Lucknow',
  places: [
    {
      name: 'Bara Imambara',
      description:
        'Built in 1784 by Nawab Asaf-ud-Daula, this grand Shia mosque complex houses the famous Bhul-Bhulaiya (labyrinth) — a maze of 1,024 identical passages in the upper galleries.',
      image: '/Images/places/bara-imambara.webp',
      distance: '0 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Rumi Darwaza',
      description:
        'An imposing 18th-century gateway, 60 feet tall, built in the Ottoman style. Also called the Turkish Gate, it is the symbol of Lucknow and one of India\'s finest medieval gateways.',
      image: '/Images/places/rumi-darwaza.webp',
      distance: '0.3 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Chota Imambara',
      description:
        'Also known as the Imambara of Hussainabad, this 1838 structure is a mausoleum and imambara of stunning beauty — all white with golden domes and intricate calligraphy.',
      image: '/Images/places/chota-imambara.webp',
      distance: '1 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'British Residency',
      description:
        'The ruins of the British Residency complex, site of the 1857 Siege of Lucknow. Now a protected monument, it stands as a powerful reminder of the Indian Uprising.',
      image: '/Images/places/residency.webp',
      distance: '3 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Hazratganj Market',
      description:
        'Lucknow\'s most iconic commercial street, a blend of colonial architecture and modern shops. Famous for Chikan embroidery, street food, and the city\'s legendary kebabs.',
      image: '/Images/places/hazratganj.webp',
      distance: '2 km from city centre',
      category: 'Market',
    },
    {
      name: 'Ambedkar Memorial Park',
      description:
        'A massive memorial park dedicated to Dr. B.R. Ambedkar, spread over 107 acres. The pink sandstone architecture and illuminated fountains at night are spectacular.',
      image: '/Images/places/ambedkar-park.webp',
      distance: '5 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Lucknow Zoo (Nawab Wajid Ali Shah Zoological Garden)',
      description:
        'One of the oldest zoos in India (1921), home to white tigers, rhinos, lions, and a toy train for children. A great family outing.',
      image: '/Images/places/lucknow-zoo.webp',
      distance: '4 km from city centre',
      category: 'Nature',
    },
    {
      name: 'Jama Masjid',
      description:
        'A magnificent 19th-century mosque near Hussainabad, known for its elegant minarets and vast courtyard. One of the largest mosques in Uttar Pradesh.',
      image: '/Images/places/jama-masjid-lucknow.webp',
      distance: '1.5 km from city centre',
      category: 'Heritage',
    },
  ],
  nearbyRoutes: [
    { destination: 'Varanasi',  slug: 'lucknow/lucknow-to-varanasi-taxi',  fare: 3500 },
    { destination: 'Ayodhya',   slug: 'lucknow/lucknow-to-ayodhya-taxi',   fare: 1600 },
    { destination: 'Allahabad', slug: 'lucknow/lucknow-to-allahabad-taxi', fare: 2200 },
    { destination: 'Agra',      slug: 'lucknow/lucknow-to-agra-taxi',      fare: 4500 },
    { destination: 'Delhi',     slug: 'lucknow/lucknow-to-delhi-taxi',     fare: 6500 },
  ],
  faqs: [
    {
      q: 'What are the top places to visit in Lucknow?',
      a: 'Bara Imambara with its Bhul-Bhulaiya, Rumi Darwaza, Chota Imambara, British Residency, and Hazratganj market are the must-sees. The Nawabi architecture of Lucknow is unlike anything else in India.',
    },
    {
      q: 'How long does it take to see all major Lucknow attractions?',
      a: 'A well-planned full-day sightseeing tour covers all major spots comfortably. Tirupati Travel offers a full-day cab with a knowledgeable driver — call 8726124680 to book.',
    },
    {
      q: 'Can I do a day trip from Lucknow to Ayodhya?',
      a: 'Yes. Ayodhya is just 135 km (about 2.5 hours) from Lucknow. Our Lucknow to Ayodhya cab starts at ₹1,600 for a sedan — perfect for a day excursion.',
    },
    {
      q: 'What is Lucknow famous for besides Imambara?',
      a: 'Lucknow is famous for Chikan embroidery, Tunday Kababi (legendary galouti kebabs), the Nawabi tehzeeb (culture), and its colonial-era architecture. Hazratganj is the best place to experience all of this.',
    },
  ],
  seo: {
    title: 'Places to Visit in Lucknow | Top Tourist Spots City of Nawabs | Tirupati Travel',
    description: 'Explore the top places to visit in Lucknow — Bara Imambara, Rumi Darwaza, British Residency, Chota Imambara & more. Book a Lucknow sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/lucknow/places-to-visit-in-lucknow',
  },
};

// ─── GAYA ─────────────────────────────────────────────────────────────────────

export const gaya: PlacesToVisitData = {
  city: 'Gaya',
  places: [
    {
      name: 'Vishnupad Temple',
      description:
        'The holiest site in Gaya, built over the footprint (pada) of Lord Vishnu imprinted in solid rock. Pind daan (ancestral rites) performed here are believed to liberate the souls of ancestors.',
      image: '/Images/places/vishnupad.webp',
      distance: '0 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Mahabodhi Temple, Bodh Gaya',
      description:
        'A UNESCO World Heritage Site and the most sacred place in Buddhism — the exact spot where Siddhartha Gautama attained enlightenment under the Bodhi tree.',
      image: '/Images/places/mahabodhi.webp',
      distance: '13 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Bodhi Tree',
      description:
        'The sacred fig tree (Ficus religiosa) growing at the Mahabodhi complex is a direct descendant of the original tree under which the Buddha sat. Pilgrims from across the world meditate here.',
      image: '/Images/places/bodhi-tree.webp',
      distance: '13 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Falgu River Ghat',
      description:
        'The sacred Falgu River flows through Gaya and the ghats along its banks are central to Pind Daan rituals. Brahma Kund is the most auspicious ghat for ancestral rites.',
      image: '/Images/places/falgu-ghat.webp',
      distance: '1 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Dungeshwari Cave Temples',
      description:
        'The cave where Siddhartha Gautama practised severe austerities before renouncing them and moving to Bodh Gaya. Three temples — Hindu, Mahayana, and Tibetan — coexist on this rocky hillside.',
      image: '/Images/places/dungeshwari.webp',
      distance: '20 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Pretshila Hill',
      description:
        'A rocky hill 8 km from Gaya, associated with the preta (spirit) rituals. The climb offers panoramic views of the plains; a temple dedicated to Lord Ram sits at the summit.',
      image: '/Images/places/pretshila.webp',
      distance: '8 km from city centre',
      category: 'Heritage',
    },
    {
      name: 'Brahmayoni Hill',
      description:
        'A 1,000-step climb leads to the Brahmayoni Temple at the top. Pilgrims undertaking Pind Daan are expected to complete this climb as part of the ritual.',
      image: '/Images/places/brahmayoni.webp',
      distance: '3 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Chinese Temple & Monastery',
      description:
        'A beautiful Chinese Buddhist temple in Bodh Gaya, built in traditional Pagoda style. The peaceful gardens and meditation halls attract visitors from across East Asia.',
      image: '/Images/places/chinese-temple.webp',
      distance: '14 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Thai Temple & Monastery',
      description:
        'A serene white Thai temple in the Bodh Gaya complex, built in the Theravada tradition. Ornate golden Buddha statues and tranquil gardens make it a meditative haven.',
      image: '/Images/places/thai-temple.webp',
      distance: '14 km from city centre',
      category: 'Temple',
    },
  ],
  nearbyRoutes: [
    { destination: 'Varanasi',  slug: 'gaya/gaya-to-varanasi-taxi',  fare: 2800 },
    { destination: 'Patna',     slug: 'gaya/gaya-to-patna-taxi',     fare: 2000 },
    { destination: 'Rajgir',    slug: 'gaya/gaya-to-rajgir-taxi',    fare: 1500 },
    { destination: 'Nalanda',   slug: 'gaya/gaya-to-nalanda-taxi',   fare: 1800 },
    { destination: 'Allahabad', slug: 'gaya/gaya-to-allahabad-taxi', fare: 3200 },
  ],
  faqs: [
    {
      q: 'What is Gaya famous for?',
      a: 'Gaya is one of the holiest cities in Hinduism, famous for Pind Daan (ancestral rites) at Vishnupad Temple and Falgu River. Nearby Bodh Gaya — site of the Buddha\'s enlightenment — makes it equally sacred for Buddhists.',
    },
    {
      q: 'How far is Bodh Gaya from Gaya city?',
      a: 'Bodh Gaya is about 13 km from Gaya city centre, a 20–25 minute drive. Our cabs cover both Gaya and Bodh Gaya in a single sightseeing trip.',
    },
    {
      q: 'What is the best time to perform Pind Daan in Gaya?',
      a: 'Pitru Paksha (the fortnight dedicated to ancestors, usually in September/October) is the most auspicious time. However, Pind Daan can be performed year-round at Vishnupad Temple.',
    },
    {
      q: 'Can I visit Rajgir and Nalanda as a day trip from Gaya?',
      a: 'Yes. Rajgir is 78 km and Nalanda is 90 km from Gaya — both can be covered in a single day excursion. Tirupati Travel offers a comfortable cab for this Buddhist heritage circuit.',
    },
  ],
  seo: {
    title: 'Places to Visit in Gaya | Bodh Gaya Tourist Spots Pitru Tirth | Tirupati Travel',
    description: 'Top places to visit in Gaya — Vishnupad Temple, Mahabodhi Temple Bodh Gaya, Falgu River Ghat, Dungeshwari Cave & more. Book a Gaya sightseeing cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/gaya/places-to-visit-in-gaya',
  },
};

// ─── VINDHYACHAL ──────────────────────────────────────────────────────────────

export const vindhyachal: PlacesToVisitData = {
  city: 'Vindhyachal',
  places: [
    {
      name: 'Vindhyavasini Temple',
      description:
        'The principal shrine of the Shakti Peeth, housing the idol of Goddess Vindhyavasini. One of the most powerful Shakti Peeths in India, attracting lakhs of devotees during Navratri.',
      image: '/Images/places/vindhyavasini.webp',
      distance: '0 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Ashtabhuja Temple',
      description:
        'Located 3 km from Vindhyavasini, this temple houses the eight-armed (Ashtabhuja) form of Goddess Durga. The three temples — Vindhyavasini, Ashtabhuja, and Kali Khoh — form the Parikrama (circuit).',
      image: '/Images/places/ashtabhuja.webp',
      distance: '3 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Kali Khoh Temple',
      description:
        'A cave temple dedicated to Goddess Kali, set inside a natural rock cave. The third point of the sacred Parikrama, it is reached by a steep rocky path lined with devotees.',
      image: '/Images/places/kali-khoh.webp',
      distance: '2 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Ganges Ghat (Vindhyachal)',
      description:
        'The Ganga flows directly below Vindhyachal town and the ghats here are considered sacred. A boat ride from the ghat offers a stunning view of the temple-topped hills.',
      image: '/Images/places/vindhyachal-ghat.webp',
      distance: '0.5 km from city centre',
      category: 'Ghat',
    },
    {
      name: 'Sita Kund',
      description:
        'A sacred kund (tank) associated with Goddess Sita, located between Ashtabhuja and Kali Khoh. Pilgrims stop here to take a ritual dip during the Parikrama.',
      image: '/Images/places/sita-kund.webp',
      distance: '4 km from city centre',
      category: 'Temple',
    },
    {
      name: 'Ram Gaya Ghat',
      description:
        'A peaceful ghat on the Ganga associated with Lord Ram. Sunrise here over the river with the temple bells ringing in the background is a deeply spiritual experience.',
      image: '/Images/places/ram-gaya-ghat.webp',
      distance: '1 km from city centre',
      category: 'Ghat',
    },
  ],
  nearbyRoutes: [
    { destination: 'Varanasi',  slug: 'vindhyachal/vindhyachal-to-varanasi-taxi',  fare: 1500 },
    { destination: 'Allahabad', slug: 'vindhyachal/vindhyachal-to-allahabad-taxi', fare: 1200 },
    { destination: 'Lucknow',   slug: 'vindhyachal/vindhyachal-to-lucknow-taxi',   fare: 4000 },
    { destination: 'Ayodhya',   slug: 'vindhyachal/vindhyachal-to-ayodhya-taxi',   fare: 4500 },
  ],
  faqs: [
    {
      q: 'What is Vindhyachal famous for?',
      a: 'Vindhyachal is one of the most important Shakti Peeths in India, home to Goddess Vindhyavasini. The sacred Parikrama circuit — Vindhyavasini, Ashtabhuja, and Kali Khoh — draws lakhs of devotees, especially during Navratri.',
    },
    {
      q: 'How far is Vindhyachal from Varanasi?',
      a: 'Vindhyachal is about 65 km from Varanasi, roughly 1.5 hours by road. Our Varanasi to Vindhyachal cab starts at ₹1,500. Many pilgrims visit Vindhyachal on the way to or from Varanasi.',
    },
    {
      q: 'What is the Vindhyachal Parikrama?',
      a: 'The Parikrama is the sacred circuit of three Shakti Peeths — Vindhyavasini Temple, Ashtabhuja Temple, and Kali Khoh Temple. Completing all three in sequence is considered the full darshan.',
    },
    {
      q: 'What is the best time to visit Vindhyachal?',
      a: 'Navratri (October and April) sees the largest gatherings with special puja and illuminations. However, the temple is open year-round and never disappoints.',
    },
  ],
  seo: {
    title: 'Places to Visit in Vindhyachal | Shakti Peeth Temple Tour | Tirupati Travel',
    description: 'Explore places to visit in Vindhyachal — Vindhyavasini Temple, Ashtabhuja, Kali Khoh & Ganga Ghats. Book a Vindhyachal darshan cab with Tirupati Travel.',
    canonical: 'https://tirupatitravel.in/vindhyachal/places-to-visit-in-vindhyachal',
  },
};