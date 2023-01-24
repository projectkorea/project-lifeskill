import type { NextPage } from 'next'
import Image from 'next/image'
import tw from 'tailwind-styled-components'

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`

const Home: NextPage = () => {
    return (
        <div>
            <Container>
                <h1 className='text-5xl'>Hello 인생스킬</h1>
            </Container>

            <footer>
                <a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
                    Powered by{' '}
                    <span>
                        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
