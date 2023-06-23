import GameItem from '../GameItem/index'

export const Gamelist = ({data}) => (

  {Object.values(data).map(
    (data, index) => {
      return (
        <GameItem data={data} key={index}/>
      )
    }
  }
)