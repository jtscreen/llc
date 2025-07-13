const theaterGallery = [
  'img/acting/tgallery/koda2.JPEG',
  'img/acting/tgallery/koda3.JPEG',
  'img/acting/tgallery/koda4.JPEG',
  'img/acting/tgallery/koda5.JPEG',
  'img/acting/tgallery/maine1.JPG',
  'img/acting/tgallery/msbap1.JPEG',
  'img/acting/tgallery/msbap2.JPEG',
  'img/acting/tgallery/tos1.jpg', 
  'img/acting/tgallery/tos2.jpg',
  'img/acting/tgallery/tos3.jpg'
];

const filmGallery = [
  'img/acting/fgallery/home1.PNG',
  'img/acting/fgallery/news.JPEG',
  'img/acting/fgallery/virgin1.JPG',
  'img/acting/fgallery/yarn1.JPEG',
  'img/acting/fgallery/yarn2.jpg'
];

const otherGallery = [
  'img/acting/pgallery/pw1.JPG',
  'img/acting/pgallery/pw2.JPG',
  'img/acting/pgallery/pw3.JPG',
  'img/acting/pgallery/pw4.JPG',
  'img/acting/pgallery/pw5.JPG',
  'img/acting/pgallery/pw6.JPG',
  'img/acting/pgallery/pw7.JPG',
  'img/acting/pgallery/pw8.JPG',
  'img/acting/pgallery/pw9.JPG'
];

let portfolioData = {
  acting: [
    {
      id: 1,
      title: "[Title of Show]",
      description: "Lead Role - Hunter",
      imageUrl: "img/acting/tgallery/tos2.jpg",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: true
    },
    {
      id: 2,
      title: "[Title of Show]",
      description: "Lead - Hunter",
      imageUrl: "img/acting/tgallery/tos3.jpg",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 3,
      title: "[Title of Show]",
      description: "Lead - Hunter",
      imageUrl: "img/acting/tgallery/tos1.jpg",
      category: "acting",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 4,
      title: "My Sweetest Baby Angel Princess",
      description: "Supporting - Chris",
      imageUrl: "img/acting/tgallery/msbap1.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2023,
      featured: false
    },
    {
      id: 5,
      title: "My Sweetest Baby Angel Princess",
      description: "Supporting - Chris",
      imageUrl: "img/acting/tgallery/msbap2.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2023,
      featured: false
    },
    {
      id: 6,
      title: "Almost, Maine",
      description: "Free Spirit Ensemble - Pete",
      imageUrl: "img/acting/tgallery/maine1.JPG",
      category: "theater",
      subcategory: "acting",
      year: 2021,
      featured: false
    },
    {
      id: 7,
      title: "Kodachrome",
      description: "Supporting - Gravedigger/Young Man",
      imageUrl: "img/acting/tgallery/koda.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 8,
      title: "Kodachrome",
      description: "Supporting - Gravedigger/Young Man",
      imageUrl: "img/acting/tgallery/koda2.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 9,
      title: "Kodachrome",
      description: "Supporting - Gravedigger/Young Man",
      imageUrl: "img/acting/tgallery/koda3.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 10,
      title: "Kodachrome",
      description: "Supporting - Gravedigger/Young Man",
      imageUrl: "img/acting/tgallery/koda4.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2024,
      featured: false
    },
    {
      id: 11,
      title: "Indecent",
      description: "Lead - Lemml",
      imageUrl: "img/acting/tgallery/indecent1.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2022,
      featured: false
    },
    {
      id: 12,
      title: "Indecent",
      description: "Lead - Lemml",
      imageUrl: "img/acting/tgallery/indecent2.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2022,
      featured: false
    },
    {
      id: 13,
      title: "Indecent",
      description: "Lead - Lemml",
      imageUrl: "img/acting/tgallery/indecent3.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2022,
      featured: false
    },
    {
      id: 14,
      title: "Indecent",
      description: "Lead - Lemml",
      imageUrl: "img/acting/tgallery/indecent4.JPEG",
      category: "theater",
      subcategory: "acting",
      year: 2022,
      featured: false
    },
    {
      id: 15,
      title: "No Place is Home",
      description: "Day Player - Ryder",
      imageUrl: "img/acting/fgallery/home1.PNG",
      category: "film",
      subcategory: "acting",
      year: 2023,
      featured: false
    },
    {
      id: 16,
      title: "A Yarn",
      description: "Supporting - Rob",
      imageUrl: "img/acting/fgallery/yarn1.JPEG",
      category: "film",
      subcategory: "acting",
      year: 2023,
      featured: false
    },
    {
      id: 17,
      title: "A Yarn",
      description: "Supporting - Rob",
      imageUrl: "img/acting/fgallery/yarn2.jpg",
      category: "film",
      subcategory: "acting",
      year: 2023,
      featured: true
    },
    {
      id: 18,
      title: "21-Year-Old Virgin",
      description: "Day Player - Prince Charming",
      imageUrl: "img/acting/fgallery/virgin1.JPG",
      category: "film",
      subcategory: "acting",
      year: 2023,
      featured: false
    },
    {
      id: 19,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw1.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: true
    },
    {
      id: 20,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw2.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 21,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw3.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 22,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw4.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 23,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw5.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 24,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw6.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 25,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw7.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    }
    ,
    {
      id: 26,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw8.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    },
    {
      id: 27,
      title: "Paradise Wind",
      description: "Movement Piece - Performer",
      imageUrl: "img/acting/pgallery/pw9.JPG",
      category: "performance",
      subcategory: "acting",
      year: 2025,
      featured: false
    }
  ],
  music: [
    {
      id: 5,
      title: "Nocturne in E Minor",
      description: "Solo Piano - Premiered at Carnegie Hall",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      category: "music",
      year: 2024,
      featured: true
    },
    {
      id: 6,
      title: "Symphony No. 1",
      description: "Full Orchestra - New York Philharmonic",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      category: "music",
      year: 2024,
      featured: false
    },
    {
      id: 7,
      title: "Acoustic Sessions",
      description: "Original Songs - Blue Note Records",
      imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      category: "music",
      year: 2024,
      featured: false
    },
    {
      id: 8,
      title: "Electronic Fusion",
      description: "Contemporary Album - Modern Sounds",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      category: "music",
      year: 2024,
      featured: false
    }
  ],
  photography: [
    {
      id: 9,
      title: "Natural Light Portrait",
      description: "Studio Series, 2024",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=900",
      category: "photography",
      year: 2024,
      featured: true
    },
    {
      id: 10,
      title: "Horizon Lines",
      description: "Fine Art Series, 2024",
      imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      category: "photography",
      year: 2024,
      featured: false
    },
    {
      id: 11,
      title: "Urban Stories",
      description: "Documentary Series, 2023",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800",
      category: "photography",
      year: 2023,
      featured: false
    },
    {
      id: 12,
      title: "Editorial Fashion",
      description: "Magazine Feature, 2024",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=900",
      category: "photography",
      year: 2024,
      featured: false
    },
    {
      id: 13,
      title: "Mountain Solitude",
      description: "Nature Series, 2023",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      category: "photography",
      year: 2023,
      featured: false
    },
    {
      id: 14,
      title: "Executive Portrait",
      description: "Corporate Commission, 2024",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=900",
      category: "photography",
      year: 2024,
      featured: false
    },
    {
      id: 15,
      title: "Intimate Moments",
      description: "Wedding Series, 2024",
      imageUrl: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      category: "photography",
      year: 2024,
      featured: false
    },
    {
      id: 16,
      title: "Still Life Study",
      description: "Art Collection, 2023",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800",
      category: "photography",
      year: 2023,
      featured: false
    }
  ],
  featured: []
};