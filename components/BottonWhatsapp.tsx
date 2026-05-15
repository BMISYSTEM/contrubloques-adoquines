'use client'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const BottonWhatsapp = () => {
  return (
    <FloatingWhatsApp phoneNumber="573106479481" placeholder="" accountName="Contrubloques" 
      avatar='/logo.png'
      statusMessage="Hace 1 minuto."
      chatMessage={"Mucho gusto, cómo te puedo ayudar el día de hoy ? "}
      />
  )
}
