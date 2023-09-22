import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'


export default function Media(){
    return <div  className='flex justify-self-center gap-6 flex-row lg:mr-80 absolute lg:bottom-20' >
          <BsGithub fontSize={'50'}/>
          <BsTwitter fontSize={'50'}/>
          <AiFillLinkedin fontSize={'50'}/>
          <BsDiscord fontSize={'50'}/>
    </div>
}