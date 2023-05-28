export default function App() {
  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-center gap-2">
      <MyButton text="Login" />
      <MyButton text="Register" />
    </div>
  );
}

// components
function MyButton(props) {
  return (
    <button className="bg-blue-600 w-max px-4 py-2 text-white rounded">{props.text}</button>
  )
}