const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Hero
content = content.replace(/eyebrow: "Engineering Digital Excellence"/g, 'eyebrow: "Enterprise IT Consulting, SAP, Salesforce & Software Development"');
content = content.replace(/title: "Building the Future of Enterprise Systems"/g, 'title: "Technology That Moves Heavy Industry Forward"');
content = content.replace(/sub: "We combine deep domain expertise with cutting-edge technology to architect, build, and scale digital platforms that drive operational efficiency and sustainable growth."/g, 'sub: "Acceleron Solutions helps mining, manufacturing, and enterprise businesses run better—with SAP and Salesforce implementations, custom software, IT infrastructure, and cybersecurity built by people who understand how your operations actually work."');
content = content.replace(/Explore our services/g, 'Explore Our Services');

// Trust Metrics
content = content.replace(/100\+/g, '120+');
content = content.replace(/50\+/g, '80+');
content = content.replace(/15\+/g, '20+');

// About Snapshot
content = content.replace(/Global scale\. Boutique agility\./g, "Part of an 80-Year Industrial Legacy, Built for What's Next");
content = content.replace(/Acceleron Solutions represents the convergence of deep engineering heritage and modern digital innovation\./g, "Acceleron Solutions is the technology arm of the Gainwell Group—a diversified conglomerate headquartered in Kolkata, with branches and subsidiaries across India, the USA, Australia, Singapore, Nepal, and Bhutan. We combine deep industrial and mining domain knowledge with modern SAP, Salesforce, and custom software expertise to help businesses run leaner, safer, and smarter.");
content = content.replace(/We are a collective of SAP architects, full-stack engineers, and digital strategists who believe that enterprise technology shouldn't be cumbersome\./g, "We are not a generalist IT vendor learning your industry on your dime. We grew up inside one of India’s largest heavy-equipment and mining services groups—so when we build your ERP, CRM, or field app, we already understand fleet uptime, safety compliance, and shop-floor reality.");

// Services
content = content.replace(/Comprehensive Capabilities/g, "Everything Your Technology Stack Needs, Under One Roof");
content = content.replace(/From architecture to deployment, we deliver end-to-end digital transformation tailored to your enterprise\./g, "From ERP to cybersecurity, we help you consolidate vendors and cut through the complexity of enterprise IT.");

// Update specific service descriptions (EAS)
content = content.replace(/SAP S\/4HANA transformations, Salesforce implementations, and bespoke enterprise solutions\./g, "SAP S/4HANA transformation, RISE with SAP, managed services, cloud migration, HXM & CX, and SAP Analytics—delivered by a team where over 60% of resources are S/4HANA certified.\n\nSalesforce Consulting: Implementation, migration, Sales Cloud, Service Cloud, CPQ, and Lightning Platform development that turns Salesforce into your team’s daily operating system.\n\nZoho Suite: CRM, Books, People, Analytics, and workflow automation for growing businesses that need enterprise-grade tools without enterprise-grade overhead.");

// Software Development (SDaaS)
content = content.replace(/Modern web and mobile applications engineered for performance, scale, and seamless user experiences\./g, "Custom enterprise applications, web platforms, and mobile apps engineered around your actual business processes—using Node, Django, React, Next.js, and Swift/Kotlin.");

// Cloud & Infrastructure
content = content.replace(/Resilient cloud architectures, DevOps automation, and scalable infrastructure management\./g, "Network setup, active/passive setup, multi-cloud management (AWS, Azure, GCP), AMC support, and email management (Office 365, Google Workspace, Zimbra).");

// Products
content = content.replace(/Digital Assets & Solutions/g, "Built In-House. Proven in the Field.");
content = content.replace(/Proprietary platforms and accelerators designed to solve complex industry challenges rapidly\./g, "Over the past decade, we've built and deployed our own suite of products across our group companies and external clients—real tools solving real operational problems, not generic SaaS.");

fs.writeFileSync('src/routes/index.tsx', content);
console.log('Homepage copy updated');
