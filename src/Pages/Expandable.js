import React, {useState} from 'react'

export default function Expandable({children, maxChars=15}) {
    const [expanded, setExpanded] = useState(true)

    if(children.length <= maxChars)return <p>{children}</p>
    let text =expanded ? children.substring(0, maxChars) : children

  
    return (
    <div>
    <p>{text}...</p>
    <button onClick={()=>setExpanded(!expanded)}>{expanded? "Read more" : "Read less"}</button>

    </div>
  )
}
