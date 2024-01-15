function Card(props){
  let buttonText;
  let target;
  if(props.item.link && props.item.status === 'completed'){
    buttonText = 'View';
    target = '_blank';
  } else{
    buttonText = 'In Progress';
    props.item.link = '#'
    target = ''
  }

    return(
        <div className="col">
                <div className="card bg-dark shadow-sm">
                  <img
                    className="card-img-top mx-auto mt-2"
                    src={`../assets/images/${props.item.image}`}
                    alt="thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {props.item.description}
                    </p>
                    <div className="text-end">
                      <a
                        href={props.item.link}
                        target={target}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        {buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Card;
