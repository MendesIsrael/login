import Link from 'next/link'
import styles from '../styles/Login.module.css'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/button/button'

export default function CadastroPage() {
  return(
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button>
          <Link href="/login">Já possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  )
}