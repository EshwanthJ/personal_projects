import PortfolioData from './PortfolioData';
import Card from './Card.js';

function CardSection(){
  let cards = PortfolioData.map(item => {
    return(
      <Card 
      key={item.id}
      item={item}
      />
    )
  })
    return(
        <section className="bg-black">  
        <div className="album pb-5 bg-black">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cards}
            </div>
          </div>
        </div>
      </section>  
    )
}

export default CardSection;