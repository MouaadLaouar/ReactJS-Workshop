import './Home.css'
import { Listdata } from "./Home.Helper"
import HomeImg from "../../assets/images/image-web-3-desktop.jpg"
import List from '../List/List'

export default function Home() {
  return (
    <div className="Home">
        <div className="Content">
          <div className="Left">
            <img src={ HomeImg } alt="#" />

            <div className='LeftContent'>
              <h1>
                The Bright Future of Web 3.0?
              </h1>

              <div>
                <p>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <button>
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="Right">
            <h1>News</h1>

            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr />

            <h2>The Downsides of AI Artistry</h2>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <hr />

            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
        <div className="List">
          <List data={ Listdata } />
        </div>
    </div>
  )
}
