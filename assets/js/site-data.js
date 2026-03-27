export const siteData = {
  name: "Taha Ibrahim Siddiqui",
  shortName: "Taha Ibrahim Siddiqui",
  email: "Taha.i.siddiq@gmail.com",
  location: "New Delhi, India",
  cvPath: "assets/files/taha-resume-work.pdf",
  heroVideo: {
    src: "assets/media/india-street-hero.webm",
    poster: "assets/images/datasets/delhi-street.jpg",
    alt: "Street traffic and everyday movement in Mumbai."
  },
  navigation: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Research", href: "research.html", page: "research" },
    { label: "Writing", href: "writing.html", page: "writing" },
    { label: "Reading", href: "reading.html", page: "reading" },
    { label: "Resources", href: "resources.html", page: "resources" }
  ],
  pageIntro: {
    research: {
      title: "Research",
      body: "Papers, presentations, and current projects on public services, labour, exclusion, health, and development in India."
    },
    writing: {
      title: "Writing",
      body: "Essays, commentary, and public-facing work on policy, care, inequality, and representation."
    },
    reading: {
      title: "Reading",
      body: "Books I keep returning to, and the thoughts they leave behind."
    },
    resources: {
      title: "Data and documents",
      body: "Datasets, notes, and supporting documents connected to current work."
    }
  },
  profile: {
    heroImage: "assets/images/portrait.jpg",
    portraitAlt: "Portrait of Taha Ibrahim Siddiqui in a striped shirt.",
    bio: [
      "I am a Predoctoral Research Associate at <a class=\"text-link\" href=\"https://www.devdatalab.org/\" target=\"_blank\" rel=\"noreferrer\">Development Data Lab</a>, where I work on data systems, archival records, and spatial evidence for research on public services in India.",
      "My earlier work with 3ie and r.i.c.e. focused on survey design, geospatial analysis, newborn health, and the day-to-day logistics that make field research possible.",
      "I studied economics at Jamia Millia Islamia. I am most interested in empirical work that stays close to ordinary lives and still has something useful to say about policy."
    ],
    quote: {
      heisenberg:
        "We have to remember that what we observe is not nature in itself but nature exposed to our method of questioning.",
      heisenbergAttribution: "Werner Heisenberg",
      iqbalOriginal:
        "حکیم و عارف و صوفی تمام مستِ ظہور\nکسے خبر کہ تجلی ہے عینِ مستوری",
      iqbalTransliteration:
        "hakim o arif o sufi tamam mast-e-zuhur\nkise khabar ki tajalli hai ayn-e-masturi",
      iqbalTranslation:
        "The philosopher, gnostic, and mystic are all intoxicated by appearance; who knows that manifestation itself may be a form of veiling?",
      iqbalAttribution: "Allama Iqbal"
    },
    docBio: [
      "Taha Ibrahim Siddiqui is based in New Delhi.",
      "He has worked on newborn health, survey design, archival extraction, flood mapping, and public-service data in India.",
      "His writing has appeared in The India Forum, Outlook India, IDR, Maktoob Media, and The Citizen."
    ],
    interests: [
      "Development economics",
      "Health economics",
      "Political economy of exclusion",
      "Geospatial analysis",
      "Survey methods",
      "Field research"
    ],
    methods: [
      "SurveyCTO and phone survey design",
      "Geospatial and causal analysis",
      "OCR and archival data extraction",
      "R, STATA, Python, SQL, QGIS, and Bash"
    ],
    education: {
      degree: "B.A. (Hons.) Economics",
      institution: "Jamia Millia Islamia",
      period: "2019 - 2022",
      score: "8.2 / 10.0"
    },
    aside:
      "Outside work, I am usually somewhere around Delhi, eating street food or following a long argument about politics, history, or cricket."
  },
  experience: [
    {
      period: "July 2025 - Present",
      role: "Predoctoral Research Associate",
      organization: "Development Data Lab",
      organizationUrl: "https://www.devdatalab.org/",
      summary:
        "Works on data infrastructure for research on public services, including OCR pipelines, archival extraction, and administrative datasets.",
      bullets: [
        "Built a pipeline to scrape and structure data from dynamic government dashboards.",
        "Set up archival extraction workflows for historical records and administrative change keys.",
        "Supports manuscript revision, replication work, and analysis on ongoing DDL projects."
      ]
    },
    {
      period: "Oct 2025 - Present",
      role: "Academic Research Mentor",
      organization: "Department of Computer Science, Ashoka University (part-time)",
      summary:
        "Mentors student research on flood mapping and open geospatial workflows for climate-vulnerable states in India.",
      bullets: [
        "Guides daily flood inundation mapping workflows.",
        "Develops an open-source pipeline using satellite data for reproducible flood mapping."
      ]
    },
    {
      period: "July 2024 - July 2025",
      role: "Research Assistant",
      organization: "International Initiative for Impact Evaluation (3ie)",
      summary:
        "Worked on evaluation design, survey instruments, spatial analysis, and research reporting across multiple projects.",
      bullets: [
        "Conducted causal and geospatial analyses and supported evaluation design.",
        "Drafted survey instruments, briefs, reports, and training materials."
      ]
    },
    {
      period: "Feb 2022 - June 2024",
      role: "Field Research Assistant",
      organization: "r.i.c.e.",
      summary:
        "Ran longitudinal phone-survey work on newborn care and helped manage research operations.",
      bullets: [
        "Designed and ran follow-up surveys tracking families after a newborn-care intervention.",
        "Managed data-entry teams, HR workflows, and database quality for a 40-member team."
      ]
    },
    {
      period: "Nov 2021 - Feb 2022",
      role: "Research Intern",
      organization: "Department of Economics, UC Berkeley",
      summary:
        "Supported questionnaire design, incoming data review, field coordination, and early project documentation.",
      bullets: [
        "Refined survey instruments through incoming data analysis and qualitative research.",
        "Supervised campus coordinators and assisted with reports, presentations, and documentation."
      ]
    }
  ],
  papers: [
    {
      title: "Assessing the Extent and Mechanism of Informal Credit Amongst Urban Poor: Lessons for Governance",
      kind: "Journal article",
      year: 2022,
      collaborators: "Solo author",
      summary:
        "Looks at why low-income households in Delhi rely on informal credit, with a focus on documentation, unstable incomes, and weak access to formal lending.",
      filters: ["paper", "political-economy", "urban-poverty"],
      links: [
        {
          label: "Draft paper",
          url: "https://drive.google.com/file/d/11zlbS8gP1Fly6DyWAXmqx56BX5iYUHrx/view",
          external: true
        },
        {
          label: "Journal version",
          url: "https://www.ramjaseconomicreview.com/_files/ugd/535c7d_daa83d8b0076458d920d3db445d4a364.pdf#page=123",
          external: true
        },
        {
          label: "Presentation",
          url: "https://drive.google.com/file/d/1T3maum8EG_aVh2-Kn640F0sVafy1Dld3/view",
          external: true
        }
      ],
      featured: true,
      note: "Won the best paper award at the 17th South Asian Economics Students' Meet."
    },
    {
      title:
        "Multilateral peacebuilding in practice: Addressing farmer-herder disputes along the border of Sierra Leone and Guinea",
      kind: "Working paper",
      year: 2026,
      collaborators:
        "With Shwetangi Sahu, Devika Lakhote, Fiona Kastel, Lame Ungwang, Sara Ansari, Paul Thissen, and Theodora Benesch",
      summary:
        "Examines how multilateral peacebuilding works in practice along the Sierra Leone-Guinea border, with a focus on farmer-herder disputes and the institutions built to settle them.",
      filters: ["paper", "political-economy", "public-policy"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Multilateral%20peacebuilding%20in%20practice"
        }
      ],
      featured: false,
      note: "R&R at Journal of Development Effectiveness."
    }
  ],
  presentations: [
    {
      title: "Identity and Discretionary Spending: Causal Evidence of Religious Bias in India's Model Village Scheme",
      kind: "Conference presentation",
      year: 2025,
      collaborators: "20th Annual Conference on Economic Growth and Development, Indian Statistical Institute",
      summary:
        "Studies whether local discretionary spending under the Model Village Scheme reflects religious bias in India.",
      filters: ["presentation", "political-economy", "minorities"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Identity%20and%20Discretionary%20Spending"
        }
      ],
      featured: true,
      note: ""
    },
    {
      title:
        "Observational Correlation Between Ambient Temperature and Measured Body Temperature Among Neonates in a Public Hospital in Uttar Pradesh, India",
      kind: "Conference presentation",
      year: 2024,
      collaborators: "With N. Srivastava",
      summary:
        "Looks at how ambient temperature and measured body temperature move together for neonates in a public hospital in Uttar Pradesh.",
      filters: ["presentation", "health", "survey-methods"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Ambient%20Temperature%20and%20Measured%20Body%20Temperature%20Among%20Neonates"
        }
      ],
      featured: true,
      note: ""
    }
  ],
  ongoingWork: [
    {
      title: "Regulatory policy, leather markets, and downstream human well-being",
      kind: "Current project",
      year: 2026,
      status: "In progress",
      summary:
        "A project on how regulation reshapes leather markets, who bears those costs, and what that means for work, household security, and daily well-being.",
      filters: ["ongoing", "political-economy", "labour"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Regulatory%20policy%20and%20leather%20markets"
        }
      ]
    },
    {
      title: "High-resolution measurement of extreme flood exposure and child nutrition in India",
      kind: "Current project",
      year: 2026,
      status: "In progress",
      summary:
        "Measures extreme flood exposure at high spatial resolution and studies how those shocks shape child nutrition outcomes across India.",
      filters: ["ongoing", "health", "geospatial"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Extreme%20flood%20exposure%20and%20child%20nutrition%20in%20India"
        }
      ]
    },
    {
      title: "Gig work and general equilibrium effects in India's informal labour markets",
      kind: "Current project",
      year: 2026,
      status: "In progress",
      summary:
        "Looks at what gig work changes in local labour markets, especially for workers moving in and out of informal jobs and low-wage service work.",
      filters: ["ongoing", "labour", "urban-poverty"],
      links: [
        {
          label: "Mail for latest version",
          url: "mailto:Taha.i.siddiq@gmail.com?subject=Latest%20version%20request%3A%20Gig%20work%20and%20informal%20labour%20markets%20in%20India"
        }
      ]
    }
  ],
  writing: [
    {
      title: "Is it Time to Change the Way We Elect Our MPs?",
      outlet: "The India Forum",
      year: 2024,
      collaborators: "With M. K. Khan",
      summary:
        "A piece on electoral design, representation, and whether the current way of electing MPs still serves democratic accountability.",
      filters: ["political-economy", "public-policy"],
      url: "https://www.theindiaforum.in/forum/it-time-change-way-we-elect-our-mps",
      featured: true,
      thumbnail: "assets/images/articles/mps.webp",
      thumbnailAlt: "Illustrated cover image for the article on how MPs are elected."
    },
    {
      title: "How Rajasthan's Indira Rasois Serve Food and Dignity to Urban Poor",
      outlet: "Outlook India",
      year: 2024,
      collaborators: "With K. Satheesh",
      summary:
        "Reports on how subsidised community kitchens shape hunger relief, dignity, and everyday urban welfare.",
      filters: ["urban-poverty", "public-policy"],
      url: "https://www.outlookindia.com/national/how-rajasthan-indira-rasois-serve-food-and-dignity-to-urban-poor-weekender_story-341280",
      featured: true,
      thumbnail: "assets/images/articles/rasois.jpg",
      thumbnailAlt: "Community kitchen image used as the article thumbnail."
    },
    {
      title: "Understanding Demand for Healthcare Among Families of High-risk Newborns",
      outlet: "The India Forum",
      year: 2023,
      collaborators: "With N. Nair and D. Coffey",
      summary:
        "Explores how families of high-risk newborns think about care when access is fragile and treatment decisions are hard.",
      filters: ["health", "public-policy"],
      url: "https://www.theindiaforum.in/health/understanding-demand-healthcare-among-families-high-risk-newborns",
      featured: true,
      thumbnail: "assets/images/articles/newborns.webp",
      thumbnailAlt: "Thumbnail image for the high-risk newborn healthcare article."
    },
    {
      title: "A Man's Job: The Need to Include Fathers in Caregiving",
      outlet: "IDR",
      year: 2023,
      collaborators: "Solo author",
      summary:
        "Argues for taking fathers' caregiving roles seriously in social programmes and public conversations about care work.",
      filters: ["gender", "health"],
      url: "https://idronline.org/ground-up-stories/a-mans-job-the-need-to-include-fathers-in-caregiving/",
      featured: true,
      thumbnail: "assets/images/articles/fathers.jpg",
      thumbnailAlt: "Father and child themed illustration from the article."
    },
    {
      title: "Case for Affirmative Action for Muslims: Are We in Workforce?",
      outlet: "Maktoob Media",
      year: 2022,
      collaborators: "Solo author",
      summary:
        "Examines representation, labour-market access, and the case for affirmative action through the lens of Muslim exclusion in India.",
      filters: ["minorities", "political-economy"],
      url: "https://maktoobmedia.com/2022/03/08/case-for-affirmative-action-for-muslims-are-we-in-workforce/",
      featured: true,
      thumbnail: "assets/images/articles/affirmative-action.jpg",
      thumbnailAlt: "Photograph used as the article thumbnail for the affirmative action piece."
    },
    {
      title: "Internet Expenses Keep Many Out of School, Meals and Social Equity Also Take a Hit",
      outlet: "The Citizen",
      year: 2021,
      collaborators: "Solo author",
      summary:
        "Traces how the cost of connectivity during the pandemic deepened exclusion from schooling, nutrition, and everyday social life.",
      filters: ["education", "inequality"],
      url: "https://www.thecitizen.in/index.php/en/NewsDetail/index/9/21017/Internet-Expenses-Keep-Many-Out-of-School-Meals-and-Social-Equity-Also-Take-a-Hit?infinitescroll=1",
      featured: false,
      thumbnail: "assets/images/articles/internet-expenses.jpg",
      thumbnailAlt: "Article thumbnail about internet expenses and schooling."
    }
  ],
  readingBooks: [
    {
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      cover: "assets/images/books/norwegian-wood-cover.svg",
      coverAlt: "Red book cover for Norwegian Wood by Haruki Murakami.",
      intro: "This is something I read during the COVID lockdown.",
      reflections: [
        "If you want to read about someone meandering through life, rather than a sharply drawn protagonist driving everything forward, this book is for you.",
        "Murakami writes beautifully. The imagery stays with you, and at times it feels as if you are walking through the novel alongside the character.",
        "It is a coming-of-age novel and also not one. Most coming-of-age stories lean on the ecstasy of youth, young love, and mistakes. This one also makes room for quieter fears: walking down a winding road and wondering whether you will make something of your life, whether the dream you carry will ever arrive.",
        "I have probably said enough. You may feel, now and then, that the story is not going anywhere. That is the point."
      ],
      favoritePassage:
        "No truth can cure the sorrow we feel from losing a loved one. No truth, no sincerity, no strength, no kindness can cure that sorrow. All we can do is see it through to the end and learn something from it, but what we learn will be no help in facing the next sorrow that comes to us without warning."
    },
    {
      title: "The Origins of Totalitarianism",
      author: "Hannah Arendt",
      cover: "assets/images/books/origins-of-totalitarianism-cover.svg",
      coverAlt: "Red and white book cover for The Origins of Totalitarianism by Hannah Arendt.",
      intro:
        "To be honest, I had to go back to my notes before writing this, because what I remembered most was just how excruciatingly dense the book is. It took me seven attempts to finish.",
      reflections: [
        "I still think this book needs a companion, or maybe a public version written for ordinary readers, because it is hard to enter without some grounding in political theory.",
        "There are also layers of history in it that many readers from the Global South may not immediately have at hand. I had to go away and read the Dreyfus Affair properly before that chapter really opened up for me.",
        "Even then, it is one of those books that leaves an imprint on the mind. A lot of discussion around totalitarianism and authoritarianism today gets reduced to institutional decay or the centralisation of power. Arendt is more unsettling than that. She shows how the ground is prepared much earlier, long before we can clearly see the monster.",
        "What stayed with me most is her argument that totalitarianism feeds on loneliness and isolation. That feels painfully true today. One solution, I think, lies in public spaces of discussion, even something as ordinary as a chai tapri where people can gather and talk. When we are left alone, helplessness grows. When we come together as a collective, hope returns.",
        "The French Revolution is a useful reminder. It did not begin only when people marched on the Bastille. Before that there were salons, social gatherings often hosted by elite women, where ideas were tested, sharpened, and made politically alive."
      ],
      favoritePassage:
        "Men have been found to resist the most powerful monarchs and to refuse to bow down before them, but few indeed have been found to resist the crowd, to stand up alone before misguided masses, to face their implacable frenzy without weapons and with folded arms, to dare a no when a yes is demanded. Such a man was Zola!"
    }
  ],
  datasets: [
    {
      title: "Bihar Flood Inundation Panel Dataset (1998-2021)",
      type: "GitHub repository",
      access: "Open access",
      note: "Panel data and code for flood inundation work in Bihar.",
      url: "https://github.com/TahaIbrahimSiddiqui/Bihar_flood_panel.git",
      image: "assets/images/fieldwork-06.jpg",
      imageAlt: "Flooded street scene used as the cover image for the Bihar flood dataset.",
      imageFit: "cover"
    },
    {
      title: "All India Villages Matched to Corresponding Parliamentary Constituency Linked to SHRUG",
      type: "GitHub repository",
      access: "Open access",
      note: "Village-to-parliamentary-constituency crosswalk linked to SHRUG.",
      url: "https://github.com/TahaIbrahimSiddiqui/Shrug_lok_sabha",
      image: "assets/images/datasets/india-map.svg",
      imageAlt: "Locator map of India used as the cover image for the constituency matching dataset.",
      imageFit: "contain"
    },
    {
      title: "Urban Poor Indebtedness - Delhi Dataset",
      type: "Google Sheet",
      access: "Open access",
      note: "Sheet linked to the Delhi informal-credit study.",
      url: "https://docs.google.com/spreadsheets/d/103DWLPISa8XKKu_z5C5hd49Ou9I_MH9F3uOtnngfE1Q/edit?usp=sharing",
      image: "assets/images/datasets/delhi-street.jpg",
      imageAlt: "Delhi street scene used as the cover image for the urban indebtedness dataset.",
      imageFit: "cover"
    }
  ],
  resources: [
    {
      title: "Current Work CV",
      type: "PDF",
      access: "Local copy",
      note: "",
      url: "assets/files/taha-resume-work.pdf"
    },
    {
      title: "RA interview resource for Dalit, Adivasi, and Muslim students",
      type: "Google Doc",
      access: "Reference document",
      note: "Interview resource for work and conversations focused on Dalit, Adivasi, and Muslim students.",
      url: "https://docs.google.com/document/d/1-CvlPvdr-gIwx8jTzTzzP-0zvaRAKihXAgH3oBpa4p4/edit?tab=t.0"
    },
    {
      title: "Confidentiality Agreement",
      type: "Google Doc",
      access: "Reference document",
      note: "Supporting agreement document linked from the public dataset page.",
      url: "https://docs.google.com/document/d/1hAVKwAQfp_E6BV6Y4eB8BQBvW0dfZ4cA4Fqm5JtFwF8/edit?usp=sharing"
    }
  ],
  gallery: [
    {
      src: "assets/images/field-carousel/field-01.jpg",
      alt: "A fieldworker speaking with women in a narrow residential lane.",
      caption: "A survey conversation in a narrow lane."
    },
    {
      src: "assets/images/field-carousel/field-02.jpg",
      alt: "Blue-painted homes and a dog in a settlement visited during fieldwork.",
      caption: "Housing conditions around a field site."
    },
    {
      src: "assets/images/field-carousel/field-03.jpg",
      alt: "A railway crossing with cyclists, scooters, and pedestrians waiting to pass.",
      caption: "Waiting at a railway crossing between visits."
    },
    {
      src: "assets/images/field-carousel/field-04.jpg",
      alt: "A woman cooking outdoors near a temporary shelter during a field visit.",
      caption: "An outdoor kitchen at a field site."
    },
    {
      src: "assets/images/field-carousel/field-05.jpg",
      alt: "A family standing in flood water outside their home.",
      caption: "Speaking with a family in a flood-affected settlement."
    },
    {
      src: "assets/images/field-carousel/field-06.jpg",
      alt: "A man holding a baby outside a home during a field visit.",
      caption: "Caregiving and health research often begin at the doorstep."
    },
    {
      src: "assets/images/field-carousel/field-07.jpg",
      alt: "A street food stall sign photographed during fieldwork.",
      caption: "Street food, signage, and the details that stay with you."
    },
    {
      src: "assets/images/field-carousel/field-08.jpg",
      alt: "Researchers speaking with children and residents outside a brick home.",
      caption: "Household survey work with children and caregivers."
    },
    {
      src: "assets/images/field-carousel/field-09.jpg",
      alt: "A child holding schoolbooks in a doorway during a household visit.",
      caption: "A child showing schoolbooks during a household visit."
    }
  ],
  pageMeta: {
    home: {
      title: "Taha Ibrahim Siddiqui",
      description:
        "Research, public writing, fieldwork, and data by Taha Ibrahim Siddiqui."
    },
    research: {
      title: "Research | Taha Ibrahim Siddiqui",
      description:
        "Research papers, presentations, and current projects by Taha Ibrahim Siddiqui."
    },
    writing: {
      title: "Writing | Taha Ibrahim Siddiqui",
      description: "Public scholarship and commentary by Taha Ibrahim Siddiqui."
    },
    reading: {
      title: "Reading | Taha Ibrahim Siddiqui",
      description: "Reading notes and favorite books by Taha Ibrahim Siddiqui."
    },
    resources: {
      title: "Resources | Taha Ibrahim Siddiqui",
      description:
        "Datasets, documents, and supporting materials connected to Taha Ibrahim Siddiqui's work."
    }
  }
};
