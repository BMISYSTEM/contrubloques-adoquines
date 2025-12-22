import React, { ReactNode } from 'react'
import { motion } from "motion/react"
type Props = {
    children: ReactNode;
    className?:string;
    porcentajeDiv?:number,
    duracion?:number
  };
export const DivScrollLeft = ({ children, className = '', porcentajeDiv = 0.2,duracion = 0.6 }: Props) => {
  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: false, amount: porcentajeDiv }}
        transition={{ duration: duracion}}
        className={className}
      >
        {children}
      </motion.div>
  )
}
