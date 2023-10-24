import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './Sdata';
import Youtube from './Youtube';
import Netflix from './Netflix';
import Hotstar from './Hotstar';

ReactDOM.render(
  <>
  <div className='allbox'>
    <h1><center>MOVIE POINT</center></h1>
    <hr/>
    
    <center><h1>Youtube</h1>
            <p>Different youtube movies</p></center>
    <div className='youtubebox'>
     
    <Youtube
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      link={Sdata[0].link}
    />
    <Youtube
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      link={Sdata[1].link}
    />
    <Youtube
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      link={Sdata[2].link}
    />
    </div>
    <hr/>
    
    <center><h1>HOTSTAR</h1>
            <p>Different Hotstar movies</p></center>
    <div className='hotstarbox'>
     
    <Hotstar
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      link={Sdata[3].link}
    />
    <Hotstar
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      link={Sdata[4].link}
    />
    <Hotstar
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      link={Sdata[5].link}
    />
    <Hotstar
      imgsrc={Sdata[6].imgsrc}
      title={Sdata[6].title}
      link={Sdata[6].link}
    />
    

    </div>
    <Netflix/>
      
    </div>
    
  </>
  , document.getElementById('root')
);