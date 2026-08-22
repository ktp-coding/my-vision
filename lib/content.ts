export type GoalItem = {
  title: string;
  subtitle?: string;
  price?: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  bullets?: string[];
};

export type GoalSectionData = {
  id: string;
  eyebrow: string;
  headline: string;
  intro: string;
  items: GoalItem[];
};

export const sections: GoalSectionData[] = [
  {
    id: "residence",
    eyebrow: "ที่พัก · Where I'll Call Home",
    headline: "บ้านและคอนโด\nในทำเลที่ใช่",
    intro:
      "ทุกก้าวของการเทรดคือหนึ่งอิฐที่ก่อขึ้นเป็นบ้าน — เป้าหมายด้านที่อยู่อาศัยที่จะเป็นทั้งที่พักใจ และสินทรัพย์ระยะยาว",
    items: [
      {
        title: "โครงการบ้านนิรติ เชียงใหม่",
        subtitle: "โดย Central Pattana · รสนิยม/สันทราย",
        price: "9.5M – 11.9M ฿",
        description:
          "บ้านเดี่ยวระดับพรีเมียมท่ามกลางบรรยากาศเมืองเหนือ ใกล้ธรรมชาติแต่ยังเชื่อมต่อกับความสะดวกสบายในตัวเมืองเชียงใหม่ ออกแบบเพื่อชีวิตที่สมดุลระหว่างงานและครอบครัว",
        image:
          "https://residence.centralpattana.co.th/uploads/images/230130112728ipUZ-2000p.jpg",
        imageAlt: "โครงการบ้านนิรติ เชียงใหม่",
        href: "https://residence.centralpattana.co.th/nirati/nirati-chiangmai?utm_source=google&utm_medium=sem&utm_campaign=prakit&utm_content=call-to-action&gad_source=1",
      },
      {
        title: "XT 10 Ekkamai",
        subtitle: "โดย Sansiri · ใจกลางเอกมัย",
        price: "4.2M – 4.8M ฿",
        description:
          "คอนโดใจกลางเมือง เดินไม่กี่ก้าวถึง BTS เอกมัย ทำเลศักยภาพสูง เหมาะทั้งอยู่เองและปล่อยเช่า เป็นก้าวแรกที่มั่นคงสู่พอร์ตอสังหาริมทรัพย์",
        image:
          "https://www.sansiri.com/media/55hp0xau/xt10-ekkamai-condo-cover-banner-desktop-1920x800-2.webp",
        imageAlt: "XT 10 Ekkamai condominium",
        href: "https://www.sansiri.com/condominium/xt-10ekkamai/th/#b-7",
      },
    ],
  },
  {
    id: "cars",
    eyebrow: "รถ · Machines of Motion",
    headline: "รถที่อยากขับ\nในชีวิตนี้",
    intro:
      "ยานพาหนะไม่ใช่แค่การเดินทาง — มันคือรางวัลที่จับต้องได้ของทุกวินัย ทุก setup ที่กดถูกและถูกจังหวะ",
    items: [
      {
        title: "BMW 330e",
        subtitle: "Mineral White Metallic · Plug-in Hybrid",
        price: "3.2M ฿",
        description:
          "เซอร์กิตในเมืองในร่างของ Sport Sedan สีขาวมุกที่สะท้อนแสงยามพระอาทิตย์ตก ผสานสมรรถนะและความประหยัดของระบบ Hybrid — สปอร์ตในวันธรรมดา สงบในวันเดินทางไกล",
        image:
          "https://prod.cosy.bmw.cloud/connext-bmw/cosySec?COSY-EU-100-7331cqgv2Z7d7DEsHS9uAqsr%25P61U39IjAEKU9ZG19mwapPeqKe16l9iswTsyVXirxlpKAuhFqIbKjDpRUQvqKjT5lk2o3Lbgpnj7WRL7X63D%25Zx477hnaMLWgn2MiYdDOPSEagd087uw8j7SuvFe0SwJeiKMPlPxKUIfNoEAfsi%25eqhrhPeEQm2axpBOHrxRLRQrDHW0%25IA2HSfWQW4B%25V1PaP39fNEbnb7a10s9OaeNE4riIn0ascZwBO5nrxRteIgkZ857MBvqRUgChSB65GvloVsjgp2XHNplv6jQ%2506h2YDaf4OLjmqn1cI9DyLOEjVKqTJIsDvWL3uBrq2TJdSeZLdYuzVMRJzjSkNh5u2OVA0ogSTNNF4HvVYL0Kc%252NmF4Wxfj0XucP81D4QlxbUEqczZ89GsLx8AUiprJ8mhGw6ZuUinptYRSGF167m5VpK6YCygN638mlTv0JlwyX324uFlTQdjcSUk3azDxVBDdnkq8NewzOALU03LkIFJG4dZABKupczXFeWS6xngKMPVYwleWhbNmtfNPo90y71AbHi4TCED9%25wc3lLMiftxdXJuw178zQXGtECUka2L7slGAnMjCrXpFOazlZQ6KjkfXRaYWDAQQ5nmPqisagOybLssnvIT9JxOO2B3iuz6IjedwSoiBDMztMaeeqhk7hX4MLoACoZGhJHFlH7You%25KX%25clHSfWQfHR%25V1Pa1E9fNEbnEVR10s9Osp5E4riIr6OscZwB8T5rxl7K9wt0u4fXr1UtL3huKrTRJeiXI44gpnjTrBzcBTUHN1MAShdnutswTYuZvhJPX65eoVG",
        imageAlt: "BMW 330e Mineral White Metallic",
        href: "https://configure.bmw.co.th/th_TH/configid/3eju24wf",
      },
      {
        title: "Toyota Vellfire Z Hybrid",
        subtitle: "Natural Black · Family Flagship",
        price: "4.5M ฿",
        description:
          "รถแวนหรูสำหรับครอบครัวและการเดินทางไกล เบาะกัปตันสุดสบาย เงียบเหมือนห้องรับแขกเคลื่อนที่ ตอบทุกทริปที่ต้องการทั้งพื้นที่ ความสง่า และความสบายในการโดยสาร",
        image:
          "https://keymotor.sg/wp-content/uploads/2025/05/Toyota-Vellfire-Hybrid-2.5Z-Premier-2.jpg",
        imageAlt: "Toyota Vellfire Z Hybrid",
        href: "https://youtu.be/qP2xlfHizrE",
      },
    ],
  },
  {
    id: "business",
    eyebrow: "ธุรกิจ · Businesses to Build",
    headline: "ธุรกิจที่จะสร้าง\nรายได้ให้เติบโต",
    intro:
      "เป้าหมายสุดท้ายไม่ใช่การถือเงินสด แต่คือการทำให้เงินทำงานแทนเรา — นี่คือธุรกิจที่ตั้งใจจะสร้าง เพื่อกระแสเงินสดในระยะยาว",
    items: [
      {
        title: "แบรนด์เครื่องสำอาง",
        subtitle: "ผลิตภัณฑ์ดูแลผิวหน้า · Moisturizer",
        price: "ทุนเริ่มต้น 30M ฿",
        description:
          "สร้างแบรนด์สกินแคร์ของตัวเอง เริ่มจาก Moisturizer หัวใจของ routine ทุกคน เน้นคุณภาพระดับเวชสำอาง แพ็กเกจสวย ราคาจับต้องได้ ต่อยอดสู่ไลน์ผลิตภัณฑ์เต็มรูปแบบ",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Skincare bottles on marble",
        bullets: ["by idea — brand ของเราเอง", "โฟกัส Moisturizer ก่อน", "ขยาย line ตามฐานลูกค้า"],
      },
      {
        title: "ร้านสะดวกซัก ครบวงจร",
        subtitle: "Self-service Laundromat",
        price: "เริ่มต้น 4M ฿",
        description:
          "ร้านสะดวกซักในทำเลชุมชนหนาแน่น เปิด 24 ชม. ครบทั้งเครื่องซัก อบ พับ และบริการซักรีดแบบส่งถึงบ้าน สร้างรายได้แบบ Passive จากทำเลและ Automation",
        image:
          "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Row of washing machines in laundromat",
      },
      {
        title: "สวนยางพารา (ลงศรี)",
        subtitle: "Rubber Plantation · ที่ดินติดถนน",
        price: "รายได้ ~60K ฿ / เดือน หลังหักต้นทุน",
        description:
          "สวนยางบนที่ดินติดถนน ทำเป็นระบบให้ผู้รับเหมาบริการดูแล มีรายได้สม่ำเสมอทุกเดือน เป็นสินทรัพย์ที่ผลิตกระแสเงินสดอย่างต่อเนื่อง และมูลค่าที่ดินโตตามเวลา",
        image:
          "https://images.unsplash.com/photo-1470549638415-0a0755be0619?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Rubber tree plantation",
        bullets: [
          "สวนติดถนน — เข้าออกสะดวก",
          "ทำระบบ + จ้างบริการดูแล",
          "รายได้เดือนละ ~60K หลังหักต้นทุน",
        ],
      },
      {
        title: "Cafe & Restaurant & Resort",
        subtitle: "Lifestyle Destination · by idea",
        price: "รวม ~14M ฿",
        description:
          "โปรเจกต์ระยะยาวสุด — เริ่มจากคาเฟ่ที่มีเอกลักษณ์ ต่อยอดเป็นร้านอาหาร และรีสอร์ทเล็ก ๆ ในทำเลธรรมชาติ ให้เป็นทั้งพื้นที่พัก ทำงาน และเป็นแบรนด์ Lifestyle ของเราเอง",
        image:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Warmly lit cafe interior",
        bullets: ["Cafe · 4M ฿", "Restaurant · 5M ฿", "Resort · 5M ฿"],
      },
    ],
  },
];
