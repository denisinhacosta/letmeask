import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoIgm from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();



    async function handleCreateRoom() {
        history.push('/rooms/new')
        if (!user) {
            await signInWithGoogle()
        }
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoIgm} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form action="">
                        <input
                            type="text"
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar da sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    )
}