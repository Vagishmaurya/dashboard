import React from 'react'

function OverView() {
  return (
    <div>
             <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My Blogs</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">Most Popular Blogs</div>
                    <p><ul>
                        <li>ShoutMeLoud</li>
                        <li>YourStory</li>
                        <li>CashOverFlow</li>
                        <li>Relakhs</li>
                        <li>Understanding People</li>
                        <li>TeamWork</li>
                        <li>MyFirstBlog</li>

                    </ul></p>
                     {/* <a href="#">Read more</a> */}
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>JAN</span>
                            <span>90%</span>
                        </div>
                        <div class="line jan"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>FEB</span>
                            <span>90%</span>
                        </div>
                        <div class="line feb"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MAR</span>
                            <span>80%</span>
                        </div>
                        <div class="line mar"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>APR</span>
                            <span>90%</span>
                        </div>
                        <div class="line apr"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MAY</span>
                            <span>70%</span>
                        </div>
                        <div class="line may"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
    </div>
  )
}

export default OverView
