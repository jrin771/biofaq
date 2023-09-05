"use client";

import Image from 'next/image'; //I don't really use this component  
import { Analytics } from '@vercel/analytics/react';

import { 
  Lawofsegregation, 
  Lawofindependentassortment, 
  Lawofdominance, 
  Lawofunitcharacters, 
  Transcription, 
  Translation, 
  TableOfContents, 
  KaplanMeierPlot, 
  AnimatedLinkedList, 
  HealthCareExpenditureLine,  
} from '@/components';
import { useState, useEffect } from 'react';

export default function Home() {
  const divClass = "flex flex-col items-center justify-center min-h-screen"; 
  const h1NormieClass = "text-4x1 font-bold mb-8";
  const h1Class = "text-4x1 font-bold forest-gradient-text mb-8"; 
  const h1MegaClass = "text-8x1 font-bold forest-gradient-text mb-8"; 
  const plaintextClass = "text-1.5x1 font-bold mb-8";
  const italicizedtextClass = "text-1.5x1 font-bold mb-8 italic"; //I'll use you someday bae
  const headerClass = "text-2x1 font-bold mb-8";
  const captionClass = "text-1x1 font-bold mb-8";

  const pngStyle = {
    width: "500px",
    height: "auto"
  };

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();  // Initialize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const textClass = isMobile ? 'text-4x1-mobile' : 'text-4x1-desktop';

  return(
    <main className="overflow-hidden">  
      <div className={divClass}>
        <h1 className={h1Class}>Welcome.</h1> 
        <Analytics /> 
        <p className={plaintextClass}> I stand on the shoulders of giants. </p>
        <p className={plaintextClass}> <a href="https://twitter.com/LauraDeming?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">Laura Deming</a> and <a href="https://twitter.com/ArtirKel" target="_blank" rel="noopener noreferrer">Jose Luis Ricon Fernandez de la Puente</a> </p> 
        <p className={plaintextClass}> Wrote the <a href="https://www.ldeming.com/longevityfaq" target="_blank" rel="noopener noreferrer">first</a> and <a href="https://nintil.com/longevity/" target="_blank" rel="noopener noreferrer">second</a> Longevity FAQs, respectively. </p> 
        <p className={plaintextClass}> Both are worth your time to deeply read and re-read again. </p>
        <p className={plaintextClass}> However, there's always more to learn, new perspectives to have, and something exciting to discover.</p> 
        <p className={plaintextClass}> I hope you'll enjoy </p> 
        <h1 className={h1MegaClass}>Longevity FAQ 3</h1>
      </div> 
      <div className={divClass}>
        <h1 className={h1Class}>Table of Contents</h1> 
        < TableOfContents />
      </div> 
      <div className={divClass}>
        <h1 id="curiosity-section" className={h1Class}>Curiosity <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1> 
        <p className={plaintextClass}> Why do we age? </p>  
        <p className={plaintextClass}> What exactly IS aging? </p>
        <p className={plaintextClass}> Why do some animals age faster or slower than others? </p>
        <p className={plaintextClass}> Why is it that one of your arms isn't older than the other? </p> 
        <p className={plaintextClass}> Can we control the rate of aging? </p> 
        <p className={plaintextClass}> How could we measure biological? </p>
        <p className={plaintextClass}> How would you even test theories of aging? </p>
        <p className={plaintextClass}> What would clinical trials in people (or pets) look like? </p>
      </div> 

      <div className={divClass}>
        <p className={h1NormieClass}> It all starts with pea plants. </p>
      </div> 

      <div className={divClass}>
        <h1 id="molecular-biology-foundations-section" className={h1Class}>Molecular Biology Foundations <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1>
        <p className={plaintextClass}> For a long time biology consisted of looking at things, naming things and cutting things open. </p> 
        <p className={plaintextClass}> Progress was made but biology didn't become an exact science until 1865. </p>  
        <p className={plaintextClass}> That was the year that Gregor Mendel, a friar and biologist, discovered his genetic laws of heritability. </p> 
        <p className={plaintextClass}> Let's try each of them out to get a better intuition about Mendelian genetics. </p>  
        < Lawofsegregation />  
        <p className={plaintextClass}>  </p> 
        < Lawofindependentassortment />  
        <p className={plaintextClass}>  </p> 
        < Lawofdominance />  
        <p className={plaintextClass}>  </p> 
        < Lawofunitcharacters />
        <p className={plaintextClass}>  </p> 
        <p className={plaintextClass}> When Mendelian Genetics was rediscovered in the early 20th century, it drew comparisons to the laws of thermodynamics.  </p> 
        <p className={plaintextClass}> Biologists could now test cause-effect relationships, which attracted the attention of many physicists. </p>
        <p className={plaintextClass}> Many of them studied inheritance in bacteriophages, which were then the simplest organisms available to scientists. </p>
        <p className={plaintextClass}> Many of their experiments followed the below logic: Step 1 causes Step 2 causes Step 3 causes Step 4 and so on. </p>
        < AnimatedLinkedList />  
        <p className={plaintextClass}> This was done not because the scientists were naive about how complex living biological systems are. </p>
        <p className={plaintextClass}> Rather, they didn't have the tools to understand systems of biology just yet. </p>
        <p className={plaintextClass}> A lot of progress was made during the early 20th century, but there was still a big open question: </p>  
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> How is heritable information stored in cells? </p>  
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> </p> 
        <p className={plaintextClass}> Mendelian Genetics doesn't give an answer to this, just cause and effect relationships. </p>
        <p className={plaintextClass}> Interestingly, scientist hypothesized that amino acids stored this information. </p>  
        <p className={plaintextClass}> There are 20 types of amino acids and they are quite long compared to other biomolecules, such as DNA. </p> 
        <p className={plaintextClass}> "You're telling me DNA is all you need? Just four base pairs? That's it?" </p>
        <p className={plaintextClass}> It's more complicated, but, yes, life can arise from very simple origins. (or perhaps algorithms one day...) </p>
        <p className={plaintextClass}> Once the structure of DNA was elucidated, the Central Dogma of Molecular Biology was borne: </p>
        <p className={plaintextClass}> DNA is transcribed into RNA via RNA Polymerase (RNAP here) </p> 
        < Transcription />  
        <p className={plaintextClass}></p>
        <p className={plaintextClass}> Then that RNA is translated into proteins. </p> 
        < Translation /> 
        <p className={plaintextClass}></p>
        <p className={plaintextClass}> (The actual steps are much more complicated, but I am still working on increasing the complexity of my simulations.) </p> 
        <p className={plaintextClass}> More detail will be added later but here's where the story went. </p>
        <p className={plaintextClass}> We went from reading just a handful of genes to an entire (not exactly, but mostly) human genome.  </p> 
        <p className={plaintextClass}> The cost of reading genomes decreased super-exponentially, to where they are now closing in on 100 USD per genome. </p>
        <p className={plaintextClass}> As sequencing genomes became easier, sequencing other modalities (such as proteomes) became easier as well. </p>
        <p className={plaintextClass}> Now we're sequencing single cell RNA (scRNA-seq) frequently to better understand the heterogeneity of biology. </p>
        <p className={plaintextClass}> There's so much data available now...I wonder what we should do with that data? </p>
        <p className={plaintextClass}> (On an unrelated note, have any of you noticed how good those "neural networks" have been getting?) </p>
      </div> 
      <div className={divClass}>
        <h1 id="current-research-areas-section" className={h1Class}>Current Research Areas <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1>
        <p className={plaintextClass}> First things first: Everyone (researcheres especially) should check out <a href="https://impetusgrants.org/" target="_blank" rel="noopener noreferrer">Impetus Grants </a> </p> 
        <p className={plaintextClass}> They were started by <a href="https://twitter.com/LNuzhna?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">Lada Nuzhna</a>  as a way to rapidly fund basic aging biology research and clinical trials </p> 
        <p className={plaintextClass}> They've distributed (as of September 4th, 2023) <a href="https://www.businesswire.com/news/home/20230725237245/en/Impetus-Grants-Secures-10-million-Commitment-from-Hevolution-Foundation-and-Rosenkranz-Foundation-to-Fund-Aging-Science" target="_blank" rel="noopener noreferrer">24 million dollars in grants </a>  </p>
        <p className={plaintextClass}> They have minimal bureacracy and do incredible work </p> 
        <p className={plaintextClass}> Onwards </p>  

        <p className={headerClass}> AI </p>   
        <p className={plaintextClass}> What is it?  </p>
        <p className={plaintextClass}> The study, creation, and application of algorithms that can "learn" from datasets fed to them to perform exceptionally well on a given task(s).</p>
        <p className={plaintextClass}> Why is it important? </p>
        <p className={plaintextClass}> AI is a new paradigm for writing software (software 2.0) and is changing how we do research. </p>
        <p className={plaintextClass}> How exactly does it work? </p>
        <p className={plaintextClass}> That's a bit of a long story. Here are some great videos from <a href="https://www.youtube.com/@AndrejKarpathy" target="_blank" rel="noopener noreferrer">Andrej Karpathy's Youtube Channel. </a> </p>
        <p className={plaintextClass}> What are current research directions/open questions? </p> 
        <p className={plaintextClass}> Can we get an <a href="https://www.nature.com/articles/s41592-021-01380-4" target="_blank" rel="noopener noreferrer">AlphaFold moment </a> for other areas of biology? (lack of data is a big problem) </p>

        <p className={headerClass}> Aging Clocks </p>  
        <p className={plaintextClass}> What is it? </p>
        <p className={plaintextClass}> A variety of methods to tell how (biologically) old you are. </p>
        <p className={plaintextClass}> Why is it important? </p>
        <p className={plaintextClass}> If we can't measure your biological age, how do we know our therapies have worked? </p>
        <p className={plaintextClass}> (Note: Dramatic Age Reversal could be more visible, but more subtle therapies and basic research are heavily dependent on accurate clocks) </p>
        <p className={plaintextClass}> How exactly does it work? </p> 
        <p className={plaintextClass}> Ex. Horvath Clocks: DNA Methylation sites at CpGs are fed into regression models (or other statistical models) and output biological age.  </p> 
        <p className={plaintextClass}> What are current research directions/open questions? </p>
        <p className={plaintextClass}> How can we reduce the error between clock predictions and true biological age? </p> 


        <p className={headerClass}> New Model Organisms </p> 
        <p className={plaintextClass}> What is it? </p> 
        <p className={plaintextClass}> You've probably heard of lab mice, C. Elegans worms, Bakers Yeast, or the Drosophila fruit fly. </p> 
        <p className={plaintextClass}> Dogs and Killifish (An African Invertebrate fish) are very promising new "model organisms". </p> 
        <p className={plaintextClass}> Why is it important? </p> 
        <p className={plaintextClass}> While humans are the best model of human biology, testing in humans is hard because 1. It's unethical and 2. We live (relatively) long </p> 
        <p className={plaintextClass}> The ideal longevity model organism would be nearly identical to a human but live a very short amount. </p> 
        <p className={plaintextClass}> C.Elegans hits the second part but not the first. Lab mice somewhat hit the first part and somewhat hit the second part. </p> 
        <p className={plaintextClass}> Dogs are much closer to humans than mice, which is why many startups are working on drugs for dogs. (Big market) </p> 
        <p className={plaintextClass}> Killifish have a 6 month lifespan (very short! good!) but are also invertebrates (closer to human physiology). </p> 
        <p className={plaintextClass}> How exactly does it work?</p>
        <p className={plaintextClass}> Same as other model organisms. </p> 
        <p className={plaintextClass}> Dogs you have to go through vet clinical trials and approvals (which are generally shorter and less complex than humans but are non-trivial).</p> 
        <p className={plaintextClass}> and killifish are more of an academic exercise since there isn't really a market for killifish pets. (Yet! Who knows?) </p>
        <p className={plaintextClass}> What are current research directions/open questions? </p>
        <p className={plaintextClass}> Mice, Flies, Yeastand worms have been well studied. Dogs and Killifish are promising, but there needs to be more papers done using them.  </p>


        <p className={headerClass}> Reprogramming </p>  
        <p className={plaintextClass}> What is it? </p>
        <p className={plaintextClass}> Four transcription factors (O,S,K,M) that turn old cells into young cells. </p>
        <p className={plaintextClass}> Why is it important? </p>
        <p className={plaintextClass}> It is perhaps the most powerful (and most VC-funded) tool against aging we have. </p>
        <p className={plaintextClass}> How exactly does it work? </p> 
        <p className={plaintextClass}> O,S,K, and M are transcription factors. They can modulate how DNA gets transcribed into RNA, which then creates proteins. </p> 
        <p className={plaintextClass}> These four factors (or just three, as David Sinclair's group has shown) can create iPSCs (induced pluripotent stem cells). </p> 
        <p className={plaintextClass}> However, most research is focused on "partial" epigenetic reprogramming. </p> 
        <p className={plaintextClass}> If used at full force, these factors can get rid of cells identities and can cause nasty cancers. (Very, Very simplified version) </p> 
        <p className={plaintextClass}> What are current research directions/open questions? </p>
        <p className={plaintextClass}> How can we safely control these factors? </p>
      
      </div> 
      <div className={divClass}>
        <h1 id="healthcare-economics-section" className={h1Class}>Healthcare Economics <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1>
        <p className={plaintextClass}> </p>
        <p className={headerClass}> "In this world nothing can be said to be certain, except death and taxes." </p>
        <p className={headerClass}> — Benjamin Franklin </p>
        <p className={plaintextClass}> </p>
        <p className={plaintextClass}>Why does healthcare take up such a <a href="https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/NationalHealthExpendData/nationalHealthAccountsHistorical" target="_blank" rel="noopener noreferrer"> large percentage of the United States GDP?</a></p>
        <p className={plaintextClass}>Chronic conditions, which are exacerbated by age. </p>
        <p className={plaintextClass}>Think of how many 20 year olds you know who have heart disease? </p> 
        <p className={plaintextClass}>Not many (although some do exist). </p> 
        <p className={plaintextClass}>What about alzheimers?</p> 
        <p className={plaintextClass}>A broken hip (from a small fall, not from a serious accident)?</p> 
        <p className={plaintextClass}>And so on.</p> 
        <p className={plaintextClass}>The aging process plays a large role in increasing the fraility of human patients, which can be expressed with the following graph. </p> 
        < KaplanMeierPlot />  
        <p className={plaintextClass}>The units don't correspond 1 to 1 with human age, but you can think of the "Event Rate" as the probability that you die every time unit. </p>
        <p className={plaintextClass}>If you lower the event rate, this simulates being younger, but if you increase the event rate, this simulates being older. </p>
        <p className={plaintextClass}>A very powerful conclusion to take from this is that if you could invent drugs that target aging mechanisms, </p> 
        <p className={plaintextClass}>you could have a very powerful preventative medicine that could make (and more importantly, SAVE) a lot of money. </p>
        <p className={plaintextClass}>Let's take a look at some of those startups.</p>
      </div> 

      <div className={divClass}>
        <h1 id="startups-section" className={h1Class}>Startups <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1>   
        
        <p className={plaintextClass}><a href="https://retro.bio/" target="_blank" rel="noopener noreferrer"><img src="/images/Retro_logo.png" alt="Retro Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Retro Biosciences was founded in 2021 by Joe Betts-LaCroix, Sheng Ding, and Matt Buckley </p> 
        <p className={plaintextClass}> Their mission is to add 10 years to healthy human lifespan </p> 
        <p className={plaintextClass}> Their approach is to do this through Autophagy, Parabiosis, and Cellular Reprogramming Therapies </p> 
        <p className={plaintextClass}> They're hiring <a href="https://retro.bio/careers/" target="_blank" rel="noopener noreferrer">here</a> </p> 
        
        

        <p className={plaintextClass}> <a href="https://www.newlimit.com/" target="_blank" rel="noopener noreferrer"><img src="/images/newlimit_logo_clip.png" alt="NewLimit Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> NewLimit was founded in 2021 by Brian Armstrong, Blake Byers, Jacob Kimmel, and Greg Johnson </p> 
        <p className={plaintextClass}> Their mission is to significantly extend human healthspan and develop intermediate therapies along the way </p> 
        <p className={plaintextClass}> Their approach is to do this through ML Screening + High-Throughput + Epigenetic Reprogramming </p> 
        <p className={plaintextClass}> They're hiring <a href="https://www.newlimit.com/careers" target="_blank" rel="noopener noreferrer">here</a>  </p> 
        

        
        <p className={plaintextClass}> <a href="https://rejuvenatebio.com/" target="_blank" rel="noopener noreferrer"><img src="/images/Rejuvenate_Logo_PNG_Blue.png" alt="Rejuvenate Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Rejuvenate Bio was founded in 2017 by George Church, Noah Davidsohn, and Daniel Oliver </p> 
        <p className={plaintextClass}> Their mission is to target the core drivers of chronic age-related diseases </p> 
        <p className={plaintextClass}> Their approach is to do this through gene therapies and epigenetic reprogramming in dogs and humans  </p> 
        <p className={plaintextClass}> They're hiring <a href="https://rejuvenatebio.com/careers" target="_blank" rel="noopener noreferrer">here</a>  </p> 
        
        
        
        <p className={plaintextClass}> <a href="https://altoslabs.com/" target="_blank" rel="noopener noreferrer"><img src="/images/altos-logo-tm.png" alt="Altos Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Altos Labs was founded in 2022 by Richard Klausner and Hans Bishop. </p> 
        <p className={plaintextClass}> Their mission is to restore cell health and resilience through cellular rejuvenation programming to </p>
        <p className={plaintextClass}> reverse disease, injury, and the disabilities that can occur throughout life. </p> 
        <p className={plaintextClass}> Their approach to do so is through basic research on cellular reprogramming and the mechanisms of aging </p> 
        <p className={plaintextClass}> They're hiring <a href="https://www.linkedin.com/company/altoslabs/jobs/" target="_blank" rel="noopener noreferrer">here</a>  </p> 
        
        
        
        <p className={plaintextClass}> <a href="https://loyalfordogs.com/" target="_blank" rel="noopener noreferrer"><img src="/images/loyal-for-dogs-logo-vector.png" alt="Loyal Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Loyal was founded in 2019 by Celine Halioua  </p> 
        <p className={plaintextClass}> Their mission is to develop the first FDA-approved drugs intended to extend lifespan and quality of life in dogs. </p> 
        <p className={plaintextClass}> Their approach to do so is through taking existing small molecules and </p>
        <p className={plaintextClass}> run the first FDA approved trial targeting aging directly for dogs. Expand into humans later. </p> 
        <p className={plaintextClass}> They're hiring <a href="https://www.cellularlongevityinc.com/#open-roles" target="_blank" rel="noopener noreferrer">here</a>  </p> 
        
        
        
        <p className={plaintextClass}> <a href="https://www.epiterna.com/" target="_blank" rel="noopener noreferrer"><img src="/images/untitled-design-5-866.png" alt="Epiterna Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Epiterna was founded in 2022 by Alejandro Ocampo and Kevin Perez </p> 
        <p className={plaintextClass}> Their mission is to help pets and people live longer and healthier lives</p> 
        <p className={plaintextClass}> Their approach to do so is through high-throughput experimentation and </p>
        <p className={plaintextClass}> Computational biology for small molecules for dogs and humans.  </p> 
        <p className={plaintextClass}> They're hiring <a href="https://careers.epiterna.com/" target="_blank" rel="noopener noreferrer">here</a>  </p> 
        
        
        
        <p className={plaintextClass}> <a href="https://insilico.com/" target="_blank" rel="noopener noreferrer"><img src="/images/download.png" alt="Insilico Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Insilico Medicine was founded in 2014 by Alex Zhavoronkov </p> 
        <p className={plaintextClass}> Their mission is to accelerate drug discovery and development by </p>
        <p className={plaintextClass}>leveraging our rapidly evolving, proprietary platform across biology, chemistry, and clinical development. </p> 
        <p className={plaintextClass}> Their approach to do so is through an end-to-end AI Pipeline for </p>
        <p className={plaintextClass}> Dual-Use Therapeutics (Targets aging mechanisms and other diseases) </p> 
        <p className={plaintextClass}> They're hiring <a href="https://insilico.com/careers" target="_blank" rel="noopener noreferrer">here</a>  </p> 
      
      
      </div> 
      <div className={divClass}>
        <h1 id="fellowships-+-communities-section" className={h1Class}>Fellowships + Communities <button className={captionClass} onClick={() => handleScroll("table-of-contents")}><svg height="40" width="40" viewBox="0 0 40 40"><polygon points="20,5 35,35 5,35" fill="#66CC66" /></svg></button></h1>
    
        <p className={plaintextClass}> <a href="https://www.beondeck.com/longevity-startup-school" target="_blank" rel="noopener noreferrer"><img src="/images/5e9d1abf4c5ff941b4c97dc4_Logo+Text.png" alt="On Deck Fellowship" style={pngStyle} /></a></p>
        <p className={plaintextClass}> On Deck Longevity Startup School </p>
        <p className={plaintextClass}> Who's it for?  </p> 
        <p className={plaintextClass}> Founders & Explorers, Students & Researchers, Business Experts</p>
        <p className={plaintextClass}> What do you do?   </p>
        <p className={plaintextClass}> Learn as much as you can for 12 months from teachers + a community.</p>
        <p className={plaintextClass}> How much does it cost?  </p>
        <p className={plaintextClass}> Nothing. If you decide to start a company, they'll offer 125,000 USD for 7%. </p>
        <p className={plaintextClass}> Time Commitment?  </p>
        <p className={plaintextClass}> During onboarding at least 4 hours/week, after that it's flexible, but you could easily spend 20 hrs/week talking to people. </p>

        <p className={plaintextClass}> <a href="https://www.timeinitiative.org/fellowship" target="_blank" rel="noopener noreferrer"><img src="/images/TIME+LOGO.png" alt="Time Initiative Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> The Time Initiative Fellowship </p> 
        <p className={plaintextClass}> Who's it for? </p> 
        <p className={plaintextClass}> Undergrads and students not enrolled in graduate studies. </p> 
        <p className={plaintextClass}> What do you do?  </p>
        <p className={plaintextClass}> Annual paid retreat, Fellows only community, Mentorship, and receive 8,000 USD research grant. </p> 
        <p className={plaintextClass}> How much does it cost? </p>
        <p className={plaintextClass}> Nothing. </p>
        <p className={plaintextClass}> Time Commitment?  </p>
        <p className={plaintextClass}> Did not explicitly say, but likely under 5 hr/week normally but retreat is full-time in-person. </p>
        
        <p className={plaintextClass}> <a href="https://www.longbiofellowship.org/" target="_blank" rel="noopener noreferrer"><img src="/images/LBF-Logo.png" alt="Longevity Biotech Fellowship (LBF)" style={pngStyle} /></a></p>
        <p className={plaintextClass}> LBF </p> 
        <p className={plaintextClass}> Who's it for? </p> 
        <p className={plaintextClass}> Everyone! </p>
        <p className={plaintextClass}> What do you do? </p>
        <p className={plaintextClass}> Learn about Longevity Biotech from the best for 12 weeks, meet a peer group and (optional) go on an in-person 3-day retreat! </p>
        <p className={plaintextClass}> How much does it cost?  </p>
        <p className={plaintextClass}> (Note: you can get financial aid/scholarships to cover all of the costs if needed) </p>
        <p className={plaintextClass}> $899 if you go on the three day retreat $490 if you don't go on the retreat </p>
        <p className={plaintextClass}> After the program is done 99$/year to maintain access to the community </p>
        <p className={plaintextClass}> Time Commitment?  </p>
        <p className={plaintextClass}> Retreat is 3 full days, otherwise around ~2hrs/week for the online portion of LBF.</p>
        
        <p className={plaintextClass}> <a href="https://agingpharma.org/" target="_blank" rel="noopener noreferrer"><img src="/images/ARDD_2023_LOGO.png" alt="ARDD Logo" style={pngStyle} /></a></p>
        <p className={plaintextClass}> Aging Research and Drug Discovery (ARDD) Conference </p> 
        <p className={plaintextClass}> Who's it for?  </p> 
        <p className={plaintextClass}> Everyone! </p>
        <p className={plaintextClass}> What do you do? </p>
        <p className={plaintextClass}> It's an academic conference on aging research and drug discovery.</p>
        <p className={plaintextClass}> High School/Undergraduate Students can partake in the "Student Ambassador Program"</p>
        <p className={plaintextClass}> How much does it cost? </p>
        <p className={plaintextClass}> In-Person Ticket (400-700 USD, depending on how early + academic status), Virtual Ticket (50 USD) </p>
        <p className={plaintextClass}> Student Ambassador Program - Free registration for main meeting/workshops</p>
        <p className={plaintextClass}> Time Commitment? </p>
        <p className={plaintextClass}> For the conference - full-time for x days, for the Student Ambassador Program - 5-10 hrs during the week (?) </p>
      
      
      </div>  

      <div className={divClass}> </div>

      <div className={divClass}> 
      <blockquote>
      <p className={plaintextClass}>"I have a friend who's an artist and has sometimes taken a view which I don't agree with very well.</p>
      <p className={plaintextClass}>He'll hold up a flower and say 'look how beautiful it is,' and I'll agree.</p>
      <p className={plaintextClass}>Then he says 'I as an artist can see how beautiful this is but you as a scientist take this all apart and it becomes a dull thing,' and I think that he's kind of nutty.</p>
      <p className={plaintextClass}>First of all, the beauty that he sees is available to other people and to me too, I believe. </p>
      <p className={plaintextClass}>Although I may not be quite as refined aesthetically as he is ... I can appreciate the beauty of a flower. </p>
      <p className={plaintextClass}>At the same time, I see much more about the flower than he sees. </p>
      <p className={plaintextClass}>I could imagine the cells in there, the complicated actions inside, which also have a beauty. </p>
      <p className={plaintextClass}>I mean it's not just beauty at this dimension, at one centimeter; there's also beauty at smaller dimensions, the inner structure, also the processes. </p>
      <p className={plaintextClass}>The fact that the colors in the flower evolved in order to attract insects to pollinate it is interesting; it means that insects can see the color. </p>
      <p className={plaintextClass}>It adds a question: does this aesthetic sense also exist in the lower forms? </p>
      <p className={plaintextClass}>Why is it aesthetic? </p>
      <p className={plaintextClass}>All kinds of interesting questions which the science knowledge only adds to the excitement, the mystery and the awe of a flower. </p>
      <p className={plaintextClass}>It only adds. </p>
      <p className={plaintextClass}>I don't understand how it subtracts."</p>
      <footer>
      <p className={plaintextClass}>― <a href="https://www.goodreads.com/author/quotes/1429989.Richard_P_Feynman">Richard P. Feynman</a>, <a href="https://www.goodreads.com/book/show/5544.The_Pleasure_of_Finding_Things_Out">The Pleasure of Finding Things Out: The Best Short Works of Richard P. Feynman</a></p>
      </footer>
      </blockquote>
      <p className={plaintextClass}> <a href="https://www.youtube.com/watch?v=2gABtPqwqBQ" target="_blank" rel="noopener noreferrer"><img src="/images/botanikfoto-475164-LOptimized.jpg" alt="i miss carl" style={pngStyle} /></a></p>
      <p className={plaintextClass}> Onwards! </p>  
      </div>
    </main>
  );
}