import { IStore } from "@/models/IChannel";
export const stores: IStore[] = [
    {
        "_id": {"$oid": "15153c04a199198f5d15157e4"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Luna",
            "ai_behavior": "Friendly, Helpful, Patient",
            "ai_age": "25-35",
            "business_name": "Book Haven",
            "business_type": "Book Store",
            "address": {
                "detailedAddress": "123 Maple St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "90210"
            },
            "phone": "0123456789",
            "email": "Contact@bookhaven.com",
            "website": "www.bookhaven.com",
            "opentime": {
                "Monday": { "open": true, "from": "09:00", "to": "18:00" },
                "Tuesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Wednesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Thursday": { "open": true, "from": "09:00", "to": "18:00" },
                "Friday": { "open": true, "from": "09:00", "to": "18:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "16:00" },
                "Sunday": { "open": false, "from": "00:00", "to": "16:30" }
            },
            "description": "Book Haven เป็นร้านหนังสือที่รวบรวมหนังสือหลากหลายประเภททั้งนิยาย วรรณกรรม และหนังสือวิชาการ ที่จะช่วยเติมเต็มความรู้และความสนุกให้คุณ",
            "product": [
                {
                    "name": "Fantasy Novel ABC",
                    "price": "399",
                    "description": "Paperback / 500 Pages / Adventure / English"
                },
                {
                    "name": "Science Book XYZ",
                    "price": "499",
                    "description": "Hardcover / 300 Pages / Educational / Color Illustrations"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157e5"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Max",
            "ai_behavior": "Energetic, Enthusiastic, Charismatic",
            "ai_age": "30-40",
            "business_name": "Fitness Pro",
            "business_type": "Fitness Equipment Store",
            "address": {
                "detailedAddress": "456 Oak St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "80501"
            },
            "phone": "0981234567",
            "email": "Contact@fitnesspro.com",
            "website": "www.fitnesspro.com",
            "opentime": {
                "Monday": { "open": true, "from": "08:00", "to": "20:00" },
                "Tuesday": { "open": true, "from": "08:00", "to": "20:00" },
                "Wednesday": { "open": true, "from": "08:00", "to": "20:00" },
                "Thursday": { "open": true, "from": "08:00", "to": "20:00" },
                "Friday": { "open": true, "from": "08:00", "to": "20:00" },
                "Saturday": { "open": true, "from": "09:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "10:00", "to": "16:00" }
            },
            "description": "Fitness Pro จำหน่ายอุปกรณ์ออกกำลังกายหลากหลายชนิด ไม่ว่าจะเป็นลู่วิ่ง จักรยานออกกำลังกาย หรือเครื่องยกน้ำหนัก เพื่อให้คุณมีสุขภาพที่แข็งแรง",
            "product": [
                {
                    "name": "Treadmill Model ABC",
                    "price": "25,990",
                    "description": "Electric / Foldable / LCD Display / Multiple Modes"
                },
                {
                    "name": "Exercise Bike Model XYZ",
                    "price": "15,990",
                    "description": "Magnetic Resistance / Adjustable Seat / Heart Rate Monitor"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157e6"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Bella",
            "ai_behavior": "Charming, Attentive, Compassionate",
            "ai_age": "22-32",
            "business_name": "Pet Paradise",
            "business_type": "Pet Store",
            "address": {
                "detailedAddress": "789 Pine St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "60614"
            },
            "phone": "0998765432",
            "email": "Contact@petparadise.com",
            "website": "www.petparadise.com",
            "opentime": {
                "Monday": { "open": true, "from": "10:00", "to": "19:00" },
                "Tuesday": { "open": true, "from": "10:00", "to": "19:00" },
                "Wednesday": { "open": true, "from": "10:00", "to": "19:00" },
                "Thursday": { "open": true, "from": "10:00", "to": "19:00" },
                "Friday": { "open": true, "from": "10:00", "to": "19:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Pet Paradise จำหน่ายสินค้าสำหรับสัตว์เลี้ยงทุกชนิด ไม่ว่าจะเป็นอาหารสัตว์ ของเล่นสัตว์ หรืออุปกรณ์ดูแลสัตว์ เพื่อให้สัตว์เลี้ยงของคุณมีความสุขและสุขภาพดี",
            "product": [
                {
                    "name": "Dog Food Premium",
                    "price": "1,299",
                    "description": "High Protein / Grain-Free / 5kg"
                },
                {
                    "name": "Cat Toy Interactive",
                    "price": "599",
                    "description": "Feather Wand / Durable / Safe Materials"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157e7"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Leo",
            "ai_behavior": "Professional, Efficient, Knowledgeable",
            "ai_age": "35-45",
            "business_name": "Tech World",
            "business_type": "Electronics Store",
            "address": {
                "detailedAddress": "1011 Birch St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "30303"
            },
            "phone": "0897654321",
            "email": "Contact@techworld.com",
            "website": "www.techworld.com",
            "opentime": {
                "Monday": { "open": true, "from": "10:00", "to": "20:00" },
                "Tuesday": { "open": true, "from": "10:00", "to": "20:00" },
                "Wednesday": { "open": true, "from": "10:00", "to": "20:00" },
                "Thursday": { "open": true, "from": "10:00", "to": "20:00" },
                "Friday": { "open": true, "from": "10:00", "to": "20:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Tech World จำหน่ายอุปกรณ์อิเล็กทรอนิกส์ทันสมัย ไม่ว่าจะเป็นสมาร์ทโฟน แล็ปท็อป หรืออุปกรณ์เสริมต่างๆ เพื่อให้คุณได้ประสบการณ์การใช้งานที่ดีที่สุด",
            "product": [
                {
                    "name": "Smartphone Model ABC",
                    "price": "29,990",
                    "description": "6.5-inch Display / 128GB / Dual Camera / 5G"
                },
                {
                    "name": "Laptop Model XYZ",
                    "price": "45,990",
                    "description": "15.6-inch Display / Intel i7 / 16GB RAM / 512GB SSD"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157e8"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Sophie",
            "ai_behavior": "Creative, Inspiring, Warm",
            "ai_age": "28-38",
            "business_name": "Art Studio",
            "business_type": "Art Supply Store",
            "address": {
                "detailedAddress": "1213 Cedar St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "80203"
            },
            "phone": "0812345678",
            "email": "Contact@artstudio.com",
            "website": "www.artstudio.com",
            "opentime": {
                "Monday": { "open": true, "from": "09:00", "to": "18:00" },
                "Tuesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Wednesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Thursday": { "open": true, "from": "09:00", "to": "18:00" },
                "Friday": { "open": true, "from": "09:00", "to": "18:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "16:00" },
                "Sunday": { "open": false, "from": "00:00", "to": "16:30" }
            },
            "description": "Art Studio เป็นร้านจำหน่ายอุปกรณ์ศิลปะหลากหลายชนิด ไม่ว่าจะเป็นสี วาดภาพ อุปกรณ์ปั้น หรือเครื่องมือสำหรับงานศิลป์ต่างๆ เพื่อช่วยเสริมสร้างความคิดสร้างสรรค์",
            "product": [
                {
                    "name": "Acrylic Paint Set",
                    "price": "999",
                    "description": "12 Colors / Non-Toxic / Fast Drying / 20ml Tubes"
                },
                {
                    "name": "Sculpting Tools",
                    "price": "699",
                    "description": "15 Pieces / Stainless Steel / Ergonomic Handles"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157e9"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Alex",
            "ai_behavior": "Innovative, Resourceful, Dynamic",
            "ai_age": "25-35",
            "business_name": "Gadget Hub",
            "business_type": "Gadget Store",
            "address": {
                "detailedAddress": "1415 Elm St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "10001"
            },
            "phone": "0865432109",
            "email": "Contact@gadgethub.com",
            "website": "www.gadgethub.com",
            "opentime": {
                "Monday": { "open": true, "from": "11:00", "to": "19:00" },
                "Tuesday": { "open": true, "from": "11:00", "to": "19:00" },
                "Wednesday": { "open": true, "from": "11:00", "to": "19:00" },
                "Thursday": { "open": true, "from": "11:00", "to": "19:00" },
                "Friday": { "open": true, "from": "11:00", "to": "19:00" },
                "Saturday": { "open": true, "from": "12:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "18:00" }
            },
            "description": "Gadget Hub จำหน่ายอุปกรณ์แกดเจ็ตทันสมัย ไม่ว่าจะเป็นอุปกรณ์สมาร์ทโฮม อุปกรณ์เสริมสำหรับโทรศัพท์ หรือแกดเจ็ตสำหรับการเดินทาง เพื่อให้ชีวิตคุณสะดวกสบายยิ่งขึ้น",
            "product": [
                {
                    "name": "Smart Home Assistant",
                    "price": "4,990",
                    "description": "Voice Control / Wi-Fi / Smart Hub / Compatible with Multiple Devices"
                },
                {
                    "name": "Wireless Earbuds",
                    "price": "2,990",
                    "description": "Bluetooth 5.0 / Noise Cancelling / Long Battery Life / Water Resistant"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157ea"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Mia",
            "ai_behavior": "Gentle, Caring, Trustworthy",
            "ai_age": "20-30",
            "business_name": "Beauty Bliss",
            "business_type": "Cosmetic Store",
            "address": {
                "detailedAddress": "1617 Spruce St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "30306"
            },
            "phone": "0854321098",
            "email": "Contact@beautybliss.com",
            "website": "www.beautybliss.com",
            "opentime": {
                "Monday": { "open": true, "from": "10:00", "to": "19:00" },
                "Tuesday": { "open": true, "from": "10:00", "to": "19:00" },
                "Wednesday": { "open": true, "from": "10:00", "to": "19:00" },
                "Thursday": { "open": true, "from": "10:00", "to": "19:00" },
                "Friday": { "open": true, "from": "10:00", "to": "19:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Beauty Bliss จำหน่ายเครื่องสำอางและผลิตภัณฑ์ดูแลผิวคุณภาพสูง ไม่ว่าจะเป็นเมคอัพ สกินแคร์ หรือผลิตภัณฑ์บำรุงผม เพื่อให้คุณดูดีและรู้สึกดีในทุกๆ วัน",
            "product": [
                {
                    "name": "Matte Lipstick Set",
                    "price": "1,299",
                    "description": "5 Shades / Long-Lasting / Non-Drying / Smooth Application"
                },
                {
                    "name": "Facial Serum",
                    "price": "2,499",
                    "description": "Anti-Aging / Hydrating / Vitamin C / 30ml"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157eb"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Ethan",
            "ai_behavior": "Smart, Analytical, Precise",
            "ai_age": "30-40",
            "business_name": "Kitchen Master",
            "business_type": "Kitchenware Store",
            "address": {
                "detailedAddress": "1819 Walnut St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "75201"
            },
            "phone": "0843210987",
            "email": "Contact@kitchenmaster.com",
            "website": "www.kitchenmaster.com",
            "opentime": {
                "Monday": { "open": true, "from": "09:00", "to": "18:00" },
                "Tuesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Wednesday": { "open": true, "from": "09:00", "to": "18:00" },
                "Thursday": { "open": true, "from": "09:00", "to": "18:00" },
                "Friday": { "open": true, "from": "09:00", "to": "18:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "16:00" },
                "Sunday": { "open": false, "from": "00:00", "to": "16:30" }
            },
            "description": "Kitchen Master จำหน่ายอุปกรณ์ครัวและเครื่องใช้ไฟฟ้าครบวงจร ไม่ว่าจะเป็นหม้อ กระทะ มีด หรือเครื่องปั่น เพื่อช่วยให้การทำอาหารของคุณเป็นเรื่องง่ายและสนุก",
            "product": [
                {
                    "name": "Non-Stick Frying Pan",
                    "price": "1,199",
                    "description": "28cm / Non-Toxic Coating / Even Heat Distribution"
                },
                {
                    "name": "High-Speed Blender",
                    "price": "3,499",
                    "description": "1000W / Multiple Settings / BPA-Free / Easy to Clean"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157ec"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Emma",
            "ai_behavior": "Cheerful, Friendly, Engaging",
            "ai_age": "24-34",
            "business_name": "Fashion Forward",
            "business_type": "Clothing Store",
            "address": {
                "detailedAddress": "2021 Aspen St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "10016"
            },
            "phone": "0832109876",
            "email": "Contact@fashionforward.com",
            "website": "www.fashionforward.com",
            "opentime": {
                "Monday": { "open": true, "from": "10:00", "to": "20:00" },
                "Tuesday": { "open": true, "from": "10:00", "to": "20:00" },
                "Wednesday": { "open": true, "from": "10:00", "to": "20:00" },
                "Thursday": { "open": true, "from": "10:00", "to": "20:00" },
                "Friday": { "open": true, "from": "10:00", "to": "20:00" },
                "Saturday": { "open": true, "from": "11:00", "to": "18:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Fashion Forward จำหน่ายเสื้อผ้าและเครื่องประดับแฟชั่นที่มีความทันสมัย ไม่ว่าจะเป็นเสื้อผ้า รองเท้า หรือกระเป๋า เพื่อให้คุณมีลุคที่โดดเด่นในทุกๆ โอกาส",
            "product": [
                {
                    "name": "Denim Jacket",
                    "price": "1,999",
                    "description": "Unisex / Classic Fit / Multiple Sizes / High-Quality Denim"
                },
                {
                    "name": "Leather Handbag",
                    "price": "3,299",
                    "description": "Genuine Leather / Multiple Compartments / Adjustable Strap"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157ed"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Oliver",
            "ai_behavior": "Calm, Reliable, Detail-Oriented",
            "ai_age": "30-40",
            "business_name": "Home Comfort",
            "business_type": "Home Goods Store",
            "address": {
                "detailedAddress": "2223 Cherry St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "20004"
            },
            "phone": "0821098765",
            "email": "Contact@homecomfort.com",
            "website": "www.homecomfort.com",
            "opentime": {
                "Monday": { "open": true, "from": "09:00", "to": "19:00" },
                "Tuesday": { "open": true, "from": "09:00", "to": "19:00" },
                "Wednesday": { "open": true, "from": "09:00", "to": "19:00" },
                "Thursday": { "open": true, "from": "09:00", "to": "19:00" },
                "Friday": { "open": true, "from": "09:00", "to": "19:00" },
                "Saturday": { "open": true, "from": "10:00", "to": "17:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Home Comfort จำหน่ายสินค้าสำหรับบ้านและสวน ไม่ว่าจะเป็นเฟอร์นิเจอร์ อุปกรณ์ตกแต่งบ้าน หรือเครื่องใช้ในครัว เพื่อให้บ้านของคุณสวยงามและน่าอยู่",
            "product": [
                {
                    "name": "Comfortable Sofa",
                    "price": "9,999",
                    "description": "3-Seater / Fabric Upholstery / Durable Frame / Multiple Colors"
                },
                {
                    "name": "Decorative Lamp",
                    "price": "2,499",
                    "description": "Modern Design / LED / Adjustable Brightness / Energy Efficient"
                }
            ],
            "ai_gender": "ชาย"
        }
    },
    {
        "_id": {"$oid": "15153c04a199198f5d15157ee"},
        "page_id": "Ub4ba514371a70b57f9ed28c8bdfcf9db",
        "details": {
            "ai_name": "Ava",
            "ai_behavior": "Lively, Outgoing, Supportive",
            "ai_age": "22-32",
            "business_name": "Kids Corner",
            "business_type": "Children's Clothing Store",
            "address": {
                "detailedAddress": "2425 Fir St",
                "subdistrict": "",
                "district": "",
                "province": "",
                "zipcode": "98101"
            },
            "phone": "0810987654",
            "email": "Contact@kidscorner.com",
            "website": "www.kidscorner.com",
            "opentime": {
                "Monday": { "open": true, "from": "10:00", "to": "18:00" },
                "Tuesday": { "open": true, "from": "10:00", "to": "18:00" },
                "Wednesday": { "open": true, "from": "10:00", "to": "18:00" },
                "Thursday": { "open": true, "from": "10:00", "to": "18:00" },
                "Friday": { "open": true, "from": "10:00", "to": "18:00" },
                "Saturday": { "open": true, "from": "11:00", "to": "16:00" },
                "Sunday": { "open": true, "from": "12:00", "to": "17:00" }
            },
            "description": "Kids Corner จำหน่ายเสื้อผ้าและอุปกรณ์สำหรับเด็กทุกวัย ไม่ว่าจะเป็นเสื้อผ้าสำหรับเด็กทารก เด็กเล็ก หรือเด็กโต เพื่อให้เด็กๆ มีความสุขและสบายใจในการสวมใส่",
            "product": [
                {
                    "name": "Baby Onesie",
                    "price": "499",
                    "description": "Soft Cotton / Snap Buttons / Cute Designs / Multiple Sizes"
                },
                {
                    "name": "Kids Sneakers",
                    "price": "999",
                    "description": "Breathable / Lightweight / Velcro Straps / Durable"
                }
            ],
            "ai_gender": "ชาย"
        }
    }
];
