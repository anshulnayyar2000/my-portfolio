const categories = [
  {
    name: "Photography",
    folder: "photography",
    images: [
      {
        id: "crown-shyness-folder",
        name: "Crown Shyness",
        description:
          'Step into a world where the forest canopy becomes a stage for an enchanting ballet of nature. "Crown Shyness: Nature\'s Canopy Ballet" captures a rare and mesmerizing phenomenon known as "crown shyness," where the uppermost branches of trees seem to gracefully avoid each other\'s touch, leaving narrow gaps and patterns reminiscent of a delicate dance.',
        thumbnail: "crown-shyness.jpeg",
        watermark: null,
        backgroundPosition: "0 0",
      },
      {
        id: "lake-fishing-folder",
        name: "Tranquil Waters",
        description:
          'Enter a serene world where the rippling waters of a tranquil lake reflect the essence of tranquility and simplicity. "Tranquil Waters: The Fisherman\'s Solitude" captures a poignant moment on the still surface of a pristine lake, where a solitary fisherman in his boat casts his line into the depths.',
        thumbnail: "lake-fishing.jpeg",
        watermark: null,
        backgroundPosition: "0 60%",
      },
      {
        id: "ooty-tea-folder",
        name: "Ooty's Verdant Elegance: Exploring the Tea Gardens",
        description:
          "Embark on a sensory journey to the picturesque hills of Ooty, India, through the mesmerizing canvas of \"Ooty's Verdant Elegance: Exploring the Tea Gardens.\" This enchanting artwork invites you to immerse yourself in the lush, rolling landscapes of one of India's most renowned tea-producing regions.|The scene unfolds as an ode to nature's artistry, where meticulously manicured tea gardens stretch out as far as the eye can see. Each row of tea plants is a testament to the dedication and precision of the tea farmers, and their vibrant green leaves create a tapestry of rich colors. The soft, misty veil that often shrouds the hills adds an air of mystique to the scene, emphasizing the tranquility of the surroundings.|As you gaze upon this exquisite piece, you can almost feel the cool mountain breeze and hear the gentle rustling of tea leaves. It's a visual symphony of nature and human cultivation, where the synergy between the lush greenery and the labor of tea pluckers comes alive.|\"Ooty's Verdant Elegance\" is a celebration of the artistry of tea cultivation and the breathtaking beauty that is hidden within these hills. It beckons you to pause, savor the moment, and appreciate the harmony that exists between the land, its people, and the cherished tradition of tea-making in Ooty.|Allow this artwork to transport you to a place where nature's beauty and human ingenuity harmonize, where the art of tea cultivation is a testament to the enduring connection between people and their environment.",
        thumbnail: "ooty-tea.jpeg",
        watermark: null,
        backgroundPosition: "0 15%",
      },
      {
        id: "sunset-folder",
        name: "Golden Horizons: Sunset Serenity by the Palm Beach",
        description:
          "As the sun dips below the horizon, its golden rays paint the sky in a breathtaking display of nature's artistry. Along the tranquil beach, palm trees stand sentinel, their fronds gently swaying in the evening breeze. The sands, kissed by the fading light, take on a warm, inviting glow. Together, this scene creates a serene and timeless moment, where the beauty of the sunset, the grace of the palm trees, and the soothing rhythm of the beach converge to offer solace and inspiration to all who behold it.",
        thumbnail: "sunset.jpeg",
        watermark: null,
        backgroundPosition: "0 65%",
      },
      {
        id: "galaxy",
        name: "Starry Glimpse: Capturing the Galaxy's Essence in a Mobile Snapshot",
        description:
          "In the quiet embrace of my hometown, under a clear and starry sky, my mobile camera captured a fleeting glimpse of the distant galaxy. Despite the modest equipment, the brilliance of the celestial expanse shines through, revealing the wonders of the universe. This humble snapshot is a reminder that even in familiar surroundings, the cosmos continues to astound, connecting us to the boundless mysteries of the night sky.",
        thumbnail: "galaxy.jpeg",
        watermark: null,
        backgroundPosition: "0 70%",
      },
      {
        id: "ooty-folder",
        name: "Mystical Morning: Fog-Enshrouded Tea Gardens and the Solitary Tree",
        description:
          "In the soft embrace of morning mist, a solitary tree emerges as the focal point in a vast expanse of tea gardens. The fog lends an ethereal quality to the landscape, shrouding rows of tea plants in a gentle, otherworldly veil. This photograph captures the delicate interplay between nature's tranquility and the earthy beauty of the tea gardens, inviting viewers to lose themselves in the serenity of this fog-laden oasis. It's a moment frozen in time, where the union of tree and tea gardens under the gentle touch of fog creates an enchanting tableau of nature's splendor.",
        thumbnail: "ooty.jpeg",
        watermark: null,
      },
    ],
  },
  {
    name: "Color Painting",
    folder: "color-painting",
    images: [
      {
        id: "root-tree",
        name: "Nature's Watch",
        description:
          "In this captivating artwork, a profound blend of nature and introspection unfolds. At its core stands a majestic tree, its branches reaching gracefully into the canvas's expanse. The tree's leaves and bark are meticulously detailed, capturing the essence of life and growth. However, what truly sets this artwork apart is the presence of an intricately crafted eye, nestled amidst the branches. The eye serves as a powerful symbol of awareness and perception, suggesting a deep connection between nature and human consciousness. Below the tree's intricate root system sprawls, intertwining with the earth's core, symbolizing the interconnectedness of all living things.",
        thumbnail: "rootsTree.jpg",
        watermark: null,
      },
      {
        id: "two-worlds",
        name: "Two Worlds Apart",
        description:
          "This striking artwork vividly juxtaposes two worlds within a single frame. On the left side, a nightmarish realm unfolds, dominated by an eerie landscape filled with grotesque demons and shrouded in darkness. The demons' malevolent presence is palpable, creating an atmosphere of fear and foreboding.| In stark contrast, on the right side of the canvas, a serene and picturesque world emerges. Towering mountains rise majestically against the horizon, while a tranquil river winds its way through a lush grassland. The sky is ablaze with the warm hues of a setting sun, casting a golden glow over the entire scene. Here, a solitary shepherd tends to his two sheep, embodying a sense of peace, harmony, and simplicity.| A round border separates these two worlds, serving as a powerful symbol of division and duality. It not only physically separates the contrasting landscapes but also emphasizes the stark difference in their essence and mood.",
        thumbnail: "twoWorlds.jpg",
        watermark: null,
        backgroundPosition: "0 40%",
      },
    ],
  },
  // {
  //   name: "Color Drawings",
  //   folder: "color-drawings",
  //   images: [
  //     {
  //       id: "family-shapes",
  //       name: "Family Shapes",
  //       description: "Playtime between father and son.",
  //       thumbnail: "thumb.jpg",
  //       watermark: null,
  //     },
  //     {
  //       id: "dandelion-of-pride",
  //       name: "Dandelion of Pride",
  //       description:
  //         "A poster dedicated to Pride Month. This artwork is also available in a blue version.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //     {
  //       id: "dandelion-of-pride-in-blue",
  //       name: "Dandelion of Pride (in Blue)",
  //       description:
  //         "A poster dedicated to Pride Month. This artwork is also available in a pink version.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //     {
  //       id: "tata",
  //       name: "Tata",
  //       description:
  //         "My take on lovely summer evenings at the beautiful Tata castle, featuring the Old Lake in Tata, Hungary.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //     {
  //       id: "winter-light",
  //       name: "Winter Light",
  //       description:
  //         "An old streetlamp joins some Christmas lights in illuminating a quiet night’s moment near the Christmas market at Óbuda’s Main Square in Budapest, Hungary.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //       backgroundPosition: "0 65%",
  //     },
  //     {
  //       id: "margaret",
  //       name: "Margaret",
  //       description:
  //         "A woman and her loyal companion take in the light Danube breeze on Budapest’s Margaret Bridge.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //       backgroundPosition: "top right",
  //     },
  //     {
  //       id: "him-and-her",
  //       name: "Him and Her",
  //       description: "Classic love in beautiful, historic Budapest.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //       backgroundPosition: "top right",
  //     },
  //     {
  //       id: "bloom",
  //       name: "Bloom",
  //       description:
  //         "My take on the spring vibes at Buda Castle’s famous Fisherman’s Bastion in Budapest, Hungary.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //     {
  //       id: "new-hope",
  //       name: "New Hope",
  //       description: "A couple in love finds peace in each other’s arms.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //     {
  //       id: "mamarosa",
  //       name: "Mamarosa",
  //       description: "A rose drawn with love.",
  //       thumbnail: "thumb.jpg",
  //       watermark: null,
  //     },
  //     {
  //       id: "all-about-my-moms",
  //       name: "All About My Moms",
  //       description: "A happy family of three.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //       backgroundPosition: "15% 0",
  //     },
  //     {
  //       id: "doggo-dads",
  //       name: "Doggo Dads",
  //       description:
  //         "Some say that two men and a dog do not make a family. This artist disagrees. Features some landmarks from Siófok, Hungary.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //       backgroundPosition: "center left",
  //     },
  //     {
  //       id: "single",
  //       name: "Single",
  //       description:
  //         "A single mother holds her child’s hand. Features some landmarks from Tihany, Hungary.",
  //       thumbnail: "thumb.jpg",
  //       watermark: "watermark.jpg",
  //     },
  //   ],
  // },
];

export default categories;
