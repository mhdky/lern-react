<div align="center">

# BELAJAR REACT JS

</div>

## #Instal React Dengan Vite Js
```
npm create vite@latest lern-react -- --template react

cd lern-react

npm install

npm run dev
```

Sumber: [Parsinta](https://www.youtube.com/watch?v=EWK_YiJg1X0&list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&index=1&t=274s)


## #Prettier

### Install Prettier

```
npm install --save-dev --save-exact prettier
```

### Cara Menggunakan Prettier

* Buat file baru di root dengan nama `.prettierrc.json`

* Masukan Rules

```
{
  "tabWidth": 4,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
}
```

* Pindahkan NPX

Pindahkan code `npx` ke dalam file `package.json` lalu masukan kode di bawah ini pada file tersebut di bagian `scripts`

```
"format": "npx prettier --write .", 
```

Jalankan 
```
npm run format
```

Sumber: [Parsinta](https://youtu.be/XUaniwUb5PM?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&t=26)


## #Satu Component Mempunyai Banyak Component

* Buat Component Baru
* Tambahkan Code di Bawah ini Pada Component Yang Telah Dibuat

```javascript
function Card({ children }) {
    return <div className='border rounded overflow-hidden'>{children}</div>;
}

function Title({ children }) {
    return <h1 className='p-4 text-xl font-medium border-b'>{children}</h1>;
}

function Excerpt({ children }) {
    return <p className="p-4">{children}</p>
}

function Footer({ children }) {
    return <div className="bg-slate-50 p-4 flex justify-end">{children}</div>
}

Card.Title = Title;
Card.Excerpt = Excerpt;
Card.Footer = Footer;

export default Card;
```

* Import Card Ke dalam App.jsx
```javascript
 import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className='w-[1100px] mx-auto my-20 grid grid-cols-3 gap-5'>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
        </div>
    );
}

```

Sumber: [Parsinta](https://youtu.be/E3EjPZdjB_o?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&t=510)


## #React Router

* Install React Router

```
npm install react-router-dom
```

* Buka file main.jsx

```javascript
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
```

* Definisikan router

```javascript
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
]);
```

* Tambahkan kode di bawah ini pada ` <React.StrictMode> `

```javascript
<RouterProvider router={router} />
```

* Import pages login

```javascript
import LoginPage from './pages/login';
```


Sumber: [Vip Code Studio](https://www.youtube.com/watch?v=SYJpUJmYBRk&list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&index=6&t=525s)



## #Client Side Routing

* Ganti tag ` a href ` menjadi ` <Link to='/login'></Link> `
* ` import {Link} from 'react-router-dom'; `


Sumber: [Vip Code Studio](https://youtu.be/SYJpUJmYBRk?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=752)


## #Counter Dengan Class Component

* Definisikan state dengan cara
  
  ```javascript
  constructor(props) {
    super(props);
    this.state = {
      count: 0    
    };
  }
  ```

* Tampilkan hasil count
    
  ```javascript
  {this.state.count}
  ```

* Update state dengan event handling

  ```javascript
  onClick{() => this.setState({count: this.state.count + 1})}
  ```

Sumber: [Vip Code Studio](https://youtu.be/qHQv_cRmJiQ?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=399)

## #Cara membuat penulisan ribuan yang benar pada integer pada javascript

```javascript
{price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}
```

Sumber: [Vip Code Studio](https://youtu.be/ptx1eNK-DuY?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=379)


## #Rendering List Dengan map()

```javascript
{products.map((product) => (
  <Card.Cards key={product.id}>
    <Card.ImageProduct>{product.image}</Card.ImageProduct>
    <Card.NamePruduct>{product.name}</Card.NamePruduct>
    <Card.PriceProduct>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</Card.PriceProduct>
    <Card.AddToCart />
  </Card.Cards>
))}
```

Sumber: [Vip Code Studio](https://youtu.be/Z_omTIQL5pw?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=167)


## #Add Product To Cart

* langkah pertama buat state
```javascript
const [cart, setCart] = useState([]);
```

* langkah kedua buat heandler, karena buttonnya banyak maka kirimkan sebuah id dari product.id ke setiap button dan masukan ke dalam function penanganannya
```javascript
<Card.AddToCart onClick={() => handleCart(product.id)} />
```

* langkah ketiga buat function penanganannya dan ambil product.id masukan ke dalam function penanganannya menjadi parameter
```javascript
// langkah keempat hasil dari sebauh event ketika di klik, ketika di salah satu tombol di klik apa yang akan kita lakukan begitu
const handleCart = (id) => {
  ...cart,
  setCart = ([
    {
      id: id,
      qty: 1    
    }
  ]);
}
```

* langkah kelima looping cart
```javascript
{cart.map((item) => {
    // langkah keenam cari produk yang id nya sama dengan id yang di klik
    const product = products.find((product) => product.id === item.id);
    // langkah ketujuh tampilkan data dengan menggunakan return 
    return (
        <Cart.CartContainer key={item.id}>
            <Cart.CartProduct cartProductImage={product.image} cartProductName={product.name} />
            <Cart.CartPrice>{product.price}</Cart.CartPrice>
            <Cart.CartQty>{item.qty}</Cart.CartQty>
            <Cart.CartTotal>{item.qty * product.price}</Cart.CartTotal>
        </Cart.CartContainer>
    )
})}
```

* langkah kedelapan buat kondisi dimana ketika sebuah produk yang idnya sama maka hanya qtynya saja yang ditambahkan dan total harga pesanannya
```javascript
if(cart.find(item => item.id === id)) {
    setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item )
    );
} else {
    // langkah keempat hasil dari sebauh event ketika di klik, ketika di salah satu tombol
    // di klik apa yang akan kita lakukan begitu
    setCart([
        ...cart,
        {
            id: id,
            qty: 1
        }
    ]);
}
```

* Tampak Seluruh Kode
```javascript
// langkah pertama buat state
const [cart, setCart] = useState([]);

{/* langkah kedua buat heandler, karena buttonnya banyak maka kirimkan sebuah id dari product.id ke setiap button dan masukan ke dalam function penanganannya */}
<Card.AddToCart onClick={() => handleCart(product.id)} />

// langkah ketiga buat function penanganannya dan ambil product.id masukan ke dalam function penanganannya menjadi parameter const  handleCart = (id) => {
  // langkah kedelapan buat kondisi dimana ketika sebuah produk yang idnya sama maka hanya qtynya saja yang ditambahkan dan total harga pesanannya
  if(cart.find(item => item.id === id)) {
      setCart(
          cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item )
      );
  } else {
      // langkah keempat hasil dari sebauh event ketika di klik, ketika di salah satu tombol di klik apa yang akan kita lakukan begitu
      setCart([
          ...cart,
          {
              id: id,
              qty: 1
          }
      ]);
  }
}

{/* langkah kelima looping cart */}
{cart.map((item) => {
    // langkah keenam cari produk yang id nya sama dengan id yang di klik
    const product = products.find((product) => product.id === item.id);
    // langkah ketujuh tampilkan data dengan menggunakan return 
    return (
        <Cart.CartContainer key={item.id}>
            <Cart.CartProduct cartProductImage={product.image} cartProductName={product.name} />
            <Cart.CartPrice>{product.price}</Cart.CartPrice>
            <Cart.CartQty>{item.qty}</Cart.CartQty>
            <Cart.CartTotal>{item.qty * product.price}</Cart.CartTotal>
        </Cart.CartContainer>
    )
})}
```

Sumber: [Vip Code Studio](https://youtu.be/ptx1eNK-DuY?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=187)



## #Add To Cart Tambah Fitur Total Harga Seluruh Pesanan Menggunakan useEffect()

* langkah pertama tambahkan state baru
```javascript
const [productTotal, setProductTotal] = useState(0);
```

* langkah ke dua masukan hasil dari state product total
```javascript
<Cart.CartProductTotal>{productTotal}</Cart.CartProductTotal>
```

* langkah ketiga buat useEffect untuk melakukan perhitungan totol harga keseluruhan
```javascript
 useEffect(() => {
    // cek jika produk ada
    if(cart.length > 0) {
        // melakukan penjumlahan untuk setiap produk menggunakan metode reduce()
        const sum = cart.reduce((acc, item) => { 
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
        }, 0);

        // manampilkan hasil penjumlahan setiap produk dari function sum
        setProductTotal(sum);  

        // memasukan data ke dalam local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}, [cart]);
```

* langkah keempat tampilkan data dari local storage
```javascript
useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
}, []);
```

Sumber: [Vip Code Studio](https://youtu.be/BE2uTuGGL0Y)
