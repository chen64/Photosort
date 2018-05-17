// import React, { Component } from "react";
// import "./Dashboard.css";

// class Dashboard extends Component {



//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div>

//                         <div class="row">
//                             <div class="col-md-8">
//                                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//                                     <div class="carousel-inner" id="imgdis">

//                                         <div class="carousel-item active">
//                                             <div class="mypics"></div>


//                                             <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
//                                                 alt="First slide" height="500px" />
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
                            /* <div class="col-sm-2">
          <div class="card">  
                 <div class="card-body">
                    <span onClick="openimage();"><a href="#top">View Photos</a> 
                   </span>
                  <div class="mytags">
                  </div>
               </div>
           </div>
      </div> */
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <nav className="navbar navbar-expand-lg">

//                     </nav>
//                 </div>
//                 <div className="tags">
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345122892/small/1479703382/enhance"
//                             alt="Second slide" height="500px" />
//                     </div>

//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345122892/small/1479703382/enhance"
//                             alt="Second slide" height="500px" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345066845/small/1479701615/enhance"
//                             alt="Third slide" height="500px" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672541144/small/1515994494/enhance"
//                             alt="Fourth slide" height="500px" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345061306/small/1479701464/enhance"
//                             alt="Fifth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345013653/medium/1479700260/enhance"
//                             alt="Sixth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22344707199/medium/1479693858/enhance"
//                             alt="Seventh slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852568299/medium/1525739354/enhance"
//                             alt="Eighth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22344705890/medium/1479693833/enhance"
//                             alt="Ninth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22344649619/small/1479692704/enhance"
//                             alt="Tenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22344509502/medium/1479689849/enhance"
//                             alt="Eleventh slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345104999/small/1479702745/enhance"
//                             alt="Twelvth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345014153/small/1479700272/enhance"
//                             alt="Thirteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345084287/small/1479702117/enhance"
//                             alt="Fourteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22344710359/small/1479693927/enhance"
//                             alt="Fifteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852565836/small/1525739255/enhance"
//                             alt="Sixteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852566234/small/1525739262/enhance"
//                             alt="Seventeenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852566830/medium/1525739289/enhance"
//                             alt="Eightteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852568008/medium/1525739343/enhance"
//                             alt="Nineteenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852566942/medium/1525739295/enhance"
//                             alt="Twentyenth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852567065/medium/1525739301/enhance"
//                             alt="Twentyfirst slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852567920/medium/1525739339/enhance"
//                             alt="Twentysecond slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852567685/medium/1525739330/enhance"
//                             alt="Twentythird slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852567535/medium/1525739324/enhance"
//                             alt="Twentyfourth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852566234/medium/1525739262/enhance"
//                             alt="Twentyfifth slide" height="500" />
//                     </div>
//                     <div class="carousel-item">
//                         <img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23852567264/medium/1525739311/enhance"
//                             alt="Twentysixth slide" height="500" />

                            
//                     </div>

//                 </div>
//             </div>









//         )
//     }
// };

// export default Dashboard;

import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
        <div className="Dashboard">         
            <div className="col-sm-2">
            <div className="card">  
                   <div className="card-body">
                      <span onClick="openimage();"><a href="#top">View Photos</a> 
                     </span>
                  
                    </div>
                 </div>
             </div>
       
       
  
  
        
   <div className="row">


      <div className="col-sm-12">
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
  
        <div className="carousel-item active">         
       <img className="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
            alt="First slide"height="500px"/>
        </div>

        <div className="carousel-item active">         
       <img className="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
            alt="First slide"height="500px"/>
        </div>
  


  
      <div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="false"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="false"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
  
  
  
  <div className="live__scroll">
    <div className="row text-center">
  
      <li className="col-1 live__scroll--box"data-target="#carouselExampleIndicators" data-slide-to="0" class="active"><img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
       alt="First slide"width="100px"/>
      </li>

      </div>
  
  
  </div>
  
  
  </div>
  </div>
</div>
</div> 
</div>     
      
       
        );
    }
}
export default Dashboard;