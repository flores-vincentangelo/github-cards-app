import Card from './Card.js';

const CardList = (props) => {

    return (
        <>
            {testData.map((profile, index) => <Card {...profile} key={`card${index}`}/>)}
        </>
    );
}

export default CardList;

function generateCards() {
    testData.forEach(entry => {
        return 
    });
}


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
