import { React, useState } from "react";
import Square from "../../components/Square/Square"
import './ChessBoard.css'
const ChessBoard = ()=>{
        const  [positions, setPositions] = useState([])


   const handleClick = (i,j)=>{
       if(positions.length > 0 && positions.length<2){
            if(i !== positions[0][0] && j !==positions[0][1] && (Math.abs(i-positions[0][0]) !== Math.abs(j-positions[0][1]))){
                let a = [...positions]
                a.push([i,j],true)
                setPositions(a)
                return               
            } 
            else{
                if(i === positions[0][0] && j===positions[0][1]) return
                    let a = [...positions]
                    a.push([i,j],false)
                    setPositions(a)
                    setTimeout(()=>{
                    let arr = [...positions]
                        arr.splice(1,2)
                        setPositions(arr)
                    },3000)
                    return  
            }
       }
       else if (positions.length ===0 || positions.length ===3 && positions[2]!==false){
        setPositions([[i,j]])
        return
       }
   }
   const handleQueen = (positions,i,j)=>{
    if(positions.length>0 && positions[0][0]===i && positions[0][1]===j ){
        return true
    }
    else if(positions.length>1 && positions[1][0]===i && positions[1][1]===j){
        return true
    }
    return false
   }
   
     let grid = ['1','2','3','4','5','6','7','8']
    return <div className="chessboard">
        {grid.map((data,i)=>{
                return <div className="row">
                {grid.map((data,j)=>{
                    return <div onClick = {()=>handleClick(i,j)}><Square background = {i%2===0 ? j%2 === 0 ? '#fff' : '#000' : j%2 === 0 ? '#000' : '#fff' } isQueen ={handleQueen(positions,i,j)} wrong = {(positions.length> 2 && positions[2]===false && (positions[1][0]==i && positions[1][1]==j)) ? true : false}/></div>
                })}
                </div>
            })}
    </div>
    


    
    

}


export default ChessBoard;