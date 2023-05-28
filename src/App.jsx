export default function App() {
  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-center gap-2">
      <MyButton type="submit" onClick={()=> console.log('login')}>
        <i className="fa-brands fa-twitter"></i>
        Login
      </MyButton>
      <MyButton text="Register" />
    </div>
  );
}

// components
function MyButton(props) {
  const {text, children} = props;
  return (
    // ...props = memanggil semua properti bawaan dari button tingga masukan saja properti yang ingin digunakan pada <MyButton> yang ada di atas
    <button {...props} className="bg-blue-600 w-max px-4 py-2 flex items-center gap-x-2 text-white rounded">
      {text || children}
    </button>
  )
}