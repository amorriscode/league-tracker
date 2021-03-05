import { useState } from 'react'
import { Collapse } from "react-collapse";

export default function FAQItem(props) {
  const [open, setOpen] = useState(props.first ? true : false);

  return (
    <div>
      <div className={open?"FAQtitle bg-brand-blue rounded items-center my-2 px-4 py-1":"FAQtitle bg-white border-solid border-2 border-brand-blue rounded items-center my-2 px-4 py-1"} onClick={()=>{setOpen(!open)}}>
        <h3 className={open?"text-white font-semibold text-l my-2":"text-black font-semibold text-l my-2"}>{props.title}</h3>
      </div>
      <Collapse isOpened={open}><p className="px-4 py-2" style={{whiteSpace: 'break-spaces'}}>{props.content}</p></Collapse>
    </div>
  )
}


