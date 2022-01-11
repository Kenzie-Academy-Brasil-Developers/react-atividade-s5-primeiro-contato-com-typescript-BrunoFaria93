
interface CardProps {
    name: string;
    hobby: string;
    age: number;
}

interface User {
    name: string,
    hobby: string,
    age: number
  }

const Card = ({name, age, hobby}: CardProps) => {
    return(
        <div>
            Nome: {name} - Idade: {age} - Hobby: {hobby}
        </div>
    )
}

export default Card