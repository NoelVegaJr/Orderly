import type { NextPage, NextPageContext } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';
import Auth from '../components/auth/auth';

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: { session },
  };
}

const Home: NextPage = () => {
  const { data: session } = useSession();
  const reloadSession = () => {
    const event = new Event('visibilitychange');
    document.dispatchEvent(event);
  };
  if (session) {
    console.log('valid session');
  } else {
    console.log('invalid session');
  }
  return (
    <div className='bg-slate-900 h-screen'>
      {!session?.user?.username ? (
        <Auth session={session} reloadSession={reloadSession} />
      ) : (
        <div>Home Page</div>
      )}
    </div>
  );
};

export default Home;
