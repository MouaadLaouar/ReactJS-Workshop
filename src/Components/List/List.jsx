import './List.css'

export default function List(props) {

  return (
    <div className="Lists">
        {
            props.data.map((res) => {
                return (
                    <div className="List">
                        <img src={ res.img } alt="#" />

                        <div>
                            <h1>0{ res.id }</h1>
                            <h2>{ res.title }</h2>
                            <p>{ res.content }</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
