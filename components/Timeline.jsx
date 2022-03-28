import React from 'react';

const DynamicTimeline = () => {
    let items = document.querySelectorAll(".timeline li");

    //check if an element is in view port
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i=0; i < items.length; i++) {
            if(isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    //listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    
    retrun (
        <section className="timeline">
    <ul>
        <li>
            <div  className="iframe-container">
                <time>Week 1</time>
                San Jose -> San Diego
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1KQDSlGeT70" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </li> 
        <li>
            <div className="iframe-container">
                <time>Week 2</time>
                San Diego -> Arizona
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ijn_fgWtcqU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </li>
    </ul>
</section>
    );
};

export default DynamicTimeline;