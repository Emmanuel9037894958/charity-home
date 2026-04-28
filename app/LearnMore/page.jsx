"use client";

import { useEffect, useState } from "react";

export default function LearnMore() {
  const [typedText, setTypedText] = useState("");

const fullText =
  "Thank you for learning more about Roodel Trust Foundation. Whether you support through donations, volunteering, collaboration, or simply sharing our vision, you become part of a movement dedicated to dignity, hope, and lasting change.";

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, index + 1));
    index++;

    if (index > fullText.length) {
      index = 0;
      setTypedText("");
    }
  }, 35);

  return () => clearInterval(interval);
}, []);

const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
        <div className="w-16 h-16 border-4 border-green-900 border-t-transparent rounded-full animate-spin"></div>

        <h1 className="mt-6 text-3xl font-bold text-green-900">
          Loading Learn More...
        </h1>

        <p className="mt-3 text-gray-600">
          Please wait while we prepare more information for you.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Learn More
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            Discover <span className="text-indigo-600 animate-pulse">Our</span>{" "}
            Mission, Vision & Global Impact
          </h1>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Roodel Trust Foundation is committed to creating lasting change
            through education, healthcare, nutrition, empowerment, and
            sustainable development across communities worldwide.
          </p>
        </div>

        {/* LONG CONTENT */}
        <div className="mt-14 space-y-12 text-gray-700 leading-8">
          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Our Purpose
            </h2>

            <p>
              Roodel Trust Foundation was established with a clear purpose: to
              uplift lives, restore dignity, and create opportunities for
              individuals and families facing hardship. We believe every human
              being deserves the chance to live with hope, security, and access
              to resources that support growth. Our work focuses on practical
              solutions that create measurable impact and lasting results.
            </p>

            <p className="mt-4">
              We understand that communities thrive when people are empowered,
              educated, healthy, and connected. That is why our approach
              combines compassion with strategy, ensuring that support reaches
              those who need it most.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Education Changes Everything
            </h2>

            <p>
              Education remains one of the strongest tools for breaking cycles
              of poverty. Through our learning initiatives, we support children,
              teenagers, and young adults with access to school materials,
              mentorship opportunities, scholarships, training programs, and
              confidence-building resources.
            </p>

            <p className="mt-4">
              We promote inclusive education where every child matters,
              regardless of background, ability, gender, or financial status. By
              investing in learning today, we help create leaders, innovators,
              teachers, healthcare workers, and entrepreneurs of tomorrow.
            </p>

            <p className="mt-4">
              We also encourage parents and guardians to value education as a
              long-term pathway to stronger households and better communities.
            </p>

            <p className="mt-4">
              Providing access to quality education and opportunities for
              children and young people is at the heart of our mission. We
              believe education creates confidence, unlocks potential, and opens
              doors to a brighter future for individuals and communities.
            </p>

            <p className="mt-4">
              Through scholarships, school resources, mentorship programs,
              digital learning support, and academic guidance, we help young
              people gain the knowledge and skills they need to succeed in life
              and contribute positively to society.
            </p>

            <p className="mt-4">
              By investing in education today, we are helping build future
              leaders, innovators, professionals, and changemakers for tomorrow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Healthcare & Wellbeing
            </h2>

            <p>
              Good health is the foundation of productivity and happiness.
              Without access to healthcare, many families face unnecessary
              suffering. Our foundation supports awareness campaigns, outreach
              programs, wellbeing education, maternal support, child care
              initiatives, and assistance for vulnerable individuals.
            </p>

            <p className="mt-4">
              We believe prevention is as important as treatment. Therefore, we
              promote health education that helps communities understand
              hygiene, nutrition, disease prevention, mental wellbeing, and
              healthy living practices.
            </p>

            <p className="mt-4">
              Through collaboration with professionals and partners, we continue
              building healthier and stronger communities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Nutrition & Healthy Living
            </h2>

            <p>
              Proper nutrition supports child development, academic success,
              physical strength, and disease prevention. Roodel Trust Foundation
              promotes healthy eating habits through awareness programs,
              community workshops, practical guidance for families, and support
              systems that improve access to nutritious foods.
            </p>

            <p className="mt-4">
              We encourage balanced meals, food hygiene, reduction of excessive
              sugar and salt intake, and the use of fresh local produce whenever
              possible. Our aim is to help families make affordable healthy
              choices that lead to lifelong wellbeing.
            </p>

            <p className="mt-4">
              When communities eat better, they learn better, work better, and
              live better.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Women & Youth Empowerment
            </h2>

            <p>
              Empowering women and young people creates ripple effects that
              transform entire communities. We provide support through skills
              development, leadership opportunities, entrepreneurship training,
              mentoring, confidence building, and pathways to independence.
            </p>

            <p className="mt-4">
              Young people need guidance, encouragement, and opportunity. Women
              deserve equal access to resources and growth. By investing in
              these groups, communities become more resilient and prosperous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Community Development
            </h2>

            <p>
              Sustainable development requires communities to be active
              participants in their own growth. We support local initiatives,
              enterprise creation, agricultural support, volunteer networks,
              community planning, and solutions designed by the people
              themselves.
            </p>

            <p className="mt-4">
              Rather than short-term assistance alone, we focus on systems that
              continue creating value long after projects are completed.
            </p>

            <p className="mt-4">
              This includes training, partnerships, local ownership, and
              responsible use of resources.
            </p>

            <p className="mt-4">
              We believe lasting progress happens when communities are equipped
              with the tools, knowledge, and confidence to shape their own
              future. Our role is to support and strengthen local capacity so
              that growth can continue independently over time.
            </p>

            <p className="mt-4">
              Through skills development programs, leadership training, and
              collaborative partnerships, we help individuals and groups create
              opportunities that improve livelihoods and social wellbeing.
            </p>

            <p className="mt-4">
              We also encourage community participation in decision-making,
              ensuring that projects reflect real needs, local priorities, and
              culturally relevant solutions.
            </p>

            <p className="mt-4">
              By working together with residents, volunteers, professionals, and
              stakeholders, we help create safer neighborhoods, stronger
              families, better economic opportunities, and healthier
              environments.
            </p>

            <p className="mt-4">
              Our vision is to see communities become self-reliant, resilient,
              united, and capable of sustaining positive change for generations
              to come.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Transparency & Trust
            </h2>

            <p>
              Trust is at the center of our mission. Every partnership,
              donation, volunteer effort, and collaboration matters. We are
              committed to integrity, accountability, and responsible service.
            </p>

            <p className="mt-4">
              Supporters deserve confidence that their contributions create real
              outcomes. Communities deserve programs delivered with respect and
              sincerity. We uphold these principles in all we do.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Improving Health & Wellbeing
            </h2>

            <p>
              Supporting access to essential healthcare services for vulnerable
              communities remains one of our key priorities. We are committed to
              improving health and wellbeing through medical outreach programs,
              preventive care awareness, maternal and child support, wellness
              education, and partnerships that help families live healthier,
              safer, and more productive lives.
            </p>

            <p className="mt-4">
              By strengthening access to healthcare and promoting healthy
              living, we help communities build resilience, reduce preventable
              illness, and create a stronger future for generations to come.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Looking Ahead
            </h2>

            <p>
              Our vision extends beyond today. We see stronger schools,
              healthier families, safer communities, successful young people,
              empowered women, thriving businesses, and hopeful futures.
            </p>

            <p className="mt-4">
              We continue to grow through partnerships, innovation, volunteer
              support, and people who believe change is possible.
            </p>

            <p className="mt-4">
              Looking ahead, we remain committed to expanding our reach and
              increasing the impact of our programs across communities in need.
              We aim to build more opportunities for education, improve access
              to healthcare, strengthen food security, and support economic
              empowerment initiatives.
            </p>

            <p className="mt-4">
              We also seek to create stronger collaborations with local leaders,
              institutions, businesses, and global partners who share our vision
              for sustainable progress and human dignity.
            </p>

            <p className="mt-4">
              As challenges evolve, we will continue adapting with creativity,
              compassion, and determination, ensuring that our efforts remain
              relevant, effective, and community-focused.
            </p>

            <p className="mt-4">
              Every step forward brings new possibilities, and we are inspired
              by the belief that together we can shape a brighter, fairer, and
              more sustainable future for generations to come.
            </p>
          </section>

          <section className="bg-green-900 text-white p-10 rounded-xl">
            <h2 className="text-3xl font-bold">
              Together We Can Build a Better Future
            </h2>

            <p className="mt-5 leading-8 min-h-[160px]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
