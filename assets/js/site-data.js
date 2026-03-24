export const siteData = {
  name: "Taha Ibrahim Siddiqui",
  shortName: "Taha Ibrahim Siddiqui",
  email: "Taha.i.siddiq@gmail.com",
  location: "New Delhi, India",
  cvPath: "assets/files/taha-resume-work.pdf",
  navigation: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Research", href: "research.html", page: "research" },
    { label: "Writing", href: "writing.html", page: "writing" },
    { label: "Resources", href: "resources.html", page: "resources" }
  ],
  profile: {
    headline:
      "Empirical social scientist and predoctoral research associate working on public services, inequality, and development in South Asia.",
    heroImage: "assets/images/portrait.jpg",
    portraitAlt: "Portrait of Taha Ibrahim Siddiqui in a striped shirt.",
    bio: [
      "I am currently a Predoctoral Research Associate at Development Data Lab, where I work on data systems, archival extraction, and spatial evidence on public services and development in India.",
      "Before that I worked with 3ie and r.i.c.e. on survey design, geospatial analysis, newborn health, and field-led research operations. My research interests sit across health, development, and the political economy of exclusion.",
      "I hold a B.A. (Hons.) in Economics from Jamia Millia Islamia and care most about empirical work that stays close to field realities while still speaking to policy and public debate."
    ],
    docBio: [
      "Taha Ibrahim Siddiqui holds a B.A. (Hons.) in Economics from Jamia Millia Islamia.",
      "Prior to his current role, he worked as a research assistant at r.i.c.e., where he worked on neonatal health, designed and implemented surveys, and supported data-driven decision-making.",
      "His research spans health economics, development economics, and the political economy of development, and he has bylines in India Forum, Outlook, and Maktoob."
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
      "Outside work, I am usually happiest at a food stall in Delhi or somewhere in the middle of an unfolding public conversation."
  },
  experience: [
    {
      period: "July 2025 - Present",
      role: "Predoctoral Research Associate",
      organization: "Development Data Lab",
      summary:
        "Builds data systems for public-service and development research, including OCR workflows, archival extraction, and structured data pipelines.",
      bullets: [
        "Designed a pipeline to scrape and structure data from dynamic government dashboards.",
        "Built LLM-assisted archival extraction workflows for historical records and administrative evolution keys.",
        "Supports manuscript revision, replication-package work, and analysis refinement on ongoing DDL research."
      ]
    },
    {
      period: "Oct 2025 - Present",
      role: "Academic Research Mentor",
      organization: "Department of Computer Science, Ashoka University (part-time)",
      summary:
        "Leads student research on flood mapping and open geospatial data systems for climate-vulnerable states in India.",
      bullets: [
        "Guides daily spatial flood inundation mapping workflows.",
        "Develops an open-source pipeline using satellite data for reproducible flood mapping."
      ]
    },
    {
      period: "July 2024 - July 2025",
      role: "Research Assistant",
      organization: "International Initiative for Impact Evaluation (3ie)",
      summary:
        "Worked across geospatial analysis, evaluation design, survey instruments, and research reporting with multiple project partners.",
      bullets: [
        "Conducted causal and geospatial analyses and supported evaluation design.",
        "Drafted survey instruments, briefs, reports, and training materials for varied audiences."
      ]
    },
    {
      period: "Feb 2022 - June 2024",
      role: "Field Research Assistant",
      organization: "r.i.c.e.",
      summary:
        "Led longitudinal phone-survey work on newborn care and managed end-to-end research operations.",
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
        "Supported questionnaire design, real-time data analysis, field coordination, and early-stage research documentation.",
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
        "Examines how missing documentation, insecure income, weak safety nets, and poor access to formal lending shape informal indebtedness among low-income households in Delhi.",
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
    }
  ],
  presentations: [
    {
      title: "Identity and Discretionary Spending: Causal Evidence of Religious Bias in India's Model Village Scheme",
      kind: "Conference presentation",
      year: 2025,
      collaborators: "20th Annual Conference on Economic Growth and Development, Indian Statistical Institute",
      summary:
        "Presents causal evidence on whether local discretionary spending under the Model Village Scheme reflects religious bias in India.",
      filters: ["presentation", "political-economy", "minorities"],
      links: [],
      featured: true,
      note: "Public slides are not posted yet."
    },
    {
      title:
        "Observational Correlation Between Ambient Temperature and Measured Body Temperature Among Neonates in a Public Hospital in Uttar Pradesh, India",
      kind: "Conference presentation",
      year: 2024,
      collaborators: "With N. Srivastava",
      summary:
        "Explores how ambient temperature correlates with neonatal body-temperature measurements in a public hospital setting, with implications for newborn care and measurement.",
      filters: ["presentation", "health", "survey-methods"],
      links: [],
      featured: true,
      note: "Public slides are not posted yet."
    }
  ],
  writing: [
    {
      title: "Is it Time to Change the Way We Elect Our MPs?",
      outlet: "The India Forum",
      year: 2024,
      collaborators: "With M. K. Khan",
      summary:
        "Reflects on electoral design and representation, asking whether the current way of electing MPs still serves democratic accountability well.",
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
        "Reports on how subsidised community kitchens matter not just for hunger relief, but for dignity, public space, and urban welfare delivery.",
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
        "Explores how families of high-risk newborns navigate healthcare demand, risk, and decision-making when access to care is fragile.",
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
        "Argues for taking fathers' caregiving roles seriously in social programs and public conversations about care work.",
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
        "Traces how the pandemic-era cost of connectivity compounded exclusion from schooling, nutrition, and everyday social participation.",
      filters: ["education", "inequality"],
      url: "https://www.thecitizen.in/index.php/en/NewsDetail/index/9/21017/Internet-Expenses-Keep-Many-Out-of-School-Meals-and-Social-Equity-Also-Take-a-Hit?infinitescroll=1",
      featured: false,
      thumbnail: "assets/images/articles/internet-expenses.jpg",
      thumbnailAlt: "Article thumbnail about internet expenses and schooling."
    }
  ],
  datasets: [
    {
      title: "Bihar Flood Inundation Panel Dataset (1998-2021)",
      type: "GitHub repository",
      access: "Open access",
      note: "Panel dataset for flood inundation work and reproducible spatial analysis.",
      url: "https://github.com/TahaIbrahimSiddiqui/Bihar_flood_panel.git"
    },
    {
      title: "All India Villages Matched to Corresponding Parliamentary Constituency Linked to SHRUG",
      type: "GitHub repository",
      access: "Open access",
      note: "Village-to-parliamentary-constituency matching resource linked to SHRUG.",
      url: "https://github.com/TahaIbrahimSiddiqui/Shrug_lok_sabha"
    },
    {
      title: "Urban Poor Indebtedness - Delhi Dataset",
      type: "Google Sheet",
      access: "Open access",
      note: "Dataset connected to the informal-credit study.",
      url: "https://docs.google.com/spreadsheets/d/103DWLPISa8XKKu_z5C5hd49Ou9I_MH9F3uOtnngfE1Q/edit?usp=sharing"
    }
  ],
  resources: [
    {
      title: "Current Work CV",
      type: "PDF",
      access: "Local copy",
      note: "Work-focused CV linked throughout this site.",
      url: "assets/files/taha-resume-work.pdf"
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
      src: "assets/images/fieldwork-01.jpg",
      alt: "Women preparing food at a community kitchen during a field visit.",
      caption: "Community kitchen fieldwork in Rajasthan."
    },
    {
      src: "assets/images/fieldwork-04.jpg",
      alt: "A narrow lane with people standing at a doorway during field visits.",
      caption: "Doorstep conversations during on-site research."
    },
    {
      src: "assets/images/fieldwork-05.jpg",
      alt: "A street scene with a scooter and pedestrians during travel between sites.",
      caption: "Travel between research sites."
    },
    {
      src: "assets/images/fieldwork-06.jpg",
      alt: "People standing in flood water during a field visit.",
      caption: "A flood-affected location visited during fieldwork."
    },
    {
      src: "assets/images/fieldwork-07.jpg",
      alt: "A blue-painted wall and lane with a goat near a research site.",
      caption: "Built environments around field sites matter too."
    },
    {
      src: "assets/images/fieldwork-08.jpg",
      alt: "An adult carrying a baby during newborn-health fieldwork.",
      caption: "Everyday caregiving contexts at the center of health research."
    }
  ],
  pageMeta: {
    home: {
      title: "Taha Ibrahim Siddiqui",
      description:
        "Empirical social science research, public writing, fieldwork, and datasets by Taha Ibrahim Siddiqui."
    },
    research: {
      title: "Research | Taha Ibrahim Siddiqui",
      description:
        "Research papers and conference presentations by Taha Ibrahim Siddiqui."
    },
    writing: {
      title: "Writing | Taha Ibrahim Siddiqui",
      description: "Public scholarship and commentary by Taha Ibrahim Siddiqui."
    },
    resources: {
      title: "Resources | Taha Ibrahim Siddiqui",
      description:
        "Datasets, documents, and supporting materials connected to Taha Ibrahim Siddiqui's work."
    }
  }
};
