<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Daniel Llamas - Android Developer</title>
    <meta name="title" content="Daniel Llamas - Android Developer">
    <meta name="description"
          content="🧠 Inquisitive human being. 🎨 Passionate creator of high-quality human-centered products. 🎉 Bringing humanity to technology through compelling digital experiences. Currently working as Android Developer @ Wizeline.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://soyllamas.com/">
    <meta property="og:title" content="Daniel Llamas - Android Developer">
    <meta property="og:description"
          content="🧠 Inquisitive human being. 🎨 Passionate creator of high-quality human-centered products. 🎉 Bringing humanity to technology through compelling digital experiences. Currently working as Android Developer @ Wizeline.">
    <meta property="og:image" content="https://soyllamas.com/cover.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://soyllamas.com/">
    <meta property="twitter:title" content="Daniel Llamas - Android Developer">
    <meta property="twitter:description"
          content="🧠 Inquisitive human being. 🎨 Passionate creator of high-quality human-centered products. 🎉 Bringing humanity to technology through compelling digital experiences. Currently working as Android Developer @ Wizeline.">
    <meta property="twitter:image" content="https://soyllamas.com/cover.png">
</svelte:head>

<h1>Daniel Llamas</h1>
<h2>Android Developer</h2>

<main>
    <section>
        <h3>Work Experience</h3>
        <div>
            <p class="title">Software Engineer II, Android - Wizeline</p>
            <p class="subtitle">January 2021 - Present</p>
            <ul>
                <li>Migrated an Android Library module from manual Dependency Injection to Android’s recommended
                    framework, Hilt.
                </li>
                <li>Developed an internal project to improve onboarding experience for new hires through a simple and
                    elegant learning platform.
                </li>
                <li>Participated as an active member of a community which fosters high-quality software development
                    using SOLID Principles, Design Patters, Clean Architecture, TDD, DDD, to name a few.
                </li>
            </ul>
        </div>
        <div class="entry">
            <p class="title">Co-founder & CTO - Nivélate</p>
            <p class="subtitle">November 2015 - January 2021</p>
            <ul>
                <li>Managed a cross-functional team of 14 people conformed of marketers, developers, designers and
                    academics.
                </li>
                <li>Implemented OKRs to define specific goals for the company and individual contributors.
                </li>
                <li>Guaranteed high-quality software using SOLID Principles and Clean Architecture.</li>
                <li>Created timelines for the development and deployment of our technologies.</li>
                <li>Provided the development team with architectural blueprints to follow.</li>
            </ul>
        </div>
        <div class="entry">
            <p class="title">Mobile Developer - Brounie</p>
            <p class="subtitle">January 2018 - February 2019</p>
            <ul>
                <li>Developed +5 apps for both Android and iOS mobile platforms.
                </li>
                <li>Mastered MVVM architecture ensuring app quality and performance.
                </li>
                <li>Worked closely with customers and UI/UX designers to define app features.
                </li>
            </ul>
        </div>
    </section>
    <section>
        <h3>Education</h3>
        <div>
            <p class="title">Universidad Utel - Computer Science Engineering</p>
            <p class="subtitle">July 2020 - October 2022</p>
        </div>
        <div class="entry">
            <p class="title">Tecnológico de Monterrey - Computer Science Engineering</p>
            <p class="subtitle">August 2016 - February 2018</p>
        </div>
    </section>
    <section>
        <h3>Certifications</h3>
        <div>
            <p class="title">Android Mobile Apprenticeship Program - Wizeline Academy</p>
            <p class="subtitle">Issued February 2021</p>
        </div>
        <div class="entry">
            <p class="title">Prof G Certified Brand Strategist - Section4</p>
            <p class="subtitle">Issued November 2020</p>
        </div>
        <div class="entry">
            <p class="title">Prof G Certified Business Strategist - Section4</p>
            <p class="subtitle">Issued June 2020</p>
        </div>
        <div class="entry">
            <p class="title">Data Analyst - Udacity</p>
            <p class="subtitle">Issued March 2019</p>
        </div>
        <div class="entry">
            <p class="title">Data Foundations - Udacity</p>
            <p class="subtitle">Issued August 2018</p>
        </div>
    </section>
</main>

<p class="footer">with ❤️ from daniel</p>

<style>

    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji
    }

    h1 {
        color: #FF6673;
        font-size: 24px;
        text-align: center;
        margin-top: 72px;
        font-weight: 700;
        margin-bottom: 2px;
    }

    h2 {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    h3 {
        font-size: 36px;
        margin-bottom: 24px;
        font-weight: 700;
    }

    .title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 4px;
        line-height: 1.2em;
    }

    .subtitle {
        font-size: 16px;
        font-weight: 400;
        opacity: 66%;
    }

    .footer {
        font-size: 14px;
        opacity: 43%;
        text-align: center;
        padding-bottom: 24px;
    }

    ul {
        margin-top: 12px;
        margin-left: 20px;
    }

    li {
        opacity: 43%;
        margin-bottom: 8px;
        line-height: 24px;
        size: 16px;
    }

    .entry {
        margin-top: 32px;
    }

    main {
        box-sizing: border-box;
        margin: 120px auto 240px auto;
        max-width: 640px;
        padding: 0 25px;
    }

    section {
        margin-bottom: 64px;
    }

</style>