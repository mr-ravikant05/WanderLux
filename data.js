/* ============================================================
   WanderLux – All Content Data
   destinations · properties · vehicles
   ============================================================ */

const destinations = [
  {
    id: 1, name: "Goa", country: "India",
    description: "Sun-kissed beaches, vibrant nightlife, Portuguese colonial architecture and fresh seafood paradise along the Arabian Sea coast.",
    tags: ["Beach", "Adventure", "Peace"],
    price: 8999, duration: "5 Days / 4 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2, name: "Manali", country: "India",
    description: "A paradise for adventure lovers nestled in the Himalayas, offering trekking, river rafting and breathtaking snow-capped peaks.",
    tags: ["Adventure", "Mountains", "Peace"],
    price: 6499, duration: "6 Days / 5 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1074&auto=format&fit"
  },
  {
    id: 3, name: "Jaipur", country: "India",
    description: "The Pink City dazzles with magnificent forts, royal palaces, vibrant bazaars and the timeless legacy of the Rajput era.",
    tags: ["Heritage", "Romantic", "City"],
    price: 7299, duration: "4 Days / 3 Nights", rating: 4.6, weekend: false,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4, name: "Kerala Backwaters", country: "India",
    description: "Glide through tranquil backwaters on a houseboat, surrounded by lush coconut groves, paddy fields and serene village life.",
    tags: ["Peace", "Nature", "Romantic"],
    price: 9499, duration: "5 Days / 4 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5, name: "Varanasi", country: "India",
    description: "The spiritual capital of India along the holy Ganges river, offering ancient ghats, dawn boat rides, and centuries of culture.",
    tags: ["Heritage", "Peace", "Adventure"],
    price: 4999, duration: "3 Days / 2 Nights", rating: 4.5, weekend: false,
    image: "https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?q=80&w=735&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6, name: "Andaman Islands", country: "India",
    description: "Crystal-clear turquoise waters, pristine white-sand beaches, scuba diving and a tropical paradise unlike anywhere else in India.",
    tags: ["Beach", "Adventure", "Peace"],
    price: 12999, duration: "7 Days / 6 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7, name: "Rishikesh", country: "India",
    description: "The Yoga Capital of the World on the Ganges banks, famous for river rafting, bungee jumping, meditation retreats and ashrams.",
    tags: ["Adventure", "Peace"],
    price: 5499, duration: "4 Days / 3 Nights", rating: 4.6, weekend: true,
    image: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8, name: "Shimla", country: "India",
    description: "Queen of Hill Stations — charming colonial architecture, toy train rides, apple orchards and snow-dusted Himalayan vistas.",
    tags: ["Mountains", "Peace", "Heritage"],
    price: 5999, duration: "4 Days / 3 Nights", rating: 4.5, weekend: true,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9, name: "Coorg", country: "India",
    description: "The Scotland of India — misty coffee and cardamom estates, dense forests, roaring waterfalls and the warmth of Kodava culture.",
    tags: ["Nature", "Peace", "Adventure"],
    price: 6299, duration: "4 Days / 3 Nights", rating: 4.7, weekend: true,
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10, name: "Darjeeling", country: "India",
    description: "Sip world-famous tea with panoramic views of Kanchenjunga, ride the UNESCO toy train and explore charming hill town markets.",
    tags: ["Nature", "Mountains", "Peace"],
    price: 5799, duration: "4 Days / 3 Nights", rating: 4.6, weekend: true,
    image: "https://images.unsplash.com/photo-1724159609417-0b84ff619e7c?q=80&w=627&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11, name: "Udaipur", country: "India",
    description: "The Venice of the East — romantic lake palaces, sunset boat rides on Lake Pichola and regal Rajputana hospitality.",
    tags: ["Romantic", "Heritage", "Peace"],
    price: 8499, duration: "5 Days / 4 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1332&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12, name: "Spiti Valley", country: "India",
    description: "A cold desert mountain valley between India and Tibet — raw landscapes, ancient Buddhist monasteries and star-filled skies.",
    tags: ["Adventure", "Mountains", "Peace"],
    price: 7999, duration: "7 Days / 6 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1652514284048-a297d43ab05d?q=80&w=1889&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13, name: "Mysore", country: "India",
    description: "City of Palaces — the illuminated Amba Vilas Palace, fragrant sandalwood products, vibrant Dasara festival and silk sarees.",
    tags: ["Heritage", "City", "Peace"],
    price: 4799, duration: "3 Days / 2 Nights", rating: 4.4, weekend: false,
    image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1294&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14, name: "Munnar", country: "India",
    description: "Lush green tea estates carpeting rolling hills, cool refreshing mist, rare Nilgiri Tahr wildlife and breathtaking valley views.",
    tags: ["Nature", "Peace", "Mountains"],
    price: 6799, duration: "4 Days / 3 Nights", rating: 4.7, weekend: true,
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15, name: "Leh-Ladakh", country: "India",
    description: "The land of high passes — majestic monasteries, pristine Pangong Lake, rugged terrain and the world's highest motorable road.",
    tags: ["Adventure", "Mountains", "Peace"],
    price: 11999, duration: "8 Days / 7 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16, name: "Bali", country: "Indonesia",
    description: "Island of Gods — terraced rice paddies, ancient Hindu temples, sacred monkey forests, world-class surfing and spa retreats.",
    tags: ["Beach", "Romantic", "Adventure", "Peace"],
    price: 24999, duration: "7 Days / 6 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17, name: "Paris", country: "France",
    description: "The City of Light — Eiffel Tower sunsets, Louvre masterpieces, Seine river cruises and exquisite French cuisine at every corner.",
    tags: ["Romantic", "City", "Heritage"],
    price: 45999, duration: "7 Days / 6 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18, name: "Swiss Alps", country: "Switzerland",
    description: "Pristine alpine lakes, charming ski villages, Matterhorn grandeur and the most scenic train journeys in the world.",
    tags: ["Adventure", "Mountains", "Romantic"],
    price: 52999, duration: "8 Days / 7 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1660388330411-26f4cf299a64?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19, name: "Santorini", country: "Greece",
    description: "Iconic blue-domed churches, cliff-top whitewashed villages, volcanic beaches, legendary sunsets and premium Aegean seafood.",
    tags: ["Romantic", "Beach", "Heritage"],
    price: 48999, duration: "6 Days / 5 Nights", rating: 4.9, weekend: false,
    image: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20, name: "Maldives", country: "Maldives",
    description: "Private overwater bungalows, bioluminescent beaches, vibrant coral reefs, world-class diving and absolute tropical luxury.",
    tags: ["Beach", "Romantic", "Luxury"],
    price: 65999, duration: "5 Days / 4 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21, name: "Tokyo", country: "Japan",
    description: "A seamless blend of futuristic neon-lit skyscrapers, ancient Shinto shrines, world-renowned ramen alleys and cherry blossom parks.",
    tags: ["City", "Heritage", "Adventure"],
    price: 38999, duration: "7 Days / 6 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22, name: "Dubai", country: "UAE",
    description: "World's tallest towers, man-made islands, golden desert safaris, souks of spice and the ultimate luxury shopping experience.",
    tags: ["City", "Luxury", "Adventure"],
    price: 28999, duration: "5 Days / 4 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23, name: "New York", country: "USA",
    description: "The Big Apple — Times Square dazzle, Central Park escapes, Broadway shows, iconic skyline and the world's greatest food diversity.",
    tags: ["City", "Adventure", "Heritage"],
    price: 52499, duration: "8 Days / 7 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24, name: "Amsterdam", country: "Netherlands",
    description: "Charming canal-lined streets, world-class museums, vibrant cycling culture and the warmth of Dutch hospitality in historic Europe.",
    tags: ["City", "Romantic", "Heritage"],
    price: 39999, duration: "6 Days / 5 Nights", rating: 4.6, weekend: false,
    image: "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 25, name: "Iceland", country: "Iceland",
    description: "Northern Lights spectaculars, geothermal hot springs, glacier hikes, volcanic landscapes and midnight sun in the Land of Fire and Ice.",
    tags: ["Adventure", "Nature", "Peace"],
    price: 55999, duration: "8 Days / 7 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 26, name: "Prague", country: "Czech Republic",
    description: "Fairy-tale Gothic spires, medieval Old Town Square, Bohemian crystal crafts and the legendary Golden City atmosphere.",
    tags: ["Heritage", "Romantic", "City"],
    price: 32999, duration: "6 Days / 5 Nights", rating: 4.6, weekend: false,
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 27, name: "Ha Long Bay", country: "Vietnam",
    description: "Emerald waters studded with thousands of limestone karst islands, traditional junk boat cruises and hidden cave wonders.",
    tags: ["Nature", "Adventure", "Peace"],
    price: 18999, duration: "5 Days / 4 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 28, name: "Rome", country: "Italy",
    description: "The Eternal City — Colosseum grandeur, Vatican art, tossing coins in Trevi Fountain, pasta perfection and dolce vita living.",
    tags: ["Heritage", "Romantic", "City"],
    price: 41999, duration: "7 Days / 6 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 29, name: "London", country: "UK",
    description: "Royal palaces, Big Ben, world-class theatre, Notting Hill charm, afternoon tea tradition and some of the finest museums on Earth.",
    tags: ["City", "Heritage", "Romantic"],
    price: 44999, duration: "7 Days / 6 Nights", rating: 4.7, weekend: false,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 30, name: "Kyoto", country: "Japan",
    description: "Ancient imperial capital — thousands of Shinto shrines, sacred bamboo groves, geisha districts, zen gardens and tea ceremony culture.",
    tags: ["Heritage", "Peace", "Romantic"],
    price: 36999, duration: "6 Days / 5 Nights", rating: 4.9, weekend: false,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 31, name: "Bangkok", country: "Thailand",
    description: "Grand Palace splendour, rooftop bars, floating markets, world-famous street food and vibrant nightlife in Southeast Asia's crown jewel.",
    tags: ["City", "Adventure", "Heritage"],
    price: 14999, duration: "5 Days / 4 Nights", rating: 4.6, weekend: false,
    image: "https://plus.unsplash.com/premium_photo-1661963188068-1bac46e28727?q=80&w=1171&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 32, name: "New Zealand", country: "New Zealand",
    description: "Bungee jumping birthplace, Hobbiton film sets, stunning Milford Sound fjords, Maori culture and the cleanest air in the world.",
    tags: ["Adventure", "Nature", "Mountains"],
    price: 58999, duration: "10 Days / 9 Nights", rating: 4.8, weekend: false,
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80"
  }
];

const properties = [
  {
    id: 1, name: "The Pearl Villa", location: "Baga Beach, Goa", type: "Villa",
    guests: 6, price: 8500, rating: 4.9,
    description: "Stunning ocean-view villa with private pool, modern interiors and direct beach access. Perfect for group getaways.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2, name: "Haveli Heritage Suite", location: "Old City, Jaipur", type: "Heritage Hotel",
    guests: 2, price: 4200, rating: 4.8,
    description: "An 18th-century restored haveli with handpainted murals, arched corridors and rooftop views of the Pink City.",
    image: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3, name: "Kettuvallam Houseboat", location: "Alleppey, Kerala", type: "Houseboat",
    guests: 4, price: 6800, rating: 4.9,
    description: "A traditional rice-boat converted to a luxury houseboat with AC cabins, on-board chef and sunset lagoon views.",
    image: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4, name: "Pine Ridge Cottage", location: "Old Manali, Manali", type: "Cottage",
    guests: 4, price: 3500, rating: 4.6,
    description: "Cosy wooden cottage surrounded by pine forests and apple orchards with a fireplace and mountain views.",
    image: "https://images.unsplash.com/photo-1762158866005-dea9eae24c45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5, name: "Caldera Cliffside Villa", location: "Oia, Santorini", type: "Villa",
    guests: 4, price: 18500, rating: 5.0,
    description: "Iconic whitewashed infinity-pool villa carved into the volcanic caldera with legendary Santorini sunset views.",
    image: "https://media.vrbo.com/lodging/79000000/78870000/78867300/78867212/7cf08c43.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
  },
  {
    id: 6, name: "Zen Jungle Apartment", location: "Ubud, Bali", type: "Apartment",
    guests: 3, price: 4500, rating: 4.8,
    description: "Minimalist private apartment surrounded by jungle canopy, rice terraces and a meditation garden.",
    image: "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7, name: "The Alpine Lodge", location: "Kufri, Shimla", type: "Lodge",
    guests: 6, price: 5200, rating: 4.7,
    description: "Charming wooden lodge with snow-dusted pine views, heated interiors and a rooftop bonfire terrace.",
    image: "https://images.unsplash.com/photo-1760067537640-6ffab10b27d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8, name: "Lakeside Royal Villa", location: "Lake Pichola, Udaipur", type: "Villa",
    guests: 8, price: 12000, rating: 4.9,
    description: "Grand palace-inspired villa with private lake-facing balconies, butler service and boat access to the Lake Palace.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9, name: "Estate Bungalow", location: "Madikeri, Coorg", type: "Bungalow",
    guests: 4, price: 4800, rating: 4.7,
    description: "A colonial planter's bungalow nestled in a 10-acre private coffee estate with guided nature walks and fresh estate coffee.",
    image: "https://edge.media.datahc.com/HI366796342.jpg"
  },
  {
    id: 10, name: "Himalayan Sunrise Suite", location: "Observatory Hill, Darjeeling", type: "Hotel Room",
    guests: 2, price: 3200, rating: 4.5,
    description: "Wake up to panoramic views of Kanchenjunga from this heritage suite with warm wood interiors and garden seating.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/15/2b/ba/91/hotel-yuma.jpg"
  },
  {
    id: 11, name: "Mehrangarh Desert Haveli", location: "Jodhpur Old City", type: "Heritage Hotel",
    guests: 6, price: 7500, rating: 4.8,
    description: "Royal blue-city haveli with blue-tiled courtyards, carved sandstone facades and rooftop fortress views.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/104286933.jpg?k=d36ad4a516e98ba1b0d318ac0247966ae057c92491b5eaa19de9a820faaa2d70&o="
  },
  {
    id: 12, name: "Coral Beach Cottage", location: "Havelock Island, Andaman", type: "Cottage",
    guests: 4, price: 9200, rating: 4.8,
    description: "Beachfront bamboo cottage steps from the famous Radhanagar Beach with a private deck overlooking the sea.",
    image: "https://www.havelockislandbeachresort.com/storage/optmize-img/property.jpg"
  },
  {
    id: 13, name: "Treetop Treehouse", location: "Vythiri, Wayanad", type: "Treehouse",
    guests: 2, price: 3800, rating: 4.9,
    description: "Secluded treehouse perched 30 feet above the forest floor with rope bridges, private balcony and birdsong mornings.",
    image: "https://travools.com/images/trip/1649315205_624e8d85e1445_banner.png"
  },
  {
    id: 14, name: "Mysore Palace Suite", location: "Chamundi Hills, Mysore", type: "Hotel Room",
    guests: 2, price: 5500, rating: 4.6,
    description: "Opulent palace-inspired suite with teak wood furniture, Mysore silk accents and garden views of the illuminated palace.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/b8/60/suite-hotels.jpg?w=1200&h=-1&s=1"
  },
  {
    id: 15, name: "Cloud 9 Retreat", location: "Ooty, Nilgiris", type: "Cottage",
    guests: 4, price: 3900, rating: 4.5,
    description: "Charming cottage nestled in 2 acres of manicured gardens at 7,000 ft altitude with breathtaking valley views.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/731797515.jpg?k=5bdb4c46250842dc796b6bbffae36c168066dff50068ed1712af28ca25b1f642&o="
  },
  {
    id: 16, name: "Ganga Riverside Camp", location: "Laxman Jhula, Rishikesh", type: "Luxury Camp",
    guests: 2, price: 2200, rating: 4.4,
    description: "Swiss glamping tents on the banks of the Ganges with yoga deck access, white water rafting packages and bonfire evenings.",
    image: "https://campinginrishikesh.in/wp-content/uploads/2023/08/ganga_view_camp6.jpg"
  },
  {
    id: 17, name: "Glass House, Munnar", location: "Eravikulam, Munnar", type: "Villa",
    guests: 2, price: 5800, rating: 4.8,
    description: "All-glass walls with 180-degree tea estate views, minimalist luxury décor and private outdoor bathtub at 4,000 ft.",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18, name: "Seaview Penthouse", location: "Worli, Mumbai", type: "Apartment",
    guests: 4, price: 8800, rating: 4.7,
    description: "Panoramic sea-facing penthouse in the financial capital with floor-to-ceiling windows, chef's kitchen and rooftop access.",
    image: "https://images.unsplash.com/photo-1760067537640-6ffab10b27d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19, name: "Spiti Mud Homestay", location: "Kaza, Spiti Valley", type: "Homestay",
    guests: 3, price: 2800, rating: 4.6,
    description: "Authentic mud-brick homestay with a local family, traditional Spitian meals, stargazing terrace and monastery views.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/633366825.jpg?k=4dc27739001afd56c74fd1aa05209cc5ddfdd90a88a6fa436c94f0203f16d84e&o="
  },
  {
    id: 20, name: "Garden River Villa", location: "Kushalnagar, Coorg", type: "Villa",
    guests: 6, price: 6200, rating: 4.7,
    description: "Serene riverside villa with a private garden, hammocks by the Kaveri tributaries and a traditional Kerala-style pool.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512576825.webp?k=503b4edba6c0082dac321e8e37ed3d553988dacfd6be4e0602f5014eda72d575&o="
  },
  {
    id: 21, name: "The Blue Tide Suite", location: "Calangute, Goa", type: "Hotel Room",
    guests: 2, price: 5400, rating: 4.6,
    description: "Boutique beachside suite with a Juliet balcony, ocean-facing plunge pool and curated Goan breakfast hampers.",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_84,w_1620,h_912,r_0,c_crop/q_60,w_960,dpr_1,f_auto,fl_progressive,c_limit/summit-calangute-resort-spa/025B0829_30_31_Large_twlwam"
  },
  {
    id: 22, name: "Himalayan Horizon Resort", location: "Solang Valley, Manali", type: "Hotel Room",
    guests: 4, price: 4600, rating: 4.5,
    description: "Mountain resort at Solang Valley with cosy rooms, mountain-view balconies, a spa and ski slope access in winter.",
    image: "https://gos3.ibcdn.com/bcc63389-81dc-41c2-ad83-51bf689f9cde.jpeg"
  }
];

const vehicles = [
  {
    id: 1, name: "Toyota Innova Crysta", type: "car", category: "suv",
    fuel: "Diesel", transmission: "Automatic", seats: 7,
    price: 3500, rating: 4.8,
    description: "India's most trusted family SUV — spacious, smooth and ideal for hill stations and long-distance group travel.",
    image: "https://static.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.webp"
  },
  {
    id: 2, name: "Mahindra Thar 4x4", type: "car", category: "suv",
    fuel: "Diesel", transmission: "Manual", seats: 4,
    price: 3200, rating: 4.7,
    description: "The iconic off-road beast — ideal for Ladakh highways, Spiti Valley roads and any adventure requiring serious capability.",
    image: "https://flywheelcars.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-09-at-12.39.31-PM.jpeg"
  },
  {
    id: 3, name: "Hyundai Creta", type: "car", category: "suv",
    fuel: "Petrol", transmission: "Automatic", seats: 5,
    price: 2800, rating: 4.6,
    description: "Premium compact SUV with excellent ride quality, advanced safety features and a spacious sunroof cabin.",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize"
  },
  {
    id: 4, name: "Toyota Fortuner", type: "car", category: "suv",
    fuel: "Diesel", transmission: "Automatic", seats: 7,
    price: 4500, rating: 4.8,
    description: "Powerhouse SUV for serious adventures — high ground clearance, 4WD capability and premium interiors for comfort.",
    image: "https://imagecdnsa.zigwheels.ae/large/gallery/exterior/40/424/toyota-fortuner-front-angle-low-view-609840.jpg"
  },
  {
    id: 5, name: "Ford Endeavour", type: "car", category: "suv",
    fuel: "Diesel", transmission: "Automatic", seats: 7,
    price: 4800, rating: 4.7,
    description: "Bold off-road SUV with commanding road presence, terrain management system and luxurious 3-row seating.",
    image: "https://media.assettype.com/thequint%2F2016-01%2F3918b7d3-79d0-4208-b667-85a55fa8b283%2FEndeavour.jpg?rect=0%2C0%2C2000%2C1125&auto=format%2Ccompress&fmt=webp&width=720"
  },
  {
    id: 6, name: "Kia Seltos", type: "car", category: "suv",
    fuel: "Petrol", transmission: "Automatic", seats: 5,
    price: 3000, rating: 4.6,
    description: "Feature-loaded modern SUV with connected car tech, stunning panoramic sunroof and premium Bang & Olufsen sound.",
    image: "https://www.cartoq.com/wp-content/uploads/2024/12/2025-Kia-Seltos-hybrid-render-.jpg"
  },
  {
    id: 7, name: "Honda City 5th Gen", type: "car", category: "sedan",
    fuel: "Petrol", transmission: "CVT Automatic", seats: 5,
    price: 2200, rating: 4.5,
    description: "Effortlessly refined executive sedan with intelligent cabin, smooth CVT transmission and excellent highway mileage.",
    image: "https://www.xdrivecars.com/assets/images/car_images/Used-cars-in-trivandrum--2402202333355.webp"
  },
  {
    id: 8, name: "Hyundai Verna", type: "car", category: "sedan",
    fuel: "Petrol", transmission: "Automatic", seats: 5,
    price: 2400, rating: 4.4,
    description: "Sleek and sporty sedan with a turbocharged engine, 10.25-inch infotainment display and ventilated front seats.",
    image: "https://img.indianautosblog.com/2017/08/Hyundai-Verna-2017-front-view-flame-orange.jpg"
  },
  {
    id: 9, name: "Mercedes-Benz E-Class", type: "car", category: "luxury",
    fuel: "Petrol", transmission: "9G-Tronic Auto", seats: 5,
    price: 10000, rating: 5.0,
    description: "Business class on four wheels — massaging seats, MBUX voice assistant, ambient lighting and effortless autobahn poise.",
    image: "https://cdn.esquireindia.co.in/article/2025-07-18T07%3A06%3A57.332Z-LEAD.jpg"
  },
  {
    id: 10, name: "BMW 5 Series 530i", type: "car", category: "luxury",
    fuel: "Petrol", transmission: "8-Speed Auto", seats: 5,
    price: 9200, rating: 4.9,
    description: "Sheer driving pleasure in a refined package — turbocharged inline-6, executive cabin and dynamic chassis modes.",
    image: "https://content.carlelo.com/media/models/5Series/base/The5LWB-1.webp"
  },
  {
    id: 11, name: "Audi A6 Premium", type: "car", category: "luxury",
    fuel: "Petrol", transmission: "7-Speed S-Tronic", seats: 5,
    price: 8800, rating: 4.9,
    description: "Virtual cockpit digital displays, quattro all-wheel drive, Bang & Olufsen audio and Matrix LED headlights.",
    image: "https://flywheelcars.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-22-at-3.10.38-PM-2.jpeg"
  },
  {
    id: 12, name: "Jeep Compass", type: "car", category: "suv",
    fuel: "Diesel", transmission: "Automatic", seats: 5,
    price: 3800, rating: 4.5,
    description: "Adventure-ready compact SUV with all-terrain capability, Uconnect infotainment and a robust turbodiesel engine.",
    image: "https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2026/compass/design/desktop/my26-jeep-compass-design-colorizer-silver-desktop.jpg.image.1440.jpg"
  },
  {
    id: 13, name: "Maruti Swift", type: "car", category: "hatchback",
    fuel: "Petrol", transmission: "Manual", seats: 5,
    price: 1400, rating: 4.3,
    description: "India's best-loved hatchback — nimble city car, excellent fuel economy and easy park-anywhere dimensions.",
    image: "https://images.hindustantimes.com/auto/img/2024/04/18/600x338/2024_Suzuki_Swift_5_1711523240967_1713444497842.jpg"
  },
  {
    id: 14, name: "Hyundai i20", type: "car", category: "hatchback",
    fuel: "Petrol", transmission: "IVT Automatic", seats: 5,
    price: 1600, rating: 4.3,
    description: "Premium premium hatchback with wireless charging, sunroof, BlueLink connected features and sporty design.",
    image: "https://www.rushlane.com/wp-content/uploads/2023/09/hyundai-i20-walkaround-launch.jpg"
  },
  {
    id: 15, name: "Volkswagen Polo GT", type: "car", category: "hatchback",
    fuel: "Petrol", transmission: "DSG Automatic", seats: 5,
    price: 1700, rating: 4.4,
    description: "European build quality, zippy 1.0L TSI turbo, refined cabin and solid long-distance highway comfort.",
    image: "https://img.indianautosblog.com/2014/10/2015-VW-Polo-GTI-at-the-2014-Paris-Motor-Show.jpg"
  },
  {
    id: 16, name: "Maruti Ertiga", type: "car", category: "mpv",
    fuel: "Petrol / CNG", transmission: "Automatic", seats: 7,
    price: 2400, rating: 4.4,
    description: "Affordable multi-purpose family van — great mileage, 7-seat capacity and comfortable long-drive suspension.",
    image: "https://ssnhomestays.in/uploads/0000/7/2025/04/30/20241227062847-maruti-ertiga-showroom.jpg"
  },
  {
    id: 17, name: "Royal Enfield Classic 350", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1200, rating: 4.8,
    description: "The quintessential road-trip companion — retro charm, thundering exhaust note and perfect for Himalayan highway cruising.",
    image: "https://c.ndtvimg.com/2026-01/mklecdeg_royal-enfield-bullet-350_625x300_06_January_26.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
  },
  {
    id: 18, name: "Royal Enfield Himalayan", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1500, rating: 4.9,
    description: "Purpose-built adventure tourer designed for Ladakh, Spiti and high-altitude roads with navigation pod and long travel suspension.",
    image: "https://thenordicriders.com/wp-content/uploads/2025/02/Himalayan450-scaled.jpg"
  },
  {
    id: 19, name: "KTM Duke 390", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1300, rating: 4.7,
    description: "Austrian performance naked bike — sharp handling, TFT display, quickshifter and street-ready aggression.",
    image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fktm%2F390-duke%2Fexterior%2Fktm-duke-390-2023_25.jpg%3Fv%3D1766554641&w=1920&q=90"
  },
  {
    id: 20, name: "Honda CB500X", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1400, rating: 4.6,
    description: "Versatile middleweight adventure tourer ideal for both city and remote mountain terrain with comfortable ergonomics.",
    image: "https://gaadiwaadi.com/wp-content/uploads/2021/02/Honda-CB500X-Adventure-Tourer-960x720.jpg"
  },
  {
    id: 21, name: "Yamaha FZ-S V3", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1000, rating: 4.5,
    description: "Sporty daily rider with BS6 FI engine, traction control, delta box frame and muscular naked streetfighter styling.",
    image: "https://img.autocarindia.com/Reviews/20190720092842_2019-Yamaha-FZ-V3-front.jpg?w=700&c=0"
  },
  {
    id: 22, name: "Bajaj Pulsar NS200", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 900, rating: 4.4,
    description: "Quarter-litre naked sports bike with liquid cooling, perimeter frame and sporty riding position for weekend warriors.",
    image: "https://bd.gaadicdn.com/processedimages/bajaj/bajaj-pulsar-200-ns/640X309/bajaj-pulsar-200-ns61543ebc2d0b7.jpg"
  },
  {
    id: 23, name: "Benelli 502C Cruiser", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 1600, rating: 4.6,
    description: "Italian-styled neo-retro cruiser with twin-cylinder engine, classic chrome detailing and comfortable highway posture.",
    image: "https://images.overdrive.in/wp-content/uploads/2021/07/Benelli-502C-launched-in-India.jpg"
  },
  {
    id: 24, name: "Honda Activa 6G", type: "bike", category: "scooter",
    fuel: "Petrol", transmission: "Automatic", seats: 2,
    price: 600, rating: 4.3,
    description: "India's No.1 scooter — effortless city commuting, under-seat storage, silent start/stop and excellent fuel efficiency.",
    image: "https://cdn-s3.autocarindia.com/honda-bike/Activa%206G/_DSC8819.JPG?w=640"
  },
  {
    id: 25, name: "TVS Jupiter 125", type: "bike", category: "scooter",
    fuel: "Petrol", transmission: "Automatic", seats: 2,
    price: 550, rating: 4.2,
    description: "Feature-packed scooter with largest-in-class under-seat storage, USB charging, external fuel lid and smooth ride.",
    image: "https://cdn.bikedekho.com/processedimages/tvs/jupiter-125/source/jupiter-125652e27e890ac1.jpg"
  },
  {
    id: 26, name: "Suzuki Access 125", type: "bike", category: "scooter",
    fuel: "Petrol", transmission: "Automatic", seats: 2,
    price: 580, rating: 4.3,
    description: "Refined premium scooter with SEP engine, keyless ignition, USB charger and responsive disc brake system.",
    image: "https://images.autox.com/uploads/2025/01/Suzuki-Access125-2025-500x261.jpg"
  },
  {
    id: 27, name: "Hero Splendor Plus", type: "bike", category: "bike",
    fuel: "Petrol", transmission: "Manual", seats: 2,
    price: 700, rating: 4.1,
    description: "India's most popular commuter motorcycle — unmatched 70+ kmpl fuel efficiency and ultra-reliable engine.",
    image: "https://cdn.bikedekho.com/upload/userreviewimages/6980e0f74ed4c.jpg"
  }
];
