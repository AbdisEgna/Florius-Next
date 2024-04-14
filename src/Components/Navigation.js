import styles from './Navigation.module.css';
import Link from 'next/link'

const LINKS = [
    {href: '/', text: 'Home', description: 'Home page' },
    {href: '/about', text: 'About', description: 'About the product' },
    {href: './contact', text: 'Contact', description: 'Contact me' }
]

export default function Navigation(){
    return (<div className={styles.grid}>

        {LINKS.map(x => <NavigationLink key={x.href} {...x} />)}

        </div>);
}

function NavigationLink ({ text, href, description }){
    return (<Link href={href}
    className={styles.card}
  >
    <h2>
      {text} <span>-&gt;</span>
    </h2>
    <p>{description}</p>
  </Link>)
}