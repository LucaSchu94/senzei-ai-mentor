
const About = () => {
  return (
    <section id="about" className="py-20 bg-senzei-taupe/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-senzei-navy mb-4">About Senzei</h2>
            <p className="text-lg text-senzei-navy/70">
              Your personal AI-powered high performance mentor
            </p>
          </div>

          <div className="space-y-8 reveal">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
              <h3 className="text-xl font-bold text-senzei-navy mb-3">For whom is Senzei designed?</h3>
              <p className="text-senzei-navy/80">
                Senzei is the digital mentor for high performers, athletes, coaches, entrepreneurs, health-driven creators – anyone who wants to "own their day" with AI support and get more out of their body and mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
              <h3 className="text-xl font-bold text-senzei-navy mb-3">How does it work?</h3>
              <p className="text-senzei-navy/80">
                Senzei connects your data, analyzes patterns, and delivers smart, clear recommendations for your day. By integrating with your existing health data sources, Senzei provides a holistic view of your performance and actionable steps to improve it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-senzei-taupe/30">
              <h3 className="text-xl font-bold text-senzei-navy mb-3">Why choose Senzei?</h3>
              <ul className="list-disc pl-5 text-senzei-navy/80 space-y-2">
                <li>AI-powered daily briefings tailored to your habits and goals</li>
                <li>Integrates with your data: mood, sleep, HRV, training & nutrition</li>
                <li>Actionable recommendations for recovery, performance & focus</li>
                <li>No complex dashboards – just clarity, structure, and progress</li>
                <li>Modern, minimalistic premium design</li>
              </ul>
            </div>
            
            <div className="mt-12 flex justify-center">
              <img 
                src="/lovable-uploads/36e85ed4-3d57-46de-b0c1-7ffdb9f7bd97.png" 
                alt="Senzei AI Snapshot Example" 
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
