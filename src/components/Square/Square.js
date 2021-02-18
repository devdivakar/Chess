import { React } from "react";
import './Square.css'
import cross from '../../assets/close.svg'



const handleWrong = (isQueen,wrong)=>{
    if(wrong===true){
         return<img className="red-circle" src={cross}/>
    }
    else if(isQueen===true) {
        return <span className="circle"></span>
    }

}



const Square = (props)=>{
    return <div className="sqr" style = {{background : props.background}}>{handleWrong(props.isQueen, props.wrong)}</div>
}


export default Square;