import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "What is SEO and why is it important for my business?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's crucial because it increases your online visibility, drives organic traffic to your website, and helps potential customers find your business when they search for relevant products or services. Good SEO can significantly increase your website traffic and conversions without ongoing advertising costs."
    },
    {
      question: "How long does it take to see results from Google Ads?",
      answer: "Google Ads can start generating traffic immediately once your campaigns are live and approved. However, meaningful results and optimization typically take 2-4 weeks as we gather data and refine the campaigns. Full optimization and consistent ROI usually develop within 1-3 months, depending on your industry, competition, and budget."
    },
    {
      question: "Do you also create websites for small businesses?",
      answer: "Yes, I specialize in creating professional, responsive websites for small and medium businesses. My websites are built with SEO best practices, mobile optimization, and conversion-focused design. I also ensure they load quickly and provide excellent user experience across all devices."
    },
    {
      question: "What is AIEO and how does it help in online visibility?",
      answer: "AIEO (Artificial Intelligence Engine Optimization) is the practice of optimizing content for AI-powered search engines and voice assistants. As search engines become more AI-driven, AIEO helps your content get featured in AI-generated responses, voice search results, and knowledge panels, significantly expanding your online visibility and reach."
    },
    {
      question: "Do you provide photography and videography for products?",
      answer: "Absolutely! I offer professional product photography and videography services. This includes high-quality product shots for e-commerce, lifestyle photography, business portraits, and marketing videos including social media reels. All content is optimized for both web use and social media platforms."
    },
    {
      question: "What's included in your content creation services?",
      answer: "My content creation services include blog writing, website copywriting, social media content, email marketing content, and brand messaging. All content is SEO-optimized, engaging, and tailored to your target audience. I also provide content strategy planning to ensure consistent messaging across all platforms."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "I use comprehensive analytics to track campaign performance including website traffic, conversion rates, click-through rates, cost per acquisition, return on ad spend (ROAS), and search engine rankings. I provide regular reports with actionable insights and recommendations for continuous improvement."
    },
    {
      question: "Can you help with social media marketing beyond just ads?",
      answer: "Yes, I provide comprehensive social media marketing services including content strategy, post creation, community management, and organic growth strategies for platforms like Facebook, Instagram, LinkedIn, and others. I also create engaging visual content including photos and videos specifically for social media."
    },
    {
      question: "What makes your approach to digital marketing different?",
      answer: "My unique approach combines technical expertise with creative storytelling. I don't just focus on one aspect - I integrate SEO, paid advertising, content marketing, and visual content creation to create cohesive campaigns that deliver measurable results. Plus, I provide personalized service and direct communication throughout our partnership."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, I provide ongoing support and maintenance for all services including website updates, campaign optimization, content updates, and performance monitoring. I believe in long-term partnerships and offer flexible maintenance packages to keep your digital presence performing at its best."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about digital marketing services, SEO, advertising, and more.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm here to help! Feel free to reach out for personalized answers to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="inline-block">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md px-6 py-2 rounded-md font-medium transition-colors">
                  Contact Me
                </button>
              </a>
              <a href="https://wa.me/917022886134" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="bg-success text-success-foreground hover:bg-success/90 shadow-md px-6 py-2 rounded-md font-medium transition-colors">
                  WhatsApp Chat
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;