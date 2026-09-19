window.DATA = {
  name: "Indrajeet Thakare",
  role: "Supply Chain Analytics · Data Engineering",
  specialty: "Specialised in Inventory Optimisation, Demand Forecasting & Supply Chain Data Pipelines",
  specialties: ["Inventory Optimisation", "Demand Forecasting", "Supply Chain Data Pipelines", "S&OP Analytics"],
  bio: "With a strong background in analytics and hands-on industry experience across Supply Chain and Manufacturing, I specialise in building data-driven solutions that optimise inventory, improve demand forecasting, and drive measurable operational impact.",
  email: "ist220000@utdallas.edu",
  github: "https://github.com/IndraT97",
  linkedin: "https://www.linkedin.com/in/i97/",
  resume: "https://www.dropbox.com/scl/fi/p27gqdbit1i6uedyladkb/Indrajeet_Thakare_Resume_DropBox.pdf?rlkey=t1xjw4oqmp3e3wfi7ictfnfl7&st=uo4j0tof&dl=0",

  experience: [
    {
      role: "Supply Chain Data Analyst",
      company: "Levare",
      url: "https://levare.com/company",
      period: "Mar 2025 – Present",
      type: "Full-time",
      summary: "Own the analytics stack for the North American S&OP organisation. Replaced legacy Excel reporting with a governed Power BI platform — cutting daily manual tracking by 80% — and rebuilt demand forecasting with statistical models that improved accuracy by ~8% MAPE across 12 equipment categories, reducing safety stock by ~15%. Also shipped internal web tools and AI-driven automation that eliminated manual tariff and forecast entry entirely.",
      tools: ["Power BI", "DAX", "Python", "T-SQL", "dbt", "Airflow", "ARIMA/Prophet", "React", "FastAPI", "Claude API"]
    },
    {
      role: "Data Analyst",
      company: "Tesla",
      url: "https://www.tesla.com/about",
      period: "Aug 2023 – Dec 2023",
      type: "Co-op",
      summary: "Supported service parts material planning across US distribution centers. Delivered planning insights and transfer recommendations that reduced excess inventory risk and smoothed warehouse transitions, and surfaced a global inventory oversight that drove a cost-saving redistribution effort. Built real-time visualisations and movement logic that improved parts availability for customers.",
      tools: ["Python", "SQL", "Airflow", "Tableau", "Power BI"]
    },
    {
      role: "Data Engineer",
      company: "FemiSpace",
      url: "https://www.linkedin.com/company/femispace/",
      period: "May 2023 – Aug 2023",
      type: "Internship",
      summary: "Improved the platform's core Nutritional Food Database through systematic cleaning and augmentation, and streamlined data access with optimised SQL queries and stored procedures. Built wireframe dashboards that cut reporting turnaround, and led a proof of concept for modern ETL workflows.",
      tools: ["Python", "SQL", "Tableau", "Snowflake", "dbt"]
    },
    {
      role: "Data Analytics Engineer",
      company: "Blinkit",
      url: "https://www.eternal.com/",
      period: "Aug 2019 – Jul 2022",
      type: "Full-time · 3 yrs",
      summary: "Spent three years in quick-commerce supply chain operations across west India. Designed and implemented excess inventory rebalance logic that improved product availability, and automated order generation to cut execution time and manual effort substantially. Built real-time demand planning dashboards and ran inventory classification and market basket analysis to guide category decisions.",
      tools: ["Python", "SQL", "Airflow", "Tableau", "Power BI"]
    }
  ],

  about: [
    "My career has followed the supply chain end to end. At Blinkit, one of India's fastest-growing quick-commerce companies, I spent three years in the trenches of inventory rebalancing and demand planning — where every stockout was measured in minutes, not days.",
    "At Tesla, I applied that foundation at global scale, optimising service parts inventory across US distribution centers. Today at Levare, I own the analytics stack for a North American S&OP organisation — from governed Power BI platforms and statistical forecasting models to AI-driven tools the sales team uses daily.",
    "I like problems where a percentage point of forecast accuracy translates into real money — and building the pipelines, models, and tools that win it."
  ],

  featuredProjects: [
    {
      title: "Azure Metadata-Driven Pipeline with CI/CD",
      description: "End-to-end incremental-load data platform on Azure — ADF orchestration, Databricks transformations, Unity Catalog governance with RBAC, and automated CI/CD deployment.",
      url: "https://github.com/IndraT97/Azure-Data-Engineering-ADF-DBX-RBAC-UC-CI_CD",
      tools: ["Azure", "Databricks", "ADF", "RBAC", "CI/CD"]
    },
    {
      title: "AWS Metadata-Driven Data Cleaning Pipeline",
      description: "Fully automated serverless cleaning pipeline — S3 landing zones, Glue crawlers and jobs driven by metadata tables, Lambda triggers, and Redshift as the analytics warehouse.",
      url: "https://github.com/IndraT97/AWS-automated-Data-Cleaning-Pipeline",
      tools: ["AWS Glue", "Lambda", "S3", "Redshift"]
    },
    {
      title: "Databricks Delta Live Table Pipeline",
      description: "Declarative streaming pipeline using Delta Live Tables and Autoloader — bronze/silver/gold medallion architecture with built-in data quality expectations.",
      url: "https://github.com/IndraT97/DBX_Delta_live_Table",
      tools: ["Databricks", "Delta Lake", "Autoloader"]
    }
  ],

  projectCategories: ["All", "Data Analysis", "Data Engineering", "Machine Learning", "SQL"],

  projects: [
    { title: "Zomato Geospatial Analysis", category: "Data Analysis", url: "https://github.com/IndraT97/Zomato_Geospatial_Analysis", tools: ["Python", "Geospatial"] },
    { title: "Budget Sales Exploratory Data Analysis", category: "Data Analysis", url: "https://github.com/IndraT97/Sales-Exploratory-Data-Analysis", tools: ["Python", "EDA"] },
    { title: "Azure Metadata-Driven Pipeline — Full Load", category: "Data Engineering", url: "https://github.com/IndraT97/Azure-Data-Engineering-ADF-DBX-ADLS", tools: ["Azure", "Databricks", "ADF", "ADLS"] },
    { title: "Azure Metadata-Driven Pipeline — Incremental Load", category: "Data Engineering", url: "https://github.com/IndraT97/Azure-Data-Engineering-ADF-DBX-RBAC-UC-CI_CD", tools: ["Azure", "Databricks", "RBAC", "CI/CD"] },
    { title: "Databricks Delta Live Table Pipeline", category: "Data Engineering", url: "https://github.com/IndraT97/DBX_Delta_live_Table", tools: ["Databricks", "Delta Lake", "Autoloader"] },
    { title: "Databricks Unity Catalog — Hive MetaStore Sync", category: "Data Engineering", url: "https://github.com/IndraT97/Azure-DBX-UnityCatelog_Hive_MetaStore_Sync", tools: ["Databricks", "Unity Catalog"] },
    { title: "AWS Networking Services Website", category: "Data Engineering", url: "https://github.com/IndraT97/AWS_launched-Website-using-Networking-Services", tools: ["AWS", "VPC", "EC2"] },
    { title: "AWS Metadata-Driven Data Cleaning Pipeline", category: "Data Engineering", url: "https://github.com/IndraT97/AWS-automated-Data-Cleaning-Pipeline", tools: ["AWS Glue", "Lambda", "S3", "Redshift"] },
    { title: "dbt Data Modeling — Sample Dataset", category: "Data Engineering", url: "https://github.com/IndraT97/DBT-projects/tree/main/Project%201", tools: ["dbt", "SQL"] },
    { title: "dbt Airbnb Data Transformation", category: "Data Engineering", url: "https://github.com/IndraT97/DBT-projects", tools: ["dbt", "Snowflake", "SQL"] },
    { title: "Supervised Machine Learning", category: "Machine Learning", url: "https://github.com/IndraT97/Machine-Learning-Projects/tree/main/Supervised%20Learning", tools: ["Python", "Scikit-learn"] },
    { title: "Unsupervised Machine Learning", category: "Machine Learning", url: "https://github.com/IndraT97/Machine-Learning-Projects/tree/main/Unsupervised%20Learning", tools: ["Python", "Clustering"] },
    { title: "Machine Learning with R", category: "Machine Learning", url: "https://github.com/IndraT97/Machine-Learning-Projects/tree/main/Machine%20Learning%20With%20R", tools: ["R"] },
    { title: "ML Experiment Tracking with MLflow", category: "Machine Learning", url: "https://github.com/IndraT97/Machine-Learning-Projects", tools: ["Python", "MLflow"] },
    { title: "Descriptive & Inferential Statistics", category: "Machine Learning", url: "https://github.com/IndraT97/Machine-Learning-Projects/tree/main/Statistics", tools: ["Python", "Statistics"] },
    { title: "Healthcare Data Analysis", category: "SQL", url: "https://github.com/IndraT97/SQL/tree/main/Healthcare%20Data%20Analysis", tools: ["SQL"] },
    { title: "Walmart Data Analysis", category: "SQL", url: "https://github.com/IndraT97/SQL/tree/main/Walmart%20Data%20Analysis", tools: ["SQL"] },
    { title: "Employee Data Management Analysis", category: "SQL", url: "https://github.com/IndraT97/SQL/tree/main/Employee%20Data%20Management%20Analysis", tools: ["SQL"] },
    { title: "Restaurant Rating Analysis", category: "SQL", url: "https://github.com/IndraT97/SQL/tree/main/restaurant-ratings-analysis", tools: ["SQL"] }
  ],

  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "4",  label: "Companies" },
    { value: "8",  label: "Cloud Certs" },
    { value: "19+",label: "Projects" }
  ],

  certifications: [
    { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", date: "Mar 2024", img: "assets/AWS.png", url: "https://www.credly.com/badges/a446b9c4-7883-4508-8f8a-20d9c69b3313/linked_in_profile" },
    { name: "Azure Data Engineer Associate (DP-203)", issuer: "Microsoft Azure", date: "Feb 2024", img: "assets/Azure.png", url: "https://learn.microsoft.com/api/credentials/share/en-us/ThakareIndrajeetS-6428/D1F97DDA7BDA909?sharingId=4856078A19870341" },
    { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft Azure", date: "Feb 2024", img: "assets/Azure.png" },
    { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft Azure", date: "Feb 2024", img: "assets/Azure.png", url: "https://learn.microsoft.com/api/credentials/share/en-us/ThakareIndrajeetS-6428/DF47A2BF26472C00?sharingId=4856078A19870341" },
    { name: "Databricks Generative AI Fundamentals", issuer: "Databricks", date: "Feb 2024", img: "assets/DBX.png", url: "https://credentials.databricks.com/6ea4cb16-f1a1-4f71-8797-8d5363cf07a8" },
    { name: "dbt Fundamentals", issuer: "dbt Labs", date: "Jul 2024", img: "assets/dbt.png", url: "https://credentials.getdbt.com/b585d69b-e673-489f-a2db-6c69c4ad9cdd" },
    { name: "Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "", img: "assets/Azure.png", url: "https://learn.microsoft.com/api/credentials/share/en-us/ThakareIndrajeetS-6428/F1A2B048C49308BB?sharingId=4856078A19870341" },
    { name: "Alteryx Foundation Micro-Credential", issuer: "Alteryx", date: "", img: "assets/alteryx_new.png", url: "https://www.credly.com/badges/5e4f2a57-4604-4df0-be67-a61e0c7e2bda/linked_in_profile" }
  ],

  skills: {
    "Languages": ["Python", "SQL", "R"],
    "Cloud Platforms": ["Microsoft Azure", "Amazon AWS", "Databricks"],
    "Visualisation": ["Tableau", "Power BI"],
    "Data Engineering": ["Apache Airflow", "dbt", "Snowflake", "Azure Data Factory", "AWS Glue", "Delta Lake"],
    "ML & Analytics": ["Scikit-learn", "MLflow", "Pandas", "NumPy", "Apache Spark"],
    "Tools": ["Alteryx", "Git", "MS Office Suite"]
  }
};
