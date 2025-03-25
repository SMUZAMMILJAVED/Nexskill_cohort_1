import Item from "./Item";

export default function List({arr}){
    
    let item=arr.map((v,index)=>{
         return <Item key={index} title={v}/>
    })

    return (
        <>
       {item}
       </>
    )

}