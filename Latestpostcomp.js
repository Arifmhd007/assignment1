import React, { Component } from 'react'

export class Latestpostcomp extends Component {
    render() {
        return (
            <main>
                <h3 className="latest-post">Latest Posts</h3>
                <div id="filter">
                    <i className="fa fa-filter"></i>
                    <span style={{ marginleft: "15px" }}>Filter by Catagory</span>
                </div>
                <div id="filter-button-wrapper"></div>
                <span id="filter-all-btn">All </span>
                <span className="filter-btn">Artificial Intelligency </span>
                <span className="filter-btn">Cloud Computing </span>
                <span className="filter-btn">DevOps </span>
                <span className="filter-btn">Programming Languages </span>
                <span className="filter-btn">Mobile Application Development  </span>
                <span className="filter-btn">Tecnology and Tools </span>
                <span className="filter-btn">Get a Job in a Tech Company</span>
                <span className="filter-btn">Others </span>
                <div id="blog-card-wrapper">
                    <div className='blog-card'>
                        <img
                            src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
                            className="blog-image" />
                        <div className="blog-detail">
                            <div className="Blog-title"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis  ">Introducing you all to EdYoda - www.edyoda.com<wbr /></div></h3><p className="Blog-author">Arman Ahmed<span className="Blog-date"> | 05 Jul 2019</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img
                            src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
                            className='blog-image' />
                        <div className='blog-details'>
                            <div className="Blog-title"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis  ">Typical day of Data Scientist - An insider story!<wbr /></div></h3><p class="Blog-author">Saurav Ghosh<span class="Blog-date"> | 05 Jul 2019</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img
                            src="https://edyoda.s3.amazonaws.com/media/blog-images/MicrosoftTeams-image_1.png"
                            className='blog-image' />
                        <div className="blog-details">
                        <div className="Blog-title"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis LinesEllipsis--clamped ">All about AITEST and how to avail<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></h3><p class="Blog-author">EdYoda<span class="Blog-date"> | 01 Mar 2022</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">Ever since 2019, after a solid hit from the falling rate of economic growth, the job market seems to be<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>
                            
                             </div>
                    </div>
                    <div className='blog-card'>
                        <img
                            src='https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png'
                            className='blog-image'/>                    
                    <div classname="blog-details">
                    <div className="BlogCard__BlogDetails__3qUtj"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis LinesEllipsis--clamped ">Practical Machine Learning with<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></h3><p class="Blog-author">Daniel Pyrathon<span class="Blog-date"> | 16 Oct 2019</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>

                    </div>
                   </div>
                   <div className='blog-card'>
                       <img
                       src='https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png'
                       className='blog-image' />
                    <div className='blog-details'>
                    <div className="BlogCard__BlogDetails__3qUtj"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis LinesEllipsis--clamped ">What is Income Share<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></h3><p class="Blog-author">EdYoda<span class="Blog-date"> | 14 Oct 2019</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was fir<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>
                        </div>   
                  </div>
                  <div className='blog-card'>
                       <img
                       src='https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png'
                       className='blog-image' />
                    <div className ="blog-details">
                    <div className="BlogCard__BlogDetails__3qUtj"><h3 class="BlogCard__BlogTitle__1ASpY"><div class="LinesEllipsis  ">What is Web Scraping?<wbr /></div></h3><p class="BBlog-author">Zac Clancy<span class="Blog-date"> | 25 Sep 2019</span></p><div class="BlogCard__BlogDescription__R0JID"><div class="LinesEllipsis LinesEllipsis--clamped ">Simply put, web scraping is one of the tools developers use to gather and analyze information from the<wbr /><span class="LinesEllipsis-ellipsis">...</span></div></div></div>
                        </div>   
                  </div>
                </div>






            </main >
        )
    }
}

export default Latestpostcomp