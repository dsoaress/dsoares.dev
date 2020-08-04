import React from 'react'

import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Whatsapp as WhatsappIcon } from '@styled-icons/boxicons-logos/Whatsapp'
import { Academia as AcademiaIcon } from '@styled-icons/simple-icons/Academia'
import LattesIcon from './LattesIcon'
import { AlternateEmail as Email } from '@styled-icons/material-rounded/AlternateEmail'

const Instagram = () => <InstagramIcon className="instagram" />
const Academia = () => <AcademiaIcon className="academia" />
const Lattes = () => <LattesIcon className="lattes" />
const Whatsapp = () => <WhatsappIcon className="whatsapp" />

const Icons = {
  Instagram,
  Github,
  Lattes,
  Academia,
  Whatsapp,
  Email
}

export default Icons
