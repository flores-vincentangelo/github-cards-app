import Card from './Card.js';

const CardList = (props) => {

    return (
        <>
            {props.profiles.map((profile, index) => <Card {...profile} key={index} index={index}/>)}
        </>
    );
}

export default CardList;