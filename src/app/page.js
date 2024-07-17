import React from 'react'
import Image from 'next/image'
import Globe from "@/app/assets/Globe.svg"
import Bullet from "@/app/assets/bullet.svg"
import dbBack1 from "@/app/assets/dbBack1.svg"
import dbback2 from "@/app/assets/dbback2.svg"
import qr from "@/app/assets/qr.svg"
import dbwhite from "@/app/assets/dbwhite (1).svg"
import stock from "@/app/assets/stock.svg"
import billed from "@/app/assets/billed.svg"
import prof from "@/app/assets/prof.svg"
import yeild from "@/app/assets/yeild.svg"
import ad from "@/app/assets/ad.svg"
import Data from "@/app/assets/Data.svg"
import Audience from "@/app/assets/Audience.svg"


export default function page() {
  return (
    <div>
<Image src={Globe}/>
<Image src={Bullet}/>
<Image src={dbBack1}/>
<Image src={dbback2}/>
<Image src={dbwhite}/>
<Image src={stock}/>
<Image src={prof}/>
<Image src={billed}/>
<Image src={qr}/>
<Image src={yeild}/>
<Image src={ad}/>
<Image src={Data}/>
<Image src={Audience}/>



    </div>
  )
}
