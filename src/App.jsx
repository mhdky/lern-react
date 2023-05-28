import Button from './components/Button';

function App() {
    return (
        <div className='bg-slate-900 w-full h-screen flex justify-center items-center gap-2'>
            <Button type='submit' onClick={() => console.log('login')}>
                <i className='fa-brands fa-twitter'></i>
                Login
            </Button>
            <Button className='bg-pink-600'>Register</Button>
        </div>
    );
}

// // components

export default App;
