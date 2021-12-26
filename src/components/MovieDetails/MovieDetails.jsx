import React , {useState, useEffect} from "react";
import './MoviDetails.css';
import Data from '../Data/Data';
import { useParams, useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap'

const MovieDetails = ({match}) => {
  console.log(match)
  const [movie, setMovie] = useState({})
  // let {id} = useParams()
  useEffect(() => {
    setMovie(Data.find(movie=>movie.id === match.params.id))
  }, [match.params.id])
  let history = useHistory()
  return (
    <div className='trailers'>

      <h1>{movie.title}</h1>
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
      <h4>{movie.description}</h4>
      <Button style={{position: "absolute", bottom: "110px" , fontStyle: "oblique", fontWeight: 'bold'}} variant="info" onClick={()=>history.push("/")}>Home Page</Button>
      
    </div>
  );
}
export default MovieDetails;
