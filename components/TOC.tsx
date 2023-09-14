"use client"; 

/**
 * I think that History of biology, Drug development/Pharma-y stuff, Longevity 
 * What about longevity is the real killer parts that need the interactive stuff? 
 * Frankly I think that the cell/gene therapies are the real stuff, along with the model organism approaches and other things. 
 * Like where is the value here? 
 * History of biology could be a fun interactive thing. 
 */ 



const TableOfContents = () => {
    const plaintextClass = "text-1.5x1 font-bold mb-8";
    const subCategoryClass = "text-1x1 font-bold mb-8 ml-4 list-disc"; // ml-4 for left margin, list-disc for bullet point

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="table-of-contents" className="flex flex-col">  
            <button className={plaintextClass} onClick={() => handleScroll("pea-plants-section")}>Pea Plants</button>
            <button className={plaintextClass} onClick={() => handleScroll("current-research-areas-section")}>Current Research Areas</button>
            <button className={plaintextClass} onClick={() => handleScroll("healthcare-economics-section")}>Healthcare Economics</button>
            <button className={plaintextClass} onClick={() => handleScroll("startups-section")}>Startups</button>
            <button className={plaintextClass} onClick={() => handleScroll("fellowships-+-communities-section")}>Fellowships and Communities</button>
        </div>
    );
};

export default TableOfContents;
