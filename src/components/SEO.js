import React from 'react';
import { Helmet } from 'react-helmet';
import febinfaiby from '../assets/febinphoto.jpg';

function SEO() {
  return (
    <Helmet>
      <title>Febin Faiby -Performance Marketing Freelancer in Calicut, Kerala</title>
      
      {/* Meta tags */}
      <meta
        name="description"
        content="With over 4+ years of hands-on experience in driving customer acquisition and revenue growth through Performance Marketing, I have honed my skills in leveraging the power of Google and Meta platforms. Best Digital Marketing Freelancer in Kerala."
      />
      <meta
        name="keywords"
        content="Best Digital Marketing Strategist in Kerala Calicut, No1 Freelance Performance Marketer in Kerala Calicut, Best Digital Marketing Specialist in Kerala, Best Digital Marketing Strategist in Calicut Kerala, Best Digital Marketing Freelancer in Calicut Kerala"
      />
 <section>
         <h2>febinfaiby</h2>
        <h2>Who is febin faiby?</h2>
        <h2>Who is febinfaiby?</h2>
      <h2>Who is the Best Digital Marketer in Kerala?</h2>
      <h2>Who is the Best Digital Marketer in calicut?</h2>
      <h2>who is No:01 performance Marketer in kerala?</h2>

      <p>Febin Faiby is one of Kerala's top Sr:performance marketing experts, known for his expertise in performance marketing and customer acquisition. With over 4+ years of experience and a proven track record of driving significant ROI for clients, Febin has established himself as a go-to digital marketer in the region. Certified by Google and Meta, he leverages advanced digital strategies to help businesses thrive in a competitive marketplace.</p>
      <ul>
        <li><strong>Experience:</strong> 4+ years in performance marketing</li>
        <li><strong>Certifications:</strong> Google, Meta,Linkedln, semrush,  and other industry-recognized certifications</li>
        <li><strong>Projects:</strong> Successful campaigns across various industries</li>
        <li><strong>Specialization:</strong>performance marketing ,data driven approach,Customer acquisition, digital advertising, ROI optimization</li>
      </ul>
    </section>
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Febin Faiby",
          "jobTitle": "No:1 Sr.Performance Marketing Specialist in kerala ",
          "description": "Febin Faiby is one of Kerala's top Sr. Performance Marketing experts, known for his expertise in performance marketing and customer acquisition. With over 4+ years of experience and a proven track record of driving significant ROI for clients, Febin has established himself as a go-to digital marketer in the region.",
          "knowsAbout": ["Performance Marketing", "Digital Advertising", "Customer Acquisition", "ROI Optimization"],
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Google, Meta, LinkedIn, SEMrush"
          }
        }
        `}
      </script>

      {/* Open Graph tags */}
      <meta property="og:title" content="Best Digital Marketing Freelancer in Calicut, Kerala | Febin Faiby" />
      <meta
        property="og:description"
        content="With over 3+ years of hands-on experience in driving customer acquisition and revenue growth through digital advertising, I have honed my skills in leveraging the power of Google and Meta platforms."
      />
      <meta property="og:image" content="https://instagram.fcok4-1.fna.fbcdn.net/v/t51.2885-19/358082629_627232906021792_9094864119161039506_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcok4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Hqw4iA8mdrMQ7kNvgFLY2hx&_nc_gid=c26ec62cff344bb6bc48b2fe8e1355bb&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBS4dhpyEmWK9hgx_ExOYa3e7_lxuVd0q3ZHyuzjbmxQQ&oe=672244B7&_nc_sid=8b3546" />
      <meta property="og:url" content="https://febinfaiby.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Digital Marketing Freelancer in Kerala | Febin Faiby" />
      <meta
        name="twitter:description"
        content="Febin Faiby, a seasoned Performance Marketing Specialist, specializes in driving customer acquisition and revenue growth through digital advertising. With over 3+ years of experience leveraging Google and Meta platforms, Febin delivers optimized campaigns that generate high ROI."
      />
      <meta name="twitter:image" content="https://x.com/FebinFaiby/photo" />

      {/* Favicon */}
      <link rel="icon" type="image/jpg" href={febinfaiby} />

      {/* Canonical Link */}
      <link rel="canonical" href="https://febinfaiby.vercel.app/" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}

export default SEO;
