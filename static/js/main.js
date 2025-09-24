// static/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const languageSelectors = document.querySelectorAll('#languageSelector, #authLanguageSelector');
    let currentLanguage = 'en';

    // Language data
    const translations = {
        en: {
            // Navigation
            'Home': 'Home',
            'Features': 'Features',
            'Pricing': 'Pricing',
            'Docs': 'Docs',
            'Sign In': 'Sign In',
            'Sign Up': 'Sign Up',

            // Hero Section
            'Future Conversation Solutions': 'Future Conversation Solutions',
            'Intelligent Service': 'Intelligent Service',
            'Automation': 'Automation',
            'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time — improving efficiency, satisfaction, and support quality effortlessly.': 'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time — improving efficiency, satisfaction, and support quality effortlessly.',
            'Built with AI for': 'Built with AI for',
            'maximum efficiency': 'maximum efficiency',
            'Smart Responses for': 'Smart Responses for',
            'Every Scenario': 'Every Scenario',
            'Real-Time Response': 'Real-Time Response',
            'Seamless Integration': 'Seamless Integration',

            // CTA Section
            'Start Using AI Chatbot Now': 'Start Using AI Chatbot Now',
            'Start your digital transformation journey with an adaptive and efficient AI chatbot.': 'Start your digital transformation journey with an adaptive and efficient AI chatbot.',
            'Get Started': 'Get Started',

            // Stats Section
            'Language Understanding Accuracy': 'Language Understanding Accuracy',
            'Powered by next-generation NLP to understand context and provide relevant answers.': 'Powered by next-generation NLP to understand context and provide relevant answers.',
            'Quick Response': 'Quick Response',
            'Our chatbot never sleeps. Your customers are always there, whenever they need you.': 'Our chatbot never sleeps. Your customers are always there, whenever they need you.',
            'Quick Integration': 'Quick Integration',
            'Connect chatbot to all platforms easily.': 'Connect chatbot to all platforms easily.',
            'Response in 3 Seconds': 'Response in 3 Seconds',
            'Business grows through intelligent AI chatbots.': 'Business grows through intelligent AI chatbots.',

            // Features Section
            'Featured Features': 'Featured Features',
            'What can be done?': 'What can be done?',
            'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time.': 'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time.',
            'Conversation Personalization': 'Conversation Personalization',
            'Chatbots customize responses based on user history.': 'Chatbots customize responses based on user history.',
            'Multi-Platform': 'Multi-Platform',
            'Connect to web, apps, social media, and messaging services.': 'Connect to web, apps, social media, and messaging services.',
            'Easy Training': 'Easy Training',
            'Update chatbot responses in just a few clicks.': 'Update chatbot responses in just a few clicks.',
            'Reporting & Analytics': 'Reporting & Analytics',
            'Monitor performance, chat volume, and conversions.': 'Monitor performance, chat volume, and conversions.',

            // Pricing Section
            'Pricing': 'Pricing',
            'Start Automation Today': 'Start Automation Today',
            'STARTER': 'STARTER',
            'PRO': 'PRO',
            'ENTERPRISE': 'ENTERPRISE',
            '/Month': '/Month',
            'Start with Beginner': 'Start with Beginner',
            'Choose Pro Plan': 'Choose Pro Plan',
            'Contact for Enterprise': 'Contact for Enterprise',
            'Most Popular': 'Most Popular',

            // Pricing Features
            '1 Active Bot': '1 Active Bot',
            '1,000 Conversations per month': '1,000 Conversations per month',
            'Web & WhatsApp Integration': 'Web & WhatsApp Integration',
            'Basic Dashboard & Chat Reports': 'Basic Dashboard & Chat Reports',
            'Email Support': 'Email Support',
            'Up to 5 Active Bots': 'Up to 5 Active Bots',
            '10,000 Conversations per month': '10,000 Conversations per month',
            'Multi-Channel (Web, WhatsApp, IG, Telegram)': 'Multi-Channel (Web, WhatsApp, IG, Telegram)',
            'Custom Workflows & Automation': 'Custom Workflows & Automation',
            'Real-Time Reports & Zapier Integration': 'Real-Time Reports & Zapier Integration',
            'Unlimited Bots & Chats': 'Unlimited Bots & Chats',
            'Role-Based Access & Team Management': 'Role-Based Access & Team Management',
            'Integration to CRM & Custom APIs': 'Integration to CRM & Custom APIs',
            'Advanced AI Training (LLM/NLP)': 'Advanced AI Training (LLM/NLP)',
            'Dedicated Onboarding Team': 'Dedicated Onboarding Team',

            // Footer
            'We help businesses build intelligent conversational experiences through AI-based chatbot technology.': 'We help businesses build intelligent conversational experiences through AI-based chatbot technology.',
            'Products': 'Products',
            'Key Features': 'Key Features',
            'Integrations': 'Integrations',
            'Documentation': 'Documentation',
            'Resources': 'Resources',
            'Help Center': 'Help Center',
            'Blog & Articles': 'Blog & Articles',
            'Developer Guide': 'Developer Guide',
            'Case Studies': 'Case Studies',
            'Join Newsletter': 'Join Newsletter',
            'Get the latest AI updates and product updates straight to your email.': 'Get the latest AI updates and product updates straight to your email.',
            'Enter your email...': 'Enter your email...',
            'All rights reserved.': 'All rights reserved.',
            'Terms & Conditions': 'Terms & Conditions',
            'Privacy Policy': 'Privacy Policy',

            // Auth Pages
            'Sign in to Sinkium': 'Sign in to Sinkium',
            'Create your account': 'Create your account',
            'Sign in with Google': 'Sign in with Google',
            'Sign up with Google': 'Sign up with Google',
            'Or sign in with email': 'Or sign in with email',
            'Or sign up with email': 'Or sign up with email',
            'Email': 'Email',
            'Password': 'Password',
            'Forgot password?': 'Forgot password?',
            'Sign in': 'Sign in',
            'Create account': 'Create account',
            'Need an account?': 'Need an account?',
            'Already have an account?': 'Already have an account?',
            'Enter email': 'Enter email',
            'Enter password': 'Enter password'
        },
        ka: {
            // Navigation
            'Home': 'მთავარი',
            'Features': 'ფუნქციები',
            'Pricing': 'ფასები',
            'Docs': 'დოკუმენტაცია',
            'Sign In': 'შესვლა',
            'Sign Up': 'რეგისტრაცია',

            // Hero Section
            'Future Conversation Solutions': 'მომავლის საუბრის გადაწყვეტილებები',
            'Intelligent Service': 'ინტელექტუალური სერვისი',
            'Automation': 'ავტომატიზაცია',
            'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time — improving efficiency, satisfaction, and support quality effortlessly.': 'ავტომატიზირეთ თქვენი მომხმარებელთა სერვისი საუბრის AI-ით, რომელსაც შეუძლია უპასუხოს, გაიგოს და შეარჩიოს თითოეული მომხმარებელი რეალურ დროში — გაზარდოს ეფექტურობა, კმაყოფილება და მხარდაჭერის ხარისხი ძალისხმევის გარეშე.',
            'Built with AI for': 'შექმნილია AI-ით',
            'maximum efficiency': 'მაქსიმალური ეფექტურობისთვის',
            'Smart Responses for': 'სმარტ პასუხები',
            'Every Scenario': 'ყველა სცენარისთვის',
            'Real-Time Response': 'რეალური დროის პასუხი',
            'Seamless Integration': 'მყისიერი ინტეგრაცია',

            // CTA Section
            'Start Using AI Chatbot Now': 'დაიწყეთ AI ჩატბოტის გამოყენება ახლავე',
            'Start your digital transformation journey with an adaptive and efficient AI chatbot.': 'დაიწყეთ ციფრული ტრანსფორმაციის მოგზაურობა ადაპტური და ეფექტური AI ჩატბოტით.',
            'Get Started': 'დაწყება',

            // Stats Section
            'Language Understanding Accuracy': 'ენის გაგების სიზუსტე',
            'Powered by next-generation NLP to understand context and provide relevant answers.': 'კონტექსტის გასაგებად და შესაბამისი პასუხების მისაცემად ახალი თაობის NLP-ით.',
            'Quick Response': 'სწრაფი პასუხი',
            'Our chatbot never sleeps. Your customers are always there, whenever they need you.': 'ჩვენი ჩატბოტი არასდროს იძინებს. თქვენი მომხმარებლები ყოველთვის იქ არიან, როდესაც თქვენ გესაჭიროებათ.',
            'Quick Integration': 'სწრაფი ინტეგრაცია',
            'Connect chatbot to all platforms easily.': 'ჩატბოტის ყველა პლატფორმასთან მარტივი დაკავშირება.',
            'Response in 3 Seconds': 'პასუხი 3 წამში',
            'Business grows through intelligent AI chatbots.': 'ბიზნესი იზრდება ინტელექტუალური AI ჩატბოტებით.',

            // Features Section
            'Featured Features': 'გამორჩეული ფუნქციები',
            'What can be done?': 'რა შეიძლება გაკეთდეს?',
            'Automate your customer service with conversational AI that can answer, understand, and adapt to each user in real-time.': 'ავტომატიზირეთ მომხმარებელთა სერვისი საუბრის AI-ით, რომელსაც შეუძლია პასუხი, გაგება და თითოეული მომხმარებლის რეალურ დროში ადაპტაცია.',
            'Conversation Personalization': 'საუბრის პერსონალიზაცია',
            'Chatbots customize responses based on user history.': 'ჩატბოტები პერსონალიზებულ პასუხებს იძლევა მომხმარებლის ისტორიის მიხედვით.',
            'Multi-Platform': 'მრავალი პლატფორმა',
            'Connect to web, apps, social media, and messaging services.': 'დაკავშირება ვებ, აპებთან, სოციალურ მედიასთან და შეტყობინებების სერვისებთან.',
            'Easy Training': 'მარტივი ტრენინგი',
            'Update chatbot responses in just a few clicks.': 'ჩატბოტის პასუხების განახლება მხოლოდ რამდენიმე კლიკით.',
            'Reporting & Analytics': 'ანგარიშგება და ანალიტიკა',
            'Monitor performance, chat volume, and conversions.': 'მონიტორინგი შესრულების, ჩატის მოცულობისა და კონვერსიების.',

            // Pricing Section
            'Pricing': 'ფასები',
            'Start Automation Today': 'დაიწყეთ ავტომატიზაცია დღეს',
            'STARTER': 'დამწყები',
            'PRO': 'PRO',
            'ENTERPRISE': 'კორპორაციული',
            '/Month': '/თვე',
            'Start with Beginner': 'დაწყება დამწყებისთვის',
            'Choose Pro Plan': 'Pro გეგმის არჩევა',
            'Contact for Enterprise': 'კორპორაციულისთვის კონტაქტი',
            'Most Popular': 'ყველაზე პოპულარული',

            // Pricing Features
            '1 Active Bot': '1 აქტიური ბოტი',
            '1,000 Conversations per month': '1,000 საუბარი თვეში',
            'Web & WhatsApp Integration': 'ვებ და WhatsApp ინტეგრაცია',
            'Basic Dashboard & Chat Reports': 'ძირითადი დაფა და ჩატის ანგარიშები',
            'Email Support': 'ელ.ფოსტის მხარდაჭერა',
            'Up to 5 Active Bots': 'მაქს 5 აქტიური ბოტი',
            '10,000 Conversations per month': '10,000 საუბარი თვეში',
            'Multi-Channel (Web, WhatsApp, IG, Telegram)': 'მრავალი არხი (ვებ, WhatsApp, IG, Telegram)',
            'Custom Workflows & Automation': 'მორგებული სამუშაო პროცესები და ავტომატიზაცია',
            'Real-Time Reports & Zapier Integration': 'რეალური დროის ანგარიშები და Zapier ინტეგრაცია',
            'Unlimited Bots & Chats': 'უსასრულო ბოტები და ჩატები',
            'Role-Based Access & Team Management': 'როლზე დაფუძნებული წვდომა და გუნდის მართვა',
            'Integration to CRM & Custom APIs': 'CRM და მორგებული API-ების ინტეგრაცია',
            'Advanced AI Training (LLM/NLP)': 'გაძლიერებული AI ტრენინგი (LLM/NLP)',
            'Dedicated Onboarding Team': 'დედიცირებული ონბორდინგ გუნდი',

            // Footer
            'We help businesses build intelligent conversational experiences through AI-based chatbot technology.': 'ჩვენ ვეხმარებით ბიზნესებს ააშენონ ინტელექტუალური საუბრის გამოცდილებები AI-ზე დაფუძნებული ჩატბოტ ტექნოლოგიით.',
            'Products': 'პროდუქტები',
            'Key Features': 'მთავარი ფუნქციები',
            'Integrations': 'ინტეგრაციები',
            'Documentation': 'დოკუმენტაცია',
            'Resources': 'რესურსები',
            'Help Center': 'დახმარების ცენტრი',
            'Blog & Articles': 'ბლოგი და სტატიები',
            'Developer Guide': 'დეველოპერის სახელმძღვანელო',
            'Case Studies': 'შემთხვევების კვლევა',
            'Join Newsletter': 'გამოიწერეთ ახალი ამბები',
            'Get the latest AI updates and product updates straight to your email.': 'მიიღეთ უახლესი AI განახლებები და პროდუქტის განახლებები პირდაპირ თქვენს ელ.ფოსტაზე.',
            'Enter your email...': 'შეიყვანეთ თქვენი ელ.ფოსტა...',
            'All rights reserved.': 'ყველა უფლება დაცულია.',
            'Terms & Conditions': 'წესები და პირობები',
            'Privacy Policy': 'კონფიდენციალობის პოლიტიკა',

            // Auth Pages
            'Sign in to Sinkium': 'შედით Sinkium-ში',
            'Create your account': 'შექმენით თქვენი ანგარიში',
            'Sign in with Google': 'Google-ით შესვლა',
            'Sign up with Google': 'Google-ით რეგისტრაცია',
            'Or sign in with email': 'ან შედით ელ.ფოსტით',
            'Or sign up with email': 'ან დარეგისტრირდით ელ.ფოსტით',
            'Email': 'ელ.ფოსტა',
            'Password': 'პაროლი',
            'Forgot password?': 'დაგავიწყდათ პაროლი?',
            'Sign in': 'შესვლა',
            'Create account': 'ანგარიშის შექმნა',
            'Need an account?': 'გჭირდებათ ანგარიში?',
            'Already have an account?': 'უკვე გაქვთ ანგარიში?',
            'Enter email': 'შეიყვანეთ ელ.ფოსტა',
            'Enter password': 'შეიყვანეთ პაროლი'
        }
    };

    // Initialize language
    function initializeLanguage() {
        const savedLanguage = localStorage.getItem('sinkium_language') || 'en';
        currentLanguage = savedLanguage;

        // Set all selectors to the current language
        languageSelectors.forEach(selector => {
            if (selector) selector.value = currentLanguage;
        });

        updateLanguage(currentLanguage);
    }

    // Update page language
    function updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('sinkium_language', lang);

        // Update all elements with data attributes
        document.querySelectorAll('[data-' + lang + ']').forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (text) {
                element.textContent = text;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(element => {
            const placeholder = element.getAttribute('data-placeholder-' + lang);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });

        // Update all language selectors
        languageSelectors.forEach(selector => {
            if (selector) selector.value = lang;
        });
    }

    // Language selector event listeners
    languageSelectors.forEach(selector => {
        if (selector) {
            selector.addEventListener('change', function() {
                updateLanguage(this.value);
            });
        }
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 35, 50, 0.95)';
            } else {
                navbar.style.background = 'rgba(26, 35, 50, 0.9)';
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.stat-card, .feature-item, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Form handling
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Show loading state
                const submitBtn = this.querySelector('.auth-submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = currentLanguage === 'ka' ? 'იტვირთება...' : 'Loading...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    alert(currentLanguage === 'ka' ? 'შესვლა წარმატებით!' : 'Login successful!');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Show loading state
                const submitBtn = this.querySelector('.auth-submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = currentLanguage === 'ka' ? 'იტვირთება...' : 'Loading...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    alert(currentLanguage === 'ka' ? 'ანგარიში შეიქმნა წარმატებით!' : 'Account created successfully!');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterButton = newsletterForm.querySelector('button');
        const newsletterInput = newsletterForm.querySelector('input');

        if (newsletterButton && newsletterInput) {
            newsletterButton.addEventListener('click', function(e) {
                e.preventDefault();

                const email = newsletterInput.value;
                if (email && email.includes('@')) {
                    // Show success message
                    const originalIcon = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.background = 'var(--accent-color)';

                    setTimeout(() => {
                        this.innerHTML = originalIcon;
                        this.style.background = 'var(--gradient-accent)';
                        newsletterInput.value = '';
                        alert(currentLanguage === 'ka' ?
                            'წარმატებით გამოიწერეთ!' :
                            'Successfully subscribed!');
                    }, 1500);
                } else {
                    alert(currentLanguage === 'ka' ?
                        'შეიყვანეთ სწორი ელ.ფოსტა!' :
                        'Please enter a valid email!');
                }
            });
        }
    }

    // Particle animation enhancement
    function createFloatingParticles() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--accent-color);
                border-radius: 50%;
                opacity: 0.6;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
                z-index: 1;
            `;
            heroSection.appendChild(particle);
        }
    }

    // Add floating particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 0.6;
            }
            90% {
                opacity: 0.6;
            }
            100% {
                transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
        
        .nav-menu.active {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--secondary-color);
            padding: 1rem;
            border-top: 1px solid var(--border-color);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);

    // Initialize everything
    initializeLanguage();
    createFloatingParticles();

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('featured') ?
                'scale(1.08) translateY(-10px)' :
                'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('featured') ?
                'scale(1.05)' :
                'translateY(0)';
        });
    });

    // Feature cards animation on hover
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotateY(180deg)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotateY(0deg)';
            }
        });
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta, .pricing-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.tagName === 'A' && this.href.startsWith('#')) {
                return; // Skip for anchor links
            }

            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                left: ${e.clientX - this.offsetLeft}px;
                top: ${e.clientY - this.offsetTop}px;
                width: 20px;
                height: 20px;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-card h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));

                if (number && number > 0) {
                    animateCounter(target, 0, number, 2000, text);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, start, end, duration, originalText) {
        const startTime = performance.now();
        const prefix = originalText.match(/^\D*/)[0]; // Get non-digit prefix
        const suffix = originalText.match(/\D*$/)[0]; // Get non-digit suffix

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(start + (end - start) * easeOutQuart);

            element.textContent = prefix + current + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Add scroll-to-top functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-accent);
        color: var(--primary-color);
        border: none;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        font-size: 1.2rem;
        box-shadow: var(--shadow-dark);
    `;
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.transform = 'translateY(100px)';
        }
    });

    console.log('🚀 Sinkium website loaded successfully!');
});
